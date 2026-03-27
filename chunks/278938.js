"use strict";
n.d(t, { F: () => h });
var r = n(627968);
n(64700);
var i = n(934551),
    s = n(311907),
    a = n(397927),
    o = n(544028),
    l = n(230835),
    u = n(738419),
    c = n(818348),
    d = n(674547),
    _ = n(985018),
    f = n(49330);
let p = (e, t) => (e === t ? f.HE : void 0);
function h() {
    let e = (0, s.bG)([o.A], () => o.A.theme),
        t = (0, a.Mwr)(e) ? c.NJ.DARK : c.NJ.LIGHT,
        n = [
            {
                name: "",
                value: c.NJ.DARK,
                icon: i.ThemeDarkIcon,
                className: p(t, c.NJ.DARK),
                tooltip: _.intl.string(d.default["Dk+OWY"]),
                tooltipAriaLabel: _.intl.string(d.default["Dk+OWY"]),
            },
            {
                name: "",
                value: c.NJ.LIGHT,
                icon: i.ThemeLightIcon,
                className: p(t, c.NJ.LIGHT),
                tooltip: _.intl.string(d.default["5vlJkY"]),
                tooltipAriaLabel: _.intl.string(d.default["5vlJkY"]),
            },
        ];
    return (0, r.jsx)(a.IzF, {
        className: f.t7,
        optionClassName: f.aF,
        options: n,
        value: t,
        onChange: (e) => {
            let { value: t } = e;
            (0, u.dR)(), (0, l.IE)(t);
        },
        look: "pill",
    });
}
