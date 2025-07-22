n.d(t, { o: () => p });
var r = n(255367);
n(73800);
var i = n(657707),
    a = n(442837),
    o = n(481060),
    s = n(210887),
    l = n(866419),
    c = n(507962),
    u = n(231338),
    d = n(388032),
    _ = n(531864);
let f = (e, t) => (e === t ? _.themePillItemSelected : void 0);
function p() {
    let e = (0, a.e7)([s.Z], () => s.Z.theme),
        t = (0, o.wjy)(e) ? u.BR.DARK : u.BR.LIGHT,
        n = [
            {
                name: d.intl.string(d.t.b8Cei4),
                value: u.BR.DARK,
                icon: i.Z6G,
                className: f(t, u.BR.DARK)
            },
            {
                name: d.intl.string(d.t.K2sFfn),
                value: u.BR.LIGHT,
                icon: i.chG,
                className: f(t, u.BR.LIGHT)
            }
        ];
    return (0, r.jsx)(o.sY7, {
        className: _.themeSelector,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            ((0, c.HV)(), (0, l.Bv)(t));
        },
        look: 'pill'
    });
}
