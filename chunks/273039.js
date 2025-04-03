n.d(t, { Z: () => c }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(225433),
    o = n(872194);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: s, className: c, buttonClassName: d, look: u } = e,
        [m, g] = i.useState(!1),
        p = i.useCallback(() => {
            n(), g(!1);
        }, [n, g]);
    return (0, r.jsxs)('div', {
        className: a()(o.container, c),
        onMouseEnter: () => {
            if (t) return void g(!0);
            g(!1);
        },
        onMouseLeave: () => {
            g(!1);
        },
        children: [
            s,
            t && m
                ? (0, r.jsx)(l.Z, {
                      onClick: p,
                      className: a()(o.removeButton, d),
                      look: u
                  })
                : null
        ]
    });
}
