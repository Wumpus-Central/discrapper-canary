n.d(t, {
    K: () => g,
    Z: () => p,
});
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(55783),
    s = n(654664),
    o = n(970217),
    c = n(670185);
let u = () => 4 * Math.random() + 8,
    d = [u(), u(), u()],
    g = () =>
        (0, r.jsx)("div", {
            className: i()(o.skeleton, c.shopCard),
            children: (0, r.jsxs)("div", {
                className: o.cardBody,
                children: [
                    (0, r.jsx)("div", { className: o.cardAvatar }),
                    (0, r.jsx)("div", { className: o.cardTitle }),
                    (0, r.jsx)("div", { className: o.cardDescription }),
                    (0, r.jsx)("div", { className: o.cardSummary }),
                ],
            }),
        }),
    p = () =>
        (0, r.jsx)("div", {
            className: o.skeletonsContainer,
            children: d.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: s.cardsContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: i()(o.skeleton, o.bannerSkeleton, a.catalogBanner),
                                children: (0, r.jsx)("div", { className: o.bannerBody }),
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(g, {}, e)),
                        ],
                    },
                    e,
                ),
            ),
        });
