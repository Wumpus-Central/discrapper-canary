"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    u = n(397927),
    c = n(384904),
    d = n(793574),
    _ = n(688810),
    f = n(611371),
    p = n(721923),
    h = n(954571),
    m = n(927578),
    g = n(560138),
    E = n(422936),
    A = n(234419),
    I = n(465794),
    T = n(511484),
    y = n(811611),
    S = n(841252),
    v = n(788868),
    C = n(652215),
    b = n(985018),
    N = n(953239),
    R = n(669149);
function O(e) {
    switch (e) {
        case v.e.ANIMATED_AVATAR_MODAL_UPSELL:
        case v.e.ANIMATED_BANNER_MODAL_UPSELL:
        case v.e.PROFILE_EFFECT_MODAL_UPSELL:
        case v.e.AVATAR_DECORATION_MODAL_UPSELL:
        case v.e.FOR_LATER_MODAL_UPSELL:
        case v.e.VOICE_FILTERS_UPSELL:
            return !0;
        default:
            return !1;
    }
}
function D(e) {
    let {
            title: t,
            type: n,
            guildBoostProps: a,
            analyticsSource: D,
            analyticsLocation: L,
            body: w,
            context: x,
            glowUp: P,
            modalClassName: M,
            modalContentClassName: k,
            artContainerClassName: U,
            artClassName: G,
            headerClassName: V,
            bodyClassName: F,
            transitionState: B,
            onClose: j,
            onSubscribeClick: H,
            onSubscribeFinish: Y,
            onSecondaryClick: W,
            secondaryCTA: K,
            secondaryCTAClassName: z,
            subscribeButtonText: $,
            showNewBadge: q = !1,
            showBetaBadge: Z = !1,
            enableArtBoxShadow: Q = !0,
            subscriptionTier: X = v.pe.TIER_2,
            isLoading: J = !1,
            hideBackButton: ee,
            backButtonText: et,
            showEnhancedUpsell: en,
            useSubscribeButtonGradient: er,
            subscribeButtonClassname: ei,
            hidePremiumOfferUpsell: ea,
            children: es,
            LeadingComponent: eo,
            backgroundElements: el,
            smallText: eu = !1,
            footerClassName: ec,
            ...ed
        } = e,
        e_ = null != a,
        ef = (0, A.V)(),
        ep = (0, E.O)(),
        eh = !ea && (ef?.subscription_trial?.sku_id === X || (0, T.U9)(ep, X)) && !e_,
        { analyticsLocations: em } = (0, _.Ay)(d.A.PREMIUM_UPSELL_MODAL),
        eg = { analyticsLocation: L, analyticsLocations: em, analyticsSource: D, guildBoostProps: a, type: n },
        eE = i.useRef(eg);
    i.useEffect(() => {
        eE.current = eg;
    }),
        i.useEffect(() => {
            if (J) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: r,
                type: i,
            } = eE.current;
            e_
                ? h.default.track(C.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${i} - Tier ${r?.boostedGuildTier}`,
                      guild_id: r?.guild.id,
                      channel_id: r?.channelId,
                      location: e,
                      location_stack: t,
                  })
                : h.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, m.mH)(X),
                  });
        }, [e_, X, J]);
    let eA = (0, o.bG)([g.A], () => g.A.affinities),
        eI = eA.length > 1 && O(n),
        eT = (0, o.bG)([g.A], () => g.A.hasFetched);
    i.useEffect(() => {
        eT || c.xG();
    }, [eT]);
    let ey = () => {
            if (e_) return (0, r.jsx)(p.A, { analyticsLocation: L, guild: a.guild, onClose: j });
            let e = en ? b.intl.string(b.t.pj0XBN) : void 0;
            return (
                eh &&
                    (null != ef
                        ? (e = (0, m.FY)({
                              intervalType: ef?.subscription_trial?.interval,
                              intervalCount: ef?.subscription_trial?.interval_count,
                          }))
                        : null != ep && (e = b.intl.formatToPlainString(b.t.bkQ4bH, { percent: ep.discount.amount }))),
                (0, r.jsx)(I.A, {
                    className: ei,
                    showGradient: en || er,
                    premiumModalAnalyticsLocation: L,
                    subscriptionTier: X,
                    size: l.$n.Sizes.SMALL,
                    color: en || er ? l.$n.Colors.CUSTOM : l.$n.Colors.GREEN,
                    onClick: () => {
                        H?.(), j();
                    },
                    onSubscribeModalClose: Y,
                    textOptions: { textOverride: $ ?? e },
                })
            );
        },
        eS = Q ? s()(N.JS, N.OV, U) : s()(N.JS, U),
        ev = null;
    return (
        null != ed.artURL
            ? (ev = (0, r.jsx)("img", { className: s()(G, N.Qw), alt: "", src: ed.artURL }))
            : null != ed.artElement && (ev = ed.artElement),
        (0, r.jsxs)(u.EOs, {
            "data-migration-pending": !0,
            className: s()(N.zr, !eh && M),
            "aria-label": t,
            transitionState: B,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != ev &&
                    (0, r.jsxs)("div", {
                        className: eS,
                        children: [ev, q ? (0, r.jsx)("img", { className: N.CI, alt: "", src: R }) : null],
                    }),
                (0, r.jsx)(u.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: s()(en ? N.es : N.Qs, !eh && k),
                    children: J
                        ? (0, r.jsx)(u.y$y, {})
                        : eh
                          ? (0, r.jsx)(y.Ay, {
                                onClose: j,
                                type: n,
                                subscriptionTier: ef?.subscription_trial?.sku_id ?? v.pe.TIER_2,
                                headingText: t,
                                context: x,
                                analyticsLocationObject: L,
                                discountOffer: ep,
                                trialOffer: ef,
                                children: P,
                            })
                          : (0, r.jsxs)("div", {
                                className: N.hQ,
                                children: [
                                    eo,
                                    (0, r.jsxs)("div", {
                                        className: N.kQ,
                                        children: [
                                            (0, r.jsxs)(u.Heading, {
                                                className: s()(N.wx, { [N.k]: en }, V),
                                                variant: "heading-xl/bold",
                                                children: [t, Z ? (0, r.jsx)(f.A, { className: N.TN }) : null],
                                            }),
                                            eI ? (0, r.jsx)(S.A, { affinities: eA }) : void 0,
                                            es,
                                            (0, r.jsx)(u.Text, {
                                                variant: eu ? "text-sm/normal" : "text-md/normal",
                                                className: s()(F, N.uI),
                                                children: w,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, r.jsxs)(u.jlY, {
                    "data-migration-pending": !0,
                    className: s()(N.qr, ec, { [N.I$]: en }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(N.E3, { [N.Q_]: en }),
                            children: [
                                null != K
                                    ? (0, r.jsx)(l.$n, {
                                          "data-migration-pending": !0,
                                          className: s()(N.Dc, z, { [N.HZ]: en }),
                                          onClick: W,
                                          size: l.$n.Sizes.SMALL,
                                          color: en ? l.$n.Colors.CUSTOM : l.$n.Colors.PRIMARY,
                                          look: l.$n.Looks.LINK,
                                          children: K,
                                      })
                                    : null,
                                ey(),
                            ],
                        }),
                        !ee &&
                            !en &&
                            (0, r.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != et ? et : b.intl.string(b.t["13/7kX"]),
                                onClick: j,
                            }),
                    ],
                }),
                en ? (0, r.jsx)(u.s_y, { "data-migration-pending": !0, onClick: j, className: N.b }) : null,
                el,
            ],
        })
    );
}
