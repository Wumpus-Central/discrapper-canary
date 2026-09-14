n.d(t, { S: () => U });
var i = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    l = n(435558),
    o = n(562708),
    d = n(821609),
    c = n(43990),
    u = n(331322),
    m = n(462887),
    p = n(602853),
    b = n(661531),
    f = n(993077),
    g = n(834730),
    h = n(403581),
    x = n(297264),
    v = n(736653),
    _ = n(139286),
    P = n(531260),
    R = n(914410),
    C = n(174459),
    T = n(872725),
    A = n(721157),
    y = n(555393),
    E = n(51965),
    N = n(465794),
    j = n(202541),
    O = n(652215),
    I = n(375708),
    L = n(799544);
function U(e) {
    let {
            id: t,
            title: n,
            description: r,
            descriptionNote: U,
            caption: M,
            pillText: w,
            primaryAsset: k,
            primaryAssetClassName: D,
            backgroundAssetUrl: B,
            progress: Y,
            ctaIcon: G,
            ctaIconPosition: V,
            ctaText: H,
            ctaVariant: z,
            ctaDisabled: F,
            ctaLoading: K,
            onCtaClick: W,
            subscriptionRequired: X,
            isThirdPartyPerk: $ = !1,
            glowing: q = !1,
            autoClickCta: J = !1,
            progressGlowing: Z = !1,
            featured: Q,
            expired: ee = !1,
            className: et,
            containerClassName: en,
            tabIndex: ei = 0,
            blurTint: ea,
            footerContent: er,
            analyticsOptions: es,
            onFocus: el,
        } = e,
        eo = (0, v.DP)(),
        { fractionalState: ed } = (0, P.A)(),
        ec = (0, y.N)(),
        eu = { name: t };
    (es?.thirdPartyPartner != null && (eu.third_party_partner = es.thirdPartyPartner),
        (0, _.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: eu }));
    let em = a.useMemo(
            () =>
                (0, l.debounce)(() => {
                    C.default.track(O.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(n),
                        partner: es?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [es?.thirdPartyPartner, n],
        ),
        ep = a.useCallback(() => {
            null != W &&
                (W(),
                C.default.track(O.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(n),
                    function_name: (0, l.snakeCase)(W.name),
                }));
        }, [W, n]),
        eb = !0 === X && ($ ? ec?.state === A.zE.UPSELL : ed === j.xc.FP_ONLY),
        ef = a.useRef(!1);
    a.useEffect(() => {
        !J || ef.current || F || eb || ((ef.current = !0), ep());
    }, [J, F, ep, eb]);
    let eg = !(0, l.isEmpty)(B),
        eh = eg && (0, m.q)(eo),
        ex = (0, p.r)(b.A.colors.BACKGROUND_BASE_LOW).hex(),
        ev = eb || !(0, l.isEmpty)(H),
        e_ = z ?? (!eg && (0, m.q)(eo) ? "primary" : "overlay-primary"),
        eP = (0, l.isEmpty)(H)
            ? null
            : { icon: G, iconPosition: V, text: H, variant: e_, onClick: ep, disabled: F, loading: K },
        eR = (0, i.jsx)(N.A, { fullWidth: !0, defaultTextOverride: I.intl.string(I.t.sEAnVH) }),
        eC = null == eP ? null : $ ? (0, i.jsx)(E.A, { ...eP }) : (0, i.jsx)(d.$, { ...eP });
    return (0, i.jsx)(c.N, {
        theme: eh ? O.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)(T.A, {
                id: t,
                tabIndex: ei,
                onMouseEnter: em,
                onFocus: el,
                cardType: f.s.PRIMARY,
                glowing: q,
                hueRotate: 25,
                glowAmount: (0, m.M)(eo) ? 2 : 8,
                blurAmount: 10,
                className: s()(L.Ui, en, { [L.Tn]: eg }),
                cardClassName: s()(L.Nr, e, et, { [L.j8]: Q, [L._7]: ee }),
                cardStyle: {
                    backgroundImage: null != B ? `url(${B})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(w) &&
                        (0, i.jsx)(g.E, {
                            variant: "text-xs/bold",
                            color: ee ? "badge-text-default" : "badge-expressive-text-default",
                            className: L.Io,
                            children: w,
                        }),
                    (0, i.jsxs)("div", {
                        className: L.qh,
                        children: [
                            Q &&
                                (0, i.jsx)("div", {
                                    className: L.gW,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(S, { asset: k, className: D }),
                                }),
                            (0, i.jsx)(S, { asset: k, className: D }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: L.hQ,
                        children: [
                            (0, i.jsx)("div", {
                                className: L.u_,
                                style: { "--custom-tint-color": ea ?? ex },
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: L.P_,
                                children: [
                                    eb &&
                                        (0, i.jsxs)("div", {
                                            className: L.d_,
                                            children: [
                                                (0, i.jsx)(h.t, { size: "sm", color: b.A.colors.ICON_MUTED }),
                                                (0, i.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: I.intl.string(I.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(M) &&
                                        (0, i.jsx)("div", {
                                            className: L.OU,
                                            children:
                                                "string" == typeof M
                                                    ? (0, i.jsx)(g.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: M,
                                                      })
                                                    : M,
                                        }),
                                    (0, i.jsx)(x.D, { variant: "heading-lg/semibold", children: n }),
                                    !(0, l.isEmpty)(r) &&
                                        (0, i.jsxs)("div", {
                                            className: L.Wi,
                                            children: [
                                                (0, i.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: L.h_,
                                                    children: (0, l.isEmpty)(U)
                                                        ? r
                                                        : (0, i.jsxs)(u.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, i.jsx)("div", { children: r }),
                                                                  (0, i.jsx)("div", { children: U }),
                                                              ],
                                                          }),
                                                }),
                                                (0, i.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: L.XV,
                                                    inert: !0,
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    null != Y &&
                                        (0, i.jsx)("div", {
                                            className: L.oU,
                                            children: (0, i.jsx)(R.Ay, {
                                                variant: R.qP.BLUE,
                                                progress: (0, l.clamp)(Y, 0, 1),
                                                maximum: 1,
                                                glowing: Z,
                                            }),
                                        }),
                                    null != er && (0, i.jsx)("div", { className: L.Gv, children: er }),
                                    ev && (0, i.jsx)("div", { className: L.Cj }),
                                ],
                            }),
                            ev && (0, i.jsx)("div", { className: L.yk, children: eb ? eR : eC }),
                        ],
                    }),
                ],
            }),
    });
}
function S(e) {
    let { asset: t, className: n } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, i.jsx)("img", { src: t, alt: "", className: s()(L.eq, n), draggable: "false" })
          : t;
}
