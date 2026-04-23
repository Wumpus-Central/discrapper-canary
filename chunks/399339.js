"use strict";
n.d(t, { e: () => o }), n(938796);
var r = n(627968),
    i = n(64700),
    s = n(38021),
    a = n(818348);
function o(e) {
    let {
            children: t,
            theme: n = a.NJ.DARK,
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
        E = i.useMemo(
            () =>
                (0, s.dI)({
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
    return (0, r.jsx)(s.Dx.Provider, { value: E, children: t });
}
