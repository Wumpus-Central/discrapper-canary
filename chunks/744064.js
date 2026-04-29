s.d(t, { S: () => D });
var a = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    n = s(735438),
    d = s(110259),
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
    f = s(139286),
    R = s(531260),
    j = s(914410),
    v = s(954571),
    E = s(872725),
    N = s(465794),
    A = s(788868),
    b = s(652215),
    y = s(985018),
    P = s(555599);
let D = (e) => {
    let {
            id: t,
            title: s,
            description: l,
            caption: D,
            pillText: I,
            primaryAsset: O,
            primaryAssetClassName: T,
            backgroundAssetUrl: S,
            progress: M,
            ctaIcon: B,
            ctaIconPosition: L,
            ctaText: k,
            ctaVariant: U,
            ctaDisabled: F,
            ctaLoading: G,
            onCtaClick: H,
            subscriptionRequired: W,
            glowing: K = !1,
            progressGlowing: V = !1,
            featured: Z,
            className: Y,
            containerClassName: $,
            tabIndex: z = 0,
            blurTint: X,
            footerContent: q,
            analyticsOptions: J,
        } = e,
        Q = (0, g.DP)(),
        { fractionalState: ee } = (0, R.A)(),
        et = { name: t };
    J?.thirdPartyPartner != null && (et.third_party_partner = J.thirdPartyPartner),
        (0, f.A)({ type: d.ImpressionTypes.VIEW, name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: et });
    let es = r.useMemo(
            () =>
                (0, n.debounce)(() => {
                    v.default.track(b.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, n.snakeCase)(s),
                    });
                }, 800),
            [s],
        ),
        ea = r.useCallback(() => {
            null != H &&
                (H(),
                v.default.track(b.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, n.snakeCase)(s),
                    function_name: (0, n.snakeCase)(H.name),
                }));
        }, [H, s]),
        er = W && ee === A.xc.FP_ONLY,
        el = !(0, n.isEmpty)(S),
        ei = el && (0, u.q)(Q),
        en = (0, m.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        ed = er || !(0, n.isEmpty)(k);
    return (0, a.jsx)(o.N, {
        theme: ei ? b.NJ8.DARKER : void 0,
        children: (e) =>
            (0, a.jsxs)(E.A, {
                id: t,
                tabIndex: z,
                onMouseEnter: es,
                cardType: x.s.PRIMARY,
                glowing: K,
                hueRotate: 25,
                glowAmount: (0, u.M)(Q) ? 2 : 8,
                blurAmount: 10,
                className: i()(P.Ui, $, { [P.Tn]: el }),
                cardClassName: i()(P.Nr, e, Y, { [P.j8]: Z }),
                cardStyle: {
                    backgroundImage: null != S ? `url(${S})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, n.isEmpty)(I) &&
                        (0, a.jsx)(C.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: P.Io,
                            children: I,
                        }),
                    (0, a.jsxs)("div", {
                        className: P.qh,
                        children: [
                            Z &&
                                (0, a.jsx)("div", {
                                    className: P.gW,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(w, { asset: O, className: T }),
                                }),
                            (0, a.jsx)(w, { asset: O, className: T }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: P.hQ,
                        children: [
                            (0, a.jsx)("div", {
                                className: P.u_,
                                style: { "--custom-tint-color": X ?? en },
                                "aria-hidden": !0,
                            }),
                            (0, a.jsxs)("div", {
                                className: P.P_,
                                children: [
                                    er &&
                                        (0, a.jsxs)("div", {
                                            className: P.d_,
                                            children: [
                                                (0, a.jsx)(_.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
                                                (0, a.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: y.intl.string(y.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, n.isEmpty)(D) &&
                                        (0, a.jsx)("div", {
                                            className: P.OU,
                                            children:
                                                "string" == typeof D
                                                    ? (0, a.jsx)(C.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: D,
                                                      })
                                                    : D,
                                        }),
                                    (0, a.jsx)(p.D, { variant: "heading-lg/semibold", children: s }),
                                    !(0, n.isEmpty)(l) &&
                                        (0, a.jsxs)("div", {
                                            className: P.Wi,
                                            children: [
                                                (0, a.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: P.h_,
                                                    children: l,
                                                }),
                                                (0, a.jsx)(C.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: P.XV,
                                                    inert: !0,
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                    null != M &&
                                        (0, a.jsx)("div", {
                                            className: P.oU,
                                            children: (0, a.jsx)(j.Ay, {
                                                variant: j.qP.BLUE,
                                                progress: (0, n.clamp)(M, 0, 1),
                                                maximum: 1,
                                                glowing: V,
                                            }),
                                        }),
                                    null != q && (0, a.jsx)("div", { className: P.Gv, children: q }),
                                    ed && (0, a.jsx)("div", { className: P.Cj }),
                                ],
                            }),
                            ed &&
                                (0, a.jsxs)("div", {
                                    className: P.yk,
                                    children: [
                                        er &&
                                            (0, a.jsx)(N.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: y.intl.string(y.t.sEAnVH),
                                            }),
                                        !er &&
                                            (0, a.jsx)(c.$, {
                                                icon: B,
                                                iconPosition: L,
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
function w(e) {
    let { asset: t, className: s } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, a.jsx)("img", { src: t, alt: "", className: i()(P.eq, s), draggable: "false" })
          : t;
}
