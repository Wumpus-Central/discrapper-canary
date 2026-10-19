n.d(t, { V: () => u });
var i = n(310784),
    l = n.n(i),
    o = n(325335),
    a = n(998304),
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
                    let i = (0, a.h6)(t),
                        r = o.A.parseString(i);
                    if (null == r) return null;
                    let u = (0, a.IB)(r.red, r.blue, r.green),
                        d =
                            (0, a.lZ)({
                                foreground: l()((0, a.fE)(r, 0.6, !0).toHexString()),
                                background: l()(s),
                                ratio: 3,
                                saturationFactor: n,
                            }) ?? r,
                        m =
                            (0, a.lZ)({
                                foreground: l()((0, a.fE)(r, 0.6, !1).toHexString()),
                                background: l()(c),
                                ratio: 5,
                                saturationFactor: n,
                            }) ?? r,
                        f = (0, a.lZ)({ foreground: l()(i), background: l()(s), ratio: 7, saturationFactor: n }),
                        g = (0, a.lZ)({ foreground: l()(i), background: l()(c), ratio: 7, saturationFactor: n });
                    return {
                        LIGHT: {
                            accentColor: f?.hex(),
                            backgroundColor: (0, a.WN)({ colorRGB: d, saturationFactor: n }),
                            highlightColor: r?.toHexString(),
                            opacity: u?.saturation < 0.1 ? 0.35 : 0.1,
                        },
                        DARK: {
                            accentColor: g?.hex(),
                            backgroundColor: (0, a.WN)({ colorRGB: m, saturationFactor: n }),
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
