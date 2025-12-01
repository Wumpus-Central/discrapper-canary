n.d(t, { w: () => s }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(70007),
    o = n(231338);
function s(e) {
    let {
            children: t,
            theme: n = o.BR.DARK,
            primaryColor: s = null,
            secondaryColor: l = null,
            gradient: c = null,
            flags: u = 0,
            contrast: d = 1,
            saturation: f = 1,
            density: p = "compact",
            disableAdaptiveTheme: _ = !1,
            reduceAdaptiveTheme: m = !1,
        } = e,
        h = i.useMemo(
            () =>
                (0, a.TT)({
                    theme: n,
                    primaryColor: s,
                    secondaryColor: l,
                    gradient: c,
                    flags: u,
                    contrast: d,
                    saturation: f,
                    density: p,
                    disableAdaptiveTheme: _,
                    reduceAdaptiveTheme: m,
                }),
            [n, s, l, c, u, d, f, p, _, m],
        );
    return (0, r.jsx)(a.Ni.Provider, {
        value: h,
        children: t,
    });
}
