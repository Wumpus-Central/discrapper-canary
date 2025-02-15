n.d(t, {
    K: () => C,
    Z: () => h
});
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(2613),
    s = n(536258),
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
            className: a.skeletons,
            children: u.map((e) =>
                (0, l.jsxs)(
                    'div',
                    {
                        className: a.cardsContainer,
                        children: [
                            (0, l.jsx)('div', {
                                className: i()(o.skeleton, s.shopBanner),
                                children: (0, l.jsx)('div', { className: o.bannerBody })
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, l.jsx)(C, {}, e))
                        ]
                    },
                    e
                )
            )
        });
