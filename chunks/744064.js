i.d(t, { S: () => O });
var s = i(477900),
    r = i(582128),
    n = i(503698),
    a = i.n(n),
    l = i(435558),
    o = i(562708),
    d = i(821609),
    c = i(43990),
    u = i(331322),
    m = i(462887),
    p = i(602853),
    h = i(661531),
    f = i(993077),
    b = i(834730),
    g = i(403581),
    x = i(297264),
    C = i(736653),
    v = i(139286),
    _ = i(531260),
    j = i(914410),
    E = i(174459),
    R = i(872725),
    P = i(721157),
    A = i(555393),
    N = i(51965),
    y = i(465794),
    I = i(202541),
    w = i(652215),
    T = i(375708),
    M = i(55684);
function O(e) {
    let {
            id: t,
            title: i,
            description: n,
            descriptionNote: O,
            caption: U,
            pillText: L,
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
            className: Q,
            containerClassName: ee,
            tabIndex: et = 0,
            blurTint: ei,
            footerContent: es,
            analyticsOptions: er,
            onFocus: en,
        } = e,
        ea = (0, C.DP)(),
        { fractionalState: el } = (0, _.A)(),
        eo = (0, A.N)(),
        ed = { name: t };
    er?.thirdPartyPartner != null && (ed.third_party_partner = er.thirdPartyPartner),
        (0, v.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ed });
    let ec = r.useMemo(
            () =>
                (0, l.debounce)(() => {
                    E.default.track(w.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(i),
                        partner: er?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [er?.thirdPartyPartner, i],
        ),
        eu = r.useCallback(() => {
            null != Z &&
                (Z(),
                E.default.track(w.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(i),
                    function_name: (0, l.snakeCase)(Z.name),
                }));
        }, [Z, i]),
        em = !0 === z && (X ? eo?.state === P.zE.UPSELL : el === I.xc.FP_ONLY),
        ep = !(0, l.isEmpty)(D),
        eh = ep && (0, m.q)(ea),
        ef = (0, p.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        eb = em || !(0, l.isEmpty)(F),
        eg = G ?? (!ep && (0, m.q)(ea) ? "primary" : "overlay-primary"),
        ex = (0, l.isEmpty)(F)
            ? null
            : { icon: V, iconPosition: Y, text: F, variant: eg, onClick: eu, disabled: W, loading: K },
        eC = (0, s.jsx)(y.A, { fullWidth: !0, defaultTextOverride: T.intl.string(T.t.sEAnVH) }),
        ev = null == ex ? null : X ? (0, s.jsx)(N.A, { ...ex }) : (0, s.jsx)(d.$, { ...ex });
    return (0, s.jsx)(c.N, {
        theme: eh ? w.NJ8.DARKER : void 0,
        children: (e) =>
            (0, s.jsxs)(R.A, {
                id: t,
                tabIndex: et,
                onMouseEnter: ec,
                onFocus: en,
                cardType: f.s.PRIMARY,
                glowing: $,
                hueRotate: 25,
                glowAmount: (0, m.M)(ea) ? 2 : 8,
                blurAmount: 10,
                className: a()(M.Ui, ee, { [M.Tn]: ep }),
                cardClassName: a()(M.Nr, e, Q, { [M.j8]: J }),
                cardStyle: {
                    backgroundImage: null != D ? `url(${D})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(L) &&
                        (0, s.jsx)(b.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: M.Io,
                            children: L,
                        }),
                    (0, s.jsxs)("div", {
                        className: M.qh,
                        children: [
                            J &&
                                (0, s.jsx)("div", {
                                    className: M.gW,
                                    "aria-hidden": "true",
                                    children: (0, s.jsx)(S, { asset: k, className: B }),
                                }),
                            (0, s.jsx)(S, { asset: k, className: B }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: M.hQ,
                        children: [
                            (0, s.jsx)("div", {
                                className: M.u_,
                                style: { "--custom-tint-color": ei ?? ef },
                                "aria-hidden": !0,
                            }),
                            (0, s.jsxs)("div", {
                                className: M.P_,
                                children: [
                                    em &&
                                        (0, s.jsxs)("div", {
                                            className: M.d_,
                                            children: [
                                                (0, s.jsx)(g.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
                                                (0, s.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: T.intl.string(T.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(U) &&
                                        (0, s.jsx)("div", {
                                            className: M.OU,
                                            children:
                                                "string" == typeof U
                                                    ? (0, s.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: U,
                                                      })
                                                    : U,
                                        }),
                                    (0, s.jsx)(x.D, { variant: "heading-lg/semibold", children: i }),
                                    !(0, l.isEmpty)(n) &&
                                        (0, s.jsxs)("div", {
                                            className: M.Wi,
                                            children: [
                                                (0, s.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: M.h_,
                                                    children: (0, l.isEmpty)(O)
                                                        ? n
                                                        : (0, s.jsxs)(u.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, s.jsx)("div", { children: n }),
                                                                  (0, s.jsx)("div", { children: O }),
                                                              ],
                                                          }),
                                                }),
                                                (0, s.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: M.XV,
                                                    inert: !0,
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    null != H &&
                                        (0, s.jsx)("div", {
                                            className: M.oU,
                                            children: (0, s.jsx)(j.Ay, {
                                                variant: j.qP.BLUE,
                                                progress: (0, l.clamp)(H, 0, 1),
                                                maximum: 1,
                                                glowing: q,
                                            }),
                                        }),
                                    null != es && (0, s.jsx)("div", { className: M.Gv, children: es }),
                                    eb && (0, s.jsx)("div", { className: M.Cj }),
                                ],
                            }),
                            eb && (0, s.jsx)("div", { className: M.yk, children: em ? eC : ev }),
                        ],
                    }),
                ],
            }),
    });
}
function S(e) {
    let { asset: t, className: i } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, s.jsx)("img", { src: t, alt: "", className: a()(M.eq, i), draggable: "false" })
          : t;
}
