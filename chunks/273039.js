n.d(t, { Z: () => c }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(225433),
    o = n(10334);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: l, className: c } = e,
        [d, u] = r.useState(!1);
    return (0, i.jsxs)('div', {
        className: s()(o.container, c),
        onMouseEnter: () => {
            if (t) {
                u(!0);
                return;
            }
            u(!1);
        },
        onMouseLeave: () => {
            u(!1);
        },
        children: [
            l,
            t &&
                d &&
                (0, i.jsx)(a.Z, {
                    onClick: n,
                    className: o.removeButton
                })
        ]
    });
}
