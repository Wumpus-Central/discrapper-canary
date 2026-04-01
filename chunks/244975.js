n.d(t, { A: () => O, F: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(934551),
    o = n(311907),
    d = n(421380),
    c = n(397927),
    u = n(384904),
    h = n(793574),
    A = n(688810),
    _ = n(611371),
    m = n(721923),
    g = n(954571),
    p = n(927578),
    f = n(560138),
    x = n(422936),
    E = n(234419),
    I = n(725807),
    C = n(783420),
    N = n(511484),
    T = n(811611),
    S = n(841252),
    b = n(788868),
    y = n(652215),
    v = n(985018),
    j = n(790344),
    R = n(669149);
function O(e) {
    let {
            title: t,
            type: n,
            guildBoostProps: s,
            analyticsSource: r,
            analyticsLocation: C,
            body: O,
            context: L,
            glowUp: M,
            modalClassName: D,
            modalContentClassName: U,
            artContainerClassName: G,
            artClassName: P,
            headerClassName: k,
            bodyClassName: w,
            transitionState: B,
            onClose: V,
            onSubscribeClick: H,
            onSubscribeFinish: F,
            onSecondaryClick: K,
            secondaryCTA: W,
            secondaryCTAClassName: Y,
            subscribeButtonText: z,
            showNewBadge: q = !1,
            showBetaBadge: X = !1,
            enableArtBoxShadow: J = !0,
            subscriptionTier: Q = b.pe.TIER_2,
            isLoading: $ = !1,
            hideBackButton: Z,
            backButtonText: ee,
            showEnhancedUpsell: et,
            useSubscribeButtonGradient: en,
            subscribeButtonClassname: ei,
            hidePremiumOfferUpsell: el,
            children: es,
            LeadingComponent: ea,
            backgroundElements: er,
            smallText: eo = !1,
            footerClassName: ed,
            ...ec
        } = e,
        eu = null != s,
        eh = (0, E.V)(),
        eA = (0, x.O)(),
        e_ = !el && (eh?.subscription_trial?.sku_id === Q || (0, N.U9)(eA, Q)) && !eu,
        { analyticsLocations: em } = (0, A.Ay)(h.A.PREMIUM_UPSELL_MODAL),
        eg = { analyticsLocation: C, analyticsLocations: em, analyticsSource: r, guildBoostProps: s, type: n },
        ep = l.useRef(eg);
    l.useEffect(() => {
        ep.current = eg;
    }),
        l.useEffect(() => {
            if ($) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: i,
                type: l,
            } = ep.current;
            eu
                ? g.default.track(y.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${l} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: e,
                      location_stack: t,
                  })
                : g.default.track(y.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: l,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, p.mH)(Q),
                  });
        }, [eu, Q, $]);
    let ef = (0, o.bG)([f.A], () => f.A.affinities),
        ex =
            ef.length > 1 &&
            (function (e) {
                switch (e) {
                    case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case b.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(n),
        eE = (0, o.bG)([f.A], () => f.A.hasFetched);
    l.useEffect(() => {
        eE || u.xG();
    }, [eE]);
    let eI = J ? a()(j.JS, j.OV, G) : a()(j.JS, G),
        eC = null;
    return (
        null != ec.artURL
            ? (eC = (0, i.jsx)("img", { className: a()(P, j.Qw), alt: "", src: ec.artURL }))
            : null != ec.artElement && (eC = ec.artElement),
        (0, i.jsxs)(c.EOs, {
            "data-migration-pending": !0,
            className: a()(j.zr, !e_ && D),
            "aria-label": t,
            transitionState: B,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eC &&
                    (0, i.jsxs)("div", {
                        className: eI,
                        children: [eC, q ? (0, i.jsx)("img", { className: j.CI, alt: "", src: R }) : null],
                    }),
                (0, i.jsx)(c.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: a()(et ? j.es : j.Qs, !e_ && U),
                    children: $
                        ? (0, i.jsx)(c.y$y, {})
                        : e_
                          ? (0, i.jsx)(T.Ay, {
                                onClose: V,
                                type: n,
                                subscriptionTier: eh?.subscription_trial?.sku_id ?? b.pe.TIER_2,
                                headingText: t,
                                context: L,
                                analyticsLocationObject: C,
                                discountOffer: eA,
                                trialOffer: eh,
                                children: M,
                            })
                          : (0, i.jsxs)("div", {
                                className: j.hQ,
                                children: [
                                    ea,
                                    (0, i.jsxs)("div", {
                                        className: j.kQ,
                                        children: [
                                            (0, i.jsxs)(c.Heading, {
                                                className: a()(j.wx, { [j.k]: et }, k),
                                                variant: "heading-xl/bold",
                                                children: [t, X ? (0, i.jsx)(_.A, { className: j.TN }) : null],
                                            }),
                                            ex ? (0, i.jsx)(S.A, { affinities: ef }) : void 0,
                                            es,
                                            (0, i.jsx)(c.Text, {
                                                variant: eo ? "text-sm/normal" : "text-md/normal",
                                                className: a()(w, j.uI),
                                                children: O,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, i.jsxs)(c.jlY, {
                    "data-migration-pending": !0,
                    className: a()(j.qr, ed, { [j.I$]: et }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(j.E3, { [j.Q_]: et }),
                            children: [
                                null != W
                                    ? (0, i.jsx)(d.$n, {
                                          "data-migration-pending": !0,
                                          className: a()(j.Dc, Y, { [j.HZ]: et }),
                                          onClick: K,
                                          size: d.$n.Sizes.SMALL,
                                          color: et ? d.$n.Colors.CUSTOM : d.$n.Colors.PRIMARY,
                                          look: d.$n.Looks.LINK,
                                          children: W,
                                      })
                                    : null,
                                (() => {
                                    if (eu)
                                        return (0, i.jsx)(m.A, { analyticsLocation: C, guild: s.guild, onClose: V });
                                    let e = et ? v.intl.string(v.t.pj0XBN) : void 0;
                                    return (
                                        e_ &&
                                            (null != eh
                                                ? (e = (0, p.FY)({
                                                      intervalType: eh?.subscription_trial?.interval,
                                                      intervalCount: eh?.subscription_trial?.interval_count,
                                                  }))
                                                : null != eA &&
                                                  (e = v.intl.formatToPlainString(v.t.bkQ4bH, {
                                                      percent: eA.discount.amount,
                                                  }))),
                                        (0, i.jsx)(I.A, {
                                            className: ei,
                                            showGradient: et || en,
                                            premiumModalAnalyticsLocation: C,
                                            subscriptionTier: Q,
                                            size: d.$n.Sizes.SMALL,
                                            color: et || en ? d.$n.Colors.CUSTOM : d.$n.Colors.GREEN,
                                            onClick: () => {
                                                H?.(), V();
                                            },
                                            onSubscribeModalClose: F,
                                            textOptions: { textOverride: z ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !Z &&
                            !et &&
                            (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ee ? ee : v.intl.string(v.t["13/7kX"]),
                                onClick: V,
                            }),
                    ],
                }),
                et ? (0, i.jsx)(c.s_y, { "data-migration-pending": !0, onClick: V, className: j.b }) : null,
                er,
            ],
        })
    );
}
function L(e) {
    let {
            transitionState: t,
            title: n,
            subtitle: l,
            graphic: s,
            guildBoostProps: a,
            onClose: o,
            onSecondaryClick: d,
            secondaryCTA: u,
            showNewBadge: h = !1,
            showBetaBadge: A = !1,
            subscriptionTier: _ = b.pe.TIER_2,
            hidePremiumOfferUpsell: m,
        } = e,
        g = (0, E.V)(),
        f = (0, x.O)(),
        I = !m && (g?.subscription_trial?.sku_id === _ || (0, N.U9)(f, _)) && null == a,
        T = v.intl.string(v.t.pj0XBN);
    I &&
        (null != g
            ? (T = (0, p.FY)({
                  intervalType: g?.subscription_trial?.interval,
                  intervalCount: g?.subscription_trial?.interval_count,
              }))
            : null != f && (T = v.intl.formatToPlainString(v.t.bkQ4bH, { percent: f.discount.amount })));
    let S = null;
    return (
        h ? (S = "new") : A && (S = "beta"),
        null != g && (S = "free_trial"),
        (0, i.jsx)(C.A, {
            subscriptionTier: _,
            children: (e) => {
                let { onClick: a } = e;
                return (0, i.jsx)(c.kpP, {
                    title: n,
                    subtitle: l,
                    graphic: s,
                    gradientColor: "nitro-pink",
                    transitionState: t,
                    onClose: async () => await o(),
                    actions: [
                        { text: u, variant: "secondary", size: "md", onClick: d },
                        {
                            text: T,
                            variant: "expressive",
                            size: "md",
                            onClick: async (e) => {
                                await o(), a(e);
                            },
                            icon: r.NitroWheelIcon,
                        },
                    ],
                    ...(null !== S && { badge: { type: S, variant: "expressive" } }),
                });
            },
        })
    );
}
