n.d(t, { Z: () => c }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(225433),
    o = n(872194);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: l, className: c, buttonClassName: d, look: u } = e,
        [m, g] = i.useState(!1),
        p = i.useCallback(() => {
            n(), g(!1);
        }, [n, g]);
    return (0, r.jsxs)('div', {
        className: s()(o.container, c),
        onMouseEnter: () => {
            if (t) return void g(!0);
            g(!1);
        },
        onMouseLeave: () => {
            g(!1);
        },
        children: [
            l,
            t && m
                ? (0, r.jsx)(a.Z, {
                      onClick: p,
                      className: s()(o.removeButton, d),
                      look: u
                  })
                : null
        ]
    });
}
