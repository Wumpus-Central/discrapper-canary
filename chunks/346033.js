n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
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
    A = n(135785),
    C = n(498765),
    N = n(635921),
    R = n(177839),
    P = n(349803),
    D = n(179984),
    w = n(474936),
    L = n(981631),
    x = n(388032),
    M = n(163594),
    k = n(476284),
    j = n(865215);
let U = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, r.jsx)(C.Z, { lifted: t }) : null;
    },
    G = () => {
        var e, t;
        (0, h.z)(p.X);
        let n = i.useRef(null),
            a = i.useRef(null),
            C = i.useRef(null),
            G = (0, d.ZP)(),
            B = (0, c.wj)(G),
            [Z, F] = i.useState(!1),
            [V, H] = i.useState(!1),
            [Y, W] = i.useState(!1),
            K = !Z && !V,
            [z, q] = i.useState(!1),
            X = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            Q = null != X ? (0, E.Af)(X) : null,
            J = null != Q ? E.ZP.getSkuIdForPlan(Q.planId) : null,
            $ = null !== J && J !== w.Si.TIER_2 ? w.Si.TIER_2 : null,
            ee = (0, v.N)(),
            et = null == ee || null == (e = ee.subscription_trial) ? void 0 : e.sku_id,
            en = (0, y.Nx)(),
            er = (0, b.Vi)(),
            ei = null != er && er,
            ea = null == (t = (0, O.Z)()) ? void 0 : t.billingSettingsMarketingBanner,
            { analyticsLocations: eo } = (0, _.ZP)(f.Z.PREMIUM_MARKETING);
        i.useEffect(() => {
            q(!0);
        }, []);
        let es = (0, r.jsx)("div", {
            className: k.premiumTierCardsContainerSettings,
            children: (0, r.jsx)(l.$, {
                innerRef: n,
                onChange: (e) => H(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(S.IY, {
                    innerRef: n,
                    tier0CTAButton: (0, r.jsx)(I.Z, {
                        showIcon: !1,
                        subscriptionTier: w.Si.TIER_0,
                        className: M.subButton,
                        look: u.iL.OUTLINED,
                        color: u.Tt.WHITE,
                        buttonShineClassName: M.buttonShine,
                    }),
                    tier2CTAButton:
                        et === w.Si.TIER_0
                            ? (0, r.jsx)(I.Z, {
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_2,
                                  className: M.subButton,
                                  look: u.iL.OUTLINED,
                                  color: u.Tt.WHITE,
                                  buttonShineClassName: M.buttonShine,
                              })
                            : (0, r.jsx)(I.Z, {
                                  color: u.Tt.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_2,
                                  className: M.subButton,
                                  hasActivePromotion: ei,
                                  textOptions: { textClassName: M.subButtonText },
                                  buttonShineClassName: M.buttonShine,
                              }),
                }),
            }),
        });
        return (0, r.jsxs)("div", {
            className: k.container,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(A.Z, {
                    premiumSubscription: X,
                    className: o()(k.existingSubscriberSpacing, { [k.zIndex1]: en }),
                }),
                (0, r.jsx)(U, { inOfferExperience: en }),
                (0, r.jsxs)("div", {
                    className: o()({ [k.settingsContainer]: !en }),
                    children: [
                        null != ea &&
                            (0, r.jsx)(T.C, {
                                className: k.giftPromoCard,
                                config: ea,
                            }),
                        (0, r.jsx)(l.$, {
                            innerRef: a,
                            onChange: (e) => F(e),
                            threshold: 0,
                            active: !0,
                            children: (0, r.jsx)(N.ZP, {
                                ref: a,
                                subscriptionTier: $,
                                className: o()({
                                    [k.settingsHeroNoBackground]: en,
                                    [k.trialMarketingMargin]: en,
                                    [k.settingsHeroBogoHeight]: er,
                                    [k.noTopPaddingOverride]: null != X,
                                }),
                                isDarkMode: B,
                            }),
                        }),
                    ],
                }),
                es,
                (0, r.jsx)(R.Z, { className: k.perkCardsContainerSpacingSettings }),
                (0, r.jsx)("div", {
                    className: k.planComparisonTableContainer,
                    children: (0, r.jsx)(D.Z, {
                        className: k.planComparisonTable,
                        hideCTAs: !0,
                    }),
                }),
                (0, r.jsx)("div", { className: k.footerSpacing }),
                (0, r.jsx)(P.Z, {
                    isVisible: K && z,
                    subscriptionTier: $,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: er,
                }),
                (0, r.jsx)(l.$, {
                    innerRef: C,
                    onChange: (e) => {
                        e &&
                            !Y &&
                            (g.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eo }),
                            W(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: C,
                        className: k.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)("img", {
                    src: j,
                    className: k.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: x.intl.string(x.t.X4IxWL),
                }),
            ],
        });
    };
