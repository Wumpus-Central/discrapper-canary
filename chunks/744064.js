i.d(t, { S: () => b });
var r = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    n = i(735438),
    o = i(562708),
    d = i(43990),
    c = i(331322),
    u = i(821609),
    m = i(462887),
    h = i(602853),
    C = i(661531),
    p = i(359778),
    _ = i(834730),
    g = i(403581),
    E = i(534514),
    x = i(736653),
    f = i(139286),
    R = i(531260),
    A = i(914410),
    N = i(174459),
    I = i(872725),
    S = i(465794),
    j = i(788868),
    v = i(652215),
    P = i(375708),
    D = i(555599);
let b = (e) => {
    let {
            id: t,
            title: i,
            description: a,
            descriptionNote: b,
            caption: y,
            pillText: O,
            primaryAsset: L,
            primaryAssetClassName: w,
            backgroundAssetUrl: M,
            progress: B,
            ctaIcon: U,
            ctaIconPosition: k,
            ctaText: F,
            ctaVariant: G,
            ctaDisabled: H,
            ctaLoading: V,
            onCtaClick: W,
            subscriptionRequired: Y,
            glowing: Z = !1,
            progressGlowing: K = !1,
            featured: z,
            className: $,
            containerClassName: X,
            tabIndex: q = 0,
            blurTint: J,
            footerContent: Q,
            analyticsOptions: ee,
            onFocus: et,
        } = e,
        ei = (0, x.DP)(),
        { fractionalState: er } = (0, R.A)(),
        el = { name: t };
    ee?.thirdPartyPartner != null && (el.third_party_partner = ee.thirdPartyPartner),
        (0, f.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: el });
    let ea = l.useMemo(
            () =>
                (0, n.debounce)(() => {
                    N.default.track(v.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, n.snakeCase)(i),
                        partner: ee?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ee?.thirdPartyPartner, i],
        ),
        es = l.useCallback(() => {
            null != W &&
                (W(),
                N.default.track(v.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, n.snakeCase)(i),
                    function_name: (0, n.snakeCase)(W.name),
                }));
        }, [W, i]),
        en = Y && er === j.xc.FP_ONLY,
        eo = !(0, n.isEmpty)(M),
        ed = eo && (0, m.q)(ei),
        ec = (0, h.r)(C.A.colors.BACKGROUND_BASE_LOW).hex(),
        eu = en || !(0, n.isEmpty)(F);
    return (0, r.jsx)(d.N, {
        theme: ed ? v.NJ8.DARKER : void 0,
        children: (e) =>
            (0, r.jsxs)(I.A, {
                id: t,
                tabIndex: q,
                onMouseEnter: ea,
                onFocus: et,
                cardType: p.s.PRIMARY,
                glowing: Z,
                hueRotate: 25,
                glowAmount: (0, m.M)(ei) ? 2 : 8,
                blurAmount: 10,
                className: s()(D.Ui, X, { [D.Tn]: eo }),
                cardClassName: s()(D.Nr, e, $, { [D.j8]: z }),
                cardStyle: {
                    backgroundImage: null != M ? `url(${M})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, n.isEmpty)(O) &&
                        (0, r.jsx)(_.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: D.Io,
                            children: O,
                        }),
                    (0, r.jsxs)("div", {
                        className: D.qh,
                        children: [
                            z &&
                                (0, r.jsx)("div", {
                                    className: D.gW,
                                    "aria-hidden": "true",
                                    children: (0, r.jsx)(T, { asset: L, className: w }),
                                }),
                            (0, r.jsx)(T, { asset: L, className: w }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: D.hQ,
                        children: [
                            (0, r.jsx)("div", {
                                className: D.u_,
                                style: { "--custom-tint-color": J ?? ec },
                                "aria-hidden": !0,
                            }),
                            (0, r.jsxs)("div", {
                                className: D.P_,
                                children: [
                                    en &&
                                        (0, r.jsxs)("div", {
                                            className: D.d_,
                                            children: [
                                                (0, r.jsx)(g.t, { size: "sm", color: C.A.colors.ICON_MUTED }),
                                                (0, r.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: P.intl.string(P.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, n.isEmpty)(y) &&
                                        (0, r.jsx)("div", {
                                            className: D.OU,
                                            children:
                                                "string" == typeof y
                                                    ? (0, r.jsx)(_.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: y,
                                                      })
                                                    : y,
                                        }),
                                    (0, r.jsx)(E.D, { variant: "heading-lg/semibold", children: i }),
                                    !(0, n.isEmpty)(a) &&
                                        (0, r.jsxs)("div", {
                                            className: D.Wi,
                                            children: [
                                                (0, r.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: D.h_,
                                                    children: (0, n.isEmpty)(b)
                                                        ? a
                                                        : (0, r.jsxs)(c.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, r.jsx)("div", { children: a }),
                                                                  (0, r.jsx)("div", { children: b }),
                                                              ],
                                                          }),
                                                }),
                                                (0, r.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: D.XV,
                                                    inert: !0,
                                                    children: a,
                                                }),
                                            ],
                                        }),
                                    null != B &&
                                        (0, r.jsx)("div", {
                                            className: D.oU,
                                            children: (0, r.jsx)(A.Ay, {
                                                variant: A.qP.BLUE,
                                                progress: (0, n.clamp)(B, 0, 1),
                                                maximum: 1,
                                                glowing: K,
                                            }),
                                        }),
                                    null != Q && (0, r.jsx)("div", { className: D.Gv, children: Q }),
                                    eu && (0, r.jsx)("div", { className: D.Cj }),
                                ],
                            }),
                            eu &&
                                (0, r.jsxs)("div", {
                                    className: D.yk,
                                    children: [
                                        en &&
                                            (0, r.jsx)(S.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: P.intl.string(P.t.sEAnVH),
                                            }),
                                        !en &&
                                            (0, r.jsx)(u.$, {
                                                icon: U,
                                                iconPosition: k,
                                                text: F,
                                                variant: G ?? (!eo && (0, m.q)(ei) ? "primary" : "overlay-primary"),
                                                onClick: es,
                                                disabled: H,
                                                loading: V,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
};
function T(e) {
    let { asset: t, className: i } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, r.jsx)("img", { src: t, alt: "", className: s()(D.eq, i), draggable: "false" })
          : t;
}
