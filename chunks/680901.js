e.d(l, { ClipParticipantsList: () => t });
var s = e(627968),
    r = e(397927),
    i = e(538451),
    p = e(573030);
let t = (a) => {
    let { users: l, guildId: e, "aria-label": t, "aria-labelledby": c } = a;
    return (0, s.jsx)(r.lGe, {
        "aria-label": t,
        "aria-labelledby": c,
        className: p.X,
        children: (0, s.jsx)(r.HOs, {
            className: p.o,
            children: l.map((a) => (0, s.jsx)(i.A, { user: a, guildId: e, onClick: (a) => a.stopPropagation() }, a.id)),
        }),
    });
};
