i.d(t, { S: () => M });
var n = i(477900),
    r = i(582128),
    s = i(503698),
    a = i.n(s),
    l = i(435558),
    o = i(562708),
    d = i(821609),
    c = i(43990),
    u = i(331322),
    m = i(462887),
    p = i(602853),
    f = i(661531),
    h = i(993077),
    b = i(834730),
    g = i(403581),
    x = i(297264),
    C = i(736653),
    v = i(139286),
    _ = i(531260),
    j = i(914410),
    R = i(174459),
    E = i(872725),
    P = i(721157),
    A = i(555393),
    y = i(51965),
    N = i(465794),
    T = i(202541),
    I = i(652215),
    w = i(375708),
    O = i(55684);
function M(e) {
    let {
            id: t,
            title: i,
            description: s,
            descriptionNote: M,
            caption: L,
            pillText: S,
            primaryAsset: k,
            primaryAssetClassName: D,
            backgroundAssetUrl: B,
            progress: F,
            ctaIcon: H,
            ctaIconPosition: V,
            ctaText: Y,
            ctaVariant: G,
            ctaDisabled: Z,
            ctaLoading: W,
            onCtaClick: K,
            subscriptionRequired: z,
            isThirdPartyPerk: X = !1,
            glowing: $ = !1,
            progressGlowing: q = !1,
            featured: J,
            expired: Q = !1,
            className: ee,
            containerClassName: et,
            tabIndex: ei = 0,
            blurTint: en,
            footerContent: er,
            analyticsOptions: es,
            onFocus: ea,
        } = e,
        el = (0, C.DP)(),
        { fractionalState: eo } = (0, _.A)(),
        ed = (0, A.N)(),
        ec = { name: t };
    es?.thirdPartyPartner != null && (ec.third_party_partner = es.thirdPartyPartner),
        (0, v.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ec });
    let eu = r.useMemo(
            () =>
                (0, l.debounce)(() => {
                    R.default.track(I.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(i),
                        partner: es?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [es?.thirdPartyPartner, i],
        ),
        em = r.useCallback(() => {
            null != K &&
                (K(),
                R.default.track(I.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(i),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, i]),
        ep = !0 === z && (X ? ed?.state === P.zE.UPSELL : eo === T.xc.FP_ONLY),
        ef = !(0, l.isEmpty)(B),
        eh = ef && (0, m.q)(el),
        eb = (0, p.r)(f.A.colors.BACKGROUND_BASE_LOW).hex(),
        eg = ep || !(0, l.isEmpty)(Y),
        ex = G ?? (!ef && (0, m.q)(el) ? "primary" : "overlay-primary"),
        eC = (0, l.isEmpty)(Y)
            ? null
            : { icon: H, iconPosition: V, text: Y, variant: ex, onClick: em, disabled: Z, loading: W },
        ev = (0, n.jsx)(N.A, { fullWidth: !0, defaultTextOverride: w.intl.string(w.t.sEAnVH) }),
        e_ = null == eC ? null : X ? (0, n.jsx)(y.A, { ...eC }) : (0, n.jsx)(d.$, { ...eC });
    return (0, n.jsx)(c.N, {
        theme: eh ? I.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(E.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: eu,
                onFocus: ea,
                cardType: h.s.PRIMARY,
                glowing: $,
                hueRotate: 25,
                glowAmount: (0, m.M)(el) ? 2 : 8,
                blurAmount: 10,
                className: a()(O.Ui, et, { [O.Tn]: ef }),
                cardClassName: a()(O.Nr, e, ee, { [O.j8]: J, [O._7]: Q }),
                cardStyle: {
                    backgroundImage: null != B ? `url(${B})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(S) &&
                        (0, n.jsx)(b.E, {
                            variant: "text-xs/bold",
                            color: Q ? "badge-text-default" : "badge-expressive-text-default",
                            className: O.Io,
                            children: S,
                        }),
                    (0, n.jsxs)("div", {
                        className: O.qh,
                        children: [
                            J &&
                                (0, n.jsx)("div", {
                                    className: O.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(U, { asset: k, className: D }),
                                }),
                            (0, n.jsx)(U, { asset: k, className: D }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: O.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: O.u_,
                                style: { "--custom-tint-color": en ?? eb },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: O.P_,
                                children: [
                                    ep &&
                                        (0, n.jsxs)("div", {
                                            className: O.d_,
                                            children: [
                                                (0, n.jsx)(g.t, { size: "sm", color: f.A.colors.ICON_MUTED }),
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: w.intl.string(w.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(L) &&
                                        (0, n.jsx)("div", {
                                            className: O.OU,
                                            children:
                                                "string" == typeof L
                                                    ? (0, n.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: L,
                                                      })
                                                    : L,
                                        }),
                                    (0, n.jsx)(x.D, { variant: "heading-lg/semibold", children: i }),
                                    !(0, l.isEmpty)(s) &&
                                        (0, n.jsxs)("div", {
                                            className: O.Wi,
                                            children: [
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: O.h_,
                                                    children: (0, l.isEmpty)(M)
                                                        ? s
                                                        : (0, n.jsxs)(u.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, n.jsx)("div", { children: s }),
                                                                  (0, n.jsx)("div", { children: M }),
                                                              ],
                                                          }),
                                                }),
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: O.XV,
                                                    inert: !0,
                                                    children: s,
                                                }),
                                            ],
                                        }),
                                    null != F &&
                                        (0, n.jsx)("div", {
                                            className: O.oU,
                                            children: (0, n.jsx)(j.Ay, {
                                                variant: j.qP.BLUE,
                                                progress: (0, l.clamp)(F, 0, 1),
                                                maximum: 1,
                                                glowing: q,
                                            }),
                                        }),
                                    null != er && (0, n.jsx)("div", { className: O.Gv, children: er }),
                                    eg && (0, n.jsx)("div", { className: O.Cj }),
                                ],
                            }),
                            eg && (0, n.jsx)("div", { className: O.yk, children: ep ? ev : e_ }),
                        ],
                    }),
                ],
            }),
    });
}
function U(e) {
    let { asset: t, className: i } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: a()(O.eq, i), draggable: "false" })
          : t;
}
