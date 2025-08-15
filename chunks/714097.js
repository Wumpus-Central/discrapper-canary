n.d(t, { o: () => h });
var r = n(255367);
n(73800);
var i = n(657707),
    a = n(442837),
    o = n(481060),
    s = n(210887),
    l = n(866419),
    c = n(507962),
    u = n(231338),
    d = n(119475),
    f = n(388032),
    _ = n(884984);
let p = (e, t) => (e === t ? _.themePillItemSelected : void 0);
function h() {
    let e = (0, a.e7)([s.Z], () => s.Z.theme),
        t = (0, o.wjy)(e) ? u.BR.DARK : u.BR.LIGHT,
        n = [
            {
                name: "",
                value: u.BR.DARK,
                icon: i.Z6G,
                className: p(t, u.BR.DARK),
                tooltip: f.intl.string(d.default["Dk+OWV"]),
                tooltipAriaLabel: f.intl.string(d.default["Dk+OWV"]),
            },
            {
                name: "",
                value: u.BR.LIGHT,
                icon: i.chG,
                className: p(t, u.BR.LIGHT),
                tooltip: f.intl.string(d.default["5vlJkZ"]),
                tooltipAriaLabel: f.intl.string(d.default["5vlJkZ"]),
            },
        ];
    return (0, r.jsx)(o.sY7, {
        className: _.themeSelector,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, c.HV)(), (0, l.Bv)(t);
        },
        look: "pill",
    });
}
