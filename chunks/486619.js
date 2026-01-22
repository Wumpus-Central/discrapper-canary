n.d(t, {
    G: () => u,
});
var r = n(627968),
    i = n(397927),
    l = n(529942),
    s = n(209700),
    a = n(997509),
    c = n(652215),
    o = n(985018),
    d = n(51527);

function u(e) {
    let { guildId: t, role: n } = e;
    return (0, r.jsx)("div", {
        className: d.k,
        children: (0, r.jsx)(i.D0$, {
            label: o.intl.string(o.t.arFPfJ),
            description: o.intl.string(o.t["IT/0AI"]),
            children: (0, r.jsx)(i.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    a.A.close(),
                        (0, l.Tk)(t, {
                            type: s._.ROLES,
                            roles: {
                                [n.id]: n,
                            },
                            returnToSection: c.BEX.ROLES,
                        });
                },
                text: o.intl.string(o.t.arFPfJ),
                icon: i.KS6,
                iconPosition: "end",
            }),
        }),
    });
}
