n.d(t, { a: () => c });
var r = n(477900);
n(582128);
var i = n(503698),
    l = n.n(i),
    s = n(834730),
    a = n(140735),
    u = n(580630),
    o = n(105292),
    d = n(826706);
function c(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: c = "heading-sm/semibold",
        } = e,
        f = (0, u.RS)(t, n);
    return (0, r.jsxs)(s.E, {
        variant: c,
        className: l()(d.v, i),
        children: [
            (0, r.jsx)(a.A, { children: o.intl.format(o.t["2CEGln"], { price: f }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: f }),
        ],
    });
}
