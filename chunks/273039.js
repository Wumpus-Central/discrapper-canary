n.d(t, { Z: () => c }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(225433),
    o = n(447258);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: s, className: c, look: d } = e,
        [u, m] = i.useState(!1);
    return (0, r.jsxs)('div', {
        className: a()(o.container, c),
        onMouseEnter: () => {
            if (t) {
                m(!0);
                return;
            }
            m(!1);
        },
        onMouseLeave: () => {
            m(!1);
        },
        children: [
            s,
            t &&
                u &&
                (0, r.jsx)(l.Z, {
                    onClick: n,
                    className: o.removeButton,
                    look: d
                })
        ]
    });
}
