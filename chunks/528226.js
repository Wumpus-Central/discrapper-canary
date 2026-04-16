r.d(t, { A: () => i });
var l = r(627968),
    n = r(427941),
    a = r(219561),
    s = r(190503),
    c = r(15983);
let i = (e) => {
    let { bannerSrc: t, logoSrc: r, backgroundColor: i, href: d, children: o } = e;
    return (0, l.jsx)("div", {
        className: c.ZK,
        children: (0, l.jsx)(n.A, {
            backgroundImage: t,
            backgroundColor: i,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            padding: "var(--space-8)",
            children: (0, l.jsxs)("div", {
                className: c.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: c.VW,
                        children: [
                            null != r && (0, l.jsx)("div", { className: c.wm, children: (0, l.jsx)(s.A, { src: r }) }),
                            null != d &&
                                (0, l.jsx)(a.ar, {
                                    variant: "overlay-primary",
                                    href: d,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != o && (0, l.jsx)("div", { className: c.Y_, children: o }),
                ],
            }),
        }),
    });
};
