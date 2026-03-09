n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(397927),
    s = n(233645);
let o = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: r, renderMedia: o, className: d, isHorizontal: c = !1 } = e;
    return (0, i.jsxs)("div", {
        className: l()(s.Vs, { [s.ZQ]: c }, d),
        children: [
            null != o && (0, i.jsx)("div", { className: l()(s.$_, { [s.rO]: c }), children: o?.() }),
            (0, i.jsxs)("div", {
                className: s.h_,
                children: [
                    (0, i.jsx)(a.H, { className: s.DD, children: t?.() }),
                    (0, i.jsx)("div", { className: s.dS, children: n?.() }),
                    (0, i.jsx)("div", { className: s.o1, children: r?.() }),
                ],
            }),
        ],
    });
};
