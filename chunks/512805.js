n.d(t, { A: () => c });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(414079),
    o = n(36670);
function c(e) {
    let { hasSetEmoji: t, onClick: n, children: s, className: c, buttonClassName: d } = e,
        [u, m] = i.useState(!1),
        h = i.useCallback(() => {
            n(), m(!1);
        }, [n, m]);
    return (0, l.jsxs)("div", {
        className: a()(o.k, c),
        onMouseEnter: () => {
            t ? m(!0) : m(!1);
        },
        onMouseLeave: () => {
            m(!1);
        },
        children: [s, t && u ? (0, l.jsx)(r.A, { onClick: h, className: a()(o.D, d) }) : null],
    });
}
