r.d(t, { A: () => u });
var l = r(627968),
    n = r(397927),
    a = r(976860),
    s = r(427941),
    c = r(653793),
    i = r(219561),
    d = r(190503),
    o = r(762380);
let u = (e) => {
    let { backgroundImage: t, logoSrc: r, supplementalImage: u, href: m, ctaText: h } = e,
        p = null != m;
    return (0, l.jsxs)(n.DUT, {
        className: o.rJ,
        onClick: p
            ? (e) => {
                  e.preventDefault(), (0, a.pX)(m);
              }
            : void 0,
        children: [
            (0, l.jsx)(c.A, {
                overflowable: !0,
                children: (0, l.jsx)(s.A, {
                    backgroundImage: t,
                    backgroundPosition: "left",
                    padding: 24,
                    children: (0, l.jsx)("div", {
                        className: o.rf,
                        children: (0, l.jsxs)("div", {
                            className: o.kb,
                            children: [
                                (0, l.jsx)("div", {}),
                                null != r &&
                                    (0, l.jsx)("div", { className: o.wm, children: (0, l.jsx)(d.A, { src: r }) }),
                                null != h && (0, l.jsx)(i.ar, { ctaText: h, variant: "overlay-primary", href: m }),
                            ],
                        }),
                    }),
                }),
            }),
            null != u && (0, l.jsx)("div", { className: o.hP, children: (0, l.jsx)(d.A, { src: u }) }),
        ],
    });
};
