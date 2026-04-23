"use strict";
n.d(t, { A: () => i });
var r = n(315069);
class i extends r.A {
    id;
    layoutId;
    type;
    anchor;
    size;
    minSize;
    pinned;
    showExtrasHintTimestamp;
    zIndex;
    opacity;
    meta;
    constructor(e) {
        super(), (this.id = e.id || ""), (this.layoutId = e.layoutId || ""), (this.type = e.type);
        const t = e.anchor ?? {},
            n = e.size ?? {};
        let r = "number" == typeof t.top ? t.top : void 0,
            i = "number" == typeof t.bottom ? t.bottom : void 0,
            s = "number" == typeof t.left ? t.left : void 0,
            a = "number" == typeof t.right ? t.right : void 0;
        const o = null != r && null != i && "auto" === n.height;
        o || (null != i ? (r = void 0) : (i = void 0)),
            (null != s && null != a && "auto" === n.width) || (null != a ? (s = void 0) : (a = void 0)),
            null == r && null == i && (r = 0),
            null == s && null == a && (s = 0),
            (this.anchor = { top: r, left: s, bottom: i, right: a }),
            (this.size = { width: 0, height: 0, ...e.size }),
            (this.minSize = { width: void 0, height: void 0, ...e.minSize }),
            (this.pinned = !!e.pinned),
            (this.zIndex = e.zIndex || 0),
            (this.opacity = e.opacity ?? 1),
            (this.meta = { ...e.meta }),
            null != e.showExtrasHintTimestamp && (this.showExtrasHintTimestamp = e.showExtrasHintTimestamp);
    }
}
