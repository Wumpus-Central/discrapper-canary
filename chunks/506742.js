n.d(t, { a: () => d });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(397927),
    l = n(580630),
    o = n(985018),
    c = n(394379);
let d = (e) => {
    let {
            price: { amount: t, currency: n },
            className: a,
            variant: d = "heading-md/semibold",
        } = e,
        u = (0, l.RS)(t, n);
    return (0, r.jsxs)(s.Text, {
        variant: d,
        className: i()(c.v, a),
        children: [
            (0, r.jsx)(s.AC4, { children: o.intl.format(o.t["2CEGln"], { price: u }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: u }),
        ],
    });
};
