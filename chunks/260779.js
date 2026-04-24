"use strict";
r.d(t, { A: () => i });
var l = r(627968),
    s = r(219561),
    n = r(190503),
    a = r(149154);
let i = (e) => {
    let { bannerSrc: t, logoSrc: r, backgroundColor: i, href: c, children: u } = e;
    return (0, l.jsxs)("div", {
        className: a.ZK,
        children: [
            (0, l.jsx)("div", {
                className: a.vK,
                style: null != i ? { background: i } : void 0,
                children: (0, l.jsx)(n.A, { src: t }),
            }),
            (0, l.jsxs)("div", {
                className: a.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: a.wx,
                        children: [
                            null != r && (0, l.jsx)("div", { className: a.wm, children: (0, l.jsx)(n.A, { src: r }) }),
                            null != c &&
                                (0, l.jsx)(s.ar, {
                                    variant: "overlay-primary",
                                    href: c,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != u && (0, l.jsx)("div", { className: a.Y_, children: u }),
                ],
            }),
        ],
    });
};
