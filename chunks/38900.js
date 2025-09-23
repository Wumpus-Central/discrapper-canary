n.d(t, {
    K: () => g,
    Z: () => p,
});
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(55783),
    i = n(654664),
    o = n(970217),
    c = n(670185);
let u = () => 4 * Math.random() + 8,
    d = [u(), u(), u()],
    g = () =>
        (0, r.jsx)("div", {
            className: a()(o.skeleton, c.shopCard),
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
                        className: i.cardsContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: a()(o.skeleton, o.bannerSkeleton, s.catalogBanner),
                                children: (0, r.jsx)("div", { className: o.bannerBody }),
                            }),
                            Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(g, {}, e)),
                        ],
                    },
                    e,
                ),
            ),
        });
