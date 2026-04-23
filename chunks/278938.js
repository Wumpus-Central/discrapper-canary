l.d(t, { F: () => E });
var a = l(627968);
l(64700);
var n = l(943255),
    s = l(575181),
    r = l(311907),
    i = l(366010),
    o = l(629584),
    c = l(544028),
    d = l(230835),
    u = l(738419),
    h = l(818348),
    m = l(693227),
    _ = l(985018),
    x = l(893897);
let g = (e, t) => (e === t ? x.HE : void 0);
function E() {
    let e = (0, r.bG)([c.A], () => c.A.theme),
        t = (0, i.M)(e) ? h.NJ.DARK : h.NJ.LIGHT,
        l = [
            {
                name: "",
                value: h.NJ.DARK,
                icon: n.Z,
                className: g(t, h.NJ.DARK),
                tooltip: _.intl.string(m.default["Dk+OWY"]),
                tooltipAriaLabel: _.intl.string(m.default["Dk+OWY"]),
            },
            {
                name: "",
                value: h.NJ.LIGHT,
                icon: s.F,
                className: g(t, h.NJ.LIGHT),
                tooltip: _.intl.string(m.default["5vlJkY"]),
                tooltipAriaLabel: _.intl.string(m.default["5vlJkY"]),
            },
        ];
    return (0, a.jsx)(o.I, {
        className: x.t7,
        optionClassName: x.aF,
        options: l,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, u.dR)(), (0, d.IE)(t);
        },
        look: "pill",
    });
}
