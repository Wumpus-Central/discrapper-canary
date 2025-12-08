n.d(t, { o: () => m });
var r = n(54381);
n(473749);
var i = n(657707),
    a = n(442837),
    o = n(481060),
    s = n(210887),
    l = n(866419),
    c = n(771934),
    u = n(231338),
    d = n(202283),
    f = n(388032),
    p = n(884984);
let _ = (e, t) => (e === t ? p.themePillItemSelected : void 0);
function m() {
    let e = (0, a.e7)([s.Z], () => s.Z.theme),
        t = (0, o.wjy)(e) ? u.BR.DARK : u.BR.LIGHT,
        n = [
            {
                name: "",
                value: u.BR.DARK,
                icon: i.Z6G,
                className: _(t, u.BR.DARK),
                tooltip: f.intl.string(d.default["Dk+OWY"]),
                tooltipAriaLabel: f.intl.string(d.default["Dk+OWY"]),
            },
            {
                name: "",
                value: u.BR.LIGHT,
                icon: i.chG,
                className: _(t, u.BR.LIGHT),
                tooltip: f.intl.string(d.default["5vlJkY"]),
                tooltipAriaLabel: f.intl.string(d.default["5vlJkY"]),
            },
        ];
    return (0, r.jsx)(o.sY7, {
        className: p.themeSelector,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, c.HV)(), (0, l.Bv)(t);
        },
        look: "pill",
    });
}
