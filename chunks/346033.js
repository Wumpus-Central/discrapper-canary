n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(780384),
    u = n(755721),
    d = n(410030),
    f = n(100527),
    _ = n(906732),
    p = n(433811),
    h = n(214852),
    m = n(78839),
    g = n(626135),
    E = n(74538),
    b = n(367074),
    y = n(140465),
    O = n(347896),
    v = n(639119),
    I = n(784238),
    T = n(218390),
    S = n(823188),
    A = n(951570),
    C = n(337715),
    N = n(135785),
    R = n(498765),
    P = n(635921),
    w = n(177839),
    D = n(349803),
    x = n(179984),
    L = n(474936),
    j = n(981631),
    k = n(388032),
    M = n(163594),
    U = n(476284),
    G = n(865215);
let B = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, r.jsx)(R.Z, { lifted: t }) : null;
    },
    Z = () => {
        var e, t;
        (0, h.z)(p.X);
        let n = i.useRef(null),
            a = i.useRef(null),
            R = i.useRef(null),
            Z = (0, d.ZP)(),
            F = (0, c.wj)(Z),
            [V, H] = i.useState(!1),
            [Y, W] = i.useState(!1),
            [K, z] = i.useState(!1),
            q = !V && !Y,
            [X, Q] = i.useState(!1),
            J = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            $ = null != J ? (0, E.Af)(J) : null,
            ee = null != $ ? E.ZP.getSkuIdForPlan($.planId) : null,
            et = null !== ee && ee !== L.Si.TIER_2 ? L.Si.TIER_2 : null,
            en = (0, v.N)(),
            er = null == en || null == (e = en.subscription_trial) ? void 0 : e.sku_id,
            ei = (0, y.Nx)(),
            ea = (0, b.Vi)(),
            eo = null != ea && ea,
            es = null == (t = (0, O.Z)()) ? void 0 : t.billingSettingsMarketingBanner,
            { isEligible: el, cohort: ec } = (0, A.Q1)(),
            { analyticsLocations: eu } = (0, _.ZP)(f.Z.PREMIUM_MARKETING);
        i.useEffect(() => {
            Q(!0);
        }, []);
        let ed = (0, r.jsx)("div", {
            className: U.premiumTierCardsContainerSettings,
            children: (0, r.jsx)(l.$, {
                innerRef: n,
                onChange: (e) => W(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(S.IY, {
                    innerRef: n,
                    tier0CTAButton: (0, r.jsx)(I.Z, {
                        showIcon: !1,
                        subscriptionTier: L.Si.TIER_0,
                        className: M.subButton,
                        look: u.iL.OUTLINED,
                        color: u.Tt.WHITE,
                        buttonShineClassName: M.buttonShine,
                    }),
                    tier2CTAButton:
                        er === L.Si.TIER_0
                            ? (0, r.jsx)(I.Z, {
                                  showIcon: !1,
                                  subscriptionTier: L.Si.TIER_2,
                                  className: M.subButton,
                                  look: u.iL.OUTLINED,
                                  color: u.Tt.WHITE,
                                  buttonShineClassName: M.buttonShine,
                              })
                            : (0, r.jsx)(I.Z, {
                                  color: u.Tt.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: L.Si.TIER_2,
                                  className: M.subButton,
                                  hasActivePromotion: eo,
                                  textOptions: { textClassName: M.subButtonText },
                                  buttonShineClassName: M.buttonShine,
                              }),
                }),
            }),
        });
        return (0, r.jsxs)("div", {
            className: U.container,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(N.Z, {
                    premiumSubscription: J,
                    className: o()(U.existingSubscriberSpacing, { [U.zIndex1]: ei }),
                }),
                (0, r.jsx)(B, { inOfferExperience: ei }),
                (0, r.jsxs)("div", {
                    children: [
                        null != es &&
                            (0, r.jsx)(T.C, {
                                className: U.giftPromoCard,
                                config: es,
                            }),
                        (0, r.jsx)(l.$, {
                            innerRef: a,
                            onChange: (e) => H(e),
                            threshold: 0,
                            active: !0,
                            children: (0, r.jsx)(P.ZP, {
                                ref: a,
                                subscriptionTier: et,
                                className: o()({
                                    [U.settingsHeroNoBackground]: ei,
                                    [U.trialMarketingMargin]: ei,
                                    [U.settingsHeroBogoHeight]: ea,
                                    [U.noTopPaddingOverride]: null != J,
                                }),
                                isDarkMode: F,
                            }),
                        }),
                    ],
                }),
                el &&
                    (0, r.jsx)("div", {
                        className: U.promoBannerContainer,
                        children: (0, r.jsx)(C.Z, { cohort: ec }),
                    }),
                ed,
                (0, r.jsx)(w.Z, { className: U.perkCardsContainerSpacingSettings }),
                (0, r.jsx)("div", {
                    className: U.planComparisonTableContainer,
                    children: (0, r.jsx)(x.Z, {
                        className: U.planComparisonTable,
                        hideCTAs: !0,
                    }),
                }),
                (0, r.jsx)("div", { className: U.footerSpacing }),
                (0, r.jsx)(D.Z, {
                    isVisible: q && X,
                    subscriptionTier: et,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: ea,
                }),
                (0, r.jsx)(l.$, {
                    innerRef: R,
                    onChange: (e) => {
                        e &&
                            !K &&
                            (g.default.track(j.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eu }),
                            z(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: R,
                        className: U.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)("img", {
                    src: G,
                    className: U.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: k.intl.string(k.t.X4IxWF),
                }),
            ],
        });
    };
