i.d(r, { default: () => s });
var e = i(627968),
    n = i(64700),
    a = i(158954),
    o = i(421380),
    E = i(493540),
    T = i(980406),
    c = i(985018);
function s(t) {
    let { guildId: r, transitionState: i, onClose: s } = t,
        [l, R] = n.useState(!1),
        [_, O] = n.useState(!1),
        u = async () => {
            R(!0);
            try {
                await (0, E.Bo)(r), s();
            } finally {
                R(!1);
            }
        },
        A = c.intl.string(c.t["22itmo"]);
    return (0, e.jsx)(a.Modal, {
        size: "md",
        transitionState: i,
        onClose: s,
        "aria-label": A,
        title: A,
        subtitle: c.intl.string(c.t.kdbm9C),
        actions: [
            { variant: "secondary", onClick: s, text: c.intl.string(c.t["ETE/oC"]) },
            { variant: "primary", text: c.intl.string(c.t["cY+Oob"]), disabled: !_, onClick: u, loading: l },
        ],
        children: (0, e.jsx)(o.Kj, {
            onChange: () => {
                O((t) => !t);
            },
            value: _,
            children: (0, T.r)(),
        }),
    });
}
