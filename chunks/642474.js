n.d(t, { w: () => s }), n(789020);
var r = n(200651),
    i = n(192379),
    o = n(710260),
    a = n(231338);
function s(e) {
    let { children: t, theme: n = a.BR.DARK, primaryColor: s = null, secondaryColor: l = null, gradient: c = null, flags: u = 0, contrast: d = 1, saturation: f = 1, density: _ = 'compact', disableAdaptiveTheme: p = !1 } = e,
        h = i.useMemo(
            () =>
                (0, o.TT)({
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
    return (0, r.jsx)(o.Ni.Provider, {
        value: h,
        children: t
    });
}
