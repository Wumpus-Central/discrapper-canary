r.d(t, { S: () => f });
var n = r(627968),
    a = r(64700),
    l = r(310784),
    s = r.n(l),
    i = r(503698),
    d = r.n(i),
    u = r(735438),
    o = r(732955),
    c = r(462887),
    m = r(397927),
    p = r(736653),
    h = r(613566),
    g = r(872725),
    x = r(652215),
    b = r(340091);
let f = (e) => {
    let {
            title: t,
            description: r,
            caption: l,
            pillText: i,
            primaryAsset: f,
            primaryAssetClassName: _,
            backgroundAssetUrl: R,
            progress: v,
            ctaText: N,
            onCtaClick: A,
            glowing: E,
            progressGlowing: C = !1,
            featured: I,
            className: T,
            blurTint: y,
        } = e,
        j = (0, p.DP)(),
        P = !(0, u.isEmpty)(R),
        S = P && (0, c.q)(j),
        O = a.useMemo(() => {
            if (null != y && "" !== y)
                try {
                    let e = s()(y);
                    return 1 === e.alpha() ? e.alpha(0.25).css() : e.css();
                } catch {
                    return;
                }
        }, [y]);
    return (0, n.jsx)(o.NPJ, {
        theme: S ? x.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(g.A, {
                cardType: m.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!E,
                blurAmount: 6 * !!E,
                cardClassName: d()(b.Nr, e, T, { [b.j8]: I }),
                cardStyle: {
                    backgroundImage: P ? `url(${R})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, u.isEmpty)(i) &&
                        (0, n.jsx)(m.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: b.Io,
                            children: i,
                        }),
                    (0, n.jsx)("div", {
                        className: b.qh,
                        children:
                            null != f &&
                            "" !== f &&
                            ("string" == typeof f
                                ? (0, n.jsx)("img", { src: f, alt: "", className: d()(b.eq, _) })
                                : f),
                    }),
                    (0, n.jsxs)("div", {
                        className: b.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: b.u_,
                                style: { backgroundColor: O },
                                "aria-hidden": "true",
                            }),
                            (0, n.jsxs)("div", {
                                className: b.P_,
                                tabIndex: (0, u.isEmpty)(N) ? 0 : void 0,
                                children: [
                                    !(0, u.isEmpty)(l) &&
                                        (0, n.jsx)("div", {
                                            className: b.OU,
                                            children:
                                                "string" == typeof l
                                                    ? (0, n.jsx)(m.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: l,
                                                      })
                                                    : l,
                                        }),
                                    (0, n.jsx)(m.Heading, { variant: "heading-lg/semibold", children: t }),
                                    !(0, u.isEmpty)(r) &&
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: b.h_,
                                            children: r,
                                        }),
                                    null != v &&
                                        (0, n.jsx)("div", {
                                            className: b.oU,
                                            children: (0, n.jsx)(h.Ay, {
                                                variant: h.qP.BLUE,
                                                progress: (0, u.clamp)(v, 0, 1),
                                                maximum: 1,
                                                glowing: C,
                                            }),
                                        }),
                                    !(0, u.isEmpty)(N) &&
                                        (0, n.jsx)("div", {
                                            className: b.lI,
                                            children: (0, n.jsx)(o.$nd, {
                                                text: N,
                                                variant: !P && (0, c.q)(j) ? "primary" : "overlay-primary",
                                                onClick: A,
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
