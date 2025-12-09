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
    p = n(906732),
    _ = n(433811),
    m = n(214852),
    h = n(78839),
    g = n(626135),
    E = n(74538),
    b = n(367074),
    y = n(140465),
    O = n(347896),
    v = n(639119),
    S = n(784238),
    I = n(218390),
    T = n(823188),
    A = n(135785),
    C = n(498765),
    N = n(635921),
    P = n(177839),
    R = n(349803),
    D = n(179984),
    w = n(474936),
    x = n(981631),
    L = n(388032),
    j = n(740150),
    M = n(689095),
    k = n(865215);
let U = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, r.jsx)(C.Z, { lifted: t }) : null;
    },
    G = () => {
        var e, t;
        (0, m.z)(_.X);
        let n = i.useRef(null),
            a = i.useRef(null),
            C = i.useRef(null),
            G = (0, d.ZP)(),
            Z = (0, c.wj)(G),
            [B, F] = i.useState(!1),
            [V, H] = i.useState(!1),
            [Y, W] = i.useState(!1),
            K = !B && !V,
            [z, q] = i.useState(!1),
            Q = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
            X = null != Q ? (0, E.Af)(Q) : null,
            J = null != X ? E.ZP.getSkuIdForPlan(X.planId) : null,
            $ = null !== J && J !== w.Si.TIER_2 ? w.Si.TIER_2 : null,
            ee = (0, v.N)(),
            et = null == ee || null == (e = ee.subscription_trial) ? void 0 : e.sku_id,
            en = (0, y.Nx)(),
            er = (0, b.Vi)(),
            ei = null != er && er,
            ea = null == (t = (0, O.Z)()) ? void 0 : t.billingSettingsMarketingBanner,
            { analyticsLocations: eo } = (0, p.ZP)(f.Z.PREMIUM_MARKETING);
        i.useEffect(() => {
            q(!0);
        }, []);
        let es = (0, r.jsx)("div", {
            className: M.premiumTierCardsContainerSettings,
            children: (0, r.jsx)(l.$, {
                innerRef: n,
                onChange: (e) => H(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(T.IY, {
                    innerRef: n,
                    tier0CTAButton: (0, r.jsx)(S.Z, {
                        showIcon: !1,
                        subscriptionTier: w.Si.TIER_0,
                        className: j.subButton,
                        look: u.iL.OUTLINED,
                        color: u.Tt.WHITE,
                        buttonShineClassName: j.buttonShine,
                    }),
                    tier2CTAButton:
                        et === w.Si.TIER_0
                            ? (0, r.jsx)(S.Z, {
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_2,
                                  className: j.subButton,
                                  look: u.iL.OUTLINED,
                                  color: u.Tt.WHITE,
                                  buttonShineClassName: j.buttonShine,
                              })
                            : (0, r.jsx)(S.Z, {
                                  color: u.Tt.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_2,
                                  className: j.subButton,
                                  hasActivePromotion: ei,
                                  textOptions: { textClassName: j.subButtonText },
                                  buttonShineClassName: j.buttonShine,
                              }),
                }),
            }),
        });
        return (0, r.jsxs)("div", {
            className: M.container,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(A.Z, {
                    premiumSubscription: Q,
                    className: o()(M.existingSubscriberSpacing, { [M.zIndex1]: en }),
                }),
                (0, r.jsx)(U, { inOfferExperience: en }),
                (0, r.jsxs)("div", {
                    className: o()({ [M.settingsContainer]: !en }),
                    children: [
                        null != ea &&
                            (0, r.jsx)(I.C, {
                                className: M.giftPromoCard,
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
                                    [M.settingsHeroNoBackground]: en,
                                    [M.trialMarketingMargin]: en,
                                    [M.settingsHeroBogoHeight]: er,
                                    [M.noTopPaddingOverride]: null != Q,
                                }),
                                isDarkMode: Z,
                            }),
                        }),
                    ],
                }),
                es,
                (0, r.jsx)(P.Z, { className: M.perkCardsContainerSpacingSettings }),
                (0, r.jsx)("div", {
                    className: M.planComparisonTableContainer,
                    children: (0, r.jsx)(D.Z, {
                        className: M.planComparisonTable,
                        hideCTAs: !0,
                    }),
                }),
                (0, r.jsx)("div", { className: M.footerSpacing }),
                (0, r.jsx)(R.Z, {
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
                            (g.default.track(x.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eo }),
                            W(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: C,
                        className: M.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)("img", {
                    src: k,
                    className: M.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: L.intl.string(L.t.X4IxWL),
                }),
            ],
        });
    };
