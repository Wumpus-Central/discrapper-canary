l.d(t, { A: () => i });
var r = l(627968),
    n = l(219561),
    a = l(190503),
    s = l(149154);
let i = (e) => {
    let { bannerSrc: t, logoSrc: l, backgroundColor: i, href: c, children: d } = e;
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
                            null != l && (0, r.jsx)("div", { className: s.wm, children: (0, r.jsx)(a.A, { src: l }) }),
                            null != c &&
                                (0, r.jsx)(n.ar, {
                                    variant: "overlay-primary",
                                    href: c,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != d && (0, r.jsx)("div", { className: s.Y_, children: d }),
                ],
            }),
        ],
    });
};
