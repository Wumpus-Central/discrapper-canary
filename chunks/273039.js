t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    o = t(225433),
    a = t(883486);
function s(e) {
    let { hasSetEmoji: n, onClick: t, children: s } = e,
        [r, d] = i.useState(!1);
    return (0, l.jsxs)('div', {
        className: a.container,
        onMouseEnter: () => {
            if (n) {
                d(!0);
                return;
            }
            d(!1);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: [
            s,
            n &&
                r &&
                (0, l.jsx)(o.Z, {
                    onClick: t,
                    className: a.removeButton
                })
        ]
    });
}
