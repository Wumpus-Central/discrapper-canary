n.d(t, { Z: () => u });
var i = n(688619),
    l = n.n(i),
    r = n(564334),
    o = n(302221),
    a = n(563114);
let s = "#ffffff",
    c = "#36393e",
    u = (e, t, n) => {
        var i;
        if (null == e || e.length < 1) return null;
        let u = ((e) => {
                let { colors: t, saturationFactor: n = 1, shouldProcessMobileColors: i = !1 } = e,
                    u = ((e) => {
                        var t, n;
                        let { colors: i, saturationFactor: a = 1 } = e;
                        if (null == i || i.length < 1) return null;
                        let u = (0, o.YD)(i),
                            d = r.Z.parseString(u);
                        if (null == d) return null;
                        let h = (0, o.AZ)(d.red, d.blue, d.green),
                            p =
                                null !=
                                (t = (0, o.wh)({
                                    foreground: l()((0, o.j)(d, 0.6, !0).toHexString()),
                                    background: l()(s),
                                    ratio: 3,
                                    saturationFactor: a,
                                }))
                                    ? t
                                    : d,
                            m =
                                null !=
                                (n = (0, o.wh)({
                                    foreground: l()((0, o.j)(d, 0.6, !1).toHexString()),
                                    background: l()(c),
                                    ratio: 5,
                                    saturationFactor: a,
                                }))
                                    ? n
                                    : d,
                            f = (0, o.wh)({
                                foreground: l()(u),
                                background: l()(s),
                                ratio: 7,
                                saturationFactor: a,
                            }),
                            g = (0, o.wh)({
                                foreground: l()(u),
                                background: l()(c),
                                ratio: 7,
                                saturationFactor: a,
                            });
                        return {
                            LIGHT: {
                                accentColor: null == f ? void 0 : f.hex(),
                                backgroundColor: (0, o.xj)({
                                    colorRGB: p,
                                    saturationFactor: a,
                                }),
                                highlightColor: null == d ? void 0 : d.toHexString(),
                                opacity: (null == h ? void 0 : h.saturation) < 0.1 ? 0.35 : 0.1,
                            },
                            DARK: {
                                accentColor: null == g ? void 0 : g.hex(),
                                backgroundColor: (0, o.xj)({
                                    colorRGB: m,
                                    saturationFactor: a,
                                }),
                                highlightColor: null == d ? void 0 : d.toHexString(),
                                opacity: (null == h ? void 0 : h.saturation) < 0.1 ? 0.5 : 0.2,
                            },
                        };
                    })({
                        colors: t,
                        saturationFactor: n,
                    });
                return a.Z.applyPlatformToThemedEmojiColorPalette({
                    palette: u,
                    shouldProcessMobileColors: i,
                });
            })({
                colors: e,
                saturationFactor: t,
            }),
            d = n ? (null == u ? void 0 : u.DARK) : null == u ? void 0 : u.LIGHT;
        return {
            backgroundColor: null == d ? void 0 : d.backgroundColor,
            accentColor: null == d ? void 0 : d.accentColor,
            highlightColor: null == d ? void 0 : d.highlightColor,
            opacity: null != (i = null == d ? void 0 : d.opacity) ? i : 0.15,
        };
    };
