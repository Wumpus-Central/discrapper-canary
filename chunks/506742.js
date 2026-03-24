"use strict";
r.d(t, { a: () => d });
var n = r(627968);
r(64700);
var i = r(503698),
    s = r.n(i),
    a = r(397927),
    l = r(580630),
    c = r(985018),
    o = r(812640);
let d = (e) => {
    let {
            price: { amount: t, currency: r },
            className: i,
            variant: d = "heading-md/semibold",
        } = e,
        u = (0, l.RS)(t, r);
    return (0, n.jsxs)(a.Text, {
        variant: d,
        className: s()(o.v, i),
        children: [
            (0, n.jsx)(a.AC4, { children: c.intl.format(c.t["2CEGln"], { price: u }) }),
            (0, n.jsx)("span", { "aria-hidden": !0, children: u }),
        ],
    });
};
