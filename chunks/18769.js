"use strict";
r.d(t, { A: () => o });
var l = r(627968),
    s = r(939249),
    n = r(976860),
    a = r(427941),
    i = r(653793),
    c = r(219561),
    u = r(190503),
    d = r(762380);
let o = (e) => {
    let { backgroundImage: t, logoSrc: r, supplementalImage: o, href: h, ctaText: m } = e,
        p = null != h;
    return (0, l.jsxs)(s.D, {
        className: d.rJ,
        onClick: p
            ? (e) => {
                  e.preventDefault(), (0, n.pX)(h);
              }
            : void 0,
        children: [
            (0, l.jsx)(i.A, {
                overflowable: !0,
                children: (0, l.jsx)(a.A, {
                    backgroundImage: t,
                    backgroundPosition: "left",
                    padding: 24,
                    children: (0, l.jsx)("div", {
                        className: d.rf,
                        children: (0, l.jsxs)("div", {
                            className: d.kb,
                            children: [
                                (0, l.jsx)("div", {}),
                                null != r &&
                                    (0, l.jsx)("div", { className: d.wm, children: (0, l.jsx)(u.A, { src: r }) }),
                                null != m && (0, l.jsx)(c.ar, { ctaText: m, variant: "overlay-primary", href: h }),
                            ],
                        }),
                    }),
                }),
            }),
            null != o && (0, l.jsx)("div", { className: d.hP, children: (0, l.jsx)(u.A, { src: o }) }),
        ],
    });
};
