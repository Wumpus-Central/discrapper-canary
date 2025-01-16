n.d(t, {
    K: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(697526),
    s = n(539181),
    o = n(779646),
    c = n(176500);
let d = () => 4 * Math.random() + 8,
    u = [d(), d(), d()],
    m = () =>
        (0, r.jsx)('div', {
            className: i()(o.skeleton, c.shopCard),
            children: (0, r.jsxs)('div', {
                className: o.cardBody,
                children: [(0, r.jsx)('div', { className: o.cardAvatar }), (0, r.jsx)('div', { className: o.cardTitle }), (0, r.jsx)('div', { className: o.cardDescription }), (0, r.jsx)('div', { className: o.cardSummary })]
            })
        });
t.Z = () =>
    (0, r.jsx)('div', {
        className: l.skeletons,
        children: u.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: l.cardsContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: i()(o.skeleton, s.shopBanner),
                            children: (0, r.jsx)('div', { className: o.bannerBody })
                        }),
                        Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(m, {}, e))
                    ]
                },
                e
            )
        )
    });
