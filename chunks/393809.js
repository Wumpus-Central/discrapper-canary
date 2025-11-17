n.d(r, { default: () => l }), n(388685);
var i = n(54381),
    e = n(473749),
    a = n(793030),
    E = n(755721),
    o = n(53365),
    T = n(377176),
    c = n(388032);
function l(t) {
    let { guildId: r, transitionState: n, onClose: l } = t,
        [A, _] = e.useState(!1),
        [u, N] = e.useState(!1),
        O = async () => {
            _(!0);
            try {
                await (0, o.zo)(r), l();
            } finally {
                _(!1);
            }
        },
        s = c.intl.string(c.t["22itmo"]);
    return (0, i.jsx)(a.Modal, {
        size: "md",
        transitionState: n,
        onClose: l,
        "aria-label": s,
        title: s,
        subtitle: c.intl.string(c.t.kdbm9C),
        actions: [
            {
                variant: "secondary",
                onClick: l,
                text: c.intl.string(c.t["ETE/oC"]),
            },
            {
                variant: "primary",
                text: c.intl.string(c.t["cY+Oob"]),
                disabled: !u,
                onClick: O,
                loading: A,
            },
        ],
        children: (0, i.jsx)(E.$q, {
            onChange: () => {
                N((t) => !t);
            },
            value: u,
            children: (0, T.f)(),
        }),
    });
}
