e.d(n, { default: () => o });
var i = e(477900),
    s = e(582128),
    a = e(189213),
    l = e(150934),
    c = e(193249),
    r = e(375708);
function o(t) {
    let { transitionState: n, onConfirm: e, onClose: o, onDismiss: d } = t,
        [u, b] = s.useState(!1),
        [h, p] = s.useState(!0),
        [C, g] = s.useState(!0);
    return (0, i.jsx)(a.a, {
        transitionState: n,
        onClose: o,
        title: r.intl.string(r.t["6rP+Bd"]),
        subtitle: r.intl.string(r.t["1LuCnS"]),
        actions: [
            {
                variant: "secondary",
                text: r.intl.string(r.t["ETE/oC"]),
                onClick: function () {
                    (d(), o());
                },
                disabled: u,
            },
            {
                text: r.intl.string(r.t["cY+Oob"]),
                onClick: function () {
                    u || (b(!0), e(h, C), b(!1), o());
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
            label: r.intl.string(r.t.KX8WJm),
            labelType: "secondary",
        }),
        children: (0, i.jsx)(c.d, {
            label: r.intl.string(r.t["zLb+ux"]),
            checked: h,
            onChange: (t) => {
                p(t);
            },
        }),
    });
}
