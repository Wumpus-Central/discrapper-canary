"use strict";
n.d(t, { A: () => w, F: () => M });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(934551),
    l = n(311907),
    u = n(421380),
    c = n(397927),
    d = n(384904),
    _ = n(793574),
    f = n(688810),
    p = n(611371),
    h = n(721923),
    m = n(954571),
    E = n(927578),
    g = n(560138),
    A = n(422936),
    I = n(234419),
    T = n(465794),
    S = n(783420),
    y = n(511484),
    v = n(811611),
    N = n(841252),
    C = n(788868),
    R = n(652215),
    O = n(985018),
    b = n(953239),
    D = n(669149);
function L(e) {
    switch (e) {
        case C.e.ANIMATED_AVATAR_MODAL_UPSELL:
        case C.e.ANIMATED_BANNER_MODAL_UPSELL:
        case C.e.PROFILE_EFFECT_MODAL_UPSELL:
        case C.e.AVATAR_DECORATION_MODAL_UPSELL:
        case C.e.FOR_LATER_MODAL_UPSELL:
        case C.e.VOICE_FILTERS_UPSELL:
            return !0;
        default:
            return !1;
    }
}
function w(e) {
    let {
            title: t,
            type: n,
            guildBoostProps: s,
            analyticsSource: o,
            analyticsLocation: S,
            body: w,
            context: M,
            glowUp: x,
            modalClassName: P,
            modalContentClassName: k,
            artContainerClassName: U,
            artClassName: G,
            headerClassName: F,
            bodyClassName: V,
            transitionState: B,
            onClose: H,
            onSubscribeClick: j,
            onSubscribeFinish: Y,
            onSecondaryClick: W,
            secondaryCTA: K,
            secondaryCTAClassName: $,
            subscribeButtonText: z,
            showNewBadge: q = !1,
            showBetaBadge: Z = !1,
            enableArtBoxShadow: X = !0,
            subscriptionTier: Q = C.pe.TIER_2,
            isLoading: J = !1,
            hideBackButton: ee,
            backButtonText: et,
            showEnhancedUpsell: en,
            useSubscribeButtonGradient: er,
            subscribeButtonClassname: ei,
            hidePremiumOfferUpsell: es,
            children: ea,
            LeadingComponent: eo,
            backgroundElements: el,
            smallText: eu = !1,
            footerClassName: ec,
            ...ed
        } = e,
        e_ = null != s,
        ef = (0, I.V)(),
        ep = (0, A.O)(),
        eh = !es && (ef?.subscription_trial?.sku_id === Q || (0, y.U9)(ep, Q)) && !e_,
        { analyticsLocations: em } = (0, f.Ay)(_.A.PREMIUM_UPSELL_MODAL),
        eE = { analyticsLocation: S, analyticsLocations: em, analyticsSource: o, guildBoostProps: s, type: n },
        eg = i.useRef(eE);
    i.useEffect(() => {
        eg.current = eE;
    }),
        i.useEffect(() => {
            if (J) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: r,
                type: i,
            } = eg.current;
            e_
                ? m.default.track(R.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${i} - Tier ${r?.boostedGuildTier}`,
                      guild_id: r?.guild.id,
                      channel_id: r?.channelId,
                      location: e,
                      location_stack: t,
                  })
                : m.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, E.mH)(Q),
                  });
        }, [e_, Q, J]);
    let eA = (0, l.bG)([g.A], () => g.A.affinities),
        eI = eA.length > 1 && L(n),
        eT = (0, l.bG)([g.A], () => g.A.hasFetched);
    i.useEffect(() => {
        eT || d.xG();
    }, [eT]);
    let eS = () => {
            if (e_) return (0, r.jsx)(h.A, { analyticsLocation: S, guild: s.guild, onClose: H });
            let e = en ? O.intl.string(O.t.pj0XBN) : void 0;
            return (
                eh &&
                    (null != ef
                        ? (e = (0, E.FY)({
                              intervalType: ef?.subscription_trial?.interval,
                              intervalCount: ef?.subscription_trial?.interval_count,
                          }))
                        : null != ep && (e = O.intl.formatToPlainString(O.t.bkQ4bH, { percent: ep.discount.amount }))),
                (0, r.jsx)(T.A, {
                    className: ei,
                    showGradient: en || er,
                    premiumModalAnalyticsLocation: S,
                    subscriptionTier: Q,
                    size: u.$n.Sizes.SMALL,
                    color: en || er ? u.$n.Colors.CUSTOM : u.$n.Colors.GREEN,
                    onClick: () => {
                        j?.(), H();
                    },
                    onSubscribeModalClose: Y,
                    textOptions: { textOverride: z ?? e },
                })
            );
        },
        ey = X ? a()(b.JS, b.OV, U) : a()(b.JS, U),
        ev = null;
    return (
        null != ed.artURL
            ? (ev = (0, r.jsx)("img", { className: a()(G, b.Qw), alt: "", src: ed.artURL }))
            : null != ed.artElement && (ev = ed.artElement),
        (0, r.jsxs)(c.EOs, {
            "data-migration-pending": !0,
            className: a()(b.zr, !eh && P),
            "aria-label": t,
            transitionState: B,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != ev &&
                    (0, r.jsxs)("div", {
                        className: ey,
                        children: [ev, q ? (0, r.jsx)("img", { className: b.CI, alt: "", src: D }) : null],
                    }),
                (0, r.jsx)(c.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: a()(en ? b.es : b.Qs, !eh && k),
                    children: J
                        ? (0, r.jsx)(c.y$y, {})
                        : eh
                          ? (0, r.jsx)(v.Ay, {
                                onClose: H,
                                type: n,
                                subscriptionTier: ef?.subscription_trial?.sku_id ?? C.pe.TIER_2,
                                headingText: t,
                                context: M,
                                analyticsLocationObject: S,
                                discountOffer: ep,
                                trialOffer: ef,
                                children: x,
                            })
                          : (0, r.jsxs)("div", {
                                className: b.hQ,
                                children: [
                                    eo,
                                    (0, r.jsxs)("div", {
                                        className: b.kQ,
                                        children: [
                                            (0, r.jsxs)(c.Heading, {
                                                className: a()(b.wx, { [b.k]: en }, F),
                                                variant: "heading-xl/bold",
                                                children: [t, Z ? (0, r.jsx)(p.A, { className: b.TN }) : null],
                                            }),
                                            eI ? (0, r.jsx)(N.A, { affinities: eA }) : void 0,
                                            ea,
                                            (0, r.jsx)(c.Text, {
                                                variant: eu ? "text-sm/normal" : "text-md/normal",
                                                className: a()(V, b.uI),
                                                children: w,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, r.jsxs)(c.jlY, {
                    "data-migration-pending": !0,
                    className: a()(b.qr, ec, { [b.I$]: en }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: a()(b.E3, { [b.Q_]: en }),
                            children: [
                                null != K
                                    ? (0, r.jsx)(u.$n, {
                                          "data-migration-pending": !0,
                                          className: a()(b.Dc, $, { [b.HZ]: en }),
                                          onClick: W,
                                          size: u.$n.Sizes.SMALL,
                                          color: en ? u.$n.Colors.CUSTOM : u.$n.Colors.PRIMARY,
                                          look: u.$n.Looks.LINK,
                                          children: K,
                                      })
                                    : null,
                                eS(),
                            ],
                        }),
                        !ee &&
                            !en &&
                            (0, r.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != et ? et : O.intl.string(O.t["13/7kX"]),
                                onClick: H,
                            }),
                    ],
                }),
                en ? (0, r.jsx)(c.s_y, { "data-migration-pending": !0, onClick: H, className: b.b }) : null,
                el,
            ],
        })
    );
}
function M(e) {
    let {
            transitionState: t,
            title: n,
            subtitle: i,
            graphic: s,
            guildBoostProps: a,
            onClose: l,
            onSecondaryClick: u,
            secondaryCTA: d,
            showNewBadge: _ = !1,
            showBetaBadge: f = !1,
            subscriptionTier: p = C.pe.TIER_2,
            hidePremiumOfferUpsell: h,
        } = e,
        m = null != a,
        g = (0, I.V)(),
        T = (0, A.O)(),
        v = !h && (g?.subscription_trial?.sku_id === p || (0, y.U9)(T, p)) && !m,
        N = O.intl.string(O.t.pj0XBN);
    v &&
        (null != g
            ? (N = (0, E.FY)({
                  intervalType: g?.subscription_trial?.interval,
                  intervalCount: g?.subscription_trial?.interval_count,
              }))
            : null != T && (N = O.intl.formatToPlainString(O.t.bkQ4bH, { percent: T.discount.amount })));
    let R = null;
    return (
        _ ? (R = "new") : f && (R = "beta"),
        null != g && (R = "free_trial"),
        (0, r.jsx)(S.A, {
            subscriptionTier: p,
            children: (e) => {
                let { onClick: a } = e;
                return (0, r.jsx)(c.kpP, {
                    title: n,
                    subtitle: i,
                    graphic: s,
                    gradientColor: "nitro-pink",
                    transitionState: t,
                    onClose: async () => await l(),
                    actions: [
                        { text: d, variant: "secondary", size: "md", onClick: u },
                        {
                            text: N,
                            variant: "expressive",
                            size: "md",
                            onClick: async (e) => {
                                await l(), a(e);
                            },
                            icon: o.NitroWheelIcon,
                        },
                    ],
                    ...(null !== R && { badge: { type: R, variant: "expressive" } }),
                });
            },
        })
    );
}
