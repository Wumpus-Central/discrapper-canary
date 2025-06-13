n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(225433),
    a = n(872194);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: l, className: c, buttonClassName: d, look: u } = e,
        [m, h] = i.useState(!1),
        j = i.useCallback(() => {
            n(), h(!1);
        }, [n, h]);
    return (0, r.jsxs)('div', {
        className: o()(a.container, c),
        onMouseEnter: () => {
            if (t) return void h(!0);
            h(!1);
        },
        onMouseLeave: () => {
            h(!1);
        },
        children: [
            l,
            t && m
                ? (0, r.jsx)(s.Z, {
                      onClick: j,
                      className: o()(a.removeButton, d),
                      look: u
                  })
                : null
        ]
    });
}
