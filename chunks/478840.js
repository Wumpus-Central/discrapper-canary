n.d(t, { V: () => u });
var i = n(310784),
    l = n.n(i),
    a = n(325335),
    o = n(998304),
    r = n(350593);
let s = "#ffffff",
    c = "#36393e";
function u(e, t, n) {
    if (null == e || e.length < 1) return null;
    let i = (function (e) {
            let { colors: t, saturationFactor: n = 1, shouldProcessMobileColors: i = !1 } = e,
                u = (function (e) {
                    let { colors: t, saturationFactor: n = 1 } = e;
                    if (null == t || t.length < 1) return null;
                    let i = (0, o.h6)(t),
                        r = a.A.parseString(i);
                    if (null == r) return null;
                    let u = (0, o.IB)(r.red, r.blue, r.green),
                        d =
                            (0, o.lZ)({
                                foreground: l()((0, o.fE)(r, 0.6, !0).toHexString()),
                                background: l()(s),
                                ratio: 3,
                                saturationFactor: n,
                            }) ?? r,
                        m =
                            (0, o.lZ)({
                                foreground: l()((0, o.fE)(r, 0.6, !1).toHexString()),
                                background: l()(c),
                                ratio: 5,
                                saturationFactor: n,
                            }) ?? r,
                        f = (0, o.lZ)({ foreground: l()(i), background: l()(s), ratio: 7, saturationFactor: n }),
                        g = (0, o.lZ)({ foreground: l()(i), background: l()(c), ratio: 7, saturationFactor: n });
                    return {
                        LIGHT: {
                            accentColor: f?.hex(),
                            backgroundColor: (0, o.WN)({ colorRGB: d, saturationFactor: n }),
                            highlightColor: r?.toHexString(),
                            opacity: u?.saturation < 0.1 ? 0.35 : 0.1,
                        },
                        DARK: {
                            accentColor: g?.hex(),
                            backgroundColor: (0, o.WN)({ colorRGB: m, saturationFactor: n }),
                            highlightColor: r?.toHexString(),
                            opacity: u?.saturation < 0.1 ? 0.5 : 0.2,
                        },
                    };
                })({ colors: t, saturationFactor: n });
            return r.A.applyPlatformToThemedEmojiColorPalette({ palette: u, shouldProcessMobileColors: i });
        })({ colors: e, saturationFactor: t }),
        u = n ? i?.DARK : i?.LIGHT;
    return {
        backgroundColor: u?.backgroundColor,
        accentColor: u?.accentColor,
        highlightColor: u?.highlightColor,
        opacity: u?.opacity ?? 0.15,
    };
}
