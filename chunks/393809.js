n.d(r, { default: () => l }), n(388685);
var i = n(951288),
    a = n(647438),
    e = n(793030),
    E = n(755721),
    o = n(53365),
    T = n(377176),
    c = n(388032);
function l(t) {
    let { guildId: r, transitionState: n, onClose: l } = t,
        [A, _] = a.useState(!1),
        [u, N] = a.useState(!1),
        O = async () => {
            _(!0);
            try {
                await (0, o.zo)(r), l();
            } finally {
                _(!1);
            }
        },
        s = c.intl.string(c.t["22itmp"]);
    return (0, i.jsx)(e.Modal, {
        size: "md",
        transitionState: n,
        onClose: l,
        "aria-label": s,
        title: s,
        subtitle: c.intl.string(c.t.kdbm9P),
        actions: [
            {
                variant: "secondary",
                onClick: l,
                text: c.intl.string(c.t["ETE/oK"]),
            },
            {
                variant: "primary",
                text: c.intl.string(c.t["cY+Ooa"]),
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
