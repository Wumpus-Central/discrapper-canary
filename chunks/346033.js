(n.d(t, { Z: () => U }), n(388685));
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
    O = n(286961),
    C = n(639119),
    E = n(8647),
    v = n(784238),
    S = n(218390),
    T = n(823188),
    N = n(135785),
    I = n(498765),
    y = n(635921),
    A = n(177839),
    P = n(349803),
    R = n(179984),
    D = n(474936),
    Z = n(981631),
    w = n(388032),
    k = n(781793),
    L = n(536135),
    B = n(865215);
let M = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, i.jsx)(I.Z, { lifted: t }) : null;
    },
    U = () => {
        var e, t;
        (0, h.z)(g.X);
        let n = r.useRef(null),
            s = r.useRef(null),
            I = r.useRef(null),
            U = (0, u.ZP)(),
            V = (0, c.wj)(U),
            [G, F] = r.useState(!1),
            [H, z] = r.useState(!1),
            [W, Y] = r.useState(!1),
            [K, q] = r.useState(!1),
            X = (0, l.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
            J = null != X ? (0, x.Af)(X) : null,
            Q = null != J ? x.ZP.getSkuIdForPlan(J.planId) : null,
            $ = null !== Q && Q !== D.Si.TIER_2 ? D.Si.TIER_2 : null,
            ee = (0, C.N)(),
            et = null == ee || null == (e = ee.subscription_trial) ? void 0 : e.sku_id,
            en = (0, j.Nx)(),
            ei = (0, _.Vi)(),
            er = null != ei && ei,
            es = null == (t = (0, O.Z)()) ? void 0 : t.billingSettingsMarketingBanner,
            { analyticsLocations: ea } = (0, p.ZP)(m.Z.PREMIUM_MARKETING);
        r.useEffect(() => {
            q(!0);
        }, []);
        let el = (0, i.jsx)('div', {
            className: L.premiumTierCardsContainerSettings,
            children: (0, i.jsx)(o.$, {
                innerRef: n,
                onChange: (e) => z(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(T.IY, {
                    innerRef: n,
                    tier0CTAButton: (0, i.jsx)(v.Z, {
                        showIcon: !1,
                        subscriptionTier: D.Si.TIER_0,
                        className: k.subButton,
                        look: d.iL.OUTLINED,
                        color: d.Tt.WHITE,
                        buttonShineClassName: k.buttonShine
                    }),
                    tier2CTAButton:
                        et === D.Si.TIER_0
                            ? (0, i.jsx)(v.Z, {
                                  showIcon: !1,
                                  subscriptionTier: D.Si.TIER_2,
                                  className: k.subButton,
                                  look: d.iL.OUTLINED,
                                  color: d.Tt.WHITE,
                                  buttonShineClassName: k.buttonShine
                              })
                            : (0, i.jsx)(v.Z, {
                                  color: d.Tt.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: D.Si.TIER_2,
                                  className: k.subButton,
                                  hasActivePromotion: er,
                                  textOptions: { textClassName: k.subButtonText },
                                  buttonShineClassName: k.buttonShine
                              })
                })
            })
        });
        return (0, i.jsxs)('div', {
            className: L.container,
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(N.Z, {
                    premiumSubscription: X,
                    className: a()(L.existingSubscriberSpacing, { [L.zIndex1]: en })
                }),
                (0, i.jsx)(M, { inOfferExperience: en }),
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(o.$, {
                        innerRef: s,
                        onChange: (e) => F(e),
                        threshold: 0,
                        active: !0,
                        children: (0, i.jsx)(y.ZP, {
                            ref: s,
                            subscriptionTier: $,
                            className: a()({
                                [L.settingsHeroNoBackground]: en,
                                [L.trialMarketingMargin]: en,
                                [L.settingsHeroBogoHeight]: ei,
                                [L.noTopPaddingOverride]: null != X
                            }),
                            isDarkMode: V
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: L.promoBannerContainer,
                    children: (0, i.jsx)(E.Z, { variant: E.C.NITRO_SETTINGS })
                }),
                el,
                null != es &&
                    (0, i.jsx)(S.C, {
                        className: L.giftPromoCard,
                        config: es
                    }),
                (0, i.jsx)(A.Z, { className: L.perkCardsContainerSpacingSettings }),
                (0, i.jsx)('div', {
                    className: L.planComparisonTableContainer,
                    children: (0, i.jsx)(R.Z, {
                        className: L.planComparisonTable,
                        hideCTAs: !0
                    })
                }),
                (0, i.jsx)('div', { className: L.footerSpacing }),
                (0, i.jsx)(P.Z, {
                    isVisible: !G && !H && K,
                    subscriptionTier: $,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: ei
                }),
                (0, i.jsx)(o.$, {
                    innerRef: I,
                    onChange: (e) => {
                        e && !W && (b.default.track(Z.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ea }), Y(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: I,
                        className: L.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)('img', {
                    src: B,
                    className: L.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: w.intl.string(w.t.X4IxWF)
                })
            ]
        });
    };
