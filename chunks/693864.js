e.d(n, { default: () => r });
var i = e(627968),
    s = e(64700),
    a = e(189213),
    l = e(150934),
    c = e(243721),
    o = e(375708);
function r(t) {
    let { transitionState: n, onConfirm: e, onClose: r, onDismiss: d } = t,
        [u, b] = s.useState(!1),
        [h, p] = s.useState(!0),
        [C, g] = s.useState(!0);
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        onClose: r,
        title: o.intl.string(o.t["6rP+Bd"]),
        subtitle: o.intl.string(o.t["1LuCnS"]),
        actions: [
            {
                variant: "secondary",
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: function () {
                    d(), r();
                },
                disabled: u,
            },
            {
                text: o.intl.string(o.t["cY+Oob"]),
                onClick: function () {
                    u || (b(!0), e(h, C), b(!1), r());
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
            label: o.intl.string(o.t.KX8WJm),
            labelType: "secondary",
        }),
        children: (0, i.jsx)(c.d, {
            label: o.intl.string(o.t["zLb+ux"]),
            checked: h,
            onChange: (t) => {
                p(t);
            },
        }),
    });
}
