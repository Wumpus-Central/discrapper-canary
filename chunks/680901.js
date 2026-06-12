i.d(l, { ClipParticipantsList: () => t });
var s = i(627968),
    e = i(305866),
    r = i(364522),
    p = i(538451),
    d = i(622422);
let t = (a) => {
    let { users: l, guildId: i, "aria-label": t, "aria-labelledby": c } = a;
    return (0, s.jsx)(e.l, {
        "aria-label": t,
        "aria-labelledby": c,
        className: d.X,
        children: (0, s.jsx)(r.Ip, {
            className: d.o,
            children: l.map((a) => (0, s.jsx)(p.A, { user: a, guildId: i, onClick: (a) => a.stopPropagation() }, a.id)),
        }),
    });
};
