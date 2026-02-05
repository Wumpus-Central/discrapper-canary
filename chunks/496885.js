"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(98115),
    l = n(556309);
function u(e) {
    let { children: t, size: n = 16, className: a, flowerStarClassName: u, ...c } = e,
        d = i.Children.only(t),
        _ = { width: n, height: n },
        f = !e.allowFullSizedIcon;
    return (0, r.jsxs)("div", {
        className: s()(l.jH, a),
        style: _,
        children: [
            (0, r.jsx)(o.A, { ...c, className: s()(u, l.mP) }),
            (0, r.jsx)("div", { className: s()(l.sn, { [l.Qu]: f }), children: d }),
        ],
    });
}
