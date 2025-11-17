n.d(t, { L: () => u });
var r = n(54381),
    i = n(481060),
    l = n(962086),
    a = n(225675),
    s = n(434404),
    o = n(981631),
    c = n(388032),
    d = n(666921);
function u(e) {
    let { guildId: t, role: n } = e;
    return (0, r.jsx)("div", {
        className: d.container,
        children: (0, r.jsx)(i.gNt, {
            label: c.intl.string(c.t.arFPfJ),
            description: c.intl.string(c.t["IT/0AI"]),
            children: (0, r.jsx)(i.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    s.Z.close(),
                        (0, l.iD)(t, {
                            type: a.z.ROLES,
                            roles: { [n.id]: n },
                            returnToSection: o.pNK.ROLES,
                        });
                },
                text: c.intl.string(c.t.arFPfJ),
                icon: i.d4D,
                iconPosition: "end",
            }),
        }),
    });
}
