n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(623995),
    c = n(505944);
let u = (e) => {
    let { className: t, onBackClick: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.container, t),
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
                        children: (0, r.jsxs)(o.P3F, {
                            onClick: n,
                            className: l.backButton,
                            children: [(0, r.jsx)(o.V7D, { color: "currentColor" }), s.intl.string(s.t["13/7kX"])],
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: l.__invalid_contentContainer,
                        children: (0, r.jsx)("div", {
                            className: l.content,
                            children: (0, r.jsx)(o.Heading, {
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
