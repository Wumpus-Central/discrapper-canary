i.d(r, { B: () => o }), i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
var t = i(115943),
    n = i.n(t);
let a = i(39416);
class o {
    img;
    originalBuffer;
    constructor(e, r) {
        (this.img = e), (this.originalBuffer = r);
    }
    static create(e) {
        let r = null;
        try {
            let i = n().decode(e);
            r = new o(i, e);
        } catch (e) {}
        return r;
    }
    hasTransparency() {
        if (4 !== this.img.ctype && 6 !== this.img.ctype) return !1;
        let e = new Uint8Array(n().toRGBA8(this.img)[0]);
        for (let r = 3; r < e.length; r += 4) if (e[r] < 255) return !0;
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
        let r = e.icc;
        for (let e of Object.keys(r))
            if ("ICC Description" === e && r[e]?.description != null && "" !== r[e].description) {
                if (r[e].description.toLowerCase().includes("srgb")) return !0;
                break;
            }
        return !1;
    }
    getBuffer() {
        return this.originalBuffer;
    }
}
