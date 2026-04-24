"use strict";
r.d(t, { A: () => c });
var l = r(627968),
    s = r(427941),
    n = r(219561),
    a = r(190503),
    i = r(358076);
let c = (e) => {
    let { bannerSrc: t, logoSrc: r, backgroundColor: c, href: u, children: d } = e;
    return (0, l.jsx)("div", {
        className: i.ZK,
        children: (0, l.jsx)(s.A, {
            backgroundImage: t,
            backgroundColor: c,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            padding: "var(--space-8)",
            children: (0, l.jsxs)("div", {
                className: i.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: i.VW,
                        children: [
                            null != r && (0, l.jsx)("div", { className: i.wm, children: (0, l.jsx)(a.A, { src: r }) }),
                            null != u &&
                                (0, l.jsx)(n.ar, {
                                    variant: "overlay-primary",
                                    href: u,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != d && (0, l.jsx)("div", { className: i.Y_, children: d }),
                ],
            }),
        }),
    });
};
