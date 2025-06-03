n.d(t, { o: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(657707),
    o = n(442837),
    s = n(481060),
    l = n(153867),
    c = n(210887),
    u = n(740492),
    d = n(695346),
    f = n(514361),
    _ = n(874893),
    p = n(231338),
    h = n(531864);
function m() {
    let [e, t] = i.useState(p.BR.LIGHT),
        n = [
            {
                name: '',
                value: p.BR.DARK,
                icon: a.Z6G
            },
            {
                name: '',
                value: p.BR.LIGHT,
                icon: a.chG
            }
        ],
        [m, g, E] = (0, o.Wu)([c.Z, u.ZP, f.Z], () => [c.Z.theme, null == f.Z.gradientPreset, u.ZP.useSystemTheme === _.KW.ON]);
    return (0, r.jsx)(s.sY7, {
        className: h.themeSelector,
        options: n,
        value: g && !E ? m : e,
        onChange: (e) => {
            let { value: n } = e;
            t(n);
            let r = d.L1.getSetting();
            (0, l.ZI)({
                theme: n,
                backgroundGradientPresetId: r.backgroundGradientPresetId,
                customUserThemeSettings: r.customUserThemeSettings
            });
        },
        look: 'pill'
    });
}
