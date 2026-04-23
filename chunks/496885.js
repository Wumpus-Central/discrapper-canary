n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(98115),
    u = n(767246);
function o(e) {
    let { children: t, size: n = 16, className: r, flowerStarClassName: o, ...c } = e,
        d = l.Children.only(t),
        E = !e.allowFullSizedIcon;
    return (0, i.jsxs)("div", {
        className: a()(u.jH, r),
        style: { width: n, height: n },
        children: [
            (0, i.jsx)(s.A, { ...c, className: a()(o, u.mP) }),
            (0, i.jsx)("div", { className: a()(u.sn, { [u.Qu]: E }), children: d }),
        ],
    });
}
