"use strict";
l.d(t, { F: () => x });
var n = l(627968);
l(64700);
var a = l(943255),
    s = l(575181),
    i = l(311907),
    r = l(366010),
    o = l(629584),
    c = l(544028),
    u = l(230835),
    d = l(738419),
    h = l(818348),
    m = l(693227),
    _ = l(985018),
    g = l(893897);
let f = (e, t) => (e === t ? g.HE : void 0);
function x() {
    let e = (0, i.bG)([c.A], () => c.A.theme),
        t = (0, r.M)(e) ? h.NJ.DARK : h.NJ.LIGHT,
        l = [
            {
                name: "",
                value: h.NJ.DARK,
                icon: a.Z,
                className: f(t, h.NJ.DARK),
                tooltip: _.intl.string(m.default["Dk+OWY"]),
                tooltipAriaLabel: _.intl.string(m.default["Dk+OWY"]),
            },
            {
                name: "",
                value: h.NJ.LIGHT,
                icon: s.F,
                className: f(t, h.NJ.LIGHT),
                tooltip: _.intl.string(m.default["5vlJkY"]),
                tooltipAriaLabel: _.intl.string(m.default["5vlJkY"]),
            },
        ];
    return (0, n.jsx)(o.I, {
        className: g.t7,
        optionClassName: g.aF,
        options: l,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, d.dR)(), (0, u.IE)(t);
        },
        look: "pill",
    });
}
