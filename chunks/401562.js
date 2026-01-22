n.d(t, {
    B: () => o,
}),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(228524),
    n(896048);
var r = n(115943),
    i = n.n(r);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = n(39416);
class o {
    static create(e) {
        let t = null;
        try {
            let n = i().decode(e);
            t = new o(n, e);
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
        let e = await s.load(this.originalBuffer, {
            async: !0,
            expanded: !0,
            includeUnknown: !0,
        });
        if (null == e.icc) return !0;
        let t = e.icc;
        for (let e of Object.keys(t)) {
            var n;
            if (
                "ICC Description" === e &&
                (null == (n = t[e]) ? void 0 : n.description) != null &&
                "" !== t[e].description
            ) {
                if (t[e].description.toLowerCase().includes("srgb")) return !0;
                break;
            }
        }
        return !1;
    }
    getBuffer() {
        return this.originalBuffer;
    }
    constructor(e, t) {
        a(this, "img", void 0), a(this, "originalBuffer", void 0), (this.img = e), (this.originalBuffer = t);
    }
}
