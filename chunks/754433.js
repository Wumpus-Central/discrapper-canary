r.d(t, { y: () => u });
var n = r(255367);
r(73800);
var l = r(120356),
    o = r.n(l),
    i = r(481060),
    a = r(937615),
    s = r(388032),
    c = r(843819);
let u = (e) => {
    let {
            price: { amount: t, currency: r },
            className: l,
            variant: u = 'heading-md/semibold'
        } = e,
        d = (0, a.qr)(t, r);
    return (0, n.jsxs)(i.Text, {
        variant: u,
        className: o()(c.striked, l),
        children: [
            (0, n.jsx)(i.nn4, { children: s.intl.format(s.t['2CEGlp'], { price: d }) }),
            (0, n.jsx)('span', {
                'aria-hidden': !0,
                children: d
            })
        ]
    });
};
