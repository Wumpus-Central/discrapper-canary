n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    r = n(70435);
let o = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: l, renderMedia: o, className: d, isHorizontal: c = !1 } = e;
    return (0, i.jsxs)("div", {
        className: s()(r.Vs, { [r.ZQ]: c }, d),
        children: [
            null != o && (0, i.jsx)("div", { className: s()(r.$_, { [r.rO]: c }), children: o?.() }),
            (0, i.jsxs)("div", {
                className: r.h_,
                children: [
                    (0, i.jsx)(a.H, { className: r.DD, children: t?.() }),
                    (0, i.jsx)("div", { className: r.dS, children: n?.() }),
                    (0, i.jsx)("div", { className: r.o1, children: l?.() }),
                ],
            }),
        ],
    });
};
