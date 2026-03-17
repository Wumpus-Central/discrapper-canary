l.d(t, { A: () => d });
var r = l(627968),
    n = l(427941),
    i = l(653793),
    o = l(458306),
    a = l(190503),
    s = l(524025);
let d = (e) => {
    let { backgroundImage: t, logoSrc: l, supplementalImage: d, href: c, ctaText: u } = e;
    return (0, r.jsxs)("div", {
        className: s.rJ,
        children: [
            (0, r.jsx)(i.A, {
                overflowable: !0,
                children: (0, r.jsx)(n.A, {
                    backgroundImage: t,
                    backgroundPosition: "left",
                    padding: 24,
                    children: (0, r.jsx)("div", {
                        className: s.rf,
                        children: (0, r.jsxs)("div", {
                            className: s.kb,
                            children: [
                                (0, r.jsx)("div", {}),
                                null != l &&
                                    (0, r.jsx)("div", { className: s.wm, children: (0, r.jsx)(a.A, { src: l }) }),
                                null != u && (0, r.jsx)(o.ar, { ctaText: u, variant: "overlay-primary", href: c }),
                            ],
                        }),
                    }),
                }),
            }),
            null != d && (0, r.jsx)("div", { className: s.hP, children: (0, r.jsx)(a.A, { src: d }) }),
        ],
    });
};
