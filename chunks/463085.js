(n.d(t, { z: () => o }), n(997841), n(415506));
var r = n(255367),
    i = n(73800),
    a = n(710260);
function o(e) {
    let { children: t, theme: n, primaryColor: o, secondaryColor: s, gradient: l, flags: c, contrast: u, saturation: d, density: f, disableAdaptiveTheme: _, reduceAdaptiveTheme: p } = e,
        h = i.useContext(a.Ni);
    a.qF;
    let m = i.useMemo(
        () =>
            (0, a.TT)({
                theme: null != n ? n : h.theme,
                primaryColor: null != o ? o : h.primaryColor,
                secondaryColor: null != s ? s : h.secondaryColor,
                gradient: null != l ? l : h.gradient,
                flags: null != c ? c : h.flags,
                contrast: null != u ? u : h.contrast,
                saturation: null != d ? d : h.saturation,
                density: null != f ? f : h.density,
                disableAdaptiveTheme: null != _ ? _ : h.disableAdaptiveTheme,
                reduceAdaptiveTheme: null != p ? p : h.reduceAdaptiveTheme
            }),
        [n, h.theme, h.primaryColor, h.secondaryColor, h.gradient, h.flags, h.contrast, h.saturation, h.density, h.disableAdaptiveTheme, h.reduceAdaptiveTheme, o, s, l, c, u, d, f, _, p]
    );
    return (0, r.jsx)(a.Ni.Provider, {
        value: m,
        children: t
    });
}
