r.d(t, {
    K: () => p,
    Z: () => g,
});
var n = r(255367);
r(73800);
var l = r(120356),
    a = r.n(l),
    i = r(887353),
    o = r(923732),
    s = r(198501),
    c = r(300179);
let u = () => 4 * Math.random() + 8,
    d = [u(), u(), u()],
    p = () =>
        (0, n.jsx)("div", {
            className: a()(s.skeleton, c.shopCard),
            children: (0, n.jsxs)("div", {
                className: s.cardBody,
                children: [
                    (0, n.jsx)("div", { className: s.cardAvatar }),
                    (0, n.jsx)("div", { className: s.cardTitle }),
                    (0, n.jsx)("div", { className: s.cardDescription }),
                    (0, n.jsx)("div", { className: s.cardSummary }),
                ],
            }),
        }),
    g = () =>
        (0, n.jsx)("div", {
            className: i.skeletons,
            children: d.map((e) =>
                (0, n.jsxs)(
                    "div",
                    {
                        className: i.cardsContainer,
                        children: [
                            (0, n.jsx)("div", {
                                className: a()(s.skeleton, o.shopBanner),
                                children: (0, n.jsx)("div", { className: s.bannerBody }),
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, n.jsx)(p, {}, e)),
                        ],
                    },
                    e,
                ),
            ),
        });
