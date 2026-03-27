n.d(t, { A: () => U, F: () => M });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(934551),
    o = n(311907),
    c = n(421380),
    u = n(397927),
    d = n(384904),
    _ = n(793574),
    E = n(688810),
    T = n(611371),
    A = n(721923),
    I = n(954571),
    p = n(927578),
    N = n(560138),
    m = n(422936),
    R = n(234419),
    h = n(465794),
    S = n(783420),
    g = n(511484),
    C = n(811611),
    O = n(841252),
    y = n(788868),
    x = n(652215),
    f = n(985018),
    P = n(790344),
    D = n(669149);
function U(e) {
    let {
            title: t,
            type: n,
            guildBoostProps: r,
            analyticsSource: a,
            analyticsLocation: S,
            body: U,
            context: M,
            glowUp: L,
            modalClassName: j,
            modalContentClassName: b,
            artContainerClassName: v,
            artClassName: k,
            headerClassName: G,
            bodyClassName: B,
            transitionState: w,
            onClose: H,
            onSubscribeClick: F,
            onSubscribeFinish: V,
            onSecondaryClick: $,
            secondaryCTA: W,
            secondaryCTAClassName: q,
            subscribeButtonText: X,
            showNewBadge: K = !1,
            showBetaBadge: z = !1,
            enableArtBoxShadow: J = !0,
            subscriptionTier: Y = y.pe.TIER_2,
            isLoading: Q = !1,
            hideBackButton: Z,
            backButtonText: ee,
            showEnhancedUpsell: et,
            useSubscribeButtonGradient: en,
            subscribeButtonClassname: ei,
            hidePremiumOfferUpsell: el,
            children: er,
            LeadingComponent: es,
            backgroundElements: ea,
            smallText: eo = !1,
            footerClassName: ec,
            ...eu
        } = e,
        ed = null != r,
        e_ = (0, R.V)(),
        eE = (0, m.O)(),
        eT = !el && (e_?.subscription_trial?.sku_id === Y || (0, g.U9)(eE, Y)) && !ed,
        { analyticsLocations: eA } = (0, E.Ay)(_.A.PREMIUM_UPSELL_MODAL),
        eI = { analyticsLocation: S, analyticsLocations: eA, analyticsSource: a, guildBoostProps: r, type: n },
        ep = l.useRef(eI);
    l.useEffect(() => {
        ep.current = eI;
    }),
        l.useEffect(() => {
            if (Q) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: i,
                type: l,
            } = ep.current;
            ed
                ? I.default.track(x.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${l} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: e,
                      location_stack: t,
                  })
                : I.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: l,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, p.mH)(Y),
                  });
        }, [ed, Y, Q]);
    let eN = (0, o.bG)([N.A], () => N.A.affinities),
        em =
            eN.length > 1 &&
            (function (e) {
                switch (e) {
                    case y.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case y.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case y.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case y.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case y.e.FOR_LATER_MODAL_UPSELL:
                    case y.e.VOICE_FILTERS_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(n),
        eR = (0, o.bG)([N.A], () => N.A.hasFetched);
    l.useEffect(() => {
        eR || d.xG();
    }, [eR]);
    let eh = J ? s()(P.JS, P.OV, v) : s()(P.JS, v),
        eS = null;
    return (
        null != eu.artURL
            ? (eS = (0, i.jsx)("img", { className: s()(k, P.Qw), alt: "", src: eu.artURL }))
            : null != eu.artElement && (eS = eu.artElement),
        (0, i.jsxs)(u.EOs, {
            "data-migration-pending": !0,
            className: s()(P.zr, !eT && j),
            "aria-label": t,
            transitionState: w,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eS &&
                    (0, i.jsxs)("div", {
                        className: eh,
                        children: [eS, K ? (0, i.jsx)("img", { className: P.CI, alt: "", src: D }) : null],
                    }),
                (0, i.jsx)(u.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: s()(et ? P.es : P.Qs, !eT && b),
                    children: Q
                        ? (0, i.jsx)(u.y$y, {})
                        : eT
                          ? (0, i.jsx)(C.Ay, {
                                onClose: H,
                                type: n,
                                subscriptionTier: e_?.subscription_trial?.sku_id ?? y.pe.TIER_2,
                                headingText: t,
                                context: M,
                                analyticsLocationObject: S,
                                discountOffer: eE,
                                trialOffer: e_,
                                children: L,
                            })
                          : (0, i.jsxs)("div", {
                                className: P.hQ,
                                children: [
                                    es,
                                    (0, i.jsxs)("div", {
                                        className: P.kQ,
                                        children: [
                                            (0, i.jsxs)(u.Heading, {
                                                className: s()(P.wx, { [P.k]: et }, G),
                                                variant: "heading-xl/bold",
                                                children: [t, z ? (0, i.jsx)(T.A, { className: P.TN }) : null],
                                            }),
                                            em ? (0, i.jsx)(O.A, { affinities: eN }) : void 0,
                                            er,
                                            (0, i.jsx)(u.Text, {
                                                variant: eo ? "text-sm/normal" : "text-md/normal",
                                                className: s()(B, P.uI),
                                                children: U,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, i.jsxs)(u.jlY, {
                    "data-migration-pending": !0,
                    className: s()(P.qr, ec, { [P.I$]: et }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(P.E3, { [P.Q_]: et }),
                            children: [
                                null != W
                                    ? (0, i.jsx)(c.$n, {
                                          "data-migration-pending": !0,
                                          className: s()(P.Dc, q, { [P.HZ]: et }),
                                          onClick: $,
                                          size: c.$n.Sizes.SMALL,
                                          color: et ? c.$n.Colors.CUSTOM : c.$n.Colors.PRIMARY,
                                          look: c.$n.Looks.LINK,
                                          children: W,
                                      })
                                    : null,
                                (() => {
                                    if (ed)
                                        return (0, i.jsx)(A.A, { analyticsLocation: S, guild: r.guild, onClose: H });
                                    let e = et ? f.intl.string(f.t.pj0XBN) : void 0;
                                    return (
                                        eT &&
                                            (null != e_
                                                ? (e = (0, p.FY)({
                                                      intervalType: e_?.subscription_trial?.interval,
                                                      intervalCount: e_?.subscription_trial?.interval_count,
                                                  }))
                                                : null != eE &&
                                                  (e = f.intl.formatToPlainString(f.t.bkQ4bH, {
                                                      percent: eE.discount.amount,
                                                  }))),
                                        (0, i.jsx)(h.A, {
                                            className: ei,
                                            showGradient: et || en,
                                            premiumModalAnalyticsLocation: S,
                                            subscriptionTier: Y,
                                            size: c.$n.Sizes.SMALL,
                                            color: et || en ? c.$n.Colors.CUSTOM : c.$n.Colors.GREEN,
                                            onClick: () => {
                                                F?.(), H();
                                            },
                                            onSubscribeModalClose: V,
                                            textOptions: { textOverride: X ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !Z &&
                            !et &&
                            (0, i.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ee ? ee : f.intl.string(f.t["13/7kX"]),
                                onClick: H,
                            }),
                    ],
                }),
                et ? (0, i.jsx)(u.s_y, { "data-migration-pending": !0, onClick: H, className: P.b }) : null,
                ea,
            ],
        })
    );
}
function M(e) {
    let {
            transitionState: t,
            title: n,
            subtitle: l,
            graphic: r,
            guildBoostProps: s,
            onClose: o,
            onSecondaryClick: c,
            secondaryCTA: d,
            showNewBadge: _ = !1,
            showBetaBadge: E = !1,
            subscriptionTier: T = y.pe.TIER_2,
            hidePremiumOfferUpsell: A,
        } = e,
        I = (0, R.V)(),
        N = (0, m.O)(),
        h = !A && (I?.subscription_trial?.sku_id === T || (0, g.U9)(N, T)) && null == s,
        C = f.intl.string(f.t.pj0XBN);
    h &&
        (null != I
            ? (C = (0, p.FY)({
                  intervalType: I?.subscription_trial?.interval,
                  intervalCount: I?.subscription_trial?.interval_count,
              }))
            : null != N && (C = f.intl.formatToPlainString(f.t.bkQ4bH, { percent: N.discount.amount })));
    let O = null;
    return (
        _ ? (O = "new") : E && (O = "beta"),
        null != I && (O = "free_trial"),
        (0, i.jsx)(S.A, {
            subscriptionTier: T,
            children: (e) => {
                let { onClick: s } = e;
                return (0, i.jsx)(u.kpP, {
                    title: n,
                    subtitle: l,
                    graphic: r,
                    gradientColor: "nitro-pink",
                    transitionState: t,
                    onClose: async () => await o(),
                    actions: [
                        { text: d, variant: "secondary", size: "md", onClick: c },
                        {
                            text: C,
                            variant: "expressive",
                            size: "md",
                            onClick: async (e) => {
                                await o(), s(e);
                            },
                            icon: a.NitroWheelIcon,
                        },
                    ],
                    ...(null !== O && { badge: { type: O, variant: "expressive" } }),
                });
            },
        })
    );
}
