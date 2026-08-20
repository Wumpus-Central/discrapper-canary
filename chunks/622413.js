n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    a = n(707554),
    r = n(274279);
let o = function (e) {
    let { renderTitle: t, renderTagline: n, renderActions: l, renderMedia: o, className: c, isHorizontal: d = !1 } = e;
    return (0, i.jsxs)("div", {
        className: s()(r.Vs, { [r.ZQ]: d }, c),
        children: [
            null != o && (0, i.jsx)("div", { className: s()(r.$_, { [r.rO]: d }), children: o?.() }),
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
