i.d(t, { S: () => w });
var r = i(627968),
    s = i(64700),
    n = i(503698),
    l = i.n(n),
    a = i(735438),
    o = i(562708),
    d = i(43990),
    c = i(331322),
    u = i(821609),
    m = i(462887),
    h = i(602853),
    C = i(661531),
    x = i(993077),
    p = i(834730),
    _ = i(403581),
    g = i(534514),
    f = i(736653),
    R = i(139286),
    j = i(531260),
    E = i(914410),
    A = i(174459),
    N = i(872725),
    P = i(3074),
    v = i(465794),
    D = i(202541),
    I = i(652215),
    b = i(375708),
    y = i(555599);
function w(e) {
    let {
            id: t,
            title: i,
            description: n,
            descriptionNote: w,
            caption: T,
            pillText: S,
            primaryAsset: M,
            primaryAssetClassName: k,
            backgroundAssetUrl: L,
            progress: U,
            ctaIcon: B,
            ctaIconPosition: F,
            ctaText: H,
            ctaVariant: G,
            ctaDisabled: V,
            ctaLoading: Y,
            onCtaClick: W,
            subscriptionRequired: K,
            isThirdPartyPerk: Z = !1,
            glowing: z = !1,
            progressGlowing: X = !1,
            featured: $,
            className: q,
            containerClassName: J,
            tabIndex: Q = 0,
            blurTint: ee,
            footerContent: et,
            analyticsOptions: ei,
            onFocus: er,
        } = e,
        es = (0, f.DP)(),
        { fractionalState: en } = (0, j.A)(),
        el = (0, P.N)(),
        ea = { name: t };
    ei?.thirdPartyPartner != null && (ea.third_party_partner = ei.thirdPartyPartner),
        (0, R.A)({ type: o.ImpressionTypes.VIEW, name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ea });
    let eo = s.useMemo(
            () =>
                (0, a.debounce)(() => {
                    A.default.track(I.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, a.snakeCase)(i),
                        partner: ei?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ei?.thirdPartyPartner, i],
        ),
        ed = s.useCallback(() => {
            null != W &&
                (W(),
                A.default.track(I.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, a.snakeCase)(i),
                    function_name: (0, a.snakeCase)(W.name),
                }));
        }, [W, i]),
        ec = !0 === K && (Z ? !1 === el : en === D.xc.FP_ONLY),
        eu = !(0, a.isEmpty)(L),
        em = eu && (0, m.q)(es),
        eh = (0, h.r)(C.A.colors.BACKGROUND_BASE_LOW).hex(),
        eC = ec || !(0, a.isEmpty)(H);
    return (0, r.jsx)(d.N, {
        theme: em ? I.NJ8.DARKER : void 0,
        children: (e) =>
            (0, r.jsxs)(N.A, {
                id: t,
                tabIndex: Q,
                onMouseEnter: eo,
                onFocus: er,
                cardType: x.s.PRIMARY,
                glowing: z,
                hueRotate: 25,
                glowAmount: (0, m.M)(es) ? 2 : 8,
                blurAmount: 10,
                className: l()(y.Ui, J, { [y.Tn]: eu }),
                cardClassName: l()(y.Nr, e, q, { [y.j8]: $ }),
                cardStyle: {
                    backgroundImage: null != L ? `url(${L})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, a.isEmpty)(S) &&
                        (0, r.jsx)(p.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: y.Io,
                            children: S,
                        }),
                    (0, r.jsxs)("div", {
                        className: y.qh,
                        children: [
                            $ &&
                                (0, r.jsx)("div", {
                                    className: y.gW,
                                    "aria-hidden": "true",
                                    children: (0, r.jsx)(O, { asset: M, className: k }),
                                }),
                            (0, r.jsx)(O, { asset: M, className: k }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: y.hQ,
                        children: [
                            (0, r.jsx)("div", {
                                className: y.u_,
                                style: { "--custom-tint-color": ee ?? eh },
                                "aria-hidden": !0,
                            }),
                            (0, r.jsxs)("div", {
                                className: y.P_,
                                children: [
                                    ec &&
                                        (0, r.jsxs)("div", {
                                            className: y.d_,
                                            children: [
                                                (0, r.jsx)(_.t, { size: "sm", color: C.A.colors.ICON_MUTED }),
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: b.intl.string(b.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, a.isEmpty)(T) &&
                                        (0, r.jsx)("div", {
                                            className: y.OU,
                                            children:
                                                "string" == typeof T
                                                    ? (0, r.jsx)(p.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: T,
                                                      })
                                                    : T,
                                        }),
                                    (0, r.jsx)(g.D, { variant: "heading-lg/semibold", children: i }),
                                    !(0, a.isEmpty)(n) &&
                                        (0, r.jsxs)("div", {
                                            className: y.Wi,
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: y.h_,
                                                    children: (0, a.isEmpty)(w)
                                                        ? n
                                                        : (0, r.jsxs)(c.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, r.jsx)("div", { children: n }),
                                                                  (0, r.jsx)("div", { children: w }),
                                                              ],
                                                          }),
                                                }),
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: y.XV,
                                                    inert: !0,
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    null != U &&
                                        (0, r.jsx)("div", {
                                            className: y.oU,
                                            children: (0, r.jsx)(E.Ay, {
                                                variant: E.qP.BLUE,
                                                progress: (0, a.clamp)(U, 0, 1),
                                                maximum: 1,
                                                glowing: X,
                                            }),
                                        }),
                                    null != et && (0, r.jsx)("div", { className: y.Gv, children: et }),
                                    eC && (0, r.jsx)("div", { className: y.Cj }),
                                ],
                            }),
                            eC &&
                                (0, r.jsxs)("div", {
                                    className: y.yk,
                                    children: [
                                        ec &&
                                            (0, r.jsx)(v.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: b.intl.string(b.t.sEAnVH),
                                            }),
                                        !ec &&
                                            (0, r.jsx)(u.$, {
                                                icon: B,
                                                iconPosition: F,
                                                text: H,
                                                variant: G ?? (!eu && (0, m.q)(es) ? "primary" : "overlay-primary"),
                                                onClick: ed,
                                                disabled: V,
                                                loading: Y,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
}
function O(e) {
    let { asset: t, className: i } = e;
    return null == t || "" === t
        ? null
        : "string" == typeof t
          ? (0, r.jsx)("img", { src: t, alt: "", className: l()(y.eq, i), draggable: "false" })
          : t;
}
