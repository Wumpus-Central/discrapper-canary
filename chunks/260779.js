r.d(t, { A: () => c });
var l = r(627968),
    n = r(219561),
    a = r(190503),
    s = r(149154);
let c = (e) => {
    let { bannerSrc: t, logoSrc: r, backgroundColor: c, href: i, children: d } = e;
    return (0, l.jsxs)("div", {
        className: s.ZK,
        children: [
            (0, l.jsx)("div", {
                className: s.vK,
                style: null != c ? { background: c } : void 0,
                children: (0, l.jsx)(a.A, { src: t }),
            }),
            (0, l.jsxs)("div", {
                className: s.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: s.wx,
                        children: [
                            null != r && (0, l.jsx)("div", { className: s.wm, children: (0, l.jsx)(a.A, { src: r }) }),
                            null != i &&
                                (0, l.jsx)(n.ar, {
                                    variant: "overlay-primary",
                                    href: i,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != d && (0, l.jsx)("div", { className: s.Y_, children: d }),
                ],
            }),
        ],
    });
};
