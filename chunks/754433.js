n.d(t, { y: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(937615),
    s = n(388032),
    c = n(410187);
let u = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: u = "heading-md/semibold",
        } = e,
        d = (0, o.qr)(t, n);
    return (0, r.jsxs)(a.Text, {
        variant: u,
        className: l()(c.striked, i),
        children: [
            (0, r.jsx)(a.nn4, { children: s.intl.format(s.t["2CEGln"], { price: d }) }),
            (0, r.jsx)("span", {
                "aria-hidden": !0,
                children: d,
            }),
        ],
    });
};
