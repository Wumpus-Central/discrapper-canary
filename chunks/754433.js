r.d(t, { y: () => u });
var n = r(255367);
r(73800);
var i = r(120356),
    l = r.n(i),
    a = r(481060),
    o = r(937615),
    s = r(388032),
    c = r(843819);
let u = (e) => {
    let {
            price: { amount: t, currency: r },
            className: i,
            variant: u = 'heading-md/semibold'
        } = e,
        d = (0, o.qr)(t, r);
    return (0, n.jsxs)(a.Text, {
        variant: u,
        className: l()(c.striked, i),
        children: [
            (0, n.jsx)(a.nn4, { children: s.intl.format(s.t['2CEGlp'], { price: d }) }),
            (0, n.jsx)('span', {
                'aria-hidden': !0,
                children: d
            })
        ]
    });
};
