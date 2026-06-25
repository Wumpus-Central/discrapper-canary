n.d(t, { A: () => i });
var r = n(627968),
    l = n(498381),
    a = n(891167),
    s = n(394666);
let i = function (e) {
    let { bannerSrc: t, logoSrc: n, backgroundColor: i, href: c, children: o } = e;
    return (0, r.jsxs)("div", {
        className: s.ZK,
        children: [
            (0, r.jsx)("div", {
                className: s.vK,
                style: null != i ? { background: i } : void 0,
                children: (0, r.jsx)(a.A, { src: t }),
            }),
            (0, r.jsxs)("div", {
                className: s.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: s.wx,
                        children: [
                            null != n && (0, r.jsx)("div", { className: s.wm, children: (0, r.jsx)(a.A, { src: n }) }),
                            null != c &&
                                (0, r.jsx)(l.aF, {
                                    variant: "overlay-primary",
                                    href: c,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != o && (0, r.jsx)("div", { className: s.Y_, children: o }),
                ],
            }),
        ],
    });
};
