n.d(t, { A: () => d });
var r = n(627968),
    l = n(939249),
    a = n(976860),
    s = n(364801),
    i = n(975117),
    c = n(498381),
    o = n(891167),
    u = n(829028);
let d = function (e) {
    let { backgroundImage: t, logoSrc: n, supplementalImage: d, href: h, ctaText: m } = e,
        p = null != h;
    return (0, r.jsxs)(l.D, {
        className: u.rJ,
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
                        className: u.rf,
                        children: (0, r.jsxs)("div", {
                            className: u.kb,
                            children: [
                                (0, r.jsx)("div", {}),
                                null != n &&
                                    (0, r.jsx)("div", { className: u.wm, children: (0, r.jsx)(o.A, { src: n }) }),
                                null != m && (0, r.jsx)(c.aF, { ctaText: m, variant: "overlay-primary", href: h }),
                            ],
                        }),
                    }),
                }),
            }),
            null != d && (0, r.jsx)("div", { className: u.hP, children: (0, r.jsx)(o.A, { src: d }) }),
        ],
    });
};
