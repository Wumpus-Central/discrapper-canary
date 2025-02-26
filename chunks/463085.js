n.d(t, { z: () => a }), n(789020), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(710260);
function a(e) {
    let { children: t, theme: n, primaryColor: a, secondaryColor: s, gradient: l, flags: c, contrast: u, saturation: d, density: f, disableAdaptiveTheme: _ } = e,
        p = i.useContext(o.Ni);
    o.qF;
    let h = i.useMemo(
        () =>
            (0, o.TT)({
                theme: null != n ? n : p.theme,
                primaryColor: null != a ? a : p.primaryColor,
                secondaryColor: null != s ? s : p.secondaryColor,
                gradient: null != l ? l : p.gradient,
                flags: null != c ? c : p.flags,
                contrast: null != u ? u : p.contrast,
                saturation: null != d ? d : p.saturation,
                density: null != f ? f : p.density,
                disableAdaptiveTheme: null != _ ? _ : p.disableAdaptiveTheme
            }),
        [n, p.theme, p.primaryColor, p.secondaryColor, p.gradient, p.flags, p.contrast, p.saturation, p.density, p.disableAdaptiveTheme, a, s, l, c, u, d, f, _]
    );
    return (0, r.jsx)(o.Ni.Provider, {
        value: h,
        children: t
    });
}
