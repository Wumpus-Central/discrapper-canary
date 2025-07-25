(n.d(t, { Z: () => c }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(225433),
    a = n(872194);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: l, className: c, buttonClassName: d, look: u } = e,
        [m, j] = r.useState(!1),
        v = r.useCallback(() => {
            (n(), j(!1));
        }, [n, j]);
    return (0, i.jsxs)('div', {
        className: o()(a.container, c),
        onMouseEnter: () => {
            if (t) return void j(!0);
            j(!1);
        },
        onMouseLeave: () => {
            j(!1);
        },
        children: [
            l,
            t && m
                ? (0, i.jsx)(s.Z, {
                      onClick: v,
                      className: o()(a.removeButton, d),
                      look: u
                  })
                : null
        ]
    });
}
