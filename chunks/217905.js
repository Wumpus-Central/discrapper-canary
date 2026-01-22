n.d(t, { F: () => l }), n(228524);
var r = n(627968);
n(64700);
var i = n(855522),
    a = n(158954),
    s = n(183377);
let o = 96;
function l(e) {
    let { benefits: t, description: n, imgSrc: l, title: c, tag: u, FallbackIcon: d } = e,
        f = null != l ? { "--custom-background-url": "url(".concat(l.toString(), ")") } : void 0,
        p = null != n && "" !== n;
    return (0, r.jsxs)("div", {
        className: s.kL,
        children: [
            (0, r.jsxs)("div", {
                className: s.wx,
                children: [
                    (0, r.jsx)("div", {
                        className: s.y2,
                        style: f,
                    }),
                    (0, r.jsx)("div", {
                        className: s.F0,
                        children:
                            null != l
                                ? (0, r.jsx)("img", {
                                      src: l.toString(),
                                      alt: "",
                                  })
                                : (0, r.jsx)(d, {
                                      size: "custom",
                                      color: "var(--text-muted)",
                                      height: o,
                                      width: o,
                                  }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: s.zH,
                        children: [
                            null != u && (0, r.jsx)("div", { children: u }),
                            (0, r.jsx)(a.DZT, {
                                color: "text-strong",
                                variant: "heading-xl/semibold",
                                children: c,
                            }),
                            p &&
                                (0, r.jsx)(a.EYj, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: s.h_,
                                    children: n,
                                }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)("div", {
                            className: s.PX,
                            children: [
                                (0, r.jsx)(a.EYj, {
                                    color: "text-default",
                                    variant: "eyebrow",
                                    children: i.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                }),
                                t,
                            ],
                        }),
                ],
            }),
        ],
    });
}
