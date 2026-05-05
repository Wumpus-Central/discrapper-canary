l.d(t, { A: () => u });
var r = l(627968),
    n = l(939249),
    a = l(976860),
    s = l(364801),
    i = l(975117),
    c = l(498381),
    d = l(891167),
    o = l(829028);
let u = (e) => {
    let { backgroundImage: t, logoSrc: l, supplementalImage: u, href: m, ctaText: h } = e,
        p = null != m;
    return (0, r.jsxs)(n.D, {
        className: o.rJ,
        onClick: p
            ? (e) => {
                  e.preventDefault(), (0, a.pX)(m);
              }
            : void 0,
        children: [
            (0, r.jsx)(i.A, {
                overflowable: !0,
                children: (0, r.jsx)(s.A, {
                    backgroundImage: t,
                    backgroundPosition: "left",
                    padding: 24,
                    children: (0, r.jsx)("div", {
                        className: o.rf,
                        children: (0, r.jsxs)("div", {
                            className: o.kb,
                            children: [
                                (0, r.jsx)("div", {}),
                                null != l &&
                                    (0, r.jsx)("div", { className: o.wm, children: (0, r.jsx)(d.A, { src: l }) }),
                                null != h && (0, r.jsx)(c.aF, { ctaText: h, variant: "overlay-primary", href: m }),
                            ],
                        }),
                    }),
                }),
            }),
            null != u && (0, r.jsx)("div", { className: o.hP, children: (0, r.jsx)(d.A, { src: u }) }),
        ],
    });
};
