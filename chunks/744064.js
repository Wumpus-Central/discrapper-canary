i.d(t, { S: () => I });
var s = i(477900),
    r = i(582128),
    n = i(503698),
    a = i.n(n),
    l = i(435558),
    o = i(562708),
    d = i(43990),
    c = i(331322),
    u = i(821609),
    m = i(462887),
    p = i(602853),
    h = i(661531),
    f = i(993077),
    b = i(834730),
    g = i(403581),
    x = i(297264),
    C = i(736653),
    v = i(139286),
    j = i(531260),
    R = i(914410),
    P = i(174459),
    E = i(872725),
    _ = i(3074),
    A = i(465794),
    y = i(202541),
    N = i(652215),
    w = i(375708),
    M = i(55684);
function I(e) {
    let {
            id: t,
            title: i,
            description: n,
            descriptionNote: I,
            caption: O,
            pillText: U,
            primaryAsset: k,
            primaryAssetClassName: S,
            backgroundAssetUrl: L,
            progress: B,
            ctaIcon: D,
            ctaIconPosition: H,
            ctaText: V,
            ctaVariant: Y,
            ctaDisabled: F,
            ctaLoading: G,
            onCtaClick: W,
            subscriptionRequired: Z,
            isThirdPartyPerk: K = !1,
            glowing: z = !1,
            progressGlowing: X = !1,
            featured: $,
            className: q,
            containerClassName: J,
            tabIndex: Q = 0,
            blurTint: ee,
            footerContent: et,
            analyticsOptions: ei,
            onFocus: es,
        } = e,
        er = (0, C.DP)(),
        { fractionalState: en } = (0, j.A)(),
        ea = (0, _.N)(),
        el = { name: t };
    ei?.thirdPartyPartner != null && (el.third_party_partner = ei.thirdPartyPartner),
        (0, v.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: el });
    let eo = r.useMemo(
            () =>
                (0, l.debounce)(() => {
                    P.default.track(N.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, l.snakeCase)(i),
                        partner: ei?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ei?.thirdPartyPartner, i],
        ),
        ed = r.useCallback(() => {
            null != W &&
                (W(),
                P.default.track(N.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(i),
                    function_name: (0, l.snakeCase)(W.name),
                }));
        }, [W, i]),
        ec = !0 === Z && (K ? !1 === ea : en === y.xc.FP_ONLY),
        eu = !(0, l.isEmpty)(L),
        em = eu && (0, m.q)(er),
        ep = (0, p.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        eh = ec || !(0, l.isEmpty)(V);
    return (0, s.jsx)(d.N, {
        theme: em ? N.NJ8.DARKER : void 0,
        children: (e) =>
            (0, s.jsxs)(E.A, {
                id: t,
                tabIndex: Q,
                onMouseEnter: eo,
                onFocus: es,
                cardType: f.s.PRIMARY,
                glowing: z,
                hueRotate: 25,
                glowAmount: (0, m.M)(er) ? 2 : 8,
                blurAmount: 10,
                className: a()(M.Ui, J, { [M.Tn]: eu }),
                cardClassName: a()(M.Nr, e, q, { [M.j8]: $ }),
                cardStyle: {
                    backgroundImage: null != L ? `url(${L})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, l.isEmpty)(U) &&
                        (0, s.jsx)(b.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: M.Io,
                            children: U,
                        }),
                    (0, s.jsxs)("div", {
                        className: M.qh,
                        children: [
                            $ &&
                                (0, s.jsx)("div", {
                                    className: M.gW,
                                    "aria-hidden": "true",
                                    children: (0, s.jsx)(T, { asset: k, className: S }),
                                }),
                            (0, s.jsx)(T, { asset: k, className: S }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: M.hQ,
                        children: [
                            (0, s.jsx)("div", {
                                className: M.u_,
                                style: { "--custom-tint-color": ee ?? ep },
                                "aria-hidden": !0,
                            }),
                            (0, s.jsxs)("div", {
                                className: M.P_,
                                children: [
                                    ec &&
                                        (0, s.jsxs)("div", {
                                            className: M.d_,
                                            children: [
                                                (0, s.jsx)(g.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
                                                (0, s.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: w.intl.string(w.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, l.isEmpty)(O) &&
                                        (0, s.jsx)("div", {
                                            className: M.OU,
                                            children:
                                                "string" == typeof O
                                                    ? (0, s.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: O,
                                                      })
                                                    : O,
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
                                                    children: (0, l.isEmpty)(I)
                                                        ? n
                                                        : (0, s.jsxs)(c.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, s.jsx)("div", { children: n }),
                                                                  (0, s.jsx)("div", { children: I }),
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
                                    null != B &&
                                        (0, s.jsx)("div", {
                                            className: M.oU,
                                            children: (0, s.jsx)(R.Ay, {
                                                variant: R.qP.BLUE,
                                                progress: (0, l.clamp)(B, 0, 1),
                                                maximum: 1,
                                                glowing: X,
                                            }),
                                        }),
                                    null != et && (0, s.jsx)("div", { className: M.Gv, children: et }),
                                    eh && (0, s.jsx)("div", { className: M.Cj }),
                                ],
                            }),
                            eh &&
                                (0, s.jsxs)("div", {
                                    className: M.yk,
                                    children: [
                                        ec &&
                                            (0, s.jsx)(A.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: w.intl.string(w.t.sEAnVH),
                                            }),
                                        !ec &&
                                            (0, s.jsx)(u.$, {
                                                icon: D,
                                                iconPosition: H,
                                                text: V,
                                                variant: Y ?? (!eu && (0, m.q)(er) ? "primary" : "overlay-primary"),
                                                onClick: ed,
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
}
function T(e) {
    let { asset: t, className: i } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, s.jsx)("img", { src: t, alt: "", className: a()(M.eq, i), draggable: "false" })
          : t;
}
