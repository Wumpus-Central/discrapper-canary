t.d(r, { A: () => a });
var d = t(627968),
    l = t(158954),
    c = t(653793),
    o = t(524025);
let a = (e) => {
    let { backgroundImage: r, logoSrc: t, supplementalImage: a, href: n, ctaText: s } = e;
    return (0, d.jsxs)("div", {
        className: o.rJ,
        children: [
            (0, d.jsx)(c.A, {
                overflowable: !0,
                children: (0, d.jsx)("div", {
                    className: o.rf,
                    style: { backgroundImage: `url(${r})` },
                    children: (0, d.jsxs)("div", {
                        className: o.kb,
                        children: [
                            (0, d.jsx)("div", {}),
                            (0, d.jsx)("img", { className: o.wm, src: t, alt: "" }),
                            (0, d.jsx)(l.$nd, { text: s, variant: "overlay-primary" }),
                        ],
                    }),
                }),
            }),
            null != a && (0, d.jsx)("img", { className: o.hP, src: a, alt: "" }),
        ],
    });
};
