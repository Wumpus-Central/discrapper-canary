n.d(t, { o: () => E }), n(388685);
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
    f = n(469115),
    p = n(874893),
    h = n(231338),
    m = n(388032),
    g = n(531864);
function E() {
    let [e, t] = i.useState(h.BR.LIGHT),
        n = [
            {
                name: m.intl.string(m.t.b8Cei4),
                value: h.BR.DARK,
                icon: a.Z6G
            },
            {
                name: m.intl.string(m.t.K2sFfn),
                value: h.BR.LIGHT,
                icon: a.chG
            }
        ],
        [E, b, y] = (0, o.Wu)([c.Z, u.ZP, _.Z], () => [c.Z.theme, null == _.Z.gradientPreset, u.ZP.useSystemTheme === p.KW.ON]);
    return (0, r.jsx)(s.sY7, {
        className: g.themeSelector,
        options: n,
        value: b && !y ? E : e,
        onChange: (e) => {
            let { value: n } = e;
            t(n);
            let r = d.L1.getSetting(),
                i = null != r.backgroundGradientPresetId && r.backgroundGradientPresetId in f.qt && f.qt[r.backgroundGradientPresetId].theme !== n;
            (0, l.ZI)({
                theme: n,
                backgroundGradientPresetId: i ? void 0 : r.backgroundGradientPresetId,
                customUserThemeSettings: r.customUserThemeSettings
            });
        },
        look: 'pill'
    });
}
