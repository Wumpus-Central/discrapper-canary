n.d(t, { u: () => c }), n(953529);
var r = n(951288);
n(647438);
var i = n(409794),
    o = n(777207),
    a = n(330711),
    s = n(163315);
let l = 96;
function c(e) {
    let { benefits: t, description: n, imgSrc: c, title: u, tag: d, FallbackIcon: f } = e,
        _ = null != c ? { "--custom-background-url": "url(".concat(c.toString(), ")") } : void 0,
        p = null != n && "" !== n;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsxs)("div", {
                className: s.header,
                children: [
                    (0, r.jsx)("div", {
                        className: s.headerBackground,
                        style: _,
                    }),
                    (0, r.jsx)("div", {
                        className: s.headerImage,
                        children:
                            null != c
                                ? (0, r.jsx)("img", {
                                      src: c.toString(),
                                      alt: "",
                                  })
                                : (0, r.jsx)(f, {
                                      size: "custom",
                                      color: "var(--text-muted)",
                                      height: l,
                                      width: l,
                                  }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: s.details,
                        children: [
                            null != d && (0, r.jsx)("div", { children: d }),
                            (0, r.jsx)(i.X, {
                                color: "header-primary",
                                variant: "heading-xl/semibold",
                                children: u,
                            }),
                            p &&
                                (0, r.jsx)(o.x, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: s.description,
                                    children: n,
                                }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)("div", {
                            className: s.benefits,
                            children: [
                                (0, r.jsx)(o.x, {
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
