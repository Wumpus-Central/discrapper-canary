l.d(i, { ClipParticipantsList: () => d });
var s = l(627968),
    e = l(305866),
    r = l(364522),
    p = l(538451),
    c = l(622422);
function d(a) {
    let { users: i, guildId: l, "aria-label": d, "aria-labelledby": t } = a;
    return (0, s.jsx)(e.l, {
        "aria-label": d,
        "aria-labelledby": t,
        className: c.X,
        children: (0, s.jsx)(r.Ip, {
            className: c.o,
            children: i.map((a) => (0, s.jsx)(p.A, { user: a, guildId: l, onClick: (a) => a.stopPropagation() }, a.id)),
        }),
    });
}
