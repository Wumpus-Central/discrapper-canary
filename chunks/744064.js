s.d(t, { S: () => I });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(735438),
    d = s(110259),
    o = s(43990),
    c = s(821609),
    u = s(462887),
    h = s(602853),
    m = s(661531),
    x = s(359778),
    C = s(834730),
    p = s(403581),
    _ = s(534514),
    g = s(736653),
    f = s(139286),
    b = s(531260),
    R = s(914410),
    E = s(954571),
    v = s(872725),
    j = s(465794),
    N = s(788868),
    A = s(652215),
    P = s(985018),
    y = s(555599);
let I = (e) => {
    let {
            id: t,
            title: s,
            description: r,
            caption: I,
            pillText: S,
            primaryAsset: w,
            primaryAssetClassName: O,
            backgroundAssetUrl: T,
            progress: M,
            ctaIcon: L,
            ctaIconPosition: B,
            ctaText: U,
            ctaVariant: k,
            ctaDisabled: F,
            ctaLoading: G,
            onCtaClick: H,
            subscriptionRequired: W,
            glowing: V = !1,
            progressGlowing: K = !1,
            featured: Z,
            className: Y,
            containerClassName: z,
            tabIndex: $ = 0,
            blurTint: X,
            footerContent: q,
            analyticsOptions: J,
        } = e,
        Q = (0, g.DP)(),
        { fractionalState: ee } = (0, b.A)(),
        et = { name: t };
    J?.thirdPartyPartner != null && (et.third_party_partner = J.thirdPartyPartner),
        (0, f.A)({ type: d.ImpressionTypes.VIEW, name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: et });
    let es = a.useMemo(
            () =>
                (0, i.debounce)(() => {
                    E.default.track(A.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(s),
                    });
                }, 800),
            [s],
        ),
        en = a.useCallback(() => {
            null != H &&
                (H(),
                E.default.track(A.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(s),
                    function_name: (0, i.snakeCase)(H.name),
                }));
        }, [H, s]),
        ea = W && ee === N.xc.FP_ONLY,
        er = !(0, i.isEmpty)(T),
        el = er && (0, u.q)(Q),
        ei = (0, h.r)(m.A.colors.BACKGROUND_BASE_LOW).hex(),
        ed = ea || !(0, i.isEmpty)(U);
    return (0, n.jsx)(o.N, {
        theme: el ? A.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(v.A, {
                id: t,
                tabIndex: $,
                onMouseEnter: es,
                cardType: x.s.PRIMARY,
                glowing: V,
                hueRotate: 25,
                glowAmount: (0, u.M)(Q) ? 2 : 8,
                blurAmount: 10,
                className: l()(y.Ui, z, { [y.Tn]: er }),
                cardClassName: l()(y.Nr, e, Y, { [y.j8]: Z }),
                cardStyle: {
                    backgroundImage: null != T ? `url(${T})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, i.isEmpty)(S) &&
                        (0, n.jsx)(C.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: y.Io,
                            children: S,
                        }),
                    (0, n.jsxs)("div", {
                        className: y.qh,
                        children: [
                            Z &&
                                (0, n.jsx)("div", {
                                    className: y.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(D, { asset: w, className: O }),
                                }),
                            (0, n.jsx)(D, { asset: w, className: O }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: y.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: y.u_,
                                style: { "--custom-tint-color": X ?? ei },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: y.P_,
                                children: [
                                    ea &&
                                        (0, n.jsxs)("div", {
                                            className: y.d_,
                                            children: [
                                                (0, n.jsx)(p.t, { size: "sm", color: m.A.colors.ICON_MUTED }),
                                                (0, n.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: P.intl.string(P.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(I) &&
                                        (0, n.jsx)("div", {
                                            className: y.OU,
                                            children:
                                                "string" == typeof I
                                                    ? (0, n.jsx)(C.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: I,
                                                      })
                                                    : I,
                                        }),
                                    (0, n.jsx)(_.D, { variant: "heading-lg/semibold", children: s }),
                                    !(0, i.isEmpty)(r) &&
                                        (0, n.jsxs)("div", {
                                            className: y.Wi,
                                            children: [
                                                (0, n.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: y.h_,
                                                    children: r,
                                                }),
                                                (0, n.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: y.XV,
                                                    inert: !0,
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    null != M &&
                                        (0, n.jsx)("div", {
                                            className: y.oU,
                                            children: (0, n.jsx)(R.Ay, {
                                                variant: R.qP.BLUE,
                                                progress: (0, i.clamp)(M, 0, 1),
                                                maximum: 1,
                                                glowing: K,
                                            }),
                                        }),
                                    null != q && (0, n.jsx)("div", { className: y.Gv, children: q }),
                                    ed && (0, n.jsx)("div", { className: y.Cj }),
                                ],
                            }),
                            ed &&
                                (0, n.jsxs)("div", {
                                    className: y.yk,
                                    children: [
                                        ea &&
                                            (0, n.jsx)(j.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: P.intl.string(P.t.sEAnVH),
                                            }),
                                        !ea &&
                                            (0, n.jsx)(c.$, {
                                                icon: L,
                                                iconPosition: B,
                                                text: U,
                                                variant: k ?? (!er && (0, u.q)(Q) ? "primary" : "overlay-primary"),
                                                onClick: en,
                                                disabled: F,
                                                loading: G,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function D(e) {
    let { asset: t, className: s } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: l()(y.eq, s), draggable: "false" })
          : t;
}
