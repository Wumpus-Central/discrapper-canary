n.d(t, {
    Z: () => u,
    u: () => c
});
var r = n(564334),
    i = n(302221),
    a = n(563114);
let o = '#ffffff',
    s = '#36393e',
    l = (e) => {
        var t, n;
        let { colors: a, saturationFactor: l = 1 } = e;
        if (null == a || a.length < 1) return null;
        let c = (0, i.YD)(a),
            u = r.Z.parseString(o);
        if (null == u) return null;
        let d = r.Z.parseString(s);
        if (null == d) return null;
        let f = r.Z.parseString(c);
        if (null == f) return null;
        let _ = (0, i.AZ)(f.red, f.blue, f.green),
            p =
                null !=
                (t = (0, i.k8)({
                    colors: [(0, i.j)(f, 0.6, !0), u],
                    ratio: 3,
                    saturationFactor: l
                }))
                    ? t
                    : f,
            h =
                null !=
                (n = (0, i.k8)({
                    colors: [(0, i.j)(f, 0.6, !1), d],
                    ratio: 5,
                    saturationFactor: l
                }))
                    ? n
                    : f,
            m = (0, i.k8)({
                colors: [f, u],
                ratio: 7,
                saturationFactor: l
            }),
            g = (0, i.k8)({
                colors: [f, d],
                ratio: 7,
                saturationFactor: l
            });
        return {
            LIGHT: {
                accentColor: null == m ? void 0 : m.toHexString(),
                backgroundColor: (0, i.xj)({
                    colorRGB: p,
                    saturationFactor: l
                }),
                highlightColor: null == f ? void 0 : f.toHexString(),
                opacity: (null == _ ? void 0 : _.saturation) < 0.1 ? 0.35 : 0.1
            },
            DARK: {
                accentColor: null == g ? void 0 : g.toHexString(),
                backgroundColor: (0, i.xj)({
                    colorRGB: h,
                    saturationFactor: l
                }),
                highlightColor: null == f ? void 0 : f.toHexString(),
                opacity: (null == _ ? void 0 : _.saturation) < 0.1 ? 0.5 : 0.2
            }
        };
    },
    c = (e) => {
        let { colors: t, saturationFactor: n = 1, shouldProcessMobileColors: r = !1 } = e,
            i = l({
                colors: t,
                saturationFactor: n
            });
        return a.Z.applyPlatformToThemedEmojiColorPalette({
            palette: i,
            shouldProcessMobileColors: r
        });
    },
    u = (e, t, n) => {
        var r;
        if (null == e || e.length < 1) return null;
        let i = c({
                colors: e,
                saturationFactor: t
            }),
            a = n ? (null == i ? void 0 : i.DARK) : null == i ? void 0 : i.LIGHT;
        return {
            backgroundColor: null == a ? void 0 : a.backgroundColor,
            accentColor: null == a ? void 0 : a.accentColor,
            highlightColor: null == a ? void 0 : a.highlightColor,
            opacity: null != (r = null == a ? void 0 : a.opacity) ? r : 0.15
        };
    };
