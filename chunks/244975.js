n.d(t, { A: () => U });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(862482),
    o = n(935462),
    c = n(289873),
    d = n(534514),
    _ = n(834730),
    u = n(821609),
    E = n(793574),
    p = n(688810),
    h = n(611371),
    A = n(721923),
    f = n(954571),
    T = n(927578),
    S = n(848245),
    I = n(422936),
    m = n(234419),
    g = n(725807),
    L = n(511484),
    R = n(811611),
    N = n(841252),
    C = n(788868),
    y = n(652215),
    P = n(985018),
    O = n(535192),
    x = n(669149);
function U(e) {
    let {
            title: t,
            type: n,
            guildBoostProps: l,
            analyticsSource: U,
            analyticsLocation: b,
            body: M,
            context: v,
            glowUp: D,
            modalClassName: F,
            modalContentClassName: j,
            artContainerClassName: w,
            artClassName: G,
            headerClassName: k,
            bodyClassName: H,
            transitionState: z,
            onClose: B,
            onSubscribeClick: W,
            onSubscribeFinish: Y,
            onSecondaryClick: $,
            secondaryCTA: V,
            secondaryCTAClassName: Q,
            subscribeButtonText: K,
            showNewBadge: q = !1,
            showBetaBadge: X = !1,
            enableArtBoxShadow: Z = !0,
            subscriptionTier: J = C.pe.TIER_2,
            isLoading: ee = !1,
            hideBackButton: et,
            backButtonText: en,
            showEnhancedUpsell: ea,
            useSubscribeButtonGradient: ei,
            subscribeButtonClassname: el,
            hidePremiumOfferUpsell: er,
            children: es,
            LeadingComponent: eo,
            backgroundElements: ec,
            smallText: ed = !1,
            footerClassName: e_,
            ...eu
        } = e,
        eE = null != l,
        ep = (0, m.V)(),
        eh = (0, I.O)(),
        eA = !er && (ep?.subscription_trial?.sku_id === J || (0, L.U9)(eh, J)) && !eE,
        { analyticsLocations: ef } = (0, p.Ay)(E.A.PREMIUM_UPSELL_MODAL),
        eT = { analyticsLocation: b, analyticsLocations: ef, analyticsSource: U, guildBoostProps: l, type: n },
        eS = i.useRef(eT);
    i.useEffect(() => {
        eS.current = eT;
    }),
        i.useEffect(() => {
            if (ee) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: a,
                type: i,
            } = eS.current;
            eE
                ? f.default.track(y.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${i} - Tier ${a?.boostedGuildTier}`,
                      guild_id: a?.guild.id,
                      channel_id: a?.channelId,
                      location: e,
                      location_stack: t,
                  })
                : f.default.track(y.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, T.mH)(J),
                  });
        }, [eE, J, ee]);
    let eI = (0, S.b)(),
        em =
            eI.length > 1 &&
            (function (e) {
                switch (e) {
                    case C.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case C.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case C.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case C.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case C.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(n),
        eg = Z ? r()(O.JS, O.OV, w) : r()(O.JS, w),
        eL = null;
    return (
        null != eu.artURL
            ? (eL = (0, a.jsx)("img", { className: r()(G, O.Qw), alt: "", src: eu.artURL }))
            : null != eu.artElement && (eL = eu.artElement),
        (0, a.jsxs)(o.EO, {
            "data-migration-pending": !0,
            className: r()(O.zr, !eA && F),
            "aria-label": t,
            transitionState: z,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eL &&
                    (0, a.jsxs)("div", {
                        className: eg,
                        children: [eL, q ? (0, a.jsx)("img", { className: O.CI, alt: "", src: x }) : null],
                    }),
                (0, a.jsx)(o.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: r()(ea ? O.es : O.Qs, !eA && j),
                    children: ee
                        ? (0, a.jsx)(c.y, {})
                        : eA
                          ? (0, a.jsx)(R.Ay, {
                                onClose: B,
                                type: n,
                                subscriptionTier: ep?.subscription_trial?.sku_id ?? C.pe.TIER_2,
                                headingText: t,
                                context: v,
                                analyticsLocationObject: b,
                                discountOffer: eh,
                                trialOffer: ep,
                                children: D,
                            })
                          : (0, a.jsxs)("div", {
                                className: O.hQ,
                                children: [
                                    eo,
                                    (0, a.jsxs)("div", {
                                        className: O.kQ,
                                        children: [
                                            (0, a.jsxs)(d.D, {
                                                className: r()(O.wx, { [O.k]: ea }, k),
                                                variant: "heading-xl/bold",
                                                children: [t, X ? (0, a.jsx)(h.A, { className: O.TN }) : null],
                                            }),
                                            em ? (0, a.jsx)(N.A, { affinities: eI }) : void 0,
                                            es,
                                            (0, a.jsx)(_.E, {
                                                variant: ed ? "text-sm/normal" : "text-md/normal",
                                                className: r()(H, O.uI),
                                                children: M,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, a.jsxs)(o.jl, {
                    "data-migration-pending": !0,
                    className: r()(O.qr, e_, { [O.I$]: ea }),
                    children: [
                        (0, a.jsxs)("div", {
                            className: r()(O.E3, { [O.Q_]: ea }),
                            children: [
                                null != V
                                    ? (0, a.jsx)(s.$n, {
                                          "data-migration-pending": !0,
                                          className: r()(O.Dc, Q, { [O.HZ]: ea }),
                                          onClick: $,
                                          size: s.$n.Sizes.SMALL,
                                          color: ea ? s.$n.Colors.CUSTOM : s.$n.Colors.PRIMARY,
                                          look: s.$n.Looks.LINK,
                                          children: V,
                                      })
                                    : null,
                                (() => {
                                    if (eE)
                                        return (0, a.jsx)(A.A, { analyticsLocation: b, guild: l.guild, onClose: B });
                                    let e = ea ? P.intl.string(P.t.pj0XBN) : void 0;
                                    return (
                                        eA &&
                                            (null != ep
                                                ? (e = (0, T.FY)({
                                                      intervalType: ep?.subscription_trial?.interval,
                                                      intervalCount: ep?.subscription_trial?.interval_count,
                                                  }))
                                                : null != eh &&
                                                  (e = P.intl.formatToPlainString(P.t.bkQ4bH, {
                                                      percent: eh.discount.amount,
                                                  }))),
                                        (0, a.jsx)(g.A, {
                                            className: el,
                                            showGradient: ea || ei,
                                            premiumModalAnalyticsLocation: b,
                                            subscriptionTier: J,
                                            size: s.$n.Sizes.SMALL,
                                            color: ea || ei ? s.$n.Colors.CUSTOM : s.$n.Colors.GREEN,
                                            onClick: () => {
                                                W?.(), B();
                                            },
                                            onSubscribeModalClose: Y,
                                            textOptions: { textOverride: K ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !et &&
                            !ea &&
                            (0, a.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                text: null != en ? en : P.intl.string(P.t["13/7kX"]),
                                onClick: B,
                            }),
                    ],
                }),
                ea ? (0, a.jsx)(o.s_, { "data-migration-pending": !0, onClick: B, className: O.b }) : null,
                ec,
            ],
        })
    );
}
