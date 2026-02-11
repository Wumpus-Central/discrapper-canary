"use strict";
n.d(t, { G: () => u });
var i = n(627968),
    s = n(397927),
    l = n(529942),
    r = n(209700),
    a = n(997509),
    o = n(652215),
    d = n(985018),
    c = n(542885);
function u(e) {
    let { guildId: t, role: n } = e;
    return (0, i.jsx)("div", {
        className: c.k,
        children: (0, i.jsx)(s.D0$, {
            label: d.intl.string(d.t.arFPfJ),
            description: d.intl.string(d.t["IT/0AI"]),
            children: (0, i.jsx)(s.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    a.A.close(), (0, l.Tk)(t, { type: r._.ROLES, roles: { [n.id]: n }, returnToSection: o.BEX.ROLES });
                },
                text: d.intl.string(d.t.arFPfJ),
                icon: s.KS6,
                iconPosition: "end",
            }),
        }),
    });
}
