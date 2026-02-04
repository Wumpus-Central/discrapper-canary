n.d(t, {
    F: () => h,
});
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(311907),
    o = n(397927),
    s = n(544028),
    l = n(230835),
    c = n(738419),
    u = n(818348),
    d = n(520650),
    f = n(985018),
    p = n(792352);
let _ = (e, t) => (e === t ? p.HE : void 0);

function h() {
    let e = (0, a.bG)([s.A], () => s.A.theme),
        t = (0, o.Mwr)(e) ? u.NJ.DARK : u.NJ.LIGHT,
        n = [
            {
                name: "",
                value: u.NJ.DARK,
                icon: i.ThemeDarkIcon,
                className: _(t, u.NJ.DARK),
                tooltip: f.intl.string(d.default["Dk+OWY"]),
                tooltipAriaLabel: f.intl.string(d.default["Dk+OWY"]),
            },
            {
                name: "",
                value: u.NJ.LIGHT,
                icon: i.ThemeLightIcon,
                className: _(t, u.NJ.LIGHT),
                tooltip: f.intl.string(d.default["5vlJkY"]),
                tooltipAriaLabel: f.intl.string(d.default["5vlJkY"]),
            },
        ];
    return (0, r.jsx)(o.IzF, {
        className: p.t7,
        optionClassName: p.aF,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, c.dR)(), (0, l.IE)(t);
        },
        look: "pill",
    });
}
