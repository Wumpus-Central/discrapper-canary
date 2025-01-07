n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(634894),
    g = n(410030),
    m = n(607070),
    f = n(100527),
    p = n(906732),
    _ = n(70097),
    h = n(464824),
    x = n(214852),
    E = n(594174),
    b = n(78839),
    C = n(626135),
    v = n(526167),
    T = n(74538),
    N = n(140465),
    I = n(278605),
    S = n(286961),
    R = n(91802),
    j = n(104494),
    A = n(639119),
    P = n(8647),
    O = n(568126),
    Z = n(605289),
    M = n(346497),
    B = n(218390),
    y = n(823188),
    w = n(241158),
    k = n(135785),
    L = n(498765),
    U = n(635921),
    D = n(177839),
    G = n(794484),
    H = n(392521),
    V = n(349803),
    F = n(179984),
    W = n(706542),
    z = n(851001),
    Y = n(304576),
    K = n(409100),
    Q = n(391110),
    q = n(71363),
    J = n(781800),
    X = n(474936),
    $ = n(981631),
    ee = n(869783),
    et = n(388032),
    en = n(286919),
    ei = n(499317),
    er = n(865215),
    ea = n(735035),
    es = n(786362),
    el = n(181960),
    eo = n(313199),
    ec = n(821969);
