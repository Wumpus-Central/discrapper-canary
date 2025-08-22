n.d(t, { y: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(937615),
    l = n(388032),
    c = n(858970);
let u = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: u = "heading-md/semibold",
        } = e,
        d = (0, s.qr)(t, n);
    return (0, r.jsxs)(o.Text, {
        variant: u,
        className: a()(c.striked, i),
        children: [
            (0, r.jsx)(o.nn4, { children: l.intl.format(l.t["2CEGlp"], { price: d }) }),
            (0, r.jsx)("span", {
                "aria-hidden": !0,
                children: d,
            }),
        ],
    });
};
