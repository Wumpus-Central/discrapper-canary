"use strict";
n.d(t, { S: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(732955),
    l = n(397927),
    u = n(613566),
    c = n(872725),
    d = n(340091);
let _ = (e) => {
    let {
        title: t,
        description: n,
        caption: i,
        pillText: _,
        primaryAsset: f,
        backgroundAssetUrl: p,
        progress: h,
        ctaText: m,
        onCtaClick: g,
        glowing: E,
        progressGlowing: A = !1,
        className: I,
    } = e;
    return (0, r.jsx)(c.A, {
        cardType: l.sl2.PRIMARY,
        hueRotate: 25,
        glowAmount: 5 * !!E,
        blurAmount: 10 * !!E,
        cardClassName: a()(d.Nr, I),
        cardStyle: {
            backgroundImage: (0, s.isEmpty)(p) ? void 0 : `url(${p})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundOrigin: "border-box",
        },
        children: (0, r.jsxs)("div", {
            className: d.Qs,
            children: [
                !(0, s.isEmpty)(_) &&
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/bold",
                        color: "badge-expressive-text-default",
                        className: d.Io,
                        children: _,
                    }),
                (0, r.jsx)("div", {
                    className: d.qh,
                    children:
                        !(0, s.isEmpty)(f) &&
                        ("string" == typeof f ? (0, r.jsx)("img", { src: f, alt: "", className: d.eq }) : f),
                }),
                !(0, s.isEmpty)(i) &&
                    (0, r.jsx)("div", {
                        className: d.OU,
                        children:
                            "string" == typeof i
                                ? (0, r.jsx)(l.Text, { variant: "text-sm/normal", color: "text-muted", children: i })
                                : i,
                    }),
                (0, r.jsxs)("div", {
                    className: d.P_,
                    children: [
                        (0, r.jsx)(l.Heading, { variant: "heading-lg/semibold", children: t }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: d.h_,
                            children: n,
                        }),
                        null != h &&
                            (0, r.jsx)("div", {
                                className: d.oU,
                                children: (0, r.jsx)(u.Ay, {
                                    variant: u.qP.BLUE,
                                    progress: (0, s.clamp)(h, 0, 1),
                                    maximum: 1,
                                    glowing: A,
                                }),
                            }),
                        !(0, s.isEmpty)(m) &&
                            (0, r.jsx)("div", {
                                className: d.lI,
                                children: (0, r.jsx)(o.$nd, { text: m, variant: "overlay-primary", onClick: g }),
                            }),
                    ],
                }),
            ],
        }),
    });
};
