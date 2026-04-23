n.d(t, { a: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(834730),
    s = n(140735),
    c = n(580630),
    o = n(985018),
    d = n(252955);
let u = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: u = "heading-md/semibold",
        } = e,
        _ = (0, c.RS)(t, n);
    return (0, r.jsxs)(l.E, {
        variant: u,
        className: a()(d.v, i),
        children: [
            (0, r.jsx)(s.A, { children: o.intl.format(o.t["2CEGln"], { price: _ }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: _ }),
        ],
    });
};
