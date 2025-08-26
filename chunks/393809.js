n.d(r, { default: () => l }), n(388685);
var i = n(951288),
    e = n(647438),
    a = n(82659),
    E = n(481060),
    o = n(53365),
    T = n(377176),
    c = n(388032);
function l(t) {
    let { guildId: r, transitionState: n, onClose: l } = t,
        [A, _] = e.useState(!1),
        [u, N] = e.useState(!1),
        s = async () => {
            _(!0);
            try {
                await (0, o.zo)(r), l();
            } finally {
                _(!1);
            }
        },
        O = c.intl.string(c.t["22itmp"]);
    return (0, i.jsx)(a.Modal, {
        size: "md",
        transitionState: n,
        onClose: l,
        "aria-label": O,
        title: O,
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
                onClick: s,
                loading: A,
            },
        ],
        children: (0, i.jsx)(E.XZJ, {
            onChange: () => {
                N((t) => !t);
            },
            size: 20,
            type: E.XZJ.Types.INVERTED,
            value: u,
            children: (0, i.jsx)(E.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: (0, T.f)(),
            }),
        }),
    });
}
