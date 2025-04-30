n.d(t, { z: () => o }), n(997841), n(415506);
var r = n(255367),
    i = n(73800),
    a = n(710260);
function o(e) {
    let { children: t, theme: n, primaryColor: o, secondaryColor: s, gradient: l, flags: c, contrast: u, saturation: d, density: f, disableAdaptiveTheme: _ } = e,
        p = i.useContext(a.Ni);
    a.qF;
    let h = i.useMemo(
        () =>
            (0, a.TT)({
                theme: null != n ? n : p.theme,
                primaryColor: null != o ? o : p.primaryColor,
                secondaryColor: null != s ? s : p.secondaryColor,
                gradient: null != l ? l : p.gradient,
                flags: null != c ? c : p.flags,
                contrast: null != u ? u : p.contrast,
                saturation: null != d ? d : p.saturation,
                density: null != f ? f : p.density,
                disableAdaptiveTheme: null != _ ? _ : p.disableAdaptiveTheme
            }),
        [n, p.theme, p.primaryColor, p.secondaryColor, p.gradient, p.flags, p.contrast, p.saturation, p.density, p.disableAdaptiveTheme, o, s, l, c, u, d, f, _]
    );
    return (0, r.jsx)(a.Ni.Provider, {
        value: h,
        children: t
    });
}
