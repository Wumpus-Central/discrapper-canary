n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(707554),
    s = n(842990);
let o = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: l, renderMedia: o, className: c, isHorizontal: d = !1 } = e;
    return (0, i.jsxs)("div", {
        className: a()(s.Vs, { [s.ZQ]: d }, c),
        children: [
            null != o && (0, i.jsx)("div", { className: a()(s.$_, { [s.rO]: d }), children: o?.() }),
            (0, i.jsxs)("div", {
                className: s.h_,
                children: [
                    (0, i.jsx)(r.H, { className: s.DD, children: t?.() }),
                    (0, i.jsx)("div", { className: s.dS, children: n?.() }),
                    (0, i.jsx)("div", { className: s.o1, children: l?.() }),
                ],
            }),
        ],
    });
};
