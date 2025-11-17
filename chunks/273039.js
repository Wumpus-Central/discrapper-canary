n.d(t, { Z: () => c }), n(388685);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    o = n.n(r),
    s = n(225433),
    a = n(683608);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: r, className: c, buttonClassName: u } = e,
        [d, m] = i.useState(!1),
        j = i.useCallback(() => {
            n(), m(!1);
        }, [n, m]);
    return (0, l.jsxs)("div", {
        className: o()(a.container, c),
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
                ? (0, l.jsx)(s.Z, {
                      onClick: j,
                      className: o()(a.removeButton, u),
                  })
                : null,
        ],
    });
}
