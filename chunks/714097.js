n.d(t, { o: () => f });
var r = n(255367);
n(73800);
var i = n(657707),
    a = n(442837),
    o = n(481060),
    s = n(210887),
    l = n(866419),
    c = n(507962),
    u = n(231338),
    d = n(191340);
let _ = (e, t) => (e === t ? d.themePillItemSelected : void 0);
function f() {
    let e = (0, a.e7)([s.Z], () => s.Z.theme),
        t = (0, o.wjy)(e) ? u.BR.DARK : u.BR.LIGHT,
        n = [
            {
                name: '',
                value: u.BR.DARK,
                icon: i.Z6G,
                className: _(t, u.BR.DARK)
            },
            {
                name: '',
                value: u.BR.LIGHT,
                icon: i.chG,
                className: _(t, u.BR.LIGHT)
            }
        ];
    return (0, r.jsx)(o.sY7, {
        className: d.themeSelector,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            ((0, c.HV)(), (0, l.Bv)(t));
        },
        look: 'pill'
    });
}
