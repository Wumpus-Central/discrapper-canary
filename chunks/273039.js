n.d(t, { Z: () => c }), n(388685);
var l = n(951288),
    i = n(647438),
    r = n(120356),
    o = n.n(r),
    s = n(225433),
    a = n(683608);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: r, className: c, buttonClassName: u, look: d } = e,
        [m, j] = i.useState(!1),
        v = i.useCallback(() => {
            n(), j(!1);
        }, [n, j]);
    return (0, l.jsxs)("div", {
        className: o()(a.container, c),
        onMouseEnter: () => {
            if (t) return void j(!0);
            j(!1);
        },
        onMouseLeave: () => {
            j(!1);
        },
        children: [
            r,
            t && m
                ? (0, l.jsx)(s.Z, {
                      onClick: v,
                      className: o()(a.removeButton, u),
                      look: d,
                  })
                : null,
        ],
    });
}
