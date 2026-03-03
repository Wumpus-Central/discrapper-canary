t.d(l, { A: () => d });
var r = t(627968),
    o = t(506456),
    n = t(653793),
    a = t(458306),
    i = t(524025);
let d = (e) => {
    let { backgroundImage: l, logoSrc: t, supplementalImage: d, href: c, ctaText: s } = e,
        u = (0, o.A)(l.src),
        h = (0, o.A)(t?.src),
        p = (0, o.A)(d?.src);
    return (0, r.jsxs)("div", {
        className: i.rJ,
        children: [
            (0, r.jsx)(n.A, {
                overflowable: !0,
                children: (0, r.jsx)("div", {
                    className: i.rf,
                    style: { backgroundImage: `url(${u})` },
                    children: (0, r.jsxs)("div", {
                        className: i.kb,
                        children: [
                            (0, r.jsx)("div", {}),
                            (0, r.jsx)("img", { className: i.wm, src: h, alt: t?.alt ?? "" }),
                            null != s && (0, r.jsx)(a.ar, { ctaText: s, variant: "overlay-primary", href: c }),
                        ],
                    }),
                }),
            }),
            null != p && (0, r.jsx)("img", { className: i.hP, src: p, alt: d?.alt ?? "" }),
        ],
    });
};
