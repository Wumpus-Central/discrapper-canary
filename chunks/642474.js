n.d(t, { w: () => s }), n(997841);
var r = n(200651),
    i = n(192379),
    a = n(710260),
    o = n(231338);
function s(e) {
    let { children: t, theme: n = o.BR.DARK, primaryColor: s = null, secondaryColor: l = null, gradient: c = null, flags: u = 0, contrast: d = 1, saturation: f = 1, density: _ = 'compact', disableAdaptiveTheme: p = !1 } = e,
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
                    density: _,
                    disableAdaptiveTheme: p
                }),
            [n, s, l, c, u, d, f, _, p]
        );
    return (0, r.jsx)(a.Ni.Provider, {
        value: h,
        children: t
    });
}
