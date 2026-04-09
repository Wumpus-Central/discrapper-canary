r.d(t, { A: () => d });
var l = r(627968),
    n = r(427941),
    a = r(653793),
    s = r(219561),
    c = r(190503),
    i = r(91964);
let d = (e) => {
    let { backgroundImage: t, logoSrc: r, supplementalImage: d, href: o, ctaText: u } = e;
    return (0, l.jsxs)("div", {
        className: i.rJ,
        children: [
            (0, l.jsx)(a.A, {
                overflowable: !0,
                children: (0, l.jsx)(n.A, {
                    backgroundImage: t,
                    backgroundPosition: "left",
                    padding: 24,
                    children: (0, l.jsx)("div", {
                        className: i.rf,
                        children: (0, l.jsxs)("div", {
                            className: i.kb,
                            children: [
                                (0, l.jsx)("div", {}),
                                null != r &&
                                    (0, l.jsx)("div", { className: i.wm, children: (0, l.jsx)(c.A, { src: r }) }),
                                null != u && (0, l.jsx)(s.ar, { ctaText: u, variant: "overlay-primary", href: o }),
                            ],
                        }),
                    }),
                }),
            }),
            null != d && (0, l.jsx)("div", { className: i.hP, children: (0, l.jsx)(c.A, { src: d }) }),
        ],
    });
};
