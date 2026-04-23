t.d(n, { A: () => O });
var a = t(627968),
    s = t(64700),
    i = t(503698),
    l = t.n(i),
    r = t(862482),
    c = t(935462),
    o = t(289873),
    _ = t(534514),
    d = t(834730),
    u = t(821609),
    m = t(793574),
    p = t(688810),
    L = t(611371),
    A = t(721923),
    E = t(954571),
    x = t(927578),
    h = t(848245),
    f = t(422936),
    b = t(234419),
    g = t(725807),
    M = t(511484),
    N = t(811611),
    j = t(841252),
    C = t(788868),
    k = t(652215),
    I = t(985018),
    S = t(535192),
    T = t(669149);
function O(e) {
    let {
            title: n,
            type: t,
            guildBoostProps: i,
            analyticsSource: O,
            analyticsLocation: U,
            body: v,
            context: y,
            glowUp: R,
            modalClassName: P,
            modalContentClassName: D,
            artContainerClassName: $,
            artClassName: w,
            headerClassName: Q,
            bodyClassName: z,
            transitionState: F,
            onClose: B,
            onSubscribeClick: H,
            onSubscribeFinish: V,
            onSecondaryClick: G,
            secondaryCTA: J,
            secondaryCTAClassName: Z,
            subscribeButtonText: W,
            showNewBadge: X = !1,
            showBetaBadge: Y = !1,
            enableArtBoxShadow: q = !0,
            subscriptionTier: K = C.pe.TIER_2,
            isLoading: ee = !1,
            hideBackButton: en,
            backButtonText: et,
            showEnhancedUpsell: ea,
            useSubscribeButtonGradient: es,
            subscribeButtonClassname: ei,
            hidePremiumOfferUpsell: el,
            children: er,
            LeadingComponent: ec,
            backgroundElements: eo,
            smallText: e_ = !1,
            footerClassName: ed,
            ...eu
        } = e,
        em = null != i,
        ep = (0, b.V)(),
        eL = (0, f.O)(),
        eA = !el && (ep?.subscription_trial?.sku_id === K || (0, M.U9)(eL, K)) && !em,
        { analyticsLocations: eE } = (0, p.Ay)(m.A.PREMIUM_UPSELL_MODAL),
        ex = { analyticsLocation: U, analyticsLocations: eE, analyticsSource: O, guildBoostProps: i, type: t },
        eh = s.useRef(ex);
    s.useEffect(() => {
        eh.current = ex;
    }),
        s.useEffect(() => {
            if (ee) return;
            let {
                analyticsLocation: e,
                analyticsLocations: n,
                analyticsSource: t,
                guildBoostProps: a,
                type: s,
            } = eh.current;
            em
                ? E.default.track(k.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${s} - Tier ${a?.boostedGuildTier}`,
                      guild_id: a?.guild.id,
                      channel_id: a?.channelId,
                      location: e,
                      location_stack: n,
                  })
                : E.default.track(k.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: s,
                      source: t,
                      location: e,
                      location_stack: n,
                      sku_id: (0, x.mH)(K),
                  });
        }, [em, K, ee]);
    let ef = (0, h.b)(),
        eb =
            ef.length > 1 &&
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
            })(t),
        eg = q ? l()(S.JS, S.OV, $) : l()(S.JS, $),
        eM = null;
    return (
        null != eu.artURL
            ? (eM = (0, a.jsx)("img", { className: l()(w, S.Qw), alt: "", src: eu.artURL }))
            : null != eu.artElement && (eM = eu.artElement),
        (0, a.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: l()(S.zr, !eA && P),
            "aria-label": n,
            transitionState: F,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eM &&
                    (0, a.jsxs)("div", {
                        className: eg,
                        children: [eM, X ? (0, a.jsx)("img", { className: S.CI, alt: "", src: T }) : null],
                    }),
                (0, a.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: l()(ea ? S.es : S.Qs, !eA && D),
                    children: ee
                        ? (0, a.jsx)(o.y, {})
                        : eA
                          ? (0, a.jsx)(N.Ay, {
                                onClose: B,
                                type: t,
                                subscriptionTier: ep?.subscription_trial?.sku_id ?? C.pe.TIER_2,
                                headingText: n,
                                context: y,
                                analyticsLocationObject: U,
                                discountOffer: eL,
                                trialOffer: ep,
                                children: R,
                            })
                          : (0, a.jsxs)("div", {
                                className: S.hQ,
                                children: [
                                    ec,
                                    (0, a.jsxs)("div", {
                                        className: S.kQ,
                                        children: [
                                            (0, a.jsxs)(_.D, {
                                                className: l()(S.wx, { [S.k]: ea }, Q),
                                                variant: "heading-xl/bold",
                                                children: [n, Y ? (0, a.jsx)(L.A, { className: S.TN }) : null],
                                            }),
                                            eb ? (0, a.jsx)(j.A, { affinities: ef }) : void 0,
                                            er,
                                            (0, a.jsx)(d.E, {
                                                variant: e_ ? "text-sm/normal" : "text-md/normal",
                                                className: l()(z, S.uI),
                                                children: v,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, a.jsxs)(c.jl, {
                    "data-migration-pending": !0,
                    className: l()(S.qr, ed, { [S.I$]: ea }),
                    children: [
                        (0, a.jsxs)("div", {
                            className: l()(S.E3, { [S.Q_]: ea }),
                            children: [
                                null != J
                                    ? (0, a.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: l()(S.Dc, Z, { [S.HZ]: ea }),
                                          onClick: G,
                                          size: r.$n.Sizes.SMALL,
                                          color: ea ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: J,
                                      })
                                    : null,
                                (() => {
                                    if (em)
                                        return (0, a.jsx)(A.A, { analyticsLocation: U, guild: i.guild, onClose: B });
                                    let e = ea ? I.intl.string(I.t.pj0XBN) : void 0;
                                    return (
                                        eA &&
                                            (null != ep
                                                ? (e = (0, x.FY)({
                                                      intervalType: ep?.subscription_trial?.interval,
                                                      intervalCount: ep?.subscription_trial?.interval_count,
                                                  }))
                                                : null != eL &&
                                                  (e = I.intl.formatToPlainString(I.t.bkQ4bH, {
                                                      percent: eL.discount.amount,
                                                  }))),
                                        (0, a.jsx)(g.A, {
                                            className: ei,
                                            showGradient: ea || es,
                                            premiumModalAnalyticsLocation: U,
                                            subscriptionTier: K,
                                            size: r.$n.Sizes.SMALL,
                                            color: ea || es ? r.$n.Colors.CUSTOM : r.$n.Colors.GREEN,
                                            onClick: () => {
                                                H?.(), B();
                                            },
                                            onSubscribeModalClose: V,
                                            textOptions: { textOverride: W ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !en &&
                            !ea &&
                            (0, a.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                text: null != et ? et : I.intl.string(I.t["13/7kX"]),
                                onClick: B,
                            }),
                    ],
                }),
                ea ? (0, a.jsx)(c.s_, { "data-migration-pending": !0, onClick: B, className: S.b }) : null,
                eo,
            ],
        })
    );
}
