n.d(t, {
    K: () => C,
    Z: () => h
});
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(697526),
    a = n(539181),
    o = n(779646),
    d = n(176500);
let c = () => 4 * Math.random() + 8,
    u = [c(), c(), c()],
    C = () =>
        (0, r.jsx)('div', {
            className: i()(o.skeleton, d.shopCard),
            children: (0, r.jsxs)('div', {
                className: o.cardBody,
                children: [(0, r.jsx)('div', { className: o.cardAvatar }), (0, r.jsx)('div', { className: o.cardTitle }), (0, r.jsx)('div', { className: o.cardDescription }), (0, r.jsx)('div', { className: o.cardSummary })]
            })
        }),
    h = () =>
        (0, r.jsx)('div', {
            className: s.skeletons,
            children: u.map((e) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: s.cardsContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: i()(o.skeleton, a.shopBanner),
                                children: (0, r.jsx)('div', { className: o.bannerBody })
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(C, {}, e))
                        ]
                    },
                    e
                )
            )
        });
