l.d(t, { A: () => i });
var r = l(627968),
    n = l(427941),
    a = l(219561),
    s = l(190503),
    c = l(358076);
let i = (e) => {
    let { bannerSrc: t, logoSrc: l, backgroundColor: i, href: d, children: o } = e;
    return (0, r.jsx)("div", {
        className: c.ZK,
        children: (0, r.jsx)(n.A, {
            backgroundImage: t,
            backgroundColor: i,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            padding: "var(--space-8)",
            children: (0, r.jsxs)("div", {
                className: c.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: c.VW,
                        children: [
                            null != l && (0, r.jsx)("div", { className: c.wm, children: (0, r.jsx)(s.A, { src: l }) }),
                            null != d &&
                                (0, r.jsx)(a.ar, {
                                    variant: "overlay-primary",
                                    href: d,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != o && (0, r.jsx)("div", { className: c.Y_, children: o }),
                ],
            }),
        }),
    });
};
