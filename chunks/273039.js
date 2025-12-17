n.d(t, { Z: () => c }), n(388685);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    o = n.n(r),
    a = n(225433),
    s = n(347040);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: r, className: c, buttonClassName: u } = e,
        [d, m] = i.useState(!1),
        j = i.useCallback(() => {
            n(), m(!1);
        }, [n, m]);
    return (0, l.jsxs)("div", {
        className: o()(s.container, c),
        onMouseEnter: () => {
            if (t) return void m(!0);
            m(!1);
        },
        onMouseLeave: () => {
            m(!1);
        },
        children: [
            r,
            t && d
                ? (0, l.jsx)(a.Z, {
                      onClick: j,
                      className: o()(s.removeButton, u),
                  })
                : null,
        ],
    });
}
