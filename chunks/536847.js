n.d(t, { o: () => g }), n(388685);
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
    h = n(388032),
    m = n(531864);
function g() {
    let [e, t] = i.useState(p.BR.LIGHT),
        n = [
            {
                name: h.intl.string(h.t.b8Cei4),
                value: p.BR.DARK,
                icon: a.Z6G
            },
            {
                name: h.intl.string(h.t.K2sFfn),
                value: p.BR.LIGHT,
                icon: a.chG
            }
        ],
        [g, E, b] = (0, o.Wu)([c.Z, u.ZP, f.Z], () => [c.Z.theme, null == f.Z.gradientPreset, u.ZP.useSystemTheme === _.KW.ON]);
    return (0, r.jsx)(s.sY7, {
        className: m.themeSelector,
        options: n,
        value: E && !b ? g : e,
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
