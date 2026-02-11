"use strict";
n.d(t, { A: () => x, F: () => P });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    u = n(421380),
    c = n(397927),
    d = n(384904),
    _ = n(793574),
    f = n(688810),
    h = n(611371),
    p = n(721923),
    g = n(954571),
    E = n(927578),
    A = n(560138),
    I = n(422936),
    T = n(234419),
    y = n(465794),
    S = n(783420),
    v = n(511484),
    C = n(811611),
    b = n(841252),
    N = n(788868),
    R = n(652215),
    O = n(985018),
    D = n(953239),
    L = n(669149);
function w(e) {
    switch (e) {
        case N.e.ANIMATED_AVATAR_MODAL_UPSELL:
        case N.e.ANIMATED_BANNER_MODAL_UPSELL:
        case N.e.PROFILE_EFFECT_MODAL_UPSELL:
        case N.e.AVATAR_DECORATION_MODAL_UPSELL:
        case N.e.FOR_LATER_MODAL_UPSELL:
        case N.e.VOICE_FILTERS_UPSELL:
            return !0;
        default:
            return !1;
    }
}
function x(e) {
    let {
            title: t,
            type: n,
            guildBoostProps: a,
            analyticsSource: o,
            analyticsLocation: S,
            body: x,
            context: P,
            glowUp: M,
            modalClassName: k,
            modalContentClassName: U,
            artContainerClassName: G,
            artClassName: F,
            headerClassName: V,
            bodyClassName: B,
            transitionState: j,
            onClose: H,
            onSubscribeClick: Y,
            onSubscribeFinish: W,
            onSecondaryClick: K,
            secondaryCTA: $,
            secondaryCTAClassName: z,
            subscribeButtonText: q,
            showNewBadge: X = !1,
            showBetaBadge: Z = !1,
            enableArtBoxShadow: Q = !0,
            subscriptionTier: J = N.pe.TIER_2,
            isLoading: ee = !1,
            hideBackButton: et,
            backButtonText: en,
            showEnhancedUpsell: er,
            useSubscribeButtonGradient: ei,
            subscribeButtonClassname: ea,
            hidePremiumOfferUpsell: es,
            children: eo,
            LeadingComponent: el,
            backgroundElements: eu,
            smallText: ec = !1,
            footerClassName: ed,
            ...e_
        } = e,
        ef = null != a,
        eh = (0, T.V)(),
        ep = (0, I.O)(),
        em = !es && (eh?.subscription_trial?.sku_id === J || (0, v.U9)(ep, J)) && !ef,
        { analyticsLocations: eg } = (0, f.Ay)(_.A.PREMIUM_UPSELL_MODAL),
        eE = { analyticsLocation: S, analyticsLocations: eg, analyticsSource: o, guildBoostProps: a, type: n },
        eA = i.useRef(eE);
    i.useEffect(() => {
        eA.current = eE;
    }),
        i.useEffect(() => {
            if (ee) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: r,
                type: i,
            } = eA.current;
            ef
                ? g.default.track(R.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${i} - Tier ${r?.boostedGuildTier}`,
                      guild_id: r?.guild.id,
                      channel_id: r?.channelId,
                      location: e,
                      location_stack: t,
                  })
                : g.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, E.mH)(J),
                  });
        }, [ef, J, ee]);
    let eI = (0, l.bG)([A.A], () => A.A.affinities),
        eT = eI.length > 1 && w(n),
        ey = (0, l.bG)([A.A], () => A.A.hasFetched);
    i.useEffect(() => {
        ey || d.xG();
    }, [ey]);
    let eS = () => {
            if (ef) return (0, r.jsx)(p.A, { analyticsLocation: S, guild: a.guild, onClose: H });
            let e = er ? O.intl.string(O.t.pj0XBN) : void 0;
            return (
                em &&
                    (null != eh
                        ? (e = (0, E.FY)({
                              intervalType: eh?.subscription_trial?.interval,
                              intervalCount: eh?.subscription_trial?.interval_count,
                          }))
                        : null != ep && (e = O.intl.formatToPlainString(O.t.bkQ4bH, { percent: ep.discount.amount }))),
                (0, r.jsx)(y.A, {
                    className: ea,
                    showGradient: er || ei,
                    premiumModalAnalyticsLocation: S,
                    subscriptionTier: J,
                    size: u.$n.Sizes.SMALL,
                    color: er || ei ? u.$n.Colors.CUSTOM : u.$n.Colors.GREEN,
                    onClick: () => {
                        Y?.(), H();
                    },
                    onSubscribeModalClose: W,
                    textOptions: { textOverride: q ?? e },
                })
            );
        },
        ev = Q ? s()(D.JS, D.OV, G) : s()(D.JS, G),
        eC = null;
    return (
        null != e_.artURL
            ? (eC = (0, r.jsx)("img", { className: s()(F, D.Qw), alt: "", src: e_.artURL }))
            : null != e_.artElement && (eC = e_.artElement),
        (0, r.jsxs)(c.EOs, {
            "data-migration-pending": !0,
            className: s()(D.zr, !em && k),
            "aria-label": t,
            transitionState: j,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eC &&
                    (0, r.jsxs)("div", {
                        className: ev,
                        children: [eC, X ? (0, r.jsx)("img", { className: D.CI, alt: "", src: L }) : null],
                    }),
                (0, r.jsx)(c.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: s()(er ? D.es : D.Qs, !em && U),
                    children: ee
                        ? (0, r.jsx)(c.y$y, {})
                        : em
                          ? (0, r.jsx)(C.Ay, {
                                onClose: H,
                                type: n,
                                subscriptionTier: eh?.subscription_trial?.sku_id ?? N.pe.TIER_2,
                                headingText: t,
                                context: P,
                                analyticsLocationObject: S,
                                discountOffer: ep,
                                trialOffer: eh,
                                children: M,
                            })
                          : (0, r.jsxs)("div", {
                                className: D.hQ,
                                children: [
                                    el,
                                    (0, r.jsxs)("div", {
                                        className: D.kQ,
                                        children: [
                                            (0, r.jsxs)(c.Heading, {
                                                className: s()(D.wx, { [D.k]: er }, V),
                                                variant: "heading-xl/bold",
                                                children: [t, Z ? (0, r.jsx)(h.A, { className: D.TN }) : null],
                                            }),
                                            eT ? (0, r.jsx)(b.A, { affinities: eI }) : void 0,
                                            eo,
                                            (0, r.jsx)(c.Text, {
                                                variant: ec ? "text-sm/normal" : "text-md/normal",
                                                className: s()(B, D.uI),
                                                children: x,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, r.jsxs)(c.jlY, {
                    "data-migration-pending": !0,
                    className: s()(D.qr, ed, { [D.I$]: er }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(D.E3, { [D.Q_]: er }),
                            children: [
                                null != $
                                    ? (0, r.jsx)(u.$n, {
                                          "data-migration-pending": !0,
                                          className: s()(D.Dc, z, { [D.HZ]: er }),
                                          onClick: K,
                                          size: u.$n.Sizes.SMALL,
                                          color: er ? u.$n.Colors.CUSTOM : u.$n.Colors.PRIMARY,
                                          look: u.$n.Looks.LINK,
                                          children: $,
                                      })
                                    : null,
                                eS(),
                            ],
                        }),
                        !et &&
                            !er &&
                            (0, r.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != en ? en : O.intl.string(O.t["13/7kX"]),
                                onClick: H,
                            }),
                    ],
                }),
                er ? (0, r.jsx)(c.s_y, { "data-migration-pending": !0, onClick: H, className: D.b }) : null,
                eu,
            ],
        })
    );
}
function P(e) {
    let {
            title: t,
            subtitle: n,
            graphic: i,
            guildBoostProps: a,
            onClose: s,
            onSecondaryClick: l,
            secondaryCTA: u,
            showNewBadge: d = !1,
            showBetaBadge: _ = !1,
            subscriptionTier: f = N.pe.TIER_2,
            showEnhancedUpsell: h,
            hidePremiumOfferUpsell: p,
        } = e,
        g = null != a,
        A = (0, T.V)(),
        y = (0, I.O)(),
        C = !p && (A?.subscription_trial?.sku_id === f || (0, v.U9)(y, f)) && !g,
        b = h ? O.intl.string(O.t.pj0XBN) : void 0;
    C &&
        (null != A
            ? (b = (0, E.FY)({
                  intervalType: A?.subscription_trial?.interval,
                  intervalCount: A?.subscription_trial?.interval_count,
              }))
            : null != y && (b = O.intl.formatToPlainString(O.t.bkQ4bH, { percent: y.discount.amount })));
    let R = null;
    return (
        d ? (R = "new") : _ && (R = "beta"),
        null != A && (R = "free_trial"),
        (0, r.jsx)(S.A, {
            subscriptionTier: f,
            children: (e) => {
                let { onClick: a } = e;
                return (0, r.jsx)(c.kpP, {
                    title: t,
                    subtitle: n,
                    graphic: i,
                    gradientColor: "nitro-pink",
                    transitionState: c.ip4.ENTERED,
                    onClose: async () => await s(),
                    actions: [
                        { text: u, variant: "secondary", size: "md", onClick: l },
                        {
                            text: b,
                            variant: "expressive",
                            size: "md",
                            onClick: async (e) => {
                                await s(), a(e);
                            },
                            icon: o.pVd,
                        },
                    ],
                    ...(null !== R && { badge: { type: R, variant: "expressive" } }),
                });
            },
        })
    );
}
