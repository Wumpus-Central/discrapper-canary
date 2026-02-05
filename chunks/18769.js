"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(158954),
    a = n(653793),
    s = n(524025);
let o = (e) => {
    let { backgroundImage: t, logoSrc: n, supplementalImage: o, href: l, ctaText: u } = e;
    return (0, r.jsxs)("div", {
        className: s.rJ,
        children: [
            (0, r.jsx)(a.A, {
                overflowable: !0,
                children: (0, r.jsx)("div", {
                    className: s.rf,
                    style: { backgroundImage: `url(${t})` },
                    children: (0, r.jsxs)("div", {
                        className: s.kb,
                        children: [
                            (0, r.jsx)("div", {}),
                            (0, r.jsx)("img", { className: s.wm, src: n, alt: "" }),
                            (0, r.jsx)(i.$nd, { text: u, variant: "overlay-primary" }),
                        ],
                    }),
                }),
            }),
            null != o && (0, r.jsx)("img", { className: s.hP, src: o, alt: "" }),
        ],
    });
};
