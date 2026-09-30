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
    O = a(872725),
    x = a(721157),
    I = a(555393),
    v = a(51965),
    P = a(465794),
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
        } = e,
        el = (0, R.DP)(),
        { fractionalState: eo } = (0, N.A)(),
        ec = (0, I.N)(),
        ed = { name: t };
    (ei?.thirdPartyPartner != null && (ed.third_party_partner = ei.thirdPartyPartner),
        (0, E.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ed }));
    let eu = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    A.default.track(C.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(a),
                        partner: ei?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ei?.thirdPartyPartner, a],
        ),
        em = s.useCallback(() => {
            null != X &&
                (X(),
                A.default.track(C.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(a),
                    function_name: (0, l.snakeCase)(X.name),
                }));
        }, [X, a]),
        ep = !0 === z && (K ? ec?.state === x.zE.UPSELL : eo === T.xc.FP_ONLY),
        eb = s.useRef(!1);
    s.useEffect(() => {
        !$ || eb.current || F || ep || ((eb.current = !0), em());
    }, [$, F, em, ep]);
    let ef = !(0, l.isEmpty)(D),
        e_ = ef && (0, u.q)(el),
        eg = (0, m.r)(p.A.colors.BACKGROUND_BASE_LOW).hex(),
        eR = ep || !(0, l.isEmpty)(V),
        eE = H ?? (!ef && (0, u.q)(el) ? "primary" : "overlay-primary"),
        eN = (0, l.isEmpty)(V)
            ? null
            : {
                  icon: Y,
                  iconPosition: G,
                  text: V,
                  variant: eE,
                  size: Z ? "md" : void 0,
                  onClick: em,
                  disabled: F,
                  loading: W,
              },
        eh = (0, n.jsx)(P.A, { fullWidth: !0, defaultTextOverride: U.intl.string(U.t.sEAnVH) }),
        eA = null == eN ? null : K ? (0, n.jsx)(v.A, { ...eN }) : (0, n.jsx)(c.$, { ...eN });
    return (0, n.jsx)(d.N, {
        theme: e_ ? C.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)(O.A, {
                id: t,
                tabIndex: ea,
                onMouseEnter: eu,
                onFocus: er,
                cardType: b.s.PRIMARY,
                glowing: J,
                hueRotate: 25,
                glowAmount: (0, u.M)(el) ? 2 : 8,
                blurAmount: 10,
                className: r()(S.Ui, et, { [S.Tn]: ef }),
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
                            style: { "--custom-tint-color": en ?? eg },
                            "aria-hidden": !0,
                            children: [(0, n.jsx)("div", { className: S.u_ }), (0, n.jsx)("div", { className: S.G3 })],
                        }),
                    (0, n.jsxs)("div", {
                        className: S.hQ,
                        children: [
                            !Z &&
                                (0, n.jsx)("div", {
                                    className: S.u_,
                                    style: { "--custom-tint-color": en ?? eg },
                                    "aria-hidden": !0,
                                }),
                            (0, n.jsxs)("div", {
                                className: S.P_,
                                children: [
                                    ep &&
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
                                    eR && (0, n.jsx)("div", { className: S.Cj }),
                                ],
                            }),
                            eR && (0, n.jsx)("div", { className: S.yk, children: ep ? eh : eA }),
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
