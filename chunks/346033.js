n.d(t, { Z: () => B }), n(388685);
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
    I = n(8647),
    T = n(784238),
    S = n(218390),
    A = n(823188),
    C = n(135785),
    N = n(498765),
    R = n(635921),
    P = n(177839),
    w = n(349803),
    D = n(179984),
    x = n(474936),
    L = n(981631),
    j = n(388032),
    M = n(740150),
    k = n(689095),
    U = n(865215);
let G = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, r.jsx)(N.Z, { lifted: t }) : null;
    },
    B = () => {
        var e, t;
        (0, h.z)(p.X);
        let n = i.useRef(null),
            a = i.useRef(null),
            N = i.useRef(null),
            B = (0, d.ZP)(),
            Z = (0, c.wj)(B),
            [V, F] = i.useState(!1),
            [H, Y] = i.useState(!1),
            [W, K] = i.useState(!1),
            z = !V && !H,
            [q, X] = i.useState(!1),
            Q = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
            J = null != Q ? (0, E.Af)(Q) : null,
            $ = null != J ? E.ZP.getSkuIdForPlan(J.planId) : null,
            ee = null !== $ && $ !== x.Si.TIER_2 ? x.Si.TIER_2 : null,
            et = (0, v.N)(),
            en = null == et || null == (e = et.subscription_trial) ? void 0 : e.sku_id,
            er = (0, y.Nx)(),
            ei = (0, b.Vi)(),
            ea = null != ei && ei,
            eo = null == (t = (0, O.Z)()) ? void 0 : t.billingSettingsMarketingBanner,
            { analyticsLocations: es } = (0, _.ZP)(f.Z.PREMIUM_MARKETING);
        i.useEffect(() => {
            X(!0);
        }, []);
        let el = (0, r.jsx)("div", {
            className: k.premiumTierCardsContainerSettings,
            children: (0, r.jsx)(l.$, {
                innerRef: n,
                onChange: (e) => Y(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(A.IY, {
                    innerRef: n,
                    tier0CTAButton: (0, r.jsx)(T.Z, {
                        showIcon: !1,
                        subscriptionTier: x.Si.TIER_0,
                        className: M.subButton,
                        look: u.iL.OUTLINED,
                        color: u.Tt.WHITE,
                        buttonShineClassName: M.buttonShine,
                    }),
                    tier2CTAButton:
                        en === x.Si.TIER_0
                            ? (0, r.jsx)(T.Z, {
                                  showIcon: !1,
                                  subscriptionTier: x.Si.TIER_2,
                                  className: M.subButton,
                                  look: u.iL.OUTLINED,
                                  color: u.Tt.WHITE,
                                  buttonShineClassName: M.buttonShine,
                              })
                            : (0, r.jsx)(T.Z, {
                                  color: u.Tt.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: x.Si.TIER_2,
                                  className: M.subButton,
                                  hasActivePromotion: ea,
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
                (0, r.jsx)(C.Z, {
                    premiumSubscription: Q,
                    className: o()(k.existingSubscriberSpacing, { [k.zIndex1]: er }),
                }),
                (0, r.jsx)(G, { inOfferExperience: er }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.$, {
                        innerRef: a,
                        onChange: (e) => F(e),
                        threshold: 0,
                        active: !0,
                        children: (0, r.jsx)(R.ZP, {
                            ref: a,
                            subscriptionTier: ee,
                            className: o()({
                                [k.settingsHeroNoBackground]: er,
                                [k.trialMarketingMargin]: er,
                                [k.settingsHeroBogoHeight]: ei,
                                [k.noTopPaddingOverride]: null != Q,
                            }),
                            isDarkMode: Z,
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: k.promoBannerContainer,
                    children: (0, r.jsx)(I.Z, { variant: I.C.NITRO_SETTINGS }),
                }),
                el,
                null != eo &&
                    (0, r.jsx)(S.C, {
                        className: k.giftPromoCard,
                        config: eo,
                    }),
                (0, r.jsx)(P.Z, { className: k.perkCardsContainerSpacingSettings }),
                (0, r.jsx)("div", {
                    className: k.planComparisonTableContainer,
                    children: (0, r.jsx)(D.Z, {
                        className: k.planComparisonTable,
                        hideCTAs: !0,
                    }),
                }),
                (0, r.jsx)("div", { className: k.footerSpacing }),
                (0, r.jsx)(w.Z, {
                    isVisible: z && q,
                    subscriptionTier: ee,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: ei,
                }),
                (0, r.jsx)(l.$, {
                    innerRef: N,
                    onChange: (e) => {
                        e &&
                            !W &&
                            (g.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: es }),
                            K(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: N,
                        className: k.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)("img", {
                    src: U,
                    className: k.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: j.intl.string(j.t.X4IxWF),
                }),
            ],
        });
    };
