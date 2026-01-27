n.d(t, {
    A: () => s,
});
var r = n(627968),
    i = n(158954),
    a = n(596395),
    o = n(524025);
let s = (e) => {
    let { backgroundImage: t, logoSrc: n, supplementalImage: s, href: l, ctaText: c } = e;
    return (0, r.jsxs)("div", {
        className: o.rJ,
        children: [
            (0, r.jsx)(a.A, {
                overflowable: !0,
                children: (0, r.jsx)("div", {
                    className: o.rf,
                    style: {
                        backgroundImage: "url(".concat(t, ")"),
                    },
                    children: (0, r.jsxs)("div", {
                        className: o.kb,
                        children: [
                            (0, r.jsx)("div", {}),
                            (0, r.jsx)("img", {
                                className: o.wm,
                                src: n,
                                alt: "",
                            }),
                            (0, r.jsx)(i.$nd, {
                                text: c,
                                variant: "overlay-primary",
                            }),
                        ],
                    }),
                }),
            }),
            null != s &&
                (0, r.jsx)("img", {
                    className: o.hP,
                    src: s,
                    alt: "",
                }),
        ],
    });
};
