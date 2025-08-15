n.d(t, {
    Z: () => f,
    u: () => d,
});
var r = n(688619),
    i = n.n(r),
    a = n(564334),
    o = n(302221),
    s = n(563114);
let l = i()("#ffffff"),
    c = i()("#36393e"),
    u = (e) => {
        var t, n;
        let { colors: r, saturationFactor: s = 1 } = e;
        if (null == r || r.length < 1) return null;
        let u = (0, o.YD)(r),
            d = a.Z.parseString(u);
        if (null == d) return null;
        let f = (0, o.AZ)(d.red, d.blue, d.green),
            _ =
                null !=
                (t = (0, o.wh)({
                    foreground: i()((0, o.j)(d, 0.6, !0).toHexString()),
                    background: l,
                    ratio: 3,
                    saturationFactor: s,
                }))
                    ? t
                    : d,
            p =
                null !=
                (n = (0, o.wh)({
                    foreground: i()((0, o.j)(d, 0.6, !1).toHexString()),
                    background: c,
                    ratio: 5,
                    saturationFactor: s,
                }))
                    ? n
                    : d,
            h = (0, o.wh)({
                foreground: i()(u),
                background: l,
                ratio: 7,
                saturationFactor: s,
            }),
            m = (0, o.wh)({
                foreground: i()(u),
                background: c,
                ratio: 7,
                saturationFactor: s,
            });
        return {
            LIGHT: {
                accentColor: null == h ? void 0 : h.hex(),
                backgroundColor: (0, o.xj)({
                    colorRGB: _,
                    saturationFactor: s,
                }),
                highlightColor: null == d ? void 0 : d.toHexString(),
                opacity: (null == f ? void 0 : f.saturation) < 0.1 ? 0.35 : 0.1,
            },
            DARK: {
                accentColor: null == m ? void 0 : m.hex(),
                backgroundColor: (0, o.xj)({
                    colorRGB: p,
                    saturationFactor: s,
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
        return s.Z.applyPlatformToThemedEmojiColorPalette({
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
