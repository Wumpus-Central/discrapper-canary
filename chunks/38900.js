n.d(t, {
    K: () => p,
    Z: () => g,
});
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    s = n(128922),
    a = n(401975),
    o = n(55783),
    c = n(654664),
    u = n(970217),
    d = n(670185);
let p = () =>
        (0, r.jsx)("div", {
            className: i()(u.skeleton, d.shopCard),
            children: (0, r.jsxs)("div", {
                className: u.cardBody,
                children: [
                    (0, r.jsx)("div", { className: u.cardAvatar }),
                    (0, r.jsx)("div", { className: u.cardTitle }),
                    (0, r.jsx)("div", { className: u.cardDescription }),
                    (0, r.jsx)("div", { className: u.cardSummary }),
                ],
            }),
        }),
    g = () => {
        let e = s.Z.useConfig({ location: "ShopSkeleton" }).showCardsV2;
        return (0, r.jsx)("div", {
            className: u.skeletonsContainer,
            children: Array.from({ length: 3 }).map((t, n) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: c.cardsContainer,
                        children: [
                            e
                                ? (0, r.jsx)("div", { className: i()(o.catalogBanner, u.bannerSkeletonV2) })
                                : (0, r.jsx)("div", {
                                      className: i()(u.skeleton, u.bannerSkeleton, o.catalogBanner),
                                      children: (0, r.jsx)("div", { className: u.bannerBody }),
                                  }),
                            Array.from({ length: 12 }, (t, n) => (e ? (0, r.jsx)(a.Z, {}, n) : (0, r.jsx)(p, {}, n))),
                        ],
                    },
                    n,
                ),
            ),
        });
    };
