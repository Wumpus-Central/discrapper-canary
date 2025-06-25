n.d(t, { Z: () => G }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(634894),
    m = n(410030),
    g = n(100527),
    p = n(906732),
    h = n(433811),
    f = n(214852),
    b = n(78839),
    _ = n(626135),
    x = n(74538),
    E = n(367074),
    j = n(140465),
    C = n(286961),
    O = n(91802),
    S = n(639119),
    v = n(8647),
    T = n(784238),
    I = n(605289),
    N = n(218390),
    y = n(823188),
    A = n(135785),
    P = n(498765),
    R = n(635921),
    D = n(177839),
    Z = n(349803),
    w = n(179984),
    k = n(474936),
    L = n(981631),
    B = n(388032),
    M = n(651117),
    U = n(865215);
let V = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, i.jsx)(P.Z, { lifted: t }) : null;
    },
    G = (e) => {
        var t, n;
        let { entrypoint: s } = e;
        (0, f.z)(h.X);
        let P = r.useRef(null),
            G = r.useRef(null),
            F = r.useRef(null),
            H = (0, m.ZP)(),
            z = (0, c.wj)(H),
            [Y, W] = r.useState(!1),
            [K, q] = r.useState(!1),
            [X, J] = r.useState(!1),
            [Q, $] = r.useState(!1),
            ee = (0, a.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            et = null != ee ? (0, x.Af)(ee) : null,
            en = null != et ? x.ZP.getSkuIdForPlan(et.planId) : null,
            ei = null !== en && en !== k.Si.TIER_2 ? k.Si.TIER_2 : null,
            er = (0, O.n)(),
            es = null != er,
            el = (0, S.N)(),
            ea = null == el || null == (t = el.subscription_trial) ? void 0 : t.sku_id,
            eo = (0, j.Nx)(),
            ec = (0, E.Vi)(),
            ed = null != ec && ec,
            eu = null == (n = (0, C.Z)()) ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: em } = (0, p.ZP)(g.Z.PREMIUM_MARKETING),
            eg = 'PremiumMarketingHome';
        (0, u.j)({
            location: eg + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: eg + ' auto off',
                autoTrackExposure: !1
            }),
            r.useEffect(() => {
                $(!0);
            }, []);
        let ep = (0, i.jsx)('div', {
            className: M.premiumTierCardsContainerSettings,
            children: (0, i.jsx)(o.$, {
                innerRef: P,
                onChange: (e) => q(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(y.ZP, {
                    innerRef: P,
                    isApplicationHome: !1,
                    showWumpus: !0,
                    tier0CTAButton: (0, i.jsx)(T.Z, {
                        showIcon: !1,
                        subscriptionTier: k.Si.TIER_0,
                        className: M.marginTopForButtons,
                        look: d.iLD.OUTLINED,
                        color: d.Ttl.WHITE,
                        buttonShineClassName: M.buttonShine
                    }),
                    tier2CTAButton:
                        ea === k.Si.TIER_0
                            ? (0, i.jsx)(T.Z, {
                                  showIcon: !1,
                                  subscriptionTier: k.Si.TIER_2,
                                  className: M.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: M.buttonShine
                              })
                            : (0, i.jsx)(T.Z, {
                                  color: d.Ttl.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: k.Si.TIER_2,
                                  className: M.marginTopForButtons,
                                  hasActivePromotion: ed,
                                  textOptions: { textClassName: M.subButtonText },
                                  buttonShineClassName: M.buttonShine
                              })
                })
            })
        });
        return (0, i.jsxs)('div', {
            className: l()(M.container, M.settingsContainer),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(A.Z, {
                    premiumSubscription: ee,
                    className: l()(M.existingSubscriberSpacing, { [M.zIndex1]: eo }),
                    isFullscreen: !1
                }),
                (0, i.jsx)(V, { inOfferExperience: eo }),
                es
                    ? (0, i.jsx)(I.Z, {
                          localizedPricingPromo: er,
                          smallGap: !0
                      })
                    : (0, i.jsx)('div', {
                          children: (0, i.jsx)(o.$, {
                              innerRef: G,
                              onChange: (e) => W(e),
                              threshold: 0,
                              active: !0,
                              children: (0, i.jsx)(R.ZP, {
                                  ref: G,
                                  subscriptionTier: ei,
                                  isFullscreen: eo,
                                  isApplicationHome: !1,
                                  className: l()({
                                      [M.settingsHeroNoBackground]: eo,
                                      [M.trialMarketingMargin]: eo,
                                      [M.settingsHeroBogoHeight]: ec,
                                      [M.noTopPaddingOverride]: null != ee
                                  }),
                                  entrypoint: s,
                                  isDarkMode: z
                              })
                          })
                      }),
                (0, i.jsx)('div', {
                    className: M.promoBannerContainer,
                    children: (0, i.jsx)(v.Z, { variant: v.C.NITRO_SETTINGS })
                }),
                ep,
                s === k.EZ.UserSettings &&
                    null != eu &&
                    (0, i.jsx)(N.C, {
                        className: M.giftPromoCard,
                        config: eu
                    }),
                (0, i.jsx)(D.Z, { className: M.perkCardsContainerSpacingSettings }),
                (0, i.jsx)('div', {
                    className: M.planComparisonTableContainer,
                    children: (0, i.jsx)(w.Z, {
                        className: M.planComparisonTable,
                        hideCTAs: !0
                    })
                }),
                (0, i.jsx)('div', { className: M.footerSpacing }),
                (0, i.jsx)(Z.Z, {
                    isVisible: !Y && !K && Q,
                    isFullscreen: !1,
                    subscriptionTier: ei,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: ec
                }),
                (0, i.jsx)(o.$, {
                    innerRef: F,
                    onChange: (e) => {
                        e && !X && (_.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: em }), J(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: F,
                        className: M.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)('img', {
                    src: U,
                    className: M.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: B.intl.string(B.t.X4IxWF)
                })
            ]
        });
    };
