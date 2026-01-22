n.d(t, { a: () => d });
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(397927),
    s = n(580630),
    c = n(985018),
    o = n(812640);
let d = (e) => {
    let {
            price: { amount: t, currency: n },
            className: l,
            variant: d = "heading-md/semibold",
        } = e,
        u = (0, s.RS)(t, n);
    return (0, r.jsxs)(i.Text, {
        variant: d,
        className: a()(o.v, l),
        children: [
            (0, r.jsx)(i.AC4, { children: c.intl.format(c.t["2CEGln"], { price: u }) }),
            (0, r.jsx)("span", {
                "aria-hidden": !0,
                children: u,
            }),
        ],
    });
};
