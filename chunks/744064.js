a.d(r, { S: () => M });
var n = a(627968),
    s = a(64700),
    l = a(503698),
    t = a.n(l),
    i = a(735438),
    c = a(562708),
    d = a(43990),
    o = a(331322),
    u = a(821609),
    x = a(462887),
    m = a(602853),
    h = a(661531),
    j = a(993077),
    p = a(834730),
    v = a(403581),
    g = a(534514),
    N = a(736653),
    A = a(139286),
    E = a(531260),
    y = a(914410),
    b = a(174459),
    _ = a(872725),
    C = a(3074),
    R = a(465794),
    f = a(202541),
    k = a(652215),
    I = a(375708),
    T = a(555599);
function M(e) {
    let {
            id: r,
            title: a,
            description: l,
            descriptionNote: M,
            caption: O,
            pillText: D,
            primaryAsset: B,
            primaryAssetClassName: L,
            backgroundAssetUrl: w,
            progress: V,
            ctaIcon: S,
            ctaIconPosition: U,
            ctaText: W,
            ctaVariant: H,
            ctaDisabled: G,
            ctaLoading: K,
            onCtaClick: Y,
            subscriptionRequired: $,
            isThirdPartyPerk: q = !1,
            glowing: F = !1,
            progressGlowing: X = !1,
            featured: z,
            className: J,
            containerClassName: Q,
            tabIndex: Z = 0,
            blurTint: ee,
            footerContent: er,
            analyticsOptions: ea,
            onFocus: en,
        } = e,
        es = (0, N.DP)(),
        { fractionalState: el } = (0, E.A)(),
        et = (0, C.N)(),
        ei = { name: r };
    ea?.thirdPartyPartner != null && (ei.third_party_partner = ea.thirdPartyPartner),
        (0, A.A)({ type: c.ImpressionTypes.VIEW, name: c.ImpressionNames.PERK_DISCOVERABILITY_CARD, properties: ei });
    let ec = s.useMemo(
            () =>
                (0, i.debounce)(() => {
                    b.default.track(k.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                        card_type: (0, i.snakeCase)(a),
                        partner: ea?.thirdPartyPartner ?? null,
                    });
                }, 800),
            [ea?.thirdPartyPartner, a],
        ),
        ed = s.useCallback(() => {
            null != Y &&
                (Y(),
                b.default.track(k.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, i.snakeCase)(a),
                    function_name: (0, i.snakeCase)(Y.name),
                }));
        }, [Y, a]),
        eo = !0 === $ && (q ? !1 === et : el === f.xc.FP_ONLY),
        eu = !(0, i.isEmpty)(w),
        ex = eu && (0, x.q)(es),
        em = (0, m.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
        eh = eo || !(0, i.isEmpty)(W);
    return (0, n.jsx)(d.N, {
        theme: ex ? k.NJ8.DARKER : void 0,
        children: (e) =>
            (0, n.jsxs)(_.A, {
                id: r,
                tabIndex: Z,
                onMouseEnter: ec,
                onFocus: en,
                cardType: j.s.PRIMARY,
                glowing: F,
                hueRotate: 25,
                glowAmount: (0, x.M)(es) ? 2 : 8,
                blurAmount: 10,
                className: t()(T.Ui, Q, { [T.Tn]: eu }),
                cardClassName: t()(T.Nr, e, J, { [T.j8]: z }),
                cardStyle: {
                    backgroundImage: null != w ? `url(${w})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "padding-box",
                },
                children: [
                    !(0, i.isEmpty)(D) &&
                        (0, n.jsx)(p.E, {
                            variant: "text-xs/bold",
                            color: "badge-expressive-text-default",
                            className: T.Io,
                            children: D,
                        }),
                    (0, n.jsxs)("div", {
                        className: T.qh,
                        children: [
                            z &&
                                (0, n.jsx)("div", {
                                    className: T.gW,
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)(P, { asset: B, className: L }),
                                }),
                            (0, n.jsx)(P, { asset: B, className: L }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: T.hQ,
                        children: [
                            (0, n.jsx)("div", {
                                className: T.u_,
                                style: { "--custom-tint-color": ee ?? em },
                                "aria-hidden": !0,
                            }),
                            (0, n.jsxs)("div", {
                                className: T.P_,
                                children: [
                                    eo &&
                                        (0, n.jsxs)("div", {
                                            className: T.d_,
                                            children: [
                                                (0, n.jsx)(v.t, { size: "sm", color: h.A.colors.ICON_MUTED }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: I.intl.string(I.t.lHYDUu),
                                                }),
                                            ],
                                        }),
                                    !(0, i.isEmpty)(O) &&
                                        (0, n.jsx)("div", {
                                            className: T.OU,
                                            children:
                                                "string" == typeof O
                                                    ? (0, n.jsx)(p.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: O,
                                                      })
                                                    : O,
                                        }),
                                    (0, n.jsx)(g.D, { variant: "heading-lg/semibold", children: a }),
                                    !(0, i.isEmpty)(l) &&
                                        (0, n.jsxs)("div", {
                                            className: T.Wi,
                                            children: [
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: T.h_,
                                                    children: (0, i.isEmpty)(M)
                                                        ? l
                                                        : (0, n.jsxs)(o.B, {
                                                              direction: "vertical",
                                                              gap: 8,
                                                              children: [
                                                                  (0, n.jsx)("div", { children: l }),
                                                                  (0, n.jsx)("div", { children: M }),
                                                              ],
                                                          }),
                                                }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    className: T.XV,
                                                    inert: !0,
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                    null != V &&
                                        (0, n.jsx)("div", {
                                            className: T.oU,
                                            children: (0, n.jsx)(y.Ay, {
                                                variant: y.qP.BLUE,
                                                progress: (0, i.clamp)(V, 0, 1),
                                                maximum: 1,
                                                glowing: X,
                                            }),
                                        }),
                                    null != er && (0, n.jsx)("div", { className: T.Gv, children: er }),
                                    eh && (0, n.jsx)("div", { className: T.Cj }),
                                ],
                            }),
                            eh &&
                                (0, n.jsxs)("div", {
                                    className: T.yk,
                                    children: [
                                        eo &&
                                            (0, n.jsx)(R.A, {
                                                fullWidth: !0,
                                                defaultTextOverride: I.intl.string(I.t.sEAnVH),
                                            }),
                                        !eo &&
                                            (0, n.jsx)(u.$, {
                                                icon: S,
                                                iconPosition: U,
                                                text: W,
                                                variant: H ?? (!eu && (0, x.q)(es) ? "primary" : "overlay-primary"),
                                                onClick: ed,
                                                disabled: G,
                                                loading: K,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
    });
}
function P(e) {
    let { asset: r, className: a } = e;
    return null == r || "" === r
        ? null
        : "string" == typeof r
          ? (0, n.jsx)("img", { src: r, alt: "", className: t()(T.eq, a), draggable: "false" })
          : r;
}
