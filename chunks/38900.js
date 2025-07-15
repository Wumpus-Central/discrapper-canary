r.d(t, {
    K: () => p,
    Z: () => f
});
var n = r(255367);
r(73800);
var l = r(120356),
    o = r.n(l),
    i = r(484920),
    a = r(544348),
    s = r(556559),
    c = r(33588);
let u = () => 4 * Math.random() + 8,
    d = [u(), u(), u()],
    p = () =>
        (0, n.jsx)('div', {
            className: o()(s.skeleton, c.shopCard),
            children: (0, n.jsxs)('div', {
                className: s.cardBody,
                children: [(0, n.jsx)('div', { className: s.cardAvatar }), (0, n.jsx)('div', { className: s.cardTitle }), (0, n.jsx)('div', { className: s.cardDescription }), (0, n.jsx)('div', { className: s.cardSummary })]
            })
        }),
    f = () =>
        (0, n.jsx)('div', {
            className: i.skeletons,
            children: d.map((e) =>
                (0, n.jsxs)(
                    'div',
                    {
                        className: i.cardsContainer,
                        children: [
                            (0, n.jsx)('div', {
                                className: o()(s.skeleton, a.shopBanner),
                                children: (0, n.jsx)('div', { className: s.bannerBody })
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, n.jsx)(p, {}, e))
                        ]
                    },
                    e
                )
            )
        });
