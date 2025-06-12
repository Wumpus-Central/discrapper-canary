n.d(t, { o: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(657707),
    o = n(442837),
    s = n(481060),
    l = n(153867),
    c = n(210887),
    u = n(740492),
    d = n(695346),
    _ = n(514361),
    f = n(507962),
    p = n(469115),
    h = n(874893),
    m = n(231338),
    g = n(388032),
    E = n(531864);
function b() {
    let [e, t] = i.useState(m.BR.LIGHT),
        n = [
            {
                name: g.intl.string(g.t.b8Cei4),
                value: m.BR.DARK,
                icon: a.Z6G
            },
            {
                name: g.intl.string(g.t.K2sFfn),
                value: m.BR.LIGHT,
                icon: a.chG
            }
        ],
        [b, y, O] = (0, o.Wu)([c.Z, u.ZP, _.Z], () => [c.Z.theme, null == _.Z.gradientPreset, u.ZP.useSystemTheme === h.KW.ON]);
    return (0, r.jsx)(s.sY7, {
        className: E.themeSelector,
        options: n,
        value: y && !O ? b : e,
        onChange: (e) => {
            let { value: n } = e;
            (0, f.HV)(), t(n);
            let r = d.L1.getSetting(),
                i = null != r.backgroundGradientPresetId && r.backgroundGradientPresetId in p.qt && p.qt[r.backgroundGradientPresetId].theme !== n;
            (0, l.ZI)({
                theme: n,
                backgroundGradientPresetId: i ? void 0 : r.backgroundGradientPresetId,
                customUserThemeSettings: r.customUserThemeSettings
            });
        },
        look: 'pill'
    });
}
