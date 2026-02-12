"use strict";
n.d(t, { S: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(732955),
    l = n(462887),
    u = n(397927),
    c = n(736653),
    d = n(613566),
    _ = n(872725),
    f = n(652215),
    h = n(355313);
let p = (e) => {
    let {
            title: t,
            description: n,
            caption: i,
            pillText: p,
            primaryAsset: g,
            backgroundAssetUrl: E,
            progress: A,
            ctaText: I,
            onCtaClick: T,
            glowing: y,
            progressGlowing: S = !1,
            featured: v,
            className: C,
        } = e,
        b = (0, c.DP)(),
        N = !(0, s.isEmpty)(E),
        R = N && (0, l.q)(b);
    return (0, r.jsx)(o.NPJ, {
        theme: R ? f.NJ8.DARKER : void 0,
        children: (e) =>
            (0, r.jsxs)(_.A, {
                cardType: u.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!y,
                blurAmount: 10 * !!y,
                cardClassName: a()(h.Nr, e, C, { [h.j8]: v }),
                cardStyle: {
                    backgroundImage: N ? `url(${E})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, s.isEmpty)(p) &&
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: h.Io,
                            children: p,
                        }),
                    (0, r.jsx)("div", {
                        className: h.qh,
                        children:
                            null != g &&
                            "" !== g &&
                            ("string" == typeof g ? (0, r.jsx)("img", { src: g, alt: "", className: h.eq }) : g),
                    }),
                    !(0, s.isEmpty)(i) &&
                        (0, r.jsx)("div", {
                            className: h.OU,
                            children:
                                "string" == typeof i
                                    ? (0, r.jsx)(u.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: i,
                                      })
                                    : i,
                        }),
                    (0, r.jsxs)("div", {
                        className: h.hQ,
                        children: [
                            (0, r.jsx)("div", { className: h.u_, "aria-hidden": "true" }),
                            (0, r.jsxs)("div", {
                                className: h.P_,
                                tabIndex: (0, s.isEmpty)(I) ? 0 : void 0,
                                children: [
                                    (0, r.jsx)(u.Heading, { variant: "heading-lg/semibold", children: t }),
                                    !(0, s.isEmpty)(n) &&
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: h.h_,
                                            children: n,
                                        }),
                                    null != A &&
                                        (0, r.jsx)("div", {
                                            className: h.oU,
                                            children: (0, r.jsx)(d.Ay, {
                                                variant: d.qP.BLUE,
                                                progress: (0, s.clamp)(A, 0, 1),
                                                maximum: 1,
                                                glowing: S,
                                            }),
                                        }),
                                    !(0, s.isEmpty)(I) &&
                                        (0, r.jsx)("div", {
                                            className: h.lI,
                                            children: (0, r.jsx)(o.$nd, {
                                                text: I,
                                                variant: !N && (0, l.q)(b) ? "primary" : "overlay-primary",
                                                onClick: T,
                                            }),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
};
