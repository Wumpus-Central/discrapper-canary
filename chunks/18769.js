t.d(l, { A: () => d });
var r = t(627968),
    o = t(158954),
    n = t(506456),
    a = t(653793),
    i = t(524025);
let d = (e) => {
    let { backgroundImage: l, logoSrc: t, supplementalImage: d, href: s, ctaText: c } = e,
        u = (0, n.A)(l.src),
        h = (0, n.A)(t?.src),
        p = (0, n.A)(d?.src);
    return (0, r.jsxs)("div", {
        className: i.rJ,
        children: [
            (0, r.jsx)(a.A, {
                overflowable: !0,
                children: (0, r.jsx)("div", {
                    className: i.rf,
                    style: { backgroundImage: `url(${u})` },
                    children: (0, r.jsxs)("div", {
                        className: i.kb,
                        children: [
                            (0, r.jsx)("div", {}),
                            (0, r.jsx)("img", { className: i.wm, src: h, alt: t?.alt ?? "" }),
                            (0, r.jsx)(o.$nd, { text: c, variant: "overlay-primary" }),
                        ],
                    }),
                }),
            }),
            null != p && (0, r.jsx)("img", { className: i.hP, src: p, alt: d?.alt ?? "" }),
        ],
    });
};
