n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(388032),
    l = n(38249),
    c = n(505944);
let u = (e) => {
    let { className: t, onBackClick: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(l.container, t),
        "data-testid": "all-perks-hero-header",
        children: [
            (0, r.jsx)("img", {
                src: c,
                alt: "",
                className: l.headerArt,
            }),
            (0, r.jsxs)("div", {
                className: l.containerInner,
                children: [
                    (0, r.jsx)("div", {
                        className: l.backButtonContainer,
                        children: (0, r.jsxs)(a.P3F, {
                            onClick: n,
                            className: l.backButton,
                            children: [(0, r.jsx)(a.V7D, { color: "currentColor" }), s.intl.string(s.t["13/7kX"])],
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: l.__invalid_contentContainer,
                        children: (0, r.jsx)("div", {
                            className: l.content,
                            children: (0, r.jsx)(a.Heading, {
                                variant: "display-lg",
                                color: "always-white",
                                children: s.intl.string(s.t["hqjDX/"]),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
};
