n.d(t, { y: () => u });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(937615),
    s = n(388032),
    c = n(843819);
let u = (e) => {
    let {
            price: { amount: t, currency: n },
            className: l,
            variant: u = 'heading-md/semibold'
        } = e,
        d = (0, o.qr)(t, n);
    return (0, r.jsxs)(a.Text, {
        variant: u,
        className: i()(c.striked, l),
        children: [
            (0, r.jsx)(a.nn4, { children: s.intl.format(s.t['2CEGlp'], { price: d }) }),
            (0, r.jsx)('span', {
                'aria-hidden': !0,
                children: d
            })
        ]
    });
};
