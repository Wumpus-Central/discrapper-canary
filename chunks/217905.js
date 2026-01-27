n.d(t, {
    F: () => s,
}),
    n(228524);
var r = n(627968);
n(64700);
var l = n(855522),
    a = n(158954),
    i = n(183377);

function s(e) {
    let { benefits: t, description: n, imgSrc: s, title: o, tag: c, FallbackIcon: u } = e,
        d =
            null != s
                ? {
                      "--custom-background-url": "url(".concat(s.toString(), ")"),
                  }
                : void 0;
    return (0, r.jsxs)("div", {
        className: i.kL,
        children: [
            (0, r.jsxs)("div", {
                className: i.wx,
                children: [
                    (0, r.jsx)("div", {
                        className: i.y2,
                        style: d,
                    }),
                    (0, r.jsx)("div", {
                        className: i.F0,
                        children:
                            null != s
                                ? (0, r.jsx)("img", {
                                      src: s.toString(),
                                      alt: "",
                                  })
                                : (0, r.jsx)(u, {
                                      size: "custom",
                                      color: "var(--text-muted)",
                                      height: 96,
                                      width: 96,
                                  }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: i.zH,
                        children: [
                            null != c &&
                                (0, r.jsx)("div", {
                                    children: c,
                                }),
                            (0, r.jsx)(a.DZT, {
                                color: "text-strong",
                                variant: "heading-xl/semibold",
                                children: o,
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)(a.EYj, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: i.h_,
                                    children: n,
                                }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)("div", {
                            className: i.PX,
                            children: [
                                (0, r.jsx)(a.EYj, {
                                    color: "text-default",
                                    variant: "eyebrow",
                                    children: l.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                }),
                                t,
                            ],
                        }),
                ],
            }),
        ],
    });
}
