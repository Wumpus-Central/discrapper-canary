n.d(t, { o: () => h }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(657707),
    a = n(442837),
    s = n(481060),
    l = n(153867),
    c = n(210887),
    u = n(740492),
    d = n(514361),
    f = n(874893),
    _ = n(231338),
    p = n(531864);
function h() {
    let [e, t] = i.useState(_.BR.LIGHT),
        n = [
            {
                name: '',
                value: _.BR.DARK,
                icon: o.Z6G
            },
            {
                name: '',
                value: _.BR.LIGHT,
                icon: o.chG
            }
        ],
        [h, m, g] = (0, a.Wu)([c.Z, u.ZP, d.Z], () => [c.Z.theme, null == d.Z.gradientPreset, u.ZP.useSystemTheme === f.KW.ON]);
    return (0, r.jsx)('div', {
        className: p.themeSelector,
        children: (0, r.jsx)(s.sY7, {
            options: n,
            value: m && !g ? h : e,
            onChange: (e) => {
                let { value: n } = e;
                t(n), (0, l.ZI)({ theme: n });
            },
            look: 'pill'
        })
    });
}
