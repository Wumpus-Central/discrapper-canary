s.d(t, { S: () => I });
var a = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    n = s(735438),
    d = s(562708),
    o = s(43990),
    c = s(821609),
    u = s(462887),
    m = s(602853),
    h = s(661531),
    x = s(359778),
    C = s(834730),
    _ = s(403581),
    p = s(534514),
    g = s(736653),
    R = s(139286),
    f = s(531260),
    E = s(914410),
    j = s(174459),
    N = s(872725),
    v = s(465794),
    A = s(788868),
    P = s(652215),
    b = s(375708),
    D = s(555599);
let I = (e) => {
    let {
            id: t,
            title: s,
            description: l,
            caption: I,
            pillText: w,
            primaryAsset: O,
            primaryAssetClassName: S,
            backgroundAssetUrl: T,
            progress: M,
            ctaIcon: L,
            ctaIconPosition: B,
            ctaText: k,
            ctaVariant: U,
            ctaDisabled: F,
            ctaLoading: G,
            onCtaClick: H,
            subscriptionRequired: W,
            glowing: V = !1,
            progressGlowing: K = !1,
            featured: Z,
            className: Y,
            containerClassName: $,
            tabIndex: z = 0,
            blurTint: X,
            footerContent: q,
            analyticsOptions: J,
        } = e,
        Q = (0, g.DP)(),
        { fractionalState: ee } = (0, f.A)(),
        et = { name: t };
    J?.thirdPartyPartner != null && (et.third_party_partner = J.thirdPartyPartner),
        (0, R.A)({ type: d.ImpressionTypes.VIEW, name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: et });
    let es = r.useMemo(
            () =>
                (0, n.debounce)(() => {
                    j.default.track(P.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, n.snakeCase)(s),
                    });
                }, 800),
            [s],
        ),
        ea = r.useCallback(() => {
            null != H &&
                (H(),
                j.default.track(P.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, n.snakeCase)(s),
                    function_name: (0, n.snakeCase)(H.name),
                }));
        }, [H, s]),
        er = W && ee === A.xc.FP_ONLY,
        el = !(0, n.isEmpty)(T),
        ei = el && (0, u.q)(Q),
        en = (0, m.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        ed = er || !(0, n.isEmpty)(k);
    return (0, a.jsx)(o.N, {
        theme: ei ? P.NJ8.DARKER : void 0,
        children: (e) =>
            (0, a.jsxs)(N.A, {
                id: t,
                tabIndex: z,
                onMouseEnter: es,
                cardType: x.s.PRIMARY,
                glowing: V,
                hueRotate: 25,
                glowAmount: (0, u.M)(Q) ? 2 : 8,
                blurAmount: 10,
                className: i()(D.Ui, $, { [D.Tn]: el }),
                cardClassName: i()(D.Nr, e, Y, { [D.j8]: Z }),
                cardStyle: {
                    backgroundImage: null != T ? `url(${T})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, n.isEmpty)(w) &&
                        (0, a.jsx)(C.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: D.Io,
                            children: w,
                        }),
                    (0, a.jsxs)("div", {
                        className: D.qh,
                        children: [
                            Z &&
                                (0, a.jsx)("div", {
                                    className: D.gW,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(y, { asset: O, className: S }),
                                }),
                            (0, a.jsx)(y, { asset: O, className: S }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: D.hQ,
                        children: [
                            (0, a.jsx)("div", {
                                className: D.u_,
                                style: { "--custom-tint-color": X ?? en },
                                "aria-hidden": !0,
                            }),
                            (0, a.jsxs)("div", {
                                className: D.P_,
                                children: [
                                    er &&
                                        (0, a.jsxs)("div", {
                                            className: D.d_,
                                            children: [
                                                (0, a.jsx)(_.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
                                                (0, a.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: b.intl.string(b.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, n.isEmpty)(I) &&
                                        (0, a.jsx)("div", {
                                            className: D.OU,
                                            children:
                                                "string" == typeof I
                                                    ? (0, a.jsx)(C.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: I,
                                                      })
                                                    : I,
                                        }),
                                    (0, a.jsx)(p.D, { variant: "heading-lg/semibold", children: s }),
                                    !(0, n.isEmpty)(l) &&
                                        (0, a.jsxs)("div", {
                                            className: D.Wi,
                                            children: [
                                                (0, a.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: D.h_,
                                                    children: l,
                                                }),
                                                (0, a.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: D.XV,
                                                    inert: !0,
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                    null != M &&
                                        (0, a.jsx)("div", {
                                            className: D.oU,
                                            children: (0, a.jsx)(E.Ay, {
                                                variant: E.qP.BLUE,
                                                progress: (0, n.clamp)(M, 0, 1),
                                                maximum: 1,
                                                glowing: K,
                                            }),
                                        }),
                                    null != q && (0, a.jsx)("div", { className: D.Gv, children: q }),
                                    ed && (0, a.jsx)("div", { className: D.Cj }),
                                ],
                            }),
                            ed &&
                                (0, a.jsxs)("div", {
                                    className: D.yk,
                                    children: [
                                        er &&
                                            (0, a.jsx)(v.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: b.intl.string(b.t.sEAnVH),
                                            }),
                                        !er &&
                                            (0, a.jsx)(c.$, {
                                                icon: L,
                                                iconPosition: B,
                                                text: k,
                                                variant: U ?? (!el && (0, u.q)(Q) ? "primary" : "overlay-primary"),
                                                onClick: ea,
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
function y(e) {
    let { asset: t, className: s } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, a.jsx)("img", { src: t, alt: "", className: i()(D.eq, s), draggable: "false" })
          : t;
}
