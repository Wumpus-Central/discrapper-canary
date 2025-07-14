n.d(t, { y: () => u });
var r = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    i = n(481060),
    a = n(937615),
    s = n(388032),
    c = n(843819);
let u = (e) => {
    let {
            price: { amount: t, currency: n },
            className: l,
            variant: u = 'heading-md/semibold'
        } = e,
        d = (0, a.qr)(t, n);
    return (0, r.jsxs)(i.Text, {
        variant: u,
        className: o()(c.striked, l),
        children: [
            (0, r.jsx)(i.nn4, { children: s.intl.format(s.t['2CEGlp'], { price: d }) }),
            (0, r.jsx)('span', {
                'aria-hidden': !0,
                children: d
            })
        ]
    });
};
