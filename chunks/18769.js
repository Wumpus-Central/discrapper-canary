t.d(l, { A: () => s });
var r = t(627968),
    o = t(158954),
    n = t(53566),
    a = t(506456),
    i = t(653793),
    d = t(524025);
let s = (e) => {
    let { backgroundImage: l, logoSrc: t, supplementalImage: s, href: c, ctaText: u } = e,
        h = (0, a.A)(l.src),
        p = (0, a.A)(t?.src),
        m = (0, a.A)(s?.src),
        b = (0, n.S)(u ?? "");
    return (0, r.jsxs)("div", {
        className: d.rJ,
        children: [
            (0, r.jsx)(i.A, {
                overflowable: !0,
                children: (0, r.jsx)("div", {
                    className: d.rf,
                    style: { backgroundImage: `url(${h})` },
                    children: (0, r.jsxs)("div", {
                        className: d.kb,
                        children: [
                            (0, r.jsx)("div", {}),
                            (0, r.jsx)("img", { className: d.wm, src: p, alt: t?.alt ?? "" }),
                            (0, r.jsx)(o.$nd, { text: b, variant: "overlay-primary" }),
                        ],
                    }),
                }),
            }),
            null != m && (0, r.jsx)("img", { className: d.hP, src: m, alt: s?.alt ?? "" }),
        ],
    });
};
