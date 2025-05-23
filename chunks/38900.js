n.d(t, {
    K: () => p,
    Z: () => b
});
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(842817),
    o = n(517866),
    s = n(927071),
    c = n(976001);
let u = () => 4 * Math.random() + 8,
    d = [u(), u(), u()],
    p = () =>
        (0, r.jsx)('div', {
            className: a()(s.skeleton, c.shopCard),
            children: (0, r.jsxs)('div', {
                className: s.cardBody,
                children: [(0, r.jsx)('div', { className: s.cardAvatar }), (0, r.jsx)('div', { className: s.cardTitle }), (0, r.jsx)('div', { className: s.cardDescription }), (0, r.jsx)('div', { className: s.cardSummary })]
            })
        }),
    b = () =>
        (0, r.jsx)('div', {
            className: i.skeletons,
            children: d.map((e) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: i.cardsContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: a()(s.skeleton, o.shopBanner),
                                children: (0, r.jsx)('div', { className: s.bannerBody })
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(p, {}, e))
                        ]
                    },
                    e
                )
            )
        });
