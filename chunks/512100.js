n.d(t, { u: () => l }), n(953529);
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(330711),
    o = n(163315);
let s = 96;
function l(e) {
    let { benefits: t, description: n, imgSrc: l, title: c, tag: u, FallbackIcon: d } = e,
        f = null != l ? { "--custom-background-url": "url(".concat(l.toString(), ")") } : void 0,
        _ = null != n && "" !== n;
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsxs)("div", {
                className: o.header,
                children: [
                    (0, r.jsx)("div", {
                        className: o.headerBackground,
                        style: f,
                    }),
                    (0, r.jsx)("div", {
                        className: o.headerImage,
                        children:
                            null != l
                                ? (0, r.jsx)("img", {
                                      src: l.toString(),
                                      alt: "",
                                  })
                                : (0, r.jsx)(d, {
                                      size: "custom",
                                      color: "var(--text-muted)",
                                      height: s,
                                      width: s,
                                  }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: o.details,
                        children: [
                            null != u && (0, r.jsx)("div", { children: u }),
                            (0, r.jsx)(i.X6q, {
                                color: "header-primary",
                                variant: "heading-xl/semibold",
                                children: c,
                            }),
                            _ &&
                                (0, r.jsx)(i.xvT, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: o.description,
                                    children: n,
                                }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)("div", {
                            className: o.benefits,
                            children: [
                                (0, r.jsx)(i.xvT, {
                                    color: "header-secondary",
                                    variant: "eyebrow",
                                    children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                                }),
                                t,
                            ],
                        }),
                ],
            }),
        ],
    });
}
