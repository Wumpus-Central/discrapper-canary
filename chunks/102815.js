n.d(t, { S: () => v });
var r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    i = n(735438),
    d = n(110259),
    u = n(732955),
    o = n(462887),
    c = n(397927),
    m = n(736653),
    h = n(139286),
    p = n(531260),
    x = n(914410),
    _ = n(954571),
    f = n(872725),
    g = n(857586),
    N = n(788868),
    R = n(652215),
    b = n(985018),
    E = n(355313);
let v = (e) => {
    let {
            id: t,
            title: n,
            description: l,
            caption: v,
            pillText: C,
            primaryAsset: T,
            primaryAssetClassName: j,
            backgroundAssetUrl: y,
            progress: I,
            ctaText: P,
            onCtaClick: S,
            subscriptionRequired: O,
            glowing: D,
            progressGlowing: w = !1,
            featured: L,
            className: U,
            blurTint: M,
        } = e,
        B = (0, m.DP)(),
        { fractionalState: k } = (0, p.A)();
    (0, h.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    });
    let G = a.useMemo(
            () =>
                (0, i.debounce)(() => {
                    _.default.track(R.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(n),
                    });
                }, 800),
            [n],
        ),
        W = a.useCallback(() => {
            null != S &&
                (S(),
                _.default.track(R.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(n),
                    function_name: (0, i.snakeCase)(S.name),
                }));
        }, [S, n]),
        H = O && k === N.xc.FP_ONLY,
        V = !(0, i.isEmpty)(y),
        Y = V && (0, o.q)(B),
        F = (0, c.rdh)(c.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        K = H || !(0, i.isEmpty)(P);
    return (0, r.jsx)(u.NPJ, {
        theme: Y ? R.NJ8.DARKER : void 0,
        children: (e) =>
            (0, r.jsxs)(f.A, {
                onMouseEnter: G,
                cardType: c.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: 5 * !!D,
                blurAmount: 6 * !!D,
                className: E.Ui,
                cardClassName: s()(E.Nr, e, U, { [E.j8]: L, [E.Tn]: V }),
                cardStyle: {
                    backgroundImage: V ? `url(${y})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, i.isEmpty)(C) &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: E.Io,
                            children: C,
                        }),
                    (0, r.jsxs)("div", {
                        className: E.qh,
                        children: [
                            L &&
                                (0, r.jsx)("div", {
                                    className: E.gW,
                                    "aria-hidden": "true",
                                    children: (0, r.jsx)(A, { asset: T, className: j }),
                                }),
                            (0, r.jsx)(A, { asset: T, className: j }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            (0, r.jsx)("div", {
                                className: E.u_,
                                style: { "--custom-tint-color": M ?? F },
                                "aria-hidden": !0,
                            }),
                            (0, r.jsxs)("div", {
                                className: E.P_,
                                tabIndex: 0,
                                children: [
                                    H &&
                                        (0, r.jsxs)("div", {
                                            className: E.d_,
                                            children: [
                                                (0, r.jsx)(c.tvc, { size: "sm", color: c.LU0.colors.ICON_MUTED }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: b.intl.string(b.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(v) &&
                                        (0, r.jsx)("div", {
                                            className: E.OU,
                                            children:
                                                "string" == typeof v
                                                    ? (0, r.jsx)(c.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: v,
                                                      })
                                                    : v,
                                        }),
                                    (0, r.jsx)(c.Heading, { variant: "heading-lg/semibold", children: n }),
                                    !(0, i.isEmpty)(l) &&
                                        (0, r.jsxs)("div", {
                                            className: E.Wi,
                                            children: [
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: E.h_,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: E.XV,
                                                    "aria-hidden": "true",
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                    null != I &&
                                        (0, r.jsx)("div", {
                                            className: E.oU,
                                            children: (0, r.jsx)(x.Ay, {
                                                variant: x.qP.BLUE,
                                                progress: (0, i.clamp)(I, 0, 1),
                                                maximum: 1,
                                                glowing: w,
                                            }),
                                        }),
                                    K && (0, r.jsx)("div", { className: E.Cj }),
                                ],
                            }),
                            K &&
                                (0, r.jsxs)("div", {
                                    className: E.yk,
                                    children: [
                                        H &&
                                            (0, r.jsx)(g.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: b.intl.string(b.t.sEAnVH),
                                            }),
                                        !H &&
                                            (0, r.jsx)(u.$nd, {
                                                text: P,
                                                variant: !V && (0, o.q)(B) ? "primary" : "overlay-primary",
                                                onClick: W,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function A(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, r.jsx)("img", { src: t, alt: "", className: s()(E.eq, n), draggable: "false" })
          : t;
}
