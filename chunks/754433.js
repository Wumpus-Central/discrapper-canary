n.d(t, { y: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
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
    return (0, r.jsxs)(l.Text, {
        variant: u,
        className: a()(c.striked, i),
        children: [
            (0, r.jsx)(l.nn4, { children: s.intl.format(s.t["2CEGlp"], { price: d }) }),
            (0, r.jsx)("span", {
                "aria-hidden": !0,
                children: d,
            }),
        ],
    });
};
