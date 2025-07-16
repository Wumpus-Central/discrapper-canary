(n.d(t, { Z: () => F }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(755721),
    u = n(634894),
    m = n(410030),
    p = n(100527),
    g = n(906732),
    h = n(433811),
    f = n(214852),
    b = n(78839),
    x = n(626135),
    _ = n(74538),
    j = n(367074),
    E = n(140465),
    O = n(286961),
    C = n(91802),
    v = n(639119),
    S = n(8647),
    T = n(784238),
    N = n(605289),
    I = n(218390),
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
    M = n(781793),
    U = n(536135),
    V = n(865215);
let G = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, i.jsx)(P.Z, { lifted: t }) : null;
    },
    F = () => {
        var e, t;
        (0, f.z)(h.X);
        let n = r.useRef(null),
            s = r.useRef(null),
            P = r.useRef(null),
            F = (0, m.ZP)(),
            H = (0, c.wj)(F),
            [z, W] = r.useState(!1),
            [Y, K] = r.useState(!1),
            [q, X] = r.useState(!1),
            [J, Q] = r.useState(!1),
            $ = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
            ee = null != $ ? (0, _.Af)($) : null,
            et = null != ee ? _.ZP.getSkuIdForPlan(ee.planId) : null,
            en = null !== et && et !== k.Si.TIER_2 ? k.Si.TIER_2 : null,
            ei = (0, C.n)(),
            er = null != ei,
            es = (0, v.N)(),
            ea = null == es || null == (e = es.subscription_trial) ? void 0 : e.sku_id,
            el = (0, E.Nx)(),
            eo = (0, j.Vi)(),
            ec = null != eo && eo,
            ed = null == (t = (0, O.Z)()) ? void 0 : t.billingSettingsMarketingBanner,
            { analyticsLocations: eu } = (0, g.ZP)(p.Z.PREMIUM_MARKETING),
            em = 'PremiumMarketingHome';
        ((0, u.j)({
            location: em + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: em + ' auto off',
                autoTrackExposure: !1
            }),
            r.useEffect(() => {
                Q(!0);
            }, []));
        let ep = (0, i.jsx)('div', {
            className: U.premiumTierCardsContainerSettings,
            children: (0, i.jsx)(o.$, {
                innerRef: n,
                onChange: (e) => K(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(y.IY, {
                    innerRef: n,
                    tier0CTAButton: (0, i.jsx)(T.Z, {
                        showIcon: !1,
                        subscriptionTier: k.Si.TIER_0,
                        className: M.subButton,
                        look: d.iL.OUTLINED,
                        color: d.Tt.WHITE,
                        buttonShineClassName: M.buttonShine
                    }),
                    tier2CTAButton:
                        ea === k.Si.TIER_0
                            ? (0, i.jsx)(T.Z, {
                                  showIcon: !1,
                                  subscriptionTier: k.Si.TIER_2,
                                  className: M.subButton,
                                  look: d.iL.OUTLINED,
                                  color: d.Tt.WHITE,
                                  buttonShineClassName: M.buttonShine
                              })
                            : (0, i.jsx)(T.Z, {
                                  color: d.Tt.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: k.Si.TIER_2,
                                  className: M.subButton,
                                  hasActivePromotion: ec,
                                  textOptions: { textClassName: M.subButtonText },
                                  buttonShineClassName: M.buttonShine
                              })
                })
            })
        });
        return (0, i.jsxs)('div', {
            className: U.container,
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(A.Z, {
                    premiumSubscription: $,
                    className: a()(U.existingSubscriberSpacing, { [U.zIndex1]: el })
                }),
                (0, i.jsx)(G, { inOfferExperience: el }),
                er
                    ? (0, i.jsx)(N.Z, {
                          localizedPricingPromo: ei,
                          smallGap: !0
                      })
                    : (0, i.jsx)('div', {
                          children: (0, i.jsx)(o.$, {
                              innerRef: s,
                              onChange: (e) => W(e),
                              threshold: 0,
                              active: !0,
                              children: (0, i.jsx)(R.ZP, {
                                  ref: s,
                                  subscriptionTier: en,
                                  className: a()({
                                      [U.settingsHeroNoBackground]: el,
                                      [U.trialMarketingMargin]: el,
                                      [U.settingsHeroBogoHeight]: eo,
                                      [U.noTopPaddingOverride]: null != $
                                  }),
                                  isDarkMode: H
                              })
                          })
                      }),
                (0, i.jsx)('div', {
                    className: U.promoBannerContainer,
                    children: (0, i.jsx)(S.Z, { variant: S.C.NITRO_SETTINGS })
                }),
                ep,
                null != ed &&
                    (0, i.jsx)(I.C, {
                        className: U.giftPromoCard,
                        config: ed
                    }),
                (0, i.jsx)(D.Z, { className: U.perkCardsContainerSpacingSettings }),
                (0, i.jsx)('div', {
                    className: U.planComparisonTableContainer,
                    children: (0, i.jsx)(w.Z, {
                        className: U.planComparisonTable,
                        hideCTAs: !0
                    })
                }),
                (0, i.jsx)('div', { className: U.footerSpacing }),
                (0, i.jsx)(Z.Z, {
                    isVisible: !z && !Y && J,
                    subscriptionTier: en,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: eo
                }),
                (0, i.jsx)(o.$, {
                    innerRef: P,
                    onChange: (e) => {
                        e && !q && (x.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eu }), X(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: P,
                        className: U.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)('img', {
                    src: V,
                    className: U.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: B.intl.string(B.t.X4IxWF)
                })
            ]
        });
    };
