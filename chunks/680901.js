e.d(l, { ClipParticipantsList: () => c });
var r = e(627968),
    s = e(305866),
    i = e(573613),
    p = e(538451),
    t = e(622422);
let c = (a) => {
    let { users: l, guildId: e, "aria-label": c, "aria-labelledby": d } = a;
    return (0, r.jsx)(s.l, {
        "aria-label": c,
        "aria-labelledby": d,
        className: t.X,
        children: (0, r.jsx)(i.Ip, {
            className: t.o,
            children: l.map((a) => (0, r.jsx)(p.A, { user: a, guildId: e, onClick: (a) => a.stopPropagation() }, a.id)),
        }),
    });
};
