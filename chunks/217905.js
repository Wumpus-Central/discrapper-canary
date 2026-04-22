n.d(t, { F: () => o });
var a = n(627968);
n(64700);
var l = n(855522),
    r = n(534514),
    i = n(834730),
    s = n(963925);
function o(e) {
    let { benefits: t, description: n, imgSrc: o, title: d, tag: c, FallbackIcon: u } = e,
        m = null != o ? { "--custom-background-url": `url(${o.toString()})` } : void 0;
    return (0, a.jsxs)("div", {
        className: s.kL,
        children: [
            (0, a.jsxs)("div", {
                className: s.wx,
                children: [
                    (0, a.jsx)("div", { className: s.y2, style: m }),
                    (0, a.jsx)("div", {
                        className: s.F0,
                        children:
                            null != o
                                ? (0, a.jsx)("img", { src: o.toString(), alt: "" })
                                : (0, a.jsx)(u, { size: "custom", color: "var(--text-muted)", height: 96, width: 96 }),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: s.Qs,
                children: [
                    (0, a.jsxs)("div", {
                        className: s.zH,
                        children: [
                            null != c && (0, a.jsx)("div", { children: c }),
                            (0, a.jsx)(r.D, { color: "text-strong", variant: "heading-xl/semibold", children: d }),
                            null != n &&
                                "" !== n &&
                                (0, a.jsx)(i.E, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: s.h_,
                                    children: n,
                                }),
                        ],
                    }),
                    null != t &&
                        (0, a.jsxs)("div", {
                            className: s.PX,
                            children: [
                                (0, a.jsx)(i.E, {
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
