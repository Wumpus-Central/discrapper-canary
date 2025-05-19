n.d(t, {
    K: () => b,
    Z: () => f
});
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(842817),
    o = n(517866),
    s = n(927071),
    c = n(976001);
let u = () => 4 * Math.random() + 8,
    d = [u(), u(), u()],
    b = () =>
        (0, r.jsx)('div', {
            className: i()(s.skeleton, c.shopCard),
            children: (0, r.jsxs)('div', {
                className: s.cardBody,
                children: [(0, r.jsx)('div', { className: s.cardAvatar }), (0, r.jsx)('div', { className: s.cardTitle }), (0, r.jsx)('div', { className: s.cardDescription }), (0, r.jsx)('div', { className: s.cardSummary })]
            })
        }),
    f = () =>
        (0, r.jsx)('div', {
            className: a.skeletons,
            children: d.map((e) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: a.cardsContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: i()(s.skeleton, o.shopBanner),
                                children: (0, r.jsx)('div', { className: s.bannerBody })
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(b, {}, e))
                        ]
                    },
                    e
                )
            )
        });
