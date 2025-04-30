n.d(t, { z: () => a }), n(997841), n(415506);
var r = n(200651),
    i = n(192379),
    o = n(710260);
function a(e) {
    let { children: t, theme: n, primaryColor: a, secondaryColor: s, gradient: l, flags: c, contrast: u, saturation: d, density: f, disableAdaptiveTheme: _, reduceAdaptiveTheme: p } = e,
        h = i.useContext(o.Ni);
    o.qF;
    let m = i.useMemo(
        () =>
            (0, o.TT)({
                theme: null != n ? n : h.theme,
                primaryColor: null != a ? a : h.primaryColor,
                secondaryColor: null != s ? s : h.secondaryColor,
                gradient: null != l ? l : h.gradient,
                flags: null != c ? c : h.flags,
                contrast: null != u ? u : h.contrast,
                saturation: null != d ? d : h.saturation,
                density: null != f ? f : h.density,
                disableAdaptiveTheme: null != _ ? _ : h.disableAdaptiveTheme,
                reduceAdaptiveTheme: null != p ? p : h.reduceAdaptiveTheme
            }),
        [n, h.theme, h.primaryColor, h.secondaryColor, h.gradient, h.flags, h.contrast, h.saturation, h.density, h.disableAdaptiveTheme, h.reduceAdaptiveTheme, a, s, l, c, u, d, f, _, p]
    );
    return (0, r.jsx)(o.Ni.Provider, {
        value: m,
        children: t
    });
}
