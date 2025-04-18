n.d(t, {
    K: () => b,
    Z: () => p
});
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    i = n(484920),
    o = n(544348),
    s = n(556559),
    c = n(33588);
let u = () => 4 * Math.random() + 8,
    d = [u(), u(), u()],
    b = () =>
        (0, r.jsx)('div', {
            className: a()(s.skeleton, c.shopCard),
            children: (0, r.jsxs)('div', {
                className: s.cardBody,
                children: [(0, r.jsx)('div', { className: s.cardAvatar }), (0, r.jsx)('div', { className: s.cardTitle }), (0, r.jsx)('div', { className: s.cardDescription }), (0, r.jsx)('div', { className: s.cardSummary })]
            })
        }),
    p = () =>
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
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(b, {}, e))
                        ]
                    },
                    e
                )
            )
        });
