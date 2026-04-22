n.d(t, { a: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(834730),
    s = n(140735),
    o = n(580630),
    c = n(985018),
    d = n(252955);
let u = (e) => {
    let {
            price: { amount: t, currency: n },
            className: r,
            variant: u = "heading-md/semibold",
        } = e,
        _ = (0, o.RS)(t, n);
    return (0, i.jsxs)(l.E, {
        variant: u,
        className: a()(d.v, r),
        children: [
            (0, i.jsx)(s.A, { children: c.intl.format(c.t["2CEGln"], { price: _ }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: _ }),
        ],
    });
};
