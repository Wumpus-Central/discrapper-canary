i.d(t, { A: () => o });
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(98115),
    u = i(767246);
function o(e) {
    let { children: t, size: i = 16, className: r, flowerStarClassName: o, ...d } = e,
        c = l.Children.only(t),
        p = !e.allowFullSizedIcon;
    return (0, n.jsxs)("div", {
        className: s()(u.jH, r),
        style: { width: i, height: i },
        children: [
            (0, n.jsx)(a.A, { ...d, className: s()(o, u.mP) }),
            (0, n.jsx)("div", { className: s()(u.sn, { [u.Qu]: p }), children: c }),
        ],
    });
}
