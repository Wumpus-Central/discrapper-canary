l.d(t, { A: () => u });
var r = l(627968),
    n = l(939249),
    a = l(976860),
    s = l(427941),
    i = l(653793),
    c = l(219561),
    d = l(190503),
    o = l(762380);
let u = (e) => {
    let { backgroundImage: t, logoSrc: l, supplementalImage: u, href: h, ctaText: m } = e,
        p = null != h;
    return (0, r.jsxs)(n.D, {
        className: o.rJ,
        onClick: p
            ? (e) => {
                  e.preventDefault(), (0, a.pX)(h);
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
                                null != m && (0, r.jsx)(c.ar, { ctaText: m, variant: "overlay-primary", href: h }),
                            ],
                        }),
                    }),
                }),
            }),
            null != u && (0, r.jsx)("div", { className: o.hP, children: (0, r.jsx)(d.A, { src: u }) }),
        ],
    });
};
