t.d(l, { A: () => i });
var r = t(627968);
t(64700);
var o = t(506456),
    n = t(458306),
    a = t(988064);
let i = (e) => {
    let { bannerSrc: l, logoSrc: t, backgroundColor: i, href: d, children: c } = e,
        s = (0, o.A)(l.src),
        u = (0, o.A)(t?.src);
    return (0, r.jsxs)("div", {
        className: a.ZK,
        style: { backgroundImage: `url(${s})`, backgroundColor: i },
        children: [
            (0, r.jsxs)("div", {
                className: a.VW,
                children: [
                    null != u && (0, r.jsx)("img", { src: u, alt: t?.alt ?? "", className: a.wm }),
                    null != d &&
                        (0, r.jsx)(n.ar, {
                            variant: "overlay-primary",
                            href: d,
                            ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                        }),
                ],
            }),
            null != c && (0, r.jsx)("div", { className: a.Y_, children: c }),
        ],
    });
};
