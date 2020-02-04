(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{253:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"碰撞检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#碰撞检测"}},[t._v("#")]),t._v(" 碰撞检测")]),t._v(" "),a("p",[t._v("Cesium.Ray.getPoint （ray，t，result） → Cartesian3")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取画布尺寸")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myCanvas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myCanvas_rect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myCanvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" widths "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myCanvas_rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" heights "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myCanvas_rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("heights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机瞄点")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("heights"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("相机水平方向向量 "),a("code",[t._v("direction")])]),t._v(" "),a("li",[t._v("相机位置 "),a("code",[t._v("position")])]),t._v(" "),a("li",[t._v("指定水平方向碰撞距离"),a("code",[t._v("d")]),t._v(" [0,d]")])]),t._v(" "),a("p",[t._v("以上条件可以实例一个射线： "),a("code",[t._v("new Cesium.Ray(origin, direction)")])]),t._v(" "),a("p",[t._v("相机开启碰撞分析：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenSpaceCameraController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableCollisionDetection  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Default Value:  true")]),t._v("\n")])])]),a("p",[t._v("场景 scene:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pick a new feature")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pickedFeature "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" viewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("movement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endPosition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//坐标为画布上平面坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Cesium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pickedFeature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nameOverlay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Scene.html#drillPick",target:"_blank",rel:"noopener noreferrer"}},[t._v("drillPick(windowPosition, limit, width, height)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("https://github.com/AnalyticalGraphicsInc/cesium/blob/2461b55f72bed959ed098a7520625601e6850e6b/Source/Scene/Scene.js#L3560")]),t._v(" "),a("p",[t._v("Scene.pickFromRay(ray, objectsToExclude, width)")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/AnalyticalGraphicsInc/cesium/blob/2461b55f72bed959ed098a7520625601e6850e6b/Source/Scene/Cesium3DTile.js#L1022-L1025",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cesium3DTile.distanceToTile"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/AnalyticalGraphicsInc/cesium/blob/2461b55f72bed959ed098a7520625601e6850e6b/Source/Scene/Cesium3DTile.js#L1027-L1042",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cesium3DTile.distanceToTileCenter"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://sandcastle.cesium.com/index.html?src=3D%20Tiles%20Feature%20Picking.html&label=All",target:"_blank",rel:"noopener noreferrer"}},[t._v("[官方示例]3D Tiles Feature Picking 构件拾取"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);