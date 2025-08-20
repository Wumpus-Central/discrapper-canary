n.d(t, { u: () => u }), n(953529);
var r = n(951288);
n(647438);
var i = n(409794),
    a = n(777207),
    o = n(541822),
    s = n(330711),
    l = n(163315);
let c = 96;
function u(e) {
    let { benefits: t, description: n, imgSrc: u, title: d, tag: f, FallbackIcon: _ } = e,
        p = null != u ? { "--custom-background-url": "url(".concat(u.toString(), ")") } : void 0,
        h = null != n && "" !== n;
    return (0, r.jsx)("div", {
        className: l.container,
        children: (0, r.jsx)(o.Z, {
            className: l.scroller,
            children: (0, r.jsxs)("div", {
                className: l.scrollContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: l.header,
                        children: [
                            (0, r.jsx)("div", {
                                className: l.headerBackground,
                                style: p,
                            }),
                            (0, r.jsx)("div", {
                                className: l.headerImage,
                                children:
                                    null != u
                                        ? (0, r.jsx)("img", {
                                              src: u.toString(),
                                              alt: "",
                                          })
                                        : (0, r.jsx)(_, {
                                              size: "custom",
                                              color: "var(--text-muted)",
                                              height: c,
                                              width: c,
                                          }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: l.content,
                        children: [
                            (0, r.jsxs)("div", {
                                className: l.details,
                                children: [
                                    null != f && (0, r.jsx)("div", { children: f }),
                                    (0, r.jsx)(i.X, {
                                        color: "header-primary",
                                        variant: "heading-xl/semibold",
                                        children: d,
                                    }),
                                    h &&
                                        (0, r.jsx)(a.x, {
                                            color: "text-default",
                                            variant: "text-md/normal",
                                            className: l.description,
                                            children: n,
                                        }),
                                ],
                            }),
                            null != t &&
                                (0, r.jsxs)("div", {
                                    className: l.benefits,
                                    children: [
                                        (0, r.jsx)(a.x, {
                                            color: "header-secondary",
                                            variant: "eyebrow",
                                            children: s.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                                        }),
                                        t,
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
