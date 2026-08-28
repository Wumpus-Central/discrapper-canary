n.d(t, { A: () => s });
var r = n(477900),
    l = n(498381),
    a = n(891167),
    i = n(362373);
let s = function (e) {
    let { bannerSrc: t, logoSrc: n, backgroundColor: s, href: c, children: o } = e;
    return (0, r.jsxs)("div", {
        className: i.ZK,
        children: [
            (0, r.jsx)("div", {
                className: i.vK,
                style: null != s ? { background: s } : void 0,
                children: (0, r.jsx)(a.A, { src: t }),
            }),
            (0, r.jsxs)("div", {
                className: i.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: i.wx,
                        children: [
                            null != n && (0, r.jsx)("div", { className: i.wm, children: (0, r.jsx)(a.A, { src: n }) }),
                            null != c &&
                                (0, r.jsx)(l.aF, {
                                    variant: "overlay-primary",
                                    href: c,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != o && (0, r.jsx)("div", { className: i.Y_, children: o }),
                ],
            }),
        ],
    });
};
