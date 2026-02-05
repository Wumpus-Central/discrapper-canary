"use strict";
n.d(t, { e: () => o }), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(38021),
    s = n(818348);
function o(e) {
    let {
            children: t,
            theme: n = s.NJ.DARK,
            primaryColor: o = null,
            secondaryColor: l = null,
            gradient: u = null,
            flags: c = 0,
            contrast: d = 1,
            saturation: _ = 1,
            density: f = "compact",
            disableAdaptiveTheme: p = !1,
            reduceAdaptiveTheme: h = !1,
        } = e,
        m = i.useMemo(
            () =>
                (0, a.dI)({
                    theme: n,
                    primaryColor: o,
                    secondaryColor: l,
                    gradient: u,
                    flags: c,
                    contrast: d,
                    saturation: _,
                    density: f,
                    disableAdaptiveTheme: p,
                    reduceAdaptiveTheme: h,
                }),
            [n, o, l, u, c, d, _, f, p, h],
        );
    return (0, r.jsx)(a.Dx.Provider, { value: m, children: t });
}
