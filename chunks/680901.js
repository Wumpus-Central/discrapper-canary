a.d(t, { L: () => c });
var n = a(627968),
    r = a(397927),
    o = a(538451),
    i = a(573030);
let c = (e) => {
    let { users: t, guildId: a, "aria-label": c, "aria-labelledby": l } = e;
    return (0, n.jsx)(r.lGe, {
        "aria-label": c,
        "aria-labelledby": l,
        className: i.X,
        children: (0, n.jsx)(r.HOs, {
            className: i.o,
            children: t.map((e) => (0, n.jsx)(o.A, { user: e, guildId: a, onClick: (e) => e.stopPropagation() }, e.id)),
        }),
    });
};
