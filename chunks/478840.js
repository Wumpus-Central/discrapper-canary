n.d(t, { V: () => f });
var r = n(310784),
    i = n.n(r),
    a = n(325335),
    s = n(998304),
    o = n(300703);
let l = "#ffffff",
    c = "#36393e",
    u = (e) => {
        var t, n;
        let { colors: r, saturationFactor: o = 1 } = e;
        if (null == r || r.length < 1) return null;
        let u = (0, s.h6)(r),
            d = a.A.parseString(u);
        if (null == d) return null;
        let f = (0, s.IB)(d.red, d.blue, d.green),
            p =
                null !=
                (t = (0, s.lZ)({
                    foreground: i()((0, s.fE)(d, 0.6, !0).toHexString()),
                    background: i()(l),
                    ratio: 3,
                    saturationFactor: o,
                }))
                    ? t
                    : d,
            _ =
                null !=
                (n = (0, s.lZ)({
                    foreground: i()((0, s.fE)(d, 0.6, !1).toHexString()),
                    background: i()(c),
                    ratio: 5,
                    saturationFactor: o,
                }))
                    ? n
                    : d,
            h = (0, s.lZ)({
                foreground: i()(u),
                background: i()(l),
                ratio: 7,
                saturationFactor: o,
            }),
            m = (0, s.lZ)({
                foreground: i()(u),
                background: i()(c),
                ratio: 7,
                saturationFactor: o,
            });
        return {
            LIGHT: {
                accentColor: null == h ? void 0 : h.hex(),
                backgroundColor: (0, s.WN)({
                    colorRGB: p,
                    saturationFactor: o,
                }),
                highlightColor: null == d ? void 0 : d.toHexString(),
                opacity: (null == f ? void 0 : f.saturation) < 0.1 ? 0.35 : 0.1,
            },
            DARK: {
                accentColor: null == m ? void 0 : m.hex(),
                backgroundColor: (0, s.WN)({
                    colorRGB: _,
                    saturationFactor: o,
                }),
                highlightColor: null == d ? void 0 : d.toHexString(),
                opacity: (null == f ? void 0 : f.saturation) < 0.1 ? 0.5 : 0.2,
            },
        };
    },
    d = (e) => {
        let { colors: t, saturationFactor: n = 1, shouldProcessMobileColors: r = !1 } = e,
            i = u({
                colors: t,
                saturationFactor: n,
            });
        return o.A.applyPlatformToThemedEmojiColorPalette({
            palette: i,
            shouldProcessMobileColors: r,
        });
    },
    f = (e, t, n) => {
        var r;
        if (null == e || e.length < 1) return null;
        let i = d({
                colors: e,
                saturationFactor: t,
            }),
            a = n ? (null == i ? void 0 : i.DARK) : null == i ? void 0 : i.LIGHT;
        return {
            backgroundColor: null == a ? void 0 : a.backgroundColor,
            accentColor: null == a ? void 0 : a.accentColor,
            highlightColor: null == a ? void 0 : a.highlightColor,
            opacity: null != (r = null == a ? void 0 : a.opacity) ? r : 0.15,
        };
    };
