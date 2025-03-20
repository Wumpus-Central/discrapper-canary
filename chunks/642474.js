n.d(t, { w: () => l }), n(789020);
var r = n(200651),
    i = n(192379),
    o = n(648894),
    a = n(710260),
    s = n(231338);
function l(e) {
    let { children: t, theme: n = s.BR.DARK, primaryColor: l = null, secondaryColor: c = null, gradient: u = null, flags: d = 0, contrast: f = 1, saturation: _ = 1, density: p = 'compact', disableAdaptiveTheme: h = !1 } = e,
        m = i.useMemo(
            () =>
                (0, a.TT)({
                    theme: n,
                    primaryColor: l,
                    secondaryColor: c,
                    gradient: u,
                    flags: d,
                    contrast: f,
                    saturation: _,
                    density: p,
                    disableAdaptiveTheme: h
                }),
            [n, l, c, u, d, f, _, p, h]
        );
    return (0, r.jsx)(a.Ni.Provider, {
        value: m,
        children: (0, r.jsx)(o.g, { children: t })
    });
}
