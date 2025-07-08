n.d(t, {
    K: () => p,
    Z: () => g
});
var r = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    i = n(484920),
    a = n(544348),
    s = n(556559),
    c = n(33588);
let u = () => 4 * Math.random() + 8,
    d = [u(), u(), u()],
    p = () =>
        (0, r.jsx)('div', {
            className: o()(s.skeleton, c.shopCard),
            children: (0, r.jsxs)('div', {
                className: s.cardBody,
                children: [(0, r.jsx)('div', { className: s.cardAvatar }), (0, r.jsx)('div', { className: s.cardTitle }), (0, r.jsx)('div', { className: s.cardDescription }), (0, r.jsx)('div', { className: s.cardSummary })]
            })
        }),
    g = () =>
        (0, r.jsx)('div', {
            className: i.skeletons,
            children: d.map((e) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: i.cardsContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: o()(s.skeleton, a.shopBanner),
                                children: (0, r.jsx)('div', { className: s.bannerBody })
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(p, {}, e))
                        ]
                    },
                    e
                )
            )
        });
