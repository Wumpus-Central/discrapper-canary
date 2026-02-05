n.d(t, { F: () => i });
var l = n(627968);
n(64700);
var a = n(855522),
    r = n(158954),
    s = n(183377);
function i(e) {
    let { benefits: t, description: n, imgSrc: i, title: o, tag: d, FallbackIcon: c } = e,
        u = null != i ? { "--custom-background-url": `url(${i.toString()})` } : void 0;
    return (0, l.jsxs)("div", {
        className: s.kL,
        children: [
            (0, l.jsxs)("div", {
                className: s.wx,
                children: [
                    (0, l.jsx)("div", { className: s.y2, style: u }),
                    (0, l.jsx)("div", {
                        className: s.F0,
                        children:
                            null != i
                                ? (0, l.jsx)("img", { src: i.toString(), alt: "" })
                                : (0, l.jsx)(c, { size: "custom", color: "var(--text-muted)", height: 96, width: 96 }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: s.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: s.zH,
                        children: [
                            null != d && (0, l.jsx)("div", { children: d }),
                            (0, l.jsx)(r.DZT, { color: "text-strong", variant: "heading-xl/semibold", children: o }),
                            null != n &&
                                "" !== n &&
                                (0, l.jsx)(r.EYj, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: s.h_,
                                    children: n,
                                }),
                        ],
                    }),
                    null != t &&
                        (0, l.jsxs)("div", {
                            className: s.PX,
                            children: [
                                (0, l.jsx)(r.EYj, {
                                    color: "text-default",
                                    variant: "eyebrow",
                                    children: a.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                }),
                                t,
                            ],
                        }),
                ],
            }),
        ],
    });
}
