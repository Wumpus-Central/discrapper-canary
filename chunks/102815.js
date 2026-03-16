a.d(t, { S: () => C });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(735438),
    d = a(110259),
    o = a(732955),
    c = a(462887),
    u = a(397927),
    m = a(736653),
    p = a(139286),
    f = a(531260),
    b = a(914410),
    A = a(954571),
    _ = a(872725),
    h = a(857586),
    g = a(788868),
    R = a(652215),
    x = a(985018),
    E = a(340091);
let C = (e) => {
    let {
            id: t,
            title: a,
            description: s,
            caption: C,
            pillText: v,
            primaryAsset: I,
            primaryAssetClassName: S,
            backgroundAssetUrl: T,
            progress: P,
            ctaIcon: y,
            ctaIconPosition: D,
            ctaText: O,
            onCtaClick: j,
            subscriptionRequired: U,
            glowing: M = !1,
            progressGlowing: L = !1,
            featured: w,
            className: B,
            containerClassName: k,
            tabIndex: G = 0,
            blurTint: V,
        } = e,
        Y = (0, m.DP)(),
        { fractionalState: W } = (0, f.A)();
    (0, p.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    });
    let H = r.useMemo(
            () =>
                (0, i.debounce)(() => {
                    A.default.track(R.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(a),
                    });
                }, 800),
            [a],
        ),
        F = r.useCallback(() => {
            null != j &&
                (j(),
                A.default.track(R.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(a),
                    function_name: (0, i.snakeCase)(j.name),
                }));
        }, [j, a]),
        K = U && W === g.xc.FP_ONLY,
        X = !(0, i.isEmpty)(T),
        $ = X && (0, c.q)(Y),
        z = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        J = K || !(0, i.isEmpty)(O);
    return (0, n.jsx)(o.NPJ, {
        theme: $ ? R.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(_.A, {
                id: t,
                tabIndex: G,
                onMouseEnter: H,
                cardType: u.sl2.PRIMARY,
                glowing: M,
                hueRotate: 25,
                glowAmount: (0, c.M)(Y) ? 2 : 8,
                blurAmount: 10,
                className: l()(E.Ui, k, { [E.Tn]: X }),
                cardClassName: l()(E.Nr, e, B, { [E.j8]: w }),
                cardStyle: {
                    backgroundImage: X ? `url(${T})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, i.isEmpty)(v) &&
                        (0, n.jsx)(u.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: E.Io,
                            children: v,
                        }),
                    (0, n.jsxs)("div", {
                        className: E.qh,
                        children: [
                            w &&
                                (0, n.jsx)("div", {
                                    className: E.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(N, { asset: I, className: S }),
                                }),
                            (0, n.jsx)(N, { asset: I, className: S }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: E.u_,
                                style: { "--custom-tint-color": V ?? z },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: E.P_,
                                children: [
                                    K &&
                                        (0, n.jsxs)("div", {
                                            className: E.d_,
                                            children: [
                                                (0, n.jsx)(u.tvc, { size: "sm", color: u.LU0.colors.ICON_MUTED }),
                                                (0, n.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: x.intl.string(x.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(C) &&
                                        (0, n.jsx)("div", {
                                            className: E.OU,
                                            children:
                                                "string" == typeof C
                                                    ? (0, n.jsx)(u.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: C,
                                                      })
                                                    : C,
                                        }),
                                    (0, n.jsx)(u.Heading, { variant: "heading-lg/semibold", children: a }),
                                    !(0, i.isEmpty)(s) &&
                                        (0, n.jsxs)("div", {
                                            className: E.Wi,
                                            children: [
                                                (0, n.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: E.h_,
                                                    children: s,
                                                }),
                                                (0, n.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: E.XV,
                                                    inert: !0,
                                                    children: s,
                                                }),
                                            ],
                                        }),
                                    null != P &&
                                        (0, n.jsx)("div", {
                                            className: E.oU,
                                            children: (0, n.jsx)(b.Ay, {
                                                variant: b.qP.BLUE,
                                                progress: (0, i.clamp)(P, 0, 1),
                                                maximum: 1,
                                                glowing: L,
                                            }),
                                        }),
                                    J && (0, n.jsx)("div", { className: E.Cj }),
                                ],
                            }),
                            J &&
                                (0, n.jsxs)("div", {
                                    className: E.yk,
                                    children: [
                                        K &&
                                            (0, n.jsx)(h.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: x.intl.string(x.t.sEAnVH),
                                            }),
                                        !K &&
                                            (0, n.jsx)(o.$nd, {
                                                icon: y,
                                                iconPosition: D,
                                                text: O,
                                                variant: !X && (0, c.q)(Y) ? "primary" : "overlay-primary",
                                                onClick: F,
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
    let { asset: t, className: a } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: l()(E.eq, a), draggable: "false" })
          : t;
}
