"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(98115),
    l = n(767246);
function u(e) {
    let { children: t, size: n = 16, className: s, flowerStarClassName: u, ...c } = e,
        d = i.Children.only(t),
        _ = { width: n, height: n },
        f = !e.allowFullSizedIcon;
    return (0, r.jsxs)("div", {
        className: a()(l.jH, s),
        style: _,
        children: [
            (0, r.jsx)(o.A, { ...c, className: a()(u, l.mP) }),
            (0, r.jsx)("div", { className: a()(l.sn, { [l.Qu]: f }), children: d }),
        ],
    });
}
