i.d(t, { S: () => M });
var s = i(477900),
    n = i(582128),
    r = i(503698),
    a = i.n(r),
    l = i(435558),
    o = i(562708),
    d = i(821609),
    c = i(43990),
    u = i(331322),
    m = i(462887),
    p = i(602853),
    f = i(661531),
    b = i(993077),
    h = i(834730),
    g = i(403581),
    x = i(297264),
    C = i(736653),
    v = i(139286),
    _ = i(531260),
    j = i(914410),
    E = i(174459),
    R = i(872725),
    P = i(721157),
    A = i(815987),
    y = i(51965),
    N = i(465794),
    I = i(202541),
    T = i(652215),
    O = i(375708),
    w = i(799544);
function M(e) {
    let {
            id: t,
            title: i,
            description: r,
            descriptionNote: M,
            caption: U,
            pillText: S,
            primaryAsset: k,
            primaryAssetClassName: B,
            backgroundAssetUrl: D,
            progress: H,
            ctaIcon: V,
            ctaIconPosition: Y,
            ctaText: F,
            ctaVariant: G,
            ctaDisabled: W,
            ctaLoading: K,
            onCtaClick: Z,
            subscriptionRequired: z,
            isThirdPartyPerk: X = !1,
            glowing: $ = !1,
            progressGlowing: q = !1,
            featured: J,
            expired: Q = !1,
            className: ee,
            containerClassName: et,
            tabIndex: ei = 0,
            blurTint: es,
            footerContent: en,
            analyticsOptions: er,
            onFocus: ea,
        } = e,
        el = (0, C.DP)(),
        { fractionalState: eo } = (0, _.A)(),
        ed = (0, A.N)(),
        ec = { name: t };
    er?.thirdPartyPartner != null && (ec.third_party_partner = er.thirdPartyPartner),
        (0, v.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ec });
    let eu = n.useMemo(
            () =>
                (0, l.debounce)(() => {
                    E.default.track(T.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(i),
                        partner: er?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [er?.thirdPartyPartner, i],
        ),
        em = n.useCallback(() => {
            null != Z &&
                (Z(),
                E.default.track(T.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(i),
                    function_name: (0, l.snakeCase)(Z.name),
                }));
        }, [Z, i]),
        ep = !0 === z && (X ? ed?.state === P.zE.UPSELL : eo === I.xc.FP_ONLY),
        ef = !(0, l.isEmpty)(D),
        eb = ef && (0, m.q)(el),
        eh = (0, p.r)(f.A.colors.BACKGROUND_BASE_LOW).hex(),
        eg = ep || !(0, l.isEmpty)(F),
        ex = G ?? (!ef && (0, m.q)(el) ? "primary" : "overlay-primary"),
        eC = (0, l.isEmpty)(F)
            ? null
            : { icon: V, iconPosition: Y, text: F, variant: ex, onClick: em, disabled: W, loading: K },
        ev = (0, s.jsx)(N.A, { fullWidth: !0, defaultTextOverride: O.intl.string(O.t.sEAnVH) }),
        e_ = null == eC ? null : X ? (0, s.jsx)(y.A, { ...eC }) : (0, s.jsx)(d.$, { ...eC });
    return (0, s.jsx)(c.N, {
        theme: eb ? T.NJ8.DARKER : void 0,
        children: (e) =>
            (0, s.jsxs)(R.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: eu,
                onFocus: ea,
                cardType: b.s.PRIMARY,
                glowing: $,
                hueRotate: 25,
                glowAmount: (0, m.M)(el) ? 2 : 8,
                blurAmount: 10,
                className: a()(w.Ui, et, { [w.Tn]: ef }),
                cardClassName: a()(w.Nr, e, ee, { [w.j8]: J, [w._7]: Q }),
                cardStyle: {
                    backgroundImage: null != D ? `url(${D})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(S) &&
                        (0, s.jsx)(h.E, {
                            variant: "text-xs/bold",
                            color: Q ? "badge-text-default" : "badge-expressive-text-default",
                            className: w.Io,
                            children: S,
                        }),
                    (0, s.jsxs)("div", {
                        className: w.qh,
                        children: [
                            J &&
                                (0, s.jsx)("div", {
                                    className: w.gW,
                                    "aria-hidden": "true",
                                    children: (0, s.jsx)(L, { asset: k, className: B }),
                                }),
                            (0, s.jsx)(L, { asset: k, className: B }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: w.hQ,
                        children: [
                            (0, s.jsx)("div", {
                                className: w.u_,
                                style: { "--custom-tint-color": es ?? eh },
                                "aria-hidden": !0,
                            }),
                            (0, s.jsxs)("div", {
                                className: w.P_,
                                children: [
                                    ep &&
                                        (0, s.jsxs)("div", {
                                            className: w.d_,
                                            children: [
                                                (0, s.jsx)(g.t, { size: "sm", color: f.A.colors.ICON_MUTED }),
                                                (0, s.jsx)(h.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: O.intl.string(O.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(U) &&
                                        (0, s.jsx)("div", {
                                            className: w.OU,
                                            children:
                                                "string" == typeof U
                                                    ? (0, s.jsx)(h.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: U,
                                                      })
                                                    : U,
                                        }),
                                    (0, s.jsx)(x.D, { variant: "heading-lg/semibold", children: i }),
                                    !(0, l.isEmpty)(r) &&
                                        (0, s.jsxs)("div", {
                                            className: w.Wi,
                                            children: [
                                                (0, s.jsx)(h.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: w.h_,
                                                    children: (0, l.isEmpty)(M)
                                                        ? r
                                                        : (0, s.jsxs)(u.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, s.jsx)("div", { children: r }),
                                                                  (0, s.jsx)("div", { children: M }),
                                                              ],
                                                          }),
                                                }),
                                                (0, s.jsx)(h.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: w.XV,
                                                    inert: !0,
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    null != H &&
                                        (0, s.jsx)("div", {
                                            className: w.oU,
                                            children: (0, s.jsx)(j.Ay, {
                                                variant: j.qP.BLUE,
                                                progress: (0, l.clamp)(H, 0, 1),
                                                maximum: 1,
                                                glowing: q,
                                            }),
                                        }),
                                    null != en && (0, s.jsx)("div", { className: w.Gv, children: en }),
                                    eg && (0, s.jsx)("div", { className: w.Cj }),
                                ],
                            }),
                            eg && (0, s.jsx)("div", { className: w.yk, children: ep ? ev : e_ }),
                        ],
                    }),
                ],
            }),
    });
}
function L(e) {
    let { asset: t, className: i } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, s.jsx)("img", { src: t, alt: "", className: a()(w.eq, i), draggable: "false" })
          : t;
}
