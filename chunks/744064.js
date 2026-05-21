l.d(t, { S: () => D });
var i = l(627968),
    r = l(64700),
    a = l(503698),
    s = l.n(a),
    n = l(735438),
    o = l(562708),
    d = l(43990),
    c = l(821609),
    u = l(462887),
    m = l(602853),
    h = l(661531),
    C = l(359778),
    _ = l(834730),
    p = l(403581),
    g = l(534514),
    E = l(736653),
    x = l(139286),
    f = l(531260),
    A = l(914410),
    R = l(174459),
    N = l(872725),
    I = l(465794),
    S = l(788868),
    j = l(652215),
    v = l(375708),
    P = l(555599);
let D = (e) => {
    let {
            id: t,
            title: l,
            description: a,
            caption: D,
            pillText: O,
            primaryAsset: y,
            primaryAssetClassName: b,
            backgroundAssetUrl: L,
            progress: w,
            ctaIcon: M,
            ctaIconPosition: B,
            ctaText: U,
            ctaVariant: F,
            ctaDisabled: k,
            ctaLoading: G,
            onCtaClick: H,
            subscriptionRequired: W,
            glowing: V = !1,
            progressGlowing: Y = !1,
            featured: K,
            className: Z,
            containerClassName: $,
            tabIndex: z = 0,
            blurTint: X,
            footerContent: q,
            analyticsOptions: J,
        } = e,
        Q = (0, E.DP)(),
        { fractionalState: ee } = (0, f.A)(),
        et = { name: t };
    J?.thirdPartyPartner != null && (et.third_party_partner = J.thirdPartyPartner),
        (0, x.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: et });
    let el = r.useMemo(
            () =>
                (0, n.debounce)(() => {
                    R.default.track(j.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, n.snakeCase)(l),
                        partner: J?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [J?.thirdPartyPartner, l],
        ),
        ei = r.useCallback(() => {
            null != H &&
                (H(),
                R.default.track(j.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, n.snakeCase)(l),
                    function_name: (0, n.snakeCase)(H.name),
                }));
        }, [H, l]),
        er = W && ee === S.xc.FP_ONLY,
        ea = !(0, n.isEmpty)(L),
        es = ea && (0, u.q)(Q),
        en = (0, m.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        eo = er || !(0, n.isEmpty)(U);
    return (0, i.jsx)(d.N, {
        theme: es ? j.NJ8.DARKER : void 0,
        children: (e) =>
            (0, i.jsxs)(N.A, {
                id: t,
                tabIndex: z,
                onMouseEnter: el,
                cardType: C.s.PRIMARY,
                glowing: V,
                hueRotate: 25,
                glowAmount: (0, u.M)(Q) ? 2 : 8,
                blurAmount: 10,
                className: s()(P.Ui, $, { [P.Tn]: ea }),
                cardClassName: s()(P.Nr, e, Z, { [P.j8]: K }),
                cardStyle: {
                    backgroundImage: null != L ? `url(${L})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, n.isEmpty)(O) &&
                        (0, i.jsx)(_.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: P.Io,
                            children: O,
                        }),
                    (0, i.jsxs)("div", {
                        className: P.qh,
                        children: [
                            K &&
                                (0, i.jsx)("div", {
                                    className: P.gW,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(T, { asset: y, className: b }),
                                }),
                            (0, i.jsx)(T, { asset: y, className: b }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: P.hQ,
                        children: [
                            (0, i.jsx)("div", {
                                className: P.u_,
                                style: { "--custom-tint-color": X ?? en },
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: P.P_,
                                children: [
                                    er &&
                                        (0, i.jsxs)("div", {
                                            className: P.d_,
                                            children: [
                                                (0, i.jsx)(p.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
                                                (0, i.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: v.intl.string(v.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, n.isEmpty)(D) &&
                                        (0, i.jsx)("div", {
                                            className: P.OU,
                                            children:
                                                "string" == typeof D
                                                    ? (0, i.jsx)(_.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: D,
                                                      })
                                                    : D,
                                        }),
                                    (0, i.jsx)(g.D, { variant: "heading-lg/semibold", children: l }),
                                    !(0, n.isEmpty)(a) &&
                                        (0, i.jsxs)("div", {
                                            className: P.Wi,
                                            children: [
                                                (0, i.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: P.h_,
                                                    children: a,
                                                }),
                                                (0, i.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: P.XV,
                                                    inert: !0,
                                                    children: a,
                                                }),
                                            ],
                                        }),
                                    null != w &&
                                        (0, i.jsx)("div", {
                                            className: P.oU,
                                            children: (0, i.jsx)(A.Ay, {
                                                variant: A.qP.BLUE,
                                                progress: (0, n.clamp)(w, 0, 1),
                                                maximum: 1,
                                                glowing: Y,
                                            }),
                                        }),
                                    null != q && (0, i.jsx)("div", { className: P.Gv, children: q }),
                                    eo && (0, i.jsx)("div", { className: P.Cj }),
                                ],
                            }),
                            eo &&
                                (0, i.jsxs)("div", {
                                    className: P.yk,
                                    children: [
                                        er &&
                                            (0, i.jsx)(I.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: v.intl.string(v.t.sEAnVH),
                                            }),
                                        !er &&
                                            (0, i.jsx)(c.$, {
                                                icon: M,
                                                iconPosition: B,
                                                text: U,
                                                variant: F ?? (!ea && (0, u.q)(Q) ? "primary" : "overlay-primary"),
                                                onClick: ei,
                                                disabled: k,
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
function T(e) {
    let { asset: t, className: l } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, i.jsx)("img", { src: t, alt: "", className: s()(P.eq, l), draggable: "false" })
          : t;
}
