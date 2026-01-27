n.d(t, {
    V: () => c,
});
var i = n(310784),
    l = n.n(i),
    r = n(325335),
    o = n(998304),
    a = n(300703);
let s = "#ffffff",
    u = "#36393e",
    c = (e, t, n) => {
        var i;
        if (null == e || e.length < 1) return null;
        let c = ((e) => {
                let { colors: t, saturationFactor: n = 1, shouldProcessMobileColors: i = !1 } = e,
                    c = ((e) => {
                        var t, n;
                        let { colors: i, saturationFactor: a = 1 } = e;
                        if (null == i || i.length < 1) return null;
                        let c = (0, o.h6)(i),
                            d = r.A.parseString(c);
                        if (null == d) return null;
                        let p = (0, o.IB)(d.red, d.blue, d.green),
                            h =
                                null !=
                                (t = (0, o.lZ)({
                                    foreground: l()((0, o.fE)(d, 0.6, !0).toHexString()),
                                    background: l()(s),
                                    ratio: 3,
                                    saturationFactor: a,
                                }))
                                    ? t
                                    : d,
                            m =
                                null !=
                                (n = (0, o.lZ)({
                                    foreground: l()((0, o.fE)(d, 0.6, !1).toHexString()),
                                    background: l()(u),
                                    ratio: 5,
                                    saturationFactor: a,
                                }))
                                    ? n
                                    : d,
                            f = (0, o.lZ)({
                                foreground: l()(c),
                                background: l()(s),
                                ratio: 7,
                                saturationFactor: a,
                            }),
                            g = (0, o.lZ)({
                                foreground: l()(c),
                                background: l()(u),
                                ratio: 7,
                                saturationFactor: a,
                            });
                        return {
                            LIGHT: {
                                accentColor: null == f ? void 0 : f.hex(),
                                backgroundColor: (0, o.WN)({
                                    colorRGB: h,
                                    saturationFactor: a,
                                }),
                                highlightColor: null == d ? void 0 : d.toHexString(),
                                opacity: (null == p ? void 0 : p.saturation) < 0.1 ? 0.35 : 0.1,
                            },
                            DARK: {
                                accentColor: null == g ? void 0 : g.hex(),
                                backgroundColor: (0, o.WN)({
                                    colorRGB: m,
                                    saturationFactor: a,
                                }),
                                highlightColor: null == d ? void 0 : d.toHexString(),
                                opacity: (null == p ? void 0 : p.saturation) < 0.1 ? 0.5 : 0.2,
                            },
                        };
                    })({
                        colors: t,
                        saturationFactor: n,
                    });
                return a.A.applyPlatformToThemedEmojiColorPalette({
                    palette: c,
                    shouldProcessMobileColors: i,
                });
            })({
                colors: e,
                saturationFactor: t,
            }),
            d = n ? (null == c ? void 0 : c.DARK) : null == c ? void 0 : c.LIGHT;
        return {
            backgroundColor: null == d ? void 0 : d.backgroundColor,
            accentColor: null == d ? void 0 : d.accentColor,
            highlightColor: null == d ? void 0 : d.highlightColor,
            opacity: null != (i = null == d ? void 0 : d.opacity) ? i : 0.15,
        };
    };