let ed = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === X.p9.TIER_2 && t) ? null : (0, i.jsx)(D.Z, { className: t ? en.perkCardsContainerSpacingFullscreen : en.perkCardsContainerSpacingSettings });
    },
    eu = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(L.Z, { lifted: !t && n }) : null;
    },
    eg = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(en.whatsNewSectionBackground, { [en.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(G.Z, {
                              variant: Q.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, i.jsx)(w.Z, {
                              shouldLoadVideo: a,
                              isReducedMotion: o
                          }),
                      l &&
                          (0, i.jsx)(w.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a,
                              isReducedMotion: o
                          }),
                      !l &&
                          (0, i.jsx)(G.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(J.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: Q.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(H.ZP, {
                              className: en.pdSparklesTop,
                              variant: H.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(H.ZP, {
                              className: en.pdSparklesBottom,
                              variant: H.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t, n;
    let { isFullscreen: a, entrypoint: w } = e;
    (0, x.z)(h.X);
    let L = w === X.EZ.ApplicationStoreHome,
        D = r.useRef(null),
        G = r.useRef(null),
        H = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        J = (0, g.ZP)(),
        em = (0, c.wj)(J),
        ef = E.default.getCurrentUser(),
        ep = (0, T.I5)(ef),
        e_ = (0, I.xP)('PremiumMarketingHome') && !ep && L,
        [eh, ex] = r.useState(!1),
        [eE, eb] = r.useState(!1),
        [eC, ev] = r.useState(!1),
        [eT, eN] = r.useState(!1),
        eI = (0, v.rO)(),
        [eS, eR] = r.useState(!1),
        ej = (0, l.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        eA = null != ej ? (0, T.Af)(ej) : null,
        eP = null != eA ? T.ZP.getSkuIdForPlan(eA.planId) : null,
        eO = null !== eP && eP !== X.Si.TIER_2 ? X.Si.TIER_2 : null,
        eZ = (0, R.n)(),
        eM = null != eZ,
        [eB, ey] = r.useState(!1),
        ew = (0, j.Ng)(),
        ek = (0, A.N)(),
        eL = null == ek ? void 0 : null === (t = ek.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eU = (0, N.Nx)(),
        eD = (0, M.Vi)(),
        eG = null === (n = (0, S.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
        { analyticsLocations: eH } = (0, p.ZP)(f.Z.PREMIUM_MARKETING),
        eV = 'PremiumMarketingHome';
    (0, u.j)({
        location: eV + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eV + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            eR(!0);
        }, []);
    let eF = (0, i.jsx)('div', {
            className: s()({
                [en.premiumTierCardsContainerSettings]: !a,
                [en.premiumTierCardsContainerFullscreen]: a
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => ev(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(y.ZP, {
                    variant: e_ ? y.NN.MARKETING_PAGE_V2 : y.NN.DEFAULT,
                    showWumpus: !e_,
                    tier0CTAButton:
                        (eL === X.Si.TIER_2 || eD || null != ew) && !e_
                            ? (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_0,
                                  className: en.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: en.buttonShine
                              })
                            : (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_0,
                                  className: en.marginTopForButtons,
                                  buttonShineClassName: en.buttonShine
                              }),
                    tier2CTAButton:
                        eL !== X.Si.TIER_0 || e_
                            ? (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_2,
                                  className: en.marginTopForButtons,
                                  isEligibleForBogoPromotion: eD,
                                  buttonShineClassName: en.buttonShine
                              })
                            : (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_2,
                                  className: en.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: en.buttonShine
                              })
                })
            })
        }),
        eW = (0, i.jsxs)('div', {
            className: s()(en.container, {
                [en.settingsContainer]: !a,
                [en.containerBackground]: e_ && em
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                e_ && (0, i.jsx)('div', { className: en.heroHeaderSideGradient }),
                e_ &&
                    (0, i.jsx)('img', {
                        src: ei,
                        className: en.heroHeaderBackgroundStars,
                        alt: ''
                    }),
                (0, i.jsx)(k.Z, {
                    premiumSubscription: ej,
                    className: s()(a ? en.fullscreenExistingSubscriberSpacing : en.existingSubscriberSpacing, { [en.zIndex1]: eU }),
                    isFullscreen: a
                }),
                !e_ &&
                    (0, i.jsx)(eu, {
                        isFullscreen: a,
                        inOfferExperience: eU
                    }),
                !a && eM
                    ? (0, i.jsx)(Z.Z, {
                          localizedPricingPromo: eZ,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: s()({ [en.heroHeadingV2Container]: e_ }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => ex(e),
                                  threshold: 0,
                                  active: !0,
                                  children: e_
                                      ? (0, i.jsx)(Y.Z, {
                                            subscriptionTier: eO,
                                            isFullscreen: a || eU,
                                            entrypoint: w,
                                            isDarkMode: em
                                        })
                                      : (0, i.jsx)(U.ZP, {
                                            subscriptionTier: eO,
                                            isFullscreen: a || eU,
                                            isMarketingPageV2Enabled: e_,
                                            className: s()({
                                                [en.fullscreenHero]: a,
                                                [en.settingsHeroNoBackground]: !a && eU,
                                                [en.trialMarketingMargin]: eU,
                                                [en.settingsHeroBogoHeight]: !a && eD,
                                                [en.settingsHeroBogoMarginFullscreen]: a && eD,
                                                [en.noTopPaddingOverride]: null != ej
                                            }),
                                            entrypoint: w,
                                            isDarkMode: em
                                        })
                              }),
                              e_ &&
                                  (0, i.jsx)('div', {
                                      className: en.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !H,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: eo.Z,
                                          loop: !0,
                                          className: s()(en.heroHeadingV2Art),
                                          ref: G,
                                          children: (0, i.jsx)('source', {
                                              src: eI ? el.Z : ec.Z,
                                              type: eI ? ee.m.MP4 : ee.m.WEBM
                                          })
                                      })
                                  })
                          ]
                      }),
                (0, i.jsxs)('div', {
                    className: en.promoBannerContainer,
                    children: [(0, i.jsx)(P.Z, { isFullScreen: a }), a && eM && (0, i.jsx)(O.Z, { localizedPricingPromo: eZ })]
                }),
                !e_ && eF,
                w === X.EZ.UserSettings &&
                    null != eG &&
                    (0, i.jsx)(B.C, {
                        className: en.giftPromoCard,
                        config: eG
                    }),
                (0, i.jsx)(eg, {
                    isFullscreen: a,
                    inOfferExperience: eU,
                    setIsAllPerksVisible: ey,
                    hasRenderedOnce: eS,
                    isMarketingPageV2Enabled: e_,
                    isReducedMotion: H
                }),
                !e_ && (0, i.jsx)(ed, { isFullscreen: a }),
                e_ && eF,
                (0, i.jsxs)('div', {
                    className: en.planComparisonTableContainer,
                    children: [
                        e_
                            ? (0, i.jsx)(W.Z, { className: en.planComparisonTableV2 })
                            : (0, i.jsx)(F.Z, {
                                  className: en.planComparisonTable,
                                  hideCTAs: !0
                              }),
                        a && !e_
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: ea,
                                          className: en.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: et.intl.string(et.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: es,
                                          className: en.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: et.intl.string(et.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                !e_ && (0, i.jsx)('div', { className: a ? en.footerSpacingFullscreen : en.footerSpacing }),
                (0, i.jsx)(V.Z, {
                    isVisible: !eh && !eC && !eE && eS,
                    isFullscreen: a,
                    subscriptionTier: eO,
                    isMarketingPageV2: e_
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !eT && (C.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eH }), eN(!0));
                    },
                    children: (0, i.jsx)('div', { className: en.bottomOfPageVisibilitySensor })
                }),
                !e_ &&
                    (0, i.jsx)('img', {
                        src: er,
                        className: en.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: et.intl.string(et.t.X4IxWF)
                    }),
                e_ &&
                    (0, i.jsx)(o.$, {
                        onChange: (e) => {
                            eb(e);
                        },
                        children: (0, i.jsx)(z.Z, {
                            isFooterVisible: eE,
                            isDarkMode: em,
                            isReducedMotion: H
                        })
                    })
            ]
        });
    return a
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()(en.scroller),
                      ref: D,
                      children: eW
                  }),
                  (0, i.jsx)(q.Z, {
                      previousComponent: Q.MQ.MARKETING,
                      isAllPerksVisible: eB,
                      setIsAllPerksVisible: ey,
                      isFullScreen: a
                  })
              ]
          })
        : eW;
};
