r.d(t, { S: () => N });
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
    h = r(736653),
    p = r(531260),
    x = r(613566),
    g = r(872725),
    f = r(857586),
    _ = r(788868),
    b = r(652215),
    v = r(985018),
    R = r(340091);
let N = (e) => {
    let {
            title: t,
            description: r,
            caption: l,
            pillText: i,
            primaryAsset: N,
            primaryAssetClassName: A,
            backgroundAssetUrl: E,
            progress: C,
            ctaText: I,
            onCtaClick: T,
            subscriptionRequired: j,
            glowing: y,
            progressGlowing: P = !1,
            featured: S,
            className: O,
            blurTint: L,
        } = e,
        w = (0, h.DP)(),
        { fractionalState: U } = (0, p.A)(),
        D = j && U === _.xc.FP_ONLY,
        B = !(0, u.isEmpty)(E),
        M = B && (0, c.q)(w),
        k = a.useMemo(() => {
            if (null != L && "" !== L)
                try {
                    let e = s()(L);
                    return 1 === e.alpha() ? e.alpha(0.25).css() : e.css();
                } catch {
                    return;
                }
        }, [L]);
    return (0, n.jsx)(o.NPJ, {
        theme: M ? b.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(g.A, {
                cardType: m.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!y,
                blurAmount: 6 * !!y,
                cardClassName: d()(R.Nr, e, O, { [R.j8]: S }),
                cardStyle: {
                    backgroundImage: B ? `url(${E})` : void 0,
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
                            className: R.Io,
                            children: i,
                        }),
                    (0, n.jsx)("div", {
                        className: R.qh,
                        children:
                            null != N &&
                            "" !== N &&
                            ("string" == typeof N
                                ? (0, n.jsx)("img", { src: N, alt: "", className: d()(R.eq, A) })
                                : N),
                    }),
                    (0, n.jsxs)("div", {
                        className: R.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: R.u_,
                                style: { backgroundColor: k },
                                "aria-hidden": "true",
                            }),
                            (0, n.jsxs)("div", {
                                className: R.P_,
                                tabIndex: (0, u.isEmpty)(I) ? 0 : void 0,
                                children: [
                                    D &&
                                        (0, n.jsxs)("div", {
                                            className: R.d_,
                                            children: [
                                                (0, n.jsx)(m.tvc, { size: "sm", color: "text-muted" }),
                                                (0, n.jsx)(m.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: v.intl.string(v.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, u.isEmpty)(l) &&
                                        (0, n.jsx)("div", {
                                            className: R.OU,
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
                                            className: R.h_,
                                            children: r,
                                        }),
                                    null != C &&
                                        (0, n.jsx)("div", {
                                            className: R.oU,
                                            children: (0, n.jsx)(x.Ay, {
                                                variant: x.qP.BLUE,
                                                progress: (0, u.clamp)(C, 0, 1),
                                                maximum: 1,
                                                glowing: P,
                                            }),
                                        }),
                                    D &&
                                        (0, n.jsx)("div", {
                                            className: R.lI,
                                            children: (0, n.jsx)(f.A, {
                                                defaultTextOverride: v.intl.string(v.t.sEAnVH),
                                            }),
                                        }),
                                    !D &&
                                        !(0, u.isEmpty)(I) &&
                                        (0, n.jsx)("div", {
                                            className: R.lI,
                                            children: (0, n.jsx)(o.$nd, {
                                                text: I,
                                                variant: !B && (0, c.q)(w) ? "primary" : "overlay-primary",
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
