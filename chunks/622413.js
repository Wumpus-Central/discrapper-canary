n.d(t, { A: () => l }), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(233645);
let l = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: i, renderMedia: l, className: c, isHorizontal: u = !1 } = e;
    return (0, r.jsxs)("div", {
        className: a()(o.Vs, { [o.ZQ]: u }, c),
        children: [
            (0, r.jsx)("div", {
                className: a()(o.$_, { [o.rO]: u }),
                children: null == l ? void 0 : l(),
            }),
            (0, r.jsxs)("div", {
                className: o.h_,
                children: [
                    (0, r.jsx)(s.H, {
                        className: o.DD,
                        children: null == t ? void 0 : t(),
                    }),
                    (0, r.jsx)("div", {
                        className: o.dS,
                        children: null == n ? void 0 : n(),
                    }),
                    (0, r.jsx)("div", {
                        className: o.o1,
                        children: null == i ? void 0 : i(),
                    }),
                ],
            }),
        ],
    });
};
