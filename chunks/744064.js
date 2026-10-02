a.d(t, { S: () => M });
var n = a(477900),
    s = a(582128),
    i = a(503698),
    r = a.n(i),
    l = a(435558),
    o = a(562708),
    c = a(821609),
    d = a(43990),
    u = a(462887),
    m = a(602853),
    p = a(661531),
    b = a(993077),
    f = a(834730),
    _ = a(403581),
    g = a(297264),
    R = a(736653),
    E = a(139286),
    N = a(531260),
    h = a(914410),
    A = a(174459),
    x = a(872725),
    O = a(721157),
    I = a(555393),
    P = a(51965),
    v = a(465794),
    T = a(202541),
    C = a(652215),
    U = a(375708),
    S = a(799544);
function M(e) {
    let {
            id: t,
            title: a,
            description: i,
            descriptionNote: M,
            caption: y,
            pillText: j,
            primaryAsset: B,
            primaryAssetClassName: w,
            backgroundAssetUrl: D,
            progress: k,
            ctaIcon: Y,
            ctaIconPosition: G,
            ctaText: V,
            ctaVariant: H,
            ctaDisabled: F,
            ctaLoading: W,
            onCtaClick: X,
            subscriptionRequired: z,
            isThirdPartyPerk: K = !1,
            glowing: J = !1,
            autoClickCta: $ = !1,
            progressGlowing: q = !1,
            featured: Z = !1,
            expired: Q = !1,
            className: ee,
            containerClassName: et,
            tabIndex: ea = 0,
            blurTint: en,
            footerContent: es,
            analyticsOptions: ei,
            onFocus: er,
            listItemProps: el,
        } = e,
        eo = (0, R.DP)(),
        { fractionalState: ec } = (0, N.A)(),
        ed = (0, I.N)(),
        eu = { name: t };
    (ei?.thirdPartyPartner != null && (eu.third_party_partner = ei.thirdPartyPartner),
        (0, E.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: eu }));
    let em = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    A.default.track(C.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(a),
                        partner: ei?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ei?.thirdPartyPartner, a],
        ),
        ep = s.useCallback(() => {
            null != X &&
                (X(),
                A.default.track(C.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(a),
                    function_name: (0, l.snakeCase)(X.name),
                }));
        }, [X, a]),
        eb = !0 === z && (K ? ed?.state === O.zE.UPSELL : ec === T.xc.FP_ONLY),
        ef = s.useRef(!1);
    s.useEffect(() => {
        !$ || ef.current || F || eb || ((ef.current = !0), ep());
    }, [$, F, ep, eb]);
    let e_ = !(0, l.isEmpty)(D),
        eg = e_ && (0, u.q)(eo),
        eR = (0, m.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        eE = eb || !(0, l.isEmpty)(V),
        eN = H ?? (!e_ && (0, u.q)(eo) ? "primary" : "overlay-primary"),
        eh = (0, l.isEmpty)(V)
            ? null
            : {
                  icon: Y,
                  iconPosition: G,
                  text: V,
                  variant: eN,
                  size: Z ? "md" : void 0,
                  onClick: ep,
                  disabled: F,
                  loading: W,
                  tabIndex: el?.tabIndex,
              },
        eA = (0, n.jsx)(v.A, { fullWidth: !0, defaultTextOverride: U.intl.string(U.t.sEAnVH), tabIndex: el?.tabIndex }),
        ex = null == eh ? null : K ? (0, n.jsx)(P.A, { ...eh }) : (0, n.jsx)(c.$, { ...eh });
    return (0, n.jsx)(d.N, {
        theme: eg ? C.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)(x.A, {
                id: t,
                tabIndex: ea,
                onMouseEnter: em,
                onFocus: er,
                listItemProps: el,
                cardType: b.s.PRIMARY,
                glowing: J,
                hueRotate: 25,
                glowAmount: (0, u.M)(eo) ? 2 : 8,
                blurAmount: 10,
                className: r()(S.Ui, et, { [S.Tn]: e_ }),
                cardClassName: r()(S.Nr, e, ee, { [S.j8]: Z, [S._7]: Q }),
                cardStyle: {
                    backgroundImage: null != D ? `url(${D})` : void 0,
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(j) &&
                        (0, n.jsx)(f.E, {
                            variant: "text-xs/bold",
                            color: Q ? "badge-text-default" : "badge-expressive-text-default",
                            className: S.Io,
                            children: j,
                        }),
                    (0, n.jsxs)("div", {
                        className: S.qh,
                        children: [
                            Z &&
                                (0, n.jsx)("div", {
                                    className: S.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(L, { asset: B, className: w }),
                                }),
                            (0, n.jsx)(L, { asset: B, className: w }),
                        ],
                    }),
                    Z &&
                        (0, n.jsxs)("div", {
                            className: S.iy,
                            style: { "--custom-tint-color": en ?? eR },
                            "aria-hidden": !0,
                            children: [(0, n.jsx)("div", { className: S.u_ }), (0, n.jsx)("div", { className: S.G3 })],
                        }),
                    (0, n.jsxs)("div", {
                        className: S.hQ,
                        children: [
                            !Z &&
                                (0, n.jsx)("div", {
                                    className: S.u_,
                                    style: { "--custom-tint-color": en ?? eR },
                                    "aria-hidden": !0,
                                }),
                            (0, n.jsxs)("div", {
                                className: S.P_,
                                children: [
                                    eb &&
                                        (0, n.jsxs)("div", {
                                            className: S.d_,
                                            children: [
                                                (0, n.jsx)(_.t, { size: "sm", color: p.A.colors.ICON_MUTED }),
                                                (0, n.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: U.intl.string(U.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(y) &&
                                        (0, n.jsx)("div", {
                                            className: S.OU,
                                            children:
                                                "string" == typeof y
                                                    ? (0, n.jsx)(f.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: y,
                                                      })
                                                    : y,
                                        }),
                                    (0, n.jsx)(g.D, {
                                        variant: Z ? "display-md" : "heading-lg/semibold",
                                        className: r()(Z && S.jC),
                                        children: a,
                                    }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, n.jsxs)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            className: S.h_,
                                            children: [
                                                i,
                                                !(0, l.isEmpty)(M) &&
                                                    (0, n.jsx)("div", { className: S.Ph, children: M }),
                                            ],
                                        }),
                                    null != k &&
                                        (0, n.jsx)("div", {
                                            className: S.oU,
                                            children: (0, n.jsx)(h.Ay, {
                                                variant: h.qP.BLUE,
                                                progress: (0, l.clamp)(k, 0, 1),
                                                maximum: 1,
                                                glowing: q,
                                            }),
                                        }),
                                    null != es && (0, n.jsx)("div", { className: S.Gv, children: es }),
                                    eE && (0, n.jsx)("div", { className: S.Cj }),
                                ],
                            }),
                            eE && (0, n.jsx)("div", { className: S.yk, children: eb ? eA : ex }),
                        ],
                    }),
                ],
            }),
    });
}
function L(e) {
    let { asset: t, className: a } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, n.jsx)("img", { src: t, alt: "", className: r()(S.eq, a), draggable: "false" })
          : t;
}
