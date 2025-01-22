r.d(n, {
    Z: function () {
        return d;
    },
    u: function () {
        return c;
    }
});
var i = r(564334),
    a = r(302221),
    o = r(563114);
let s = '#ffffff',
    l = '#36393e',
    u = (e) => {
        var n, r;
        let { colors: o, saturationFactor: u = 1 } = e;
        if (null == o || o.length < 1) return null;
        let c = (0, a.YD)(o),
            d = i.Z.parseString(s);
        if (null == d) return null;
        let f = i.Z.parseString(l);
        if (null == f) return null;
        let p = i.Z.parseString(c);
        if (null == p) return null;
        let h = (0, a.AZ)(p.red, p.blue, p.green),
            _ =
                null !==
                    (n = (0, a.k8)({
                        colors: [(0, a.j)(p, 0.6, !0), d],
                        ratio: 3,
                        saturationFactor: u
                    })) && void 0 !== n
                    ? n
                    : p,
            m =
                null !==
                    (r = (0, a.k8)({
                        colors: [(0, a.j)(p, 0.6, !1), f],
                        ratio: 5,
                        saturationFactor: u
                    })) && void 0 !== r
                    ? r
                    : p,
            g = (0, a.k8)({
                colors: [p, d],
                ratio: 7,
                saturationFactor: u
            }),
            E = (0, a.k8)({
                colors: [p, f],
                ratio: 7,
                saturationFactor: u
            });
        return {
            LIGHT: {
                accentColor: null == g ? void 0 : g.toHexString(),
                backgroundColor: (0, a.xj)({
                    colorRGB: _,
                    saturationFactor: u
                }),
                highlightColor: null == p ? void 0 : p.toHexString(),
                opacity: (null == h ? void 0 : h.saturation) < 0.1 ? 0.35 : 0.1
            },
            DARK: {
                accentColor: null == E ? void 0 : E.toHexString(),
                backgroundColor: (0, a.xj)({
                    colorRGB: m,
                    saturationFactor: u
                }),
                highlightColor: null == p ? void 0 : p.toHexString(),
                opacity: (null == h ? void 0 : h.saturation) < 0.1 ? 0.5 : 0.2
            }
        };
    },
    c = (e) => {
        let { colors: n, saturationFactor: r = 1, shouldProcessMobileColors: i = !1 } = e,
            a = u({
                colors: n,
                saturationFactor: r
            });
        return o.Z.applyPlatformToThemedEmojiColorPalette({
            palette: a,
            shouldProcessMobileColors: i
        });
    },
    d = (e, n, r) => {
        var i;
        if (null == e || e.length < 1) return null;
        let a = c({
                colors: e,
                saturationFactor: n
            }),
            o = r ? (null == a ? void 0 : a.DARK) : null == a ? void 0 : a.LIGHT;
        return {
            backgroundColor: null == o ? void 0 : o.backgroundColor,
            accentColor: null == o ? void 0 : o.accentColor,
            highlightColor: null == o ? void 0 : o.highlightColor,
            opacity: null !== (i = null == o ? void 0 : o.opacity) && void 0 !== i ? i : 0.15
        };
    };
