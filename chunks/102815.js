"use strict";
n.d(t, { S: () => A });
var r = n(627968),
    i = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(503698),
    l = n.n(o),
    u = n(735438),
    c = n(732955),
    d = n(462887),
    _ = n(397927),
    f = n(736653),
    h = n(613566),
    p = n(872725),
    g = n(652215),
    E = n(340091);
let A = (e) => {
    let {
            title: t,
            description: n,
            caption: a,
            pillText: o,
            primaryAsset: A,
            primaryAssetClassName: I,
            backgroundAssetUrl: T,
            progress: y,
            ctaText: S,
            onCtaClick: v,
            glowing: C,
            progressGlowing: b = !1,
            featured: N,
            className: R,
            blurTint: O,
        } = e,
        D = (0, f.DP)(),
        L = !(0, u.isEmpty)(T),
        w = L && (0, d.q)(D),
        x = i.useMemo(() => {
            if (null != O && "" !== O)
                try {
                    let e = s()(O);
                    return 1 === e.alpha() ? e.alpha(0.25).css() : e.css();
                } catch {
                    return;
                }
        }, [O]);
    return (0, r.jsx)(c.NPJ, {
        theme: w ? g.NJ8.DARKER : void 0,
        children: (e) =>
            (0, r.jsxs)(p.A, {
                cardType: _.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!C,
                blurAmount: 10 * !!C,
                cardClassName: l()(E.Nr, e, R, { [E.j8]: N }),
                cardStyle: {
                    backgroundImage: L ? `url(${T})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, u.isEmpty)(o) &&
                        (0, r.jsx)(_.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: E.Io,
                            children: o,
                        }),
                    (0, r.jsx)("div", {
                        className: E.qh,
                        children:
                            null != A &&
                            "" !== A &&
                            ("string" == typeof A
                                ? (0, r.jsx)("img", { src: A, alt: "", className: l()(E.eq, I) })
                                : A),
                    }),
                    (0, r.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            (0, r.jsx)("div", {
                                className: E.u_,
                                style: { backgroundColor: x },
                                "aria-hidden": "true",
                            }),
                            (0, r.jsxs)("div", {
                                className: E.P_,
                                tabIndex: (0, u.isEmpty)(S) ? 0 : void 0,
                                children: [
                                    !(0, u.isEmpty)(a) &&
                                        (0, r.jsx)("div", {
                                            className: E.OU,
                                            children:
                                                "string" == typeof a
                                                    ? (0, r.jsx)(_.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: a,
                                                      })
                                                    : a,
                                        }),
                                    (0, r.jsx)(_.Heading, { variant: "heading-lg/semibold", children: t }),
                                    !(0, u.isEmpty)(n) &&
                                        (0, r.jsx)(_.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: E.h_,
                                            children: n,
                                        }),
                                    null != y &&
                                        (0, r.jsx)("div", {
                                            className: E.oU,
                                            children: (0, r.jsx)(h.Ay, {
                                                variant: h.qP.BLUE,
                                                progress: (0, u.clamp)(y, 0, 1),
                                                maximum: 1,
                                                glowing: b,
                                            }),
                                        }),
                                    !(0, u.isEmpty)(S) &&
                                        (0, r.jsx)("div", {
                                            className: E.lI,
                                            children: (0, r.jsx)(c.$nd, {
                                                text: S,
                                                variant: !L && (0, d.q)(D) ? "primary" : "overlay-primary",
                                                onClick: v,
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
