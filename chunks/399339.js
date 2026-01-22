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
            gradient: c = null,
            flags: u = 0,
            contrast: d = 1,
            saturation: f = 1,
            density: p = "compact",
            disableAdaptiveTheme: _ = !1,
            reduceAdaptiveTheme: h = !1,
        } = e,
        m = i.useMemo(
            () =>
                (0, a.dI)({
                    theme: n,
                    primaryColor: o,
                    secondaryColor: l,
                    gradient: c,
                    flags: u,
                    contrast: d,
                    saturation: f,
                    density: p,
                    disableAdaptiveTheme: _,
                    reduceAdaptiveTheme: h,
                }),
            [n, o, l, c, u, d, f, p, _, h],
        );
    return (0, r.jsx)(a.Dx.Provider, {
        value: m,
        children: t,
    });
}
