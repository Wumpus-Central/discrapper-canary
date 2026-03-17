l.d(t, { A: () => s });
var r = l(627968),
    n = l(427941),
    i = l(458306),
    o = l(190503),
    a = l(988064);
let s = (e) => {
    let { bannerSrc: t, logoSrc: l, backgroundColor: s, href: d, children: c } = e;
    return (0, r.jsx)("div", {
        className: a.ZK,
        children: (0, r.jsx)(n.A, {
            backgroundImage: t,
            backgroundColor: s,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            padding: "var(--space-8)",
            children: (0, r.jsxs)("div", {
                className: a.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: a.VW,
                        children: [
                            null != l && (0, r.jsx)("div", { className: a.wm, children: (0, r.jsx)(o.A, { src: l }) }),
                            null != d &&
                                (0, r.jsx)(i.ar, {
                                    variant: "overlay-primary",
                                    href: d,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != c && (0, r.jsx)("div", { className: a.Y_, children: c }),
                ],
            }),
        }),
    });
};
