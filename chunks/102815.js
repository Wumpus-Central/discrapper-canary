r.d(t, { S: () => g });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(735438),
    d = r(110259),
    u = r(732955),
    o = r(462887),
    c = r(397927),
    m = r(736653),
    _ = r(139286),
    R = r(531260),
    p = r(914410),
    h = r(954571),
    A = r(872725),
    E = r(857586),
    x = r(788868),
    N = r(652215),
    C = r(985018),
    f = r(355313);
let g = (e) => {
    let {
            id: t,
            title: r,
            description: l,
            caption: g,
            pillText: D,
            primaryAsset: I,
            primaryAssetClassName: v,
            backgroundAssetUrl: S,
            progress: T,
            ctaText: P,
            onCtaClick: O,
            subscriptionRequired: j,
            glowing: y,
            progressGlowing: L = !1,
            featured: U,
            className: w,
            blurTint: M,
        } = e,
        B = (0, m.DP)(),
        { fractionalState: k } = (0, R.A)();
    (0, _.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t },
    });
    let G = a.useMemo(
            () =>
                (0, i.debounce)(() => {
                    h.default.track(N.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(r),
                    });
                }, 800),
            [r],
        ),
        W = a.useCallback(() => {
            null != O &&
                (O(),
                h.default.track(N.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(r),
                    function_name: (0, i.snakeCase)(O.name),
                }));
        }, [O, r]),
        V = j && k === x.xc.FP_ONLY,
        H = !(0, i.isEmpty)(S),
        Y = H && (0, o.q)(B),
        F = (0, c.rdh)(c.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        K = V || !(0, i.isEmpty)(P);
    return (0, n.jsx)(u.NPJ, {
        theme: Y ? N.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(A.A, {
                onMouseEnter: G,
                cardType: c.sl2.PRIMARY,
                hueRotate: 25,
                glowAmount: y ? ((0, o.M)(B) ? 2 : 8) : 0,
                blurAmount: 10 * !!y,
                className: f.Ui,
                cardClassName: s()(f.Nr, e, w, { [f.j8]: U, [f.Tn]: H }),
                cardStyle: {
                    backgroundImage: H ? `url(${S})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, i.isEmpty)(D) &&
                        (0, n.jsx)(c.Text, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: f.Io,
                            children: D,
                        }),
                    (0, n.jsxs)("div", {
                        className: f.qh,
                        children: [
                            U &&
                                (0, n.jsx)("div", {
                                    className: f.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(b, { asset: I, className: v }),
                                }),
                            (0, n.jsx)(b, { asset: I, className: v }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: f.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: f.u_,
                                style: { "--custom-tint-color": M ?? F },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: f.P_,
                                tabIndex: 0,
                                children: [
                                    V &&
                                        (0, n.jsxs)("div", {
                                            className: f.d_,
                                            children: [
                                                (0, n.jsx)(c.tvc, { size: "sm", color: c.LU0.colors.ICON_MUTED }),
                                                (0, n.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: C.intl.string(C.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(g) &&
                                        (0, n.jsx)("div", {
                                            className: f.OU,
                                            children:
                                                "string" == typeof g
                                                    ? (0, n.jsx)(c.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: g,
                                                      })
                                                    : g,
                                        }),
                                    (0, n.jsx)(c.Heading, { variant: "heading-lg/semibold", children: r }),
                                    !(0, i.isEmpty)(l) &&
                                        (0, n.jsxs)("div", {
                                            className: f.Wi,
                                            children: [
                                                (0, n.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: f.h_,
                                                    children: l,
                                                }),
                                                (0, n.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: f.XV,
                                                    "aria-hidden": "true",
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                    null != T &&
                                        (0, n.jsx)("div", {
                                            className: f.oU,
                                            children: (0, n.jsx)(p.Ay, {
                                                variant: p.qP.BLUE,
                                                progress: (0, i.clamp)(T, 0, 1),
                                                maximum: 1,
                                                glowing: L,
                                            }),
                                        }),
                                    K && (0, n.jsx)("div", { className: f.Cj }),
                                ],
                            }),
                            K &&
                                (0, n.jsxs)("div", {
                                    className: f.yk,
                                    children: [
                                        V &&
                                            (0, n.jsx)(E.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: C.intl.string(C.t.sEAnVH),
                                            }),
                                        !V &&
                                            (0, n.jsx)(u.$nd, {
                                                text: P,
                                                variant: !H && (0, o.q)(B) ? "primary" : "overlay-primary",
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
function b(e) {
    let { asset: t, className: r } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: s()(f.eq, r), draggable: "false" })
          : t;
}
