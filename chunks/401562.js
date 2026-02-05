"use strict";
n.d(t, { B: () => s }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(115943),
    i = n.n(r);
let a = n(39416);
class s {
    img;
    originalBuffer;
    constructor(e, t) {
        (this.img = e), (this.originalBuffer = t);
    }
    static create(e) {
        let t = null;
        try {
            let n = i().decode(e);
            t = new s(n, e);
        } catch (e) {}
        return t;
    }
    hasTransparency() {
        if (4 !== this.img.ctype && 6 !== this.img.ctype) return !1;
        let e = new Uint8Array(i().toRGBA8(this.img)[0]);
        for (let t = 3; t < e.length; t += 4) if (e[t] < 255) return !0;
        return !1;
    }
    isAnimated() {
        return null != this.img.tabs.acTL;
    }
    isPng8() {
        return 3 === this.img.ctype && this.img.depth <= 8;
    }
    async hasSrgbIccProfile() {
        let e = await a.load(this.originalBuffer, { async: !0, expanded: !0, includeUnknown: !0 });
        if (null == e.icc) return !0;
        let t = e.icc;
        for (let e of Object.keys(t))
            if ("ICC Description" === e && t[e]?.description != null && "" !== t[e].description) {
                if (t[e].description.toLowerCase().includes("srgb")) return !0;
                break;
            }
        return !1;
    }
    getBuffer() {
        return this.originalBuffer;
    }
}
