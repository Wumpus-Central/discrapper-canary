n.d(e, {
    default: () => r,
}),
    n(896048);
var i = n(627968),
    s = n(64700),
    a = n(158954),
    l = n(397927),
    c = n(985018);

function r(t) {
    let { transitionState: e, onConfirm: n, onClose: r, onDismiss: d } = t,
        [o, u] = s.useState(!1),
        [b, h] = s.useState(!0),
        [C, k] = s.useState(!0);
    return (0, i.jsx)(a.Modal, {
        transitionState: e,
        onClose: r,
        title: c.intl.string(c.t["6rP+Bd"]),
        subtitle: c.intl.string(c.t["1LuCnS"]),
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: () => {
                    d(), r();
                },
                disabled: o,
            },
            {
                text: c.intl.string(c.t["cY+Oob"]),
                onClick: () => {
                    o || (u(!0), n(b, C), u(!1), r());
                },
                disabled: o,
                loading: o,
            },
        ],
        actionBarInput: (0, i.jsx)(l.Checkbox, {
            checked: C,
            onChange: (t) => {
                k(t);
            },
            label: c.intl.string(c.t.KX8WJm),
            labelType: "secondary",
        }),
        children: (0, i.jsx)(l.dOG, {
            label: c.intl.string(c.t["zLb+ux"]),
            checked: b,
            onChange: (t) => {
                h(t);
            },
        }),
    });
}
