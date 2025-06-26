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
    G = () => {
        var e, t;
        (0, f.z)(h.X);
        let n = r.useRef(null),
            s = r.useRef(null),
            P = r.useRef(null),
            G = (0, m.ZP)(),
            F = (0, c.wj)(G),
            [H, z] = r.useState(!1),
            [Y, W] = r.useState(!1),
            [K, q] = r.useState(!1),
            [X, Q] = r.useState(!1),
            J = (0, a.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            $ = null != J ? (0, x.Af)(J) : null,
            ee = null != $ ? x.ZP.getSkuIdForPlan($.planId) : null,
            et = null !== ee && ee !== k.Si.TIER_2 ? k.Si.TIER_2 : null,
            en = (0, O.n)(),
            ei = null != en,
            er = (0, S.N)(),
            es = null == er || null == (e = er.subscription_trial) ? void 0 : e.sku_id,
            el = (0, j.Nx)(),
            ea = (0, E.Vi)(),
            eo = null != ea && ea,
            ec = null == (t = (0, C.Z)()) ? void 0 : t.billingSettingsMarketingBanner,
            { analyticsLocations: ed } = (0, p.ZP)(g.Z.PREMIUM_MARKETING),
            eu = 'PremiumMarketingHome';
        (0, u.j)({
            location: eu + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: eu + ' auto off',
                autoTrackExposure: !1
            }),
            r.useEffect(() => {
                Q(!0);
            }, []);
        let em = (0, i.jsx)('div', {
            className: M.premiumTierCardsContainerSettings,
            children: (0, i.jsx)(o.$, {
                innerRef: n,
                onChange: (e) => W(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(y.IY, {
                    innerRef: n,
                    tier0CTAButton: (0, i.jsx)(T.Z, {
                        showIcon: !1,
                        subscriptionTier: k.Si.TIER_0,
                        className: M.marginTopForButtons,
                        look: d.iLD.OUTLINED,
                        color: d.Ttl.WHITE,
                        buttonShineClassName: M.buttonShine
                    }),
                    tier2CTAButton:
                        es === k.Si.TIER_0
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
                                  hasActivePromotion: eo,
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
                    premiumSubscription: J,
                    className: l()(M.existingSubscriberSpacing, { [M.zIndex1]: el })
                }),
                (0, i.jsx)(V, { inOfferExperience: el }),
                ei
                    ? (0, i.jsx)(I.Z, {
                          localizedPricingPromo: en,
                          smallGap: !0
                      })
                    : (0, i.jsx)('div', {
                          children: (0, i.jsx)(o.$, {
                              innerRef: s,
                              onChange: (e) => z(e),
                              threshold: 0,
                              active: !0,
                              children: (0, i.jsx)(R.ZP, {
                                  ref: s,
                                  subscriptionTier: et,
                                  className: l()({
                                      [M.settingsHeroNoBackground]: el,
                                      [M.trialMarketingMargin]: el,
                                      [M.settingsHeroBogoHeight]: ea,
                                      [M.noTopPaddingOverride]: null != J
                                  }),
                                  isDarkMode: F
                              })
                          })
                      }),
                (0, i.jsx)('div', {
                    className: M.promoBannerContainer,
                    children: (0, i.jsx)(v.Z, { variant: v.C.NITRO_SETTINGS })
                }),
                em,
                null != ec &&
                    (0, i.jsx)(N.C, {
                        className: M.giftPromoCard,
                        config: ec
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
                    isVisible: !H && !Y && X,
                    subscriptionTier: et,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: ea
                }),
                (0, i.jsx)(o.$, {
                    innerRef: P,
                    onChange: (e) => {
                        e && !K && (_.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ed }), q(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: P,
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
