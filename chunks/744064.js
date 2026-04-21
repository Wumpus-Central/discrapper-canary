n.d(t, { S: () => v });
var s = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    i = n(735438),
    d = n(110259),
    o = n(732955),
    c = n(462887),
    u = n(397927),
    m = n(736653),
    h = n(139286),
    x = n(531260),
    C = n(914410),
    _ = n(954571),
    p = n(872725),
    g = n(465794),
    f = n(788868),
    R = n(652215),
    b = n(985018),
    j = n(555599);
let v = (e) => {
    let {
            id: t,
            title: n,
            description: r,
            caption: v,
            pillText: E,
            primaryAsset: A,
            primaryAssetClassName: D,
            backgroundAssetUrl: I,
            progress: P,
            ctaIcon: y,
            ctaIconPosition: T,
            ctaText: w,
            onCtaClick: O,
            subscriptionRequired: S,
            glowing: M = !1,
            progressGlowing: L = !1,
            featured: U,
            className: k,
            containerClassName: B,
            tabIndex: F = 0,
            blurTint: G,
            footerContent: W,
            backgroundElement: H,
        } = e,
        V = (0, m.DP)(),
        { fractionalState: Y } = (0, x.A)();
    (0, h.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    });
    let Z = a.useMemo(
            () =>
                (0, i.debounce)(() => {
                    _.default.track(R.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(n),
                    });
                }, 800),
            [n],
        ),
        K = a.useCallback(() => {
            null != O &&
                (O(),
                _.default.track(R.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(n),
                    function_name: (0, i.snakeCase)(O.name),
                }));
        }, [O, n]),
        z = S && Y === f.xc.FP_ONLY,
        $ = !(0, i.isEmpty)(I) || null != H,
        X = $ && (0, c.q)(V),
        q = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        J = z || !(0, i.isEmpty)(w);
    return (0, s.jsx)(o.NPJ, {
        theme: X ? R.NJ8.DARKER : void 0,
        children: (e) =>
            (0, s.jsxs)(p.A, {
                id: t,
                tabIndex: F,
                onMouseEnter: Z,
                cardType: u.sl2.PRIMARY,
                glowing: M,
                hueRotate: 25,
                glowAmount: (0, c.M)(V) ? 2 : 8,
                blurAmount: 10,
                className: l()(j.Ui, B, { [j.Tn]: $ }),
                cardClassName: l()(j.Nr, e, k, { [j.j8]: U }),
                cardStyle: {
                    backgroundImage: null != I ? `url(${I})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    null != H && (0, s.jsx)("div", { className: j.d$, "aria-hidden": "true", children: H }),
                    !(0, i.isEmpty)(E) &&
                        (0, s.jsx)(u.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: j.Io,
                            children: E,
                        }),
                    (0, s.jsxs)("div", {
                        className: j.qh,
                        children: [
                            U &&
                                (0, s.jsx)("div", {
                                    className: j.gW,
                                    "aria-hidden": "true",
                                    children: (0, s.jsx)(N, { asset: A, className: D }),
                                }),
                            (0, s.jsx)(N, { asset: A, className: D }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: j.hQ,
                        children: [
                            (0, s.jsx)("div", {
                                className: j.u_,
                                style: { "--custom-tint-color": G ?? q },
                                "aria-hidden": !0,
                            }),
                            (0, s.jsxs)("div", {
                                className: j.P_,
                                children: [
                                    z &&
                                        (0, s.jsxs)("div", {
                                            className: j.d_,
                                            children: [
                                                (0, s.jsx)(u.tvc, { size: "sm", color: u.LU0.colors.ICON_MUTED }),
                                                (0, s.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: b.intl.string(b.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(v) &&
                                        (0, s.jsx)("div", {
                                            className: j.OU,
                                            children:
                                                "string" == typeof v
                                                    ? (0, s.jsx)(u.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: v,
                                                      })
                                                    : v,
                                        }),
                                    (0, s.jsx)(u.Heading, { variant: "heading-lg/semibold", children: n }),
                                    !(0, i.isEmpty)(r) &&
                                        (0, s.jsxs)("div", {
                                            className: j.Wi,
                                            children: [
                                                (0, s.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: j.h_,
                                                    children: r,
                                                }),
                                                (0, s.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: j.XV,
                                                    inert: !0,
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    null != P &&
                                        (0, s.jsx)("div", {
                                            className: j.oU,
                                            children: (0, s.jsx)(C.Ay, {
                                                variant: C.qP.BLUE,
                                                progress: (0, i.clamp)(P, 0, 1),
                                                maximum: 1,
                                                glowing: L,
                                            }),
                                        }),
                                    null != W && (0, s.jsx)("div", { className: j.Gv, children: W }),
                                    J && (0, s.jsx)("div", { className: j.Cj }),
                                ],
                            }),
                            J &&
                                (0, s.jsxs)("div", {
                                    className: j.yk,
                                    children: [
                                        z &&
                                            (0, s.jsx)(g.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: b.intl.string(b.t.sEAnVH),
                                            }),
                                        !z &&
                                            (0, s.jsx)(o.$nd, {
                                                icon: y,
                                                iconPosition: T,
                                                text: w,
                                                variant: !$ && (0, c.q)(V) ? "primary" : "overlay-primary",
                                                onClick: K,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function N(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, s.jsx)("img", { src: t, alt: "", className: l()(j.eq, n), draggable: "false" })
          : t;
}
