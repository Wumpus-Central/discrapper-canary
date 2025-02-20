n.d(t, { Z: () => c }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(225433),
    o = n(447258);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: s, className: c } = e,
        [d, u] = i.useState(!1);
    return (0, r.jsxs)('div', {
        className: a()(o.container, c),
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
            s,
            t &&
                d &&
                (0, r.jsx)(l.Z, {
                    onClick: n,
                    className: o.removeButton
                })
        ]
    });
}
