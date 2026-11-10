var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(834730),
    l = n(140735),
    u = n(580630),
    o = n(792996),
    d = n(826706);
n.d(
    t,
    {},
    {
        a: function (e) {
            let {
                    price: { amount: t, currency: n },
                    className: i,
                    variant: c = "heading-sm/semibold",
                } = e,
                I = (0, u.RS)(t, n);
            return (0, r.jsxs)(a.E, {
                variant: c,
                className: s()(d.v, i),
                children: [
                    (0, r.jsx)(l.A, { children: o.intl.format(o.t["2CEGln"], { price: I }) }),
                    (0, r.jsx)("span", { "aria-hidden": !0, children: I }),
                ],
            });
        },
    },
);
