l.d(n, { Z: () => s }), l(47120);
var i = l(200651),
    t = l(192379),
    o = l(225433),
    a = l(883486);
function s(e) {
    let { hasSetEmoji: n, onClick: l, children: s } = e,
        [r, c] = t.useState(!1);
    return (0, i.jsxs)('div', {
        className: a.container,
        onMouseEnter: () => {
            if (n) {
                c(!0);
                return;
            }
            c(!1);
        },
        onMouseLeave: () => {
            c(!1);
        },
        children: [
            s,
            n &&
                r &&
                (0, i.jsx)(o.Z, {
                    onClick: l,
                    className: a.removeButton
                })
        ]
    });
}
