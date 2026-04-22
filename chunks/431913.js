i.d(r, { default: () => T });
var n = i(627968),
    a = i(64700),
    e = i(189213),
    o = i(27192),
    E = i(493540),
    c = i(980406),
    s = i(985018);
function T(t) {
    let { guildId: r, transitionState: i, onClose: T } = t,
        [R, l] = a.useState(!1),
        [O, u] = a.useState(!1),
        _ = async () => {
            l(!0);
            try {
                await (0, E.Bo)(r), T();
            } finally {
                l(!1);
            }
        },
        A = s.intl.string(s.t["22itmo"]);
    return (0, n.jsx)(e.Modal, {
        size: "md",
        transitionState: i,
        onClose: T,
        "aria-label": A,
        title: A,
        subtitle: s.intl.string(s.t.kdbm9C),
        actions: [
            { variant: "secondary", onClick: T, text: s.intl.string(s.t["ETE/oC"]) },
            { variant: "primary", text: s.intl.string(s.t["cY+Oob"]), disabled: !O, onClick: _, loading: R },
        ],
        children: (0, n.jsx)(o.Kj, {
            onChange: () => {
                u((t) => !t);
            },
            value: O,
            children: (0, c.r)(),
        }),
    });
}
