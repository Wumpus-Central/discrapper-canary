e.d(n, { default: () => d });
var i = e(627968),
    s = e(64700),
    a = e(189213),
    l = e(150934),
    r = e(243721),
    c = e(985018);
function d(t) {
    let { transitionState: n, onConfirm: e, onClose: d, onDismiss: o } = t,
        [u, b] = s.useState(!1),
        [h, p] = s.useState(!0),
        [C, g] = s.useState(!0);
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        onClose: d,
        title: c.intl.string(c.t["6rP+Bd"]),
        subtitle: c.intl.string(c.t["1LuCnS"]),
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: () => {
                    o(), d();
                },
                disabled: u,
            },
            {
                text: c.intl.string(c.t["cY+Oob"]),
                onClick: () => {
                    u || (b(!0), e(h, C), b(!1), d());
                },
                disabled: u,
                loading: u,
            },
        ],
        actionBarInput: (0, i.jsx)(l.S, {
            checked: C,
            onChange: (t) => {
                g(t);
            },
            label: c.intl.string(c.t.KX8WJm),
            labelType: "secondary",
        }),
        children: (0, i.jsx)(r.d, {
            label: c.intl.string(c.t["zLb+ux"]),
            checked: h,
            onChange: (t) => {
                p(t);
            },
        }),
    });
}
