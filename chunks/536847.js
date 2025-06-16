n.d(t, { o: () => h });
var r = n(255367);
n(73800);
var i = n(657707),
    a = n(442837),
    o = n(481060),
    s = n(153867),
    l = n(210887),
    c = n(695346),
    u = n(507962),
    d = n(469115),
    f = n(231338),
    _ = n(388032),
    p = n(531864);
function h() {
    let e = [
            {
                name: _.intl.string(_.t.b8Cei4),
                value: f.BR.DARK,
                icon: i.Z6G
            },
            {
                name: _.intl.string(_.t.K2sFfn),
                value: f.BR.LIGHT,
                icon: i.chG
            }
        ],
        t = (0, a.e7)([l.Z], () => l.Z.theme);
    return (0, r.jsx)(o.sY7, {
        className: p.themeSelector,
        options: e,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, u.HV)();
            let n = c.L1.getSetting(),
                r = null != n.backgroundGradientPresetId && n.backgroundGradientPresetId in d.qt && d.qt[n.backgroundGradientPresetId].theme !== t;
            (0, s.ZI)({
                theme: t,
                backgroundGradientPresetId: r ? void 0 : n.backgroundGradientPresetId,
                customUserThemeSettings: n.customUserThemeSettings
            });
        },
        look: 'pill'
    });
}
