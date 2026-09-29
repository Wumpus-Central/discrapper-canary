n.d(t, { S: () => M });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    o = n(562708),
    c = n(821609),
    d = n(43990),
    u = n(331322),
    m = n(462887),
    p = n(602853),
    b = n(661531),
    f = n(993077),
    _ = n(834730),
    g = n(403581),
    E = n(297264),
    h = n(736653),
    R = n(139286),
    N = n(531260),
    A = n(914410),
    O = n(174459),
    x = n(872725),
    I = n(721157),
    U = n(555393),
    v = n(51965),
    T = n(465794),
    P = n(202541),
    C = n(652215),
    S = n(375708),
    L = n(799544);
function M(e) {
    let {
            id: t,
            title: n,
            description: i,
            descriptionNote: M,
            caption: j,
            pillText: B,
            primaryAsset: w,
            primaryAssetClassName: D,
            backgroundAssetUrl: Y,
            progress: k,
            ctaIcon: V,
            ctaIconPosition: G,
            ctaText: H,
            ctaVariant: F,
            ctaDisabled: W,
            ctaLoading: z,
            onCtaClick: K,
            subscriptionRequired: X,
            isThirdPartyPerk: J = !1,
            glowing: q = !1,
            autoClickCta: $ = !1,
            progressGlowing: Z = !1,
            featured: Q,
            expired: ee = !1,
            className: et,
            containerClassName: en,
            tabIndex: ea = 0,
            blurTint: es,
            footerContent: ei,
            analyticsOptions: er,
            onFocus: el,
        } = e,
        eo = (0, h.DP)(),
        { fractionalState: ec } = (0, N.A)(),
        ed = (0, U.N)(),
        eu = { name: t };
    (er?.thirdPartyPartner != null && (eu.third_party_partner = er.thirdPartyPartner),
        (0, R.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: eu }));
    let em = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    O.default.track(C.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(n),
                        partner: er?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [er?.thirdPartyPartner, n],
        ),
        ep = s.useCallback(() => {
            null != K &&
                (K(),
                O.default.track(C.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(n),
                    function_name: (0, l.snakeCase)(K.name),
                }));
        }, [K, n]),
        eb = !0 === X && (J ? ed?.state === I.zE.UPSELL : ec === P.xc.FP_ONLY),
        ef = s.useRef(!1);
    s.useEffect(() => {
        !$ || ef.current || W || eb || ((ef.current = !0), ep());
    }, [$, W, ep, eb]);
    let e_ = !(0, l.isEmpty)(Y),
        eg = e_ && (0, m.q)(eo),
        eE = (0, p.r)(b.A.colors.BACKGROUND_BASE_LOW).hex(),
        eh = eb || !(0, l.isEmpty)(H),
        eR = F ?? (!e_ && (0, m.q)(eo) ? "primary" : "overlay-primary"),
        eN = (0, l.isEmpty)(H)
            ? null
            : { icon: V, iconPosition: G, text: H, variant: eR, onClick: ep, disabled: W, loading: z },
        eA = (0, a.jsx)(T.A, { fullWidth: !0, defaultTextOverride: S.intl.string(S.t.sEAnVH) }),
        eO = null == eN ? null : J ? (0, a.jsx)(v.A, { ...eN }) : (0, a.jsx)(c.$, { ...eN });
    return (0, a.jsx)(d.N, {
        theme: eg ? C.NJ8.DARK : void 0,
        children: (e) =>
            (0, a.jsxs)(x.A, {
                id: t,
                tabIndex: ea,
                onMouseEnter: em,
                onFocus: el,
                cardType: f.s.PRIMARY,
                glowing: q,
                hueRotate: 25,
                glowAmount: (0, m.M)(eo) ? 2 : 8,
                blurAmount: 10,
                className: r()(L.Ui, en, { [L.Tn]: e_ }),
                cardClassName: r()(L.Nr, e, et, { [L.j8]: Q, [L._7]: ee }),
                cardStyle: {
                    backgroundImage: null != Y ? `url(${Y})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(B) &&
                        (0, a.jsx)(_.E, {
                            variant: "text-xs/bold",
                            color: ee ? "badge-text-default" : "badge-expressive-text-default",
                            className: L.Io,
                            children: B,
                        }),
                    (0, a.jsxs)("div", {
                        className: L.qh,
                        children: [
                            Q &&
                                (0, a.jsx)("div", {
                                    className: L.gW,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(y, { asset: w, className: D }),
                                }),
                            (0, a.jsx)(y, { asset: w, className: D }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: L.hQ,
                        children: [
                            (0, a.jsx)("div", {
                                className: L.u_,
                                style: { "--custom-tint-color": es ?? eE },
                                "aria-hidden": !0,
                            }),
                            (0, a.jsxs)("div", {
                                className: L.P_,
                                children: [
                                    eb &&
                                        (0, a.jsxs)("div", {
                                            className: L.d_,
                                            children: [
                                                (0, a.jsx)(g.t, { size: "sm", color: b.A.colors.ICON_MUTED }),
                                                (0, a.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: S.intl.string(S.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(j) &&
                                        (0, a.jsx)("div", {
                                            className: L.OU,
                                            children:
                                                "string" == typeof j
                                                    ? (0, a.jsx)(_.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: j,
                                                      })
                                                    : j,
                                        }),
                                    (0, a.jsx)(E.D, { variant: "heading-lg/semibold", children: n }),
                                    !(0, l.isEmpty)(i) &&
                                        (0, a.jsxs)("div", {
                                            className: L.Wi,
                                            children: [
                                                (0, a.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: L.h_,
                                                    children: (0, l.isEmpty)(M)
                                                        ? i
                                                        : (0, a.jsxs)(u.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, a.jsx)("div", { children: i }),
                                                                  (0, a.jsx)("div", { children: M }),
                                                              ],
                                                          }),
                                                }),
                                                (0, a.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: L.XV,
                                                    inert: !0,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                    null != k &&
                                        (0, a.jsx)("div", {
                                            className: L.oU,
                                            children: (0, a.jsx)(A.Ay, {
                                                variant: A.qP.BLUE,
                                                progress: (0, l.clamp)(k, 0, 1),
                                                maximum: 1,
                                                glowing: Z,
                                            }),
                                        }),
                                    null != ei && (0, a.jsx)("div", { className: L.Gv, children: ei }),
                                    eh && (0, a.jsx)("div", { className: L.Cj }),
                                ],
                            }),
                            eh && (0, a.jsx)("div", { className: L.yk, children: eb ? eA : eO }),
                        ],
                    }),
                ],
            }),
    });
}
function y(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, a.jsx)("img", { src: t, alt: "", className: r()(L.eq, n), draggable: "false" })
          : t;
}
