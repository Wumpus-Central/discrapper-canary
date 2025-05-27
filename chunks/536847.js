n.d(t, { o: () => p }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(657707),
    i = n(442837),
    s = n(481060),
    o = n(153867),
    c = n(210887),
    d = n(740492),
    u = n(514361),
    m = n(874893),
    x = n(231338),
    h = n(531864);
function p() {
    let [e, t] = r.useState(x.BR.LIGHT),
        n = [
            {
                name: '',
                value: x.BR.DARK,
                icon: l.Z6G
            },
            {
                name: '',
                value: x.BR.LIGHT,
                icon: l.chG
            }
        ],
        [p, b, f] = (0, i.Wu)([c.Z, d.ZP, u.Z], () => [c.Z.theme, null == u.Z.gradientPreset, d.ZP.useSystemTheme === m.KW.ON]);
    return (0, a.jsx)('div', {
        className: h.themeSelector,
        children: (0, a.jsx)(s.sY7, {
            options: n,
            value: b && !f ? p : e,
            onChange: (e) => {
                let { value: n } = e;
                t(n), (0, o.ZI)({ theme: n });
            },
            look: 'pill'
        })
    });
}
