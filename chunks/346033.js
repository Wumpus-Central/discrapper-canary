(n.d(t, { Z: () => G }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(755721),
    u = n(410030),
    m = n(100527),
    p = n(906732),
    g = n(433811),
    h = n(214852),
    f = n(78839),
    b = n(626135),
    x = n(74538),
    _ = n(367074),
    j = n(140465),
    E = n(286961),
    O = n(91802),
    C = n(639119),
    v = n(8647),
    S = n(784238),
    T = n(605289),
    N = n(218390),
    I = n(823188),
    y = n(135785),
    A = n(498765),
    P = n(635921),
    R = n(177839),
    D = n(349803),
    Z = n(179984),
    w = n(474936),
    k = n(981631),
    L = n(388032),
    B = n(781793),
    M = n(536135),
    U = n(865215);
let V = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, i.jsx)(A.Z, { lifted: t }) : null;
    },
    G = () => {
        var e, t;
        (0, h.z)(g.X);
        let n = r.useRef(null),
            s = r.useRef(null),
            A = r.useRef(null),
            G = (0, u.ZP)(),
            F = (0, c.wj)(G),
            [H, z] = r.useState(!1),
            [W, Y] = r.useState(!1),
            [K, q] = r.useState(!1),
            [X, Q] = r.useState(!1),
            J = (0, l.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
            $ = null != J ? (0, x.Af)(J) : null,
            ee = null != $ ? x.ZP.getSkuIdForPlan($.planId) : null,
            et = null !== ee && ee !== w.Si.TIER_2 ? w.Si.TIER_2 : null,
            en = (0, O.n)(),
            ei = null != en,
            er = (0, C.N)(),
            es = null == er || null == (e = er.subscription_trial) ? void 0 : e.sku_id,
            ea = (0, j.Nx)(),
            el = (0, _.Vi)(),
            eo = null != el && el,
            ec = null == (t = (0, E.Z)()) ? void 0 : t.billingSettingsMarketingBanner,
            { analyticsLocations: ed } = (0, p.ZP)(m.Z.PREMIUM_MARKETING);
        r.useEffect(() => {
            Q(!0);
        }, []);
        let eu = (0, i.jsx)('div', {
            className: M.premiumTierCardsContainerSettings,
            children: (0, i.jsx)(o.$, {
                innerRef: n,
                onChange: (e) => Y(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(I.IY, {
                    innerRef: n,
                    tier0CTAButton: (0, i.jsx)(S.Z, {
                        showIcon: !1,
                        subscriptionTier: w.Si.TIER_0,
                        className: B.subButton,
                        look: d.iL.OUTLINED,
                        color: d.Tt.WHITE,
                        buttonShineClassName: B.buttonShine
                    }),
                    tier2CTAButton:
                        es === w.Si.TIER_0
                            ? (0, i.jsx)(S.Z, {
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_2,
                                  className: B.subButton,
                                  look: d.iL.OUTLINED,
                                  color: d.Tt.WHITE,
                                  buttonShineClassName: B.buttonShine
                              })
                            : (0, i.jsx)(S.Z, {
                                  color: d.Tt.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_2,
                                  className: B.subButton,
                                  hasActivePromotion: eo,
                                  textOptions: { textClassName: B.subButtonText },
                                  buttonShineClassName: B.buttonShine
                              })
                })
            })
        });
        return (0, i.jsxs)('div', {
            className: M.container,
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(y.Z, {
                    premiumSubscription: J,
                    className: a()(M.existingSubscriberSpacing, { [M.zIndex1]: ea })
                }),
                (0, i.jsx)(V, { inOfferExperience: ea }),
                ei
                    ? (0, i.jsx)(T.Z, {
                          localizedPricingPromo: en,
                          smallGap: !0
                      })
                    : (0, i.jsx)('div', {
                          children: (0, i.jsx)(o.$, {
                              innerRef: s,
                              onChange: (e) => z(e),
                              threshold: 0,
                              active: !0,
                              children: (0, i.jsx)(P.ZP, {
                                  ref: s,
                                  subscriptionTier: et,
                                  className: a()({
                                      [M.settingsHeroNoBackground]: ea,
                                      [M.trialMarketingMargin]: ea,
                                      [M.settingsHeroBogoHeight]: el,
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
                eu,
                null != ec &&
                    (0, i.jsx)(N.C, {
                        className: M.giftPromoCard,
                        config: ec
                    }),
                (0, i.jsx)(R.Z, { className: M.perkCardsContainerSpacingSettings }),
                (0, i.jsx)('div', {
                    className: M.planComparisonTableContainer,
                    children: (0, i.jsx)(Z.Z, {
                        className: M.planComparisonTable,
                        hideCTAs: !0
                    })
                }),
                (0, i.jsx)('div', { className: M.footerSpacing }),
                (0, i.jsx)(D.Z, {
                    isVisible: !H && !W && X,
                    subscriptionTier: et,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: el
                }),
                (0, i.jsx)(o.$, {
                    innerRef: A,
                    onChange: (e) => {
                        e && !K && (b.default.track(k.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ed }), q(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: A,
                        className: M.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)('img', {
                    src: U,
                    className: M.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: L.intl.string(L.t.X4IxWF)
                })
            ]
        });
    };
