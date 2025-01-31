n.d(t, {
    Z: () => c,
    u: () => u
});
var i = n(564334),
    r = n(302221),
    a = n(563114);
let s = '#ffffff',
    o = '#36393e',
    l = (e) => {
        var t, n;
        let { colors: a, saturationFactor: l = 1 } = e;
        if (null == a || a.length < 1) return null;
        let u = (0, r.YD)(a),
            c = i.Z.parseString(s);
        if (null == c) return null;
        let d = i.Z.parseString(o);
        if (null == d) return null;
        let f = i.Z.parseString(u);
        if (null == f) return null;
        let _ = (0, r.AZ)(f.red, f.blue, f.green),
            p =
                null !==
                    (t = (0, r.k8)({
                        colors: [(0, r.j)(f, 0.6, !0), c],
                        ratio: 3,
                        saturationFactor: l
                    })) && void 0 !== t
                    ? t
                    : f,
            h =
                null !==
                    (n = (0, r.k8)({
                        colors: [(0, r.j)(f, 0.6, !1), d],
                        ratio: 5,
                        saturationFactor: l
                    })) && void 0 !== n
                    ? n
                    : f,
            m = (0, r.k8)({
                colors: [f, c],
                ratio: 7,
                saturationFactor: l
            }),
            g = (0, r.k8)({
                colors: [f, d],
                ratio: 7,
                saturationFactor: l
            });
        return {
            LIGHT: {
                accentColor: null == m ? void 0 : m.toHexString(),
                backgroundColor: (0, r.xj)({
                    colorRGB: p,
                    saturationFactor: l
                }),
                highlightColor: null == f ? void 0 : f.toHexString(),
                opacity: (null == _ ? void 0 : _.saturation) < 0.1 ? 0.35 : 0.1
            },
            DARK: {
                accentColor: null == g ? void 0 : g.toHexString(),
                backgroundColor: (0, r.xj)({
                    colorRGB: h,
                    saturationFactor: l
                }),
                highlightColor: null == f ? void 0 : f.toHexString(),
                opacity: (null == _ ? void 0 : _.saturation) < 0.1 ? 0.5 : 0.2
            }
        };
    },
    u = (e) => {
        let { colors: t, saturationFactor: n = 1, shouldProcessMobileColors: i = !1 } = e,
            r = l({
                colors: t,
                saturationFactor: n
            });
        return a.Z.applyPlatformToThemedEmojiColorPalette({
            palette: r,
            shouldProcessMobileColors: i
        });
    },
    c = (e, t, n) => {
        var i;
        if (null == e || e.length < 1) return null;
        let r = u({
                colors: e,
                saturationFactor: t
            }),
            a = n ? (null == r ? void 0 : r.DARK) : null == r ? void 0 : r.LIGHT;
        return {
            backgroundColor: null == a ? void 0 : a.backgroundColor,
            accentColor: null == a ? void 0 : a.accentColor,
            highlightColor: null == a ? void 0 : a.highlightColor,
            opacity: null !== (i = null == a ? void 0 : a.opacity) && void 0 !== i ? i : 0.15
        };
    };
