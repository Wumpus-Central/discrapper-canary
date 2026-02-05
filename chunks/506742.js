n.d(t, { a: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(397927),
    s = n(580630),
    c = n(985018),
    o = n(812640);
let d = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: d = "heading-md/semibold",
        } = e,
        u = (0, s.RS)(t, n);
    return (0, r.jsxs)(l.Text, {
        variant: d,
        className: a()(o.v, i),
        children: [
            (0, r.jsx)(l.AC4, { children: c.intl.format(c.t["2CEGln"], { price: u }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: u }),
        ],
    });
};
