n.d(r, { default: () => A }), n(388685);
var i = n(951288),
    e = n(647438),
    a = n(82659),
    E = n(755721),
    o = n(481060),
    T = n(53365),
    c = n(377176),
    l = n(388032);
function A(t) {
    let { guildId: r, transitionState: n, onClose: A } = t,
        [_, u] = e.useState(!1),
        [N, s] = e.useState(!1),
        O = async () => {
            u(!0);
            try {
                await (0, T.zo)(r), A();
            } finally {
                u(!1);
            }
        },
        I = l.intl.string(l.t["22itmp"]);
    return (0, i.jsx)(a.Modal, {
        size: "md",
        transitionState: n,
        onClose: A,
        "aria-label": I,
        title: I,
        subtitle: l.intl.string(l.t.kdbm9P),
        actions: [
            {
                variant: "secondary",
                onClick: A,
                text: l.intl.string(l.t["ETE/oK"]),
            },
            {
                variant: "primary",
                text: l.intl.string(l.t["cY+Ooa"]),
                disabled: !N,
                onClick: O,
                loading: _,
            },
        ],
        children: (0, i.jsx)(E.$q, {
            onChange: () => {
                s((t) => !t);
            },
            size: 20,
            type: E.M0.INVERTED,
            value: N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: (0, c.f)(),
            }),
        }),
    });
}
