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
            backgroundAssetUrl: I,
            progress: T,
            ctaText: y,
            onCtaClick: S,
            glowing: v,
            progressGlowing: C = !1,
            featured: b,
            className: N,
            blurTint: R,
        } = e,
        O = (0, f.DP)(),
        D = !(0, u.isEmpty)(I),
        L = D && (0, d.q)(O),
        w = i.useMemo(() => {
            if (null != R && "" !== R)
                try {
                    let e = s()(R);
                    return 1 === e.alpha() ? e.alpha(0.25).css() : e.css();
                } catch {
                    return;
                }
        }, [R]);
    return (0, r.jsx)(c.NPJ, {
        theme: L ? g.NJ8.DARKER : void 0,
        children: (e) =>
            (0, r.jsxs)(p.A, {
                cardType: _.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!v,
                blurAmount: 10 * !!v,
                cardClassName: l()(E.Nr, e, N, { [E.j8]: b }),
                cardStyle: {
                    backgroundImage: D ? `url(${I})` : void 0,
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
                            ("string" == typeof A ? (0, r.jsx)("img", { src: A, alt: "", className: E.eq }) : A),
                    }),
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
                    (0, r.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            (0, r.jsx)("div", {
                                className: E.u_,
                                style: { backgroundColor: w },
                                "aria-hidden": "true",
                            }),
                            (0, r.jsxs)("div", {
                                className: E.P_,
                                tabIndex: (0, u.isEmpty)(y) ? 0 : void 0,
                                children: [
                                    (0, r.jsx)(_.Heading, { variant: "heading-lg/semibold", children: t }),
                                    !(0, u.isEmpty)(n) &&
                                        (0, r.jsx)(_.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: E.h_,
                                            children: n,
                                        }),
                                    null != T &&
                                        (0, r.jsx)("div", {
                                            className: E.oU,
                                            children: (0, r.jsx)(h.Ay, {
                                                variant: h.qP.BLUE,
                                                progress: (0, u.clamp)(T, 0, 1),
                                                maximum: 1,
                                                glowing: C,
                                            }),
                                        }),
                                    !(0, u.isEmpty)(y) &&
                                        (0, r.jsx)("div", {
                                            className: E.lI,
                                            children: (0, r.jsx)(c.$nd, {
                                                text: y,
                                                variant: !D && (0, d.q)(O) ? "primary" : "overlay-primary",
                                                onClick: S,
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
