n.d(t, { G: () => g });
var i = n(627968),
    l = n(452027),
    s = n(821609),
    r = n(554830),
    a = n(529942),
    o = n(209700),
    d = n(997509),
    c = n(652215),
    u = n(985018),
    m = n(872584);
function g(e) {
    let { guildId: t, role: n } = e;
    return (0, i.jsx)("div", {
        className: m.k,
        children: (0, i.jsx)(l.D, {
            label: u.intl.string(u.t.arFPfJ),
            description: u.intl.string(u.t["IT/0AI"]),
            children: (0, i.jsx)(s.$, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    d.A.close(), (0, a.Tk)(t, { type: o._.ROLES, roles: { [n.id]: n }, returnToSection: c.BEX.ROLES });
                },
                text: u.intl.string(u.t.arFPfJ),
                icon: r.K,
                iconPosition: "end",
            }),
        }),
    });
}
