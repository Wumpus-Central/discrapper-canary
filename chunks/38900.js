n.d(t, {
    K: () => C,
    Z: () => h
});
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    s = n(2613),
    a = n(536258),
    o = n(383026),
    d = n(147961);
let c = () => 4 * Math.random() + 8,
    u = [c(), c(), c()],
    C = () =>
        (0, l.jsx)('div', {
            className: i()(o.skeleton, d.shopCard),
            children: (0, l.jsxs)('div', {
                className: o.cardBody,
                children: [(0, l.jsx)('div', { className: o.cardAvatar }), (0, l.jsx)('div', { className: o.cardTitle }), (0, l.jsx)('div', { className: o.cardDescription }), (0, l.jsx)('div', { className: o.cardSummary })]
            })
        }),
    h = () =>
        (0, l.jsx)('div', {
            className: s.skeletons,
            children: u.map((e) =>
                (0, l.jsxs)(
                    'div',
                    {
                        className: s.cardsContainer,
                        children: [
                            (0, l.jsx)('div', {
                                className: i()(o.skeleton, a.shopBanner),
                                children: (0, l.jsx)('div', { className: o.bannerBody })
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, l.jsx)(C, {}, e))
                        ]
                    },
                    e
                )
            )
        });
