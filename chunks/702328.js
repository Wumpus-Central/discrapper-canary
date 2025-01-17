n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(634894),
    m = n(410030),
    g = n(607070),
    h = n(100527),
    p = n(906732),
    x = n(70097),
    f = n(433811),
    _ = n(214852),
    E = n(594174),
    C = n(78839),
    T = n(626135),
    S = n(526167),
    b = n(74538),
    I = n(140465),
    N = n(278605),
    v = n(286961),
    A = n(91802),
    j = n(639119),
    O = n(8647),
    R = n(568126),
    P = n(605289),
    y = n(346497),
    B = n(218390),
    D = n(823188),
    Z = n(241158),
    L = n(135785),
    M = n(498765),
    k = n(635921),
    w = n(177839),
    F = n(794484),
    U = n(392521),
    V = n(349803),
    G = n(179984),
    H = n(706542),
    Y = n(851001),
    W = n(304576),
    z = n(409100),
    K = n(391110),
    q = n(71363),
    Q = n(781800),
    X = n(474936),
    J = n(981631),
    $ = n(869783),
    ee = n(388032),
    et = n(286919),
    en = n(499317),
    ei = n(865215),
    er = n(735035),
    es = n(786362),
    ea = n(181960),
    el = n(313199),
    eo = n(821969);
let ec = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === X.p9.TIER_2 && t) ? null : (0, i.jsx)(w.Z, { className: t ? et.perkCardsContainerSpacingFullscreen : et.perkCardsContainerSpacingSettings });
    },
    ed = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(M.Z, { lifted: !t && n }) : null;
    },
    eu = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: s, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: a()(et.whatsNewSectionBackground, { [et.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(F.Z, {
                              variant: K.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, i.jsx)(Z.Z, {
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      l &&
                          (0, i.jsx)(Z.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      !l &&
                          (0, i.jsx)(F.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(Q.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: K.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(U.ZP, {
                              className: et.pdSparklesTop,
                              variant: U.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(U.ZP, {
                              className: et.pdSparklesBottom,
                              variant: U.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t, n;
    let { isFullscreen: s, entrypoint: Z } = e;
    (0, _.z)(f.X);
    let M = Z === X.EZ.ApplicationStoreHome,
        w = r.useRef(null),
        F = r.useRef(null),
        U = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        Q = (0, m.ZP)(),
        em = (0, c.wj)(Q),
        eg = E.default.getCurrentUser(),
        eh = (0, b.I5)(eg),
        ep = (0, N.xP)('PremiumMarketingHome') && !eh && M,
        [ex, ef] = r.useState(!1),
        [e_, eE] = r.useState(!1),
        [eC, eT] = r.useState(!1),
        [eS, eb] = r.useState(!1),
        eI = (0, S.rO)(),
        [eN, ev] = r.useState(!1),
        eA = (0, l.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        ej = null != eA ? (0, b.Af)(eA) : null,
        eO = null != ej ? b.ZP.getSkuIdForPlan(ej.planId) : null,
        eR = null !== eO && eO !== X.Si.TIER_2 ? X.Si.TIER_2 : null,
        eP = (0, A.n)(),
        ey = null != eP,
        [eB, eD] = r.useState(!1),
        eZ = (0, j.N)(),
        eL = null == eZ ? void 0 : null === (t = eZ.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eM = (0, I.Nx)(),
        ek = (0, y.Vi)(),
        ew = null === (n = (0, v.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
        { analyticsLocations: eF } = (0, p.ZP)(h.Z.PREMIUM_MARKETING),
        eU = 'PremiumMarketingHome';
    (0, u.j)({
        location: eU + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eU + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            ev(!0);
        }, []);
    let eV = (0, i.jsx)('div', {
            className: a()({
                [et.premiumTierCardsContainerSettings]: !s,
                [et.premiumTierCardsContainerFullscreen]: s
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => eT(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(D.ZP, {
                    variant: ep ? D.NN.MARKETING_PAGE_V2 : D.NN.DEFAULT,
                    showWumpus: !ep,
                    tier0CTAButton: ep
                        ? (0, i.jsx)(z.Z, {
                              forceInverted: em && !ep,
                              showIcon: !1,
                              subscriptionTier: X.Si.TIER_0,
                              className: et.marginTopForButtons,
                              buttonTextClassName: ep ? et.v2SubButtonText : et.subButtonText,
                              buttonShineClassName: et.buttonShine
                          })
                        : (0, i.jsx)(z.Z, {
                              forceInverted: !0,
                              showIcon: !1,
                              subscriptionTier: X.Si.TIER_0,
                              className: et.marginTopForButtons,
                              look: d.ButtonLooks.OUTLINED,
                              color: d.ButtonColors.WHITE,
                              buttonShineClassName: et.buttonShine
                          }),
                    tier2CTAButton:
                        eL !== X.Si.TIER_0 || ep
                            ? (0, i.jsx)(z.Z, {
                                  forceInverted: !ep,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_2,
                                  className: et.marginTopForButtons,
                                  isEligibleForBogoPromotion: ek,
                                  buttonTextClassName: ep ? et.v2SubButtonText : et.subButtonText,
                                  buttonShineClassName: et.buttonShine
                              })
                            : (0, i.jsx)(z.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_2,
                                  className: et.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: et.buttonShine
                              })
                })
            })
        }),
        eG = (0, i.jsxs)('div', {
            className: a()(et.container, {
                [et.settingsContainer]: !s,
                [et.containerBackground]: ep && em
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                ep && (0, i.jsx)('div', { className: et.heroHeaderSideGradient }),
                ep &&
                    (0, i.jsx)('img', {
                        src: en,
                        className: et.heroHeaderBackgroundStars,
                        alt: ''
                    }),
                (0, i.jsx)(L.Z, {
                    premiumSubscription: eA,
                    className: a()(s ? et.fullscreenExistingSubscriberSpacing : et.existingSubscriberSpacing, { [et.zIndex1]: eM }),
                    isFullscreen: s
                }),
                !ep &&
                    (0, i.jsx)(ed, {
                        isFullscreen: s,
                        inOfferExperience: eM
                    }),
                !s && ey
                    ? (0, i.jsx)(P.Z, {
                          localizedPricingPromo: eP,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: a()({ [et.heroHeadingV2Container]: ep }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => ef(e),
                                  threshold: 0,
                                  active: !0,
                                  children: ep
                                      ? (0, i.jsx)(W.Z, {
                                            subscriptionTier: eR,
                                            isFullscreen: s || eM,
                                            entrypoint: Z,
                                            isDarkMode: em
                                        })
                                      : (0, i.jsx)(k.ZP, {
                                            subscriptionTier: eR,
                                            isFullscreen: s || eM,
                                            isMarketingPageV2Enabled: ep,
                                            className: a()({
                                                [et.fullscreenHero]: s,
                                                [et.settingsHeroNoBackground]: !s && eM,
                                                [et.trialMarketingMargin]: eM,
                                                [et.settingsHeroBogoHeight]: !s && ek,
                                                [et.settingsHeroBogoMarginFullscreen]: s && ek,
                                                [et.noTopPaddingOverride]: null != eA
                                            }),
                                            entrypoint: Z,
                                            isDarkMode: em
                                        })
                              }),
                              ep &&
                                  (0, i.jsx)('div', {
                                      className: et.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(x.Z, {
                                          autoPlay: !U,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: el.Z,
                                          loop: !0,
                                          className: a()(et.heroHeadingV2Art),
                                          ref: F,
                                          children: (0, i.jsx)('source', {
                                              src: eI ? ea.Z : eo.Z,
                                              type: eI ? $.m.MP4 : $.m.WEBM
                                          })
                                      })
                                  })
                          ]
                      }),
                (0, i.jsxs)('div', {
                    className: et.promoBannerContainer,
                    children: [(0, i.jsx)(O.Z, { isFullScreen: s }), s && ey && (0, i.jsx)(R.Z, { localizedPricingPromo: eP })]
                }),
                !ep && eV,
                Z === X.EZ.UserSettings &&
                    null != ew &&
                    (0, i.jsx)(B.C, {
                        className: et.giftPromoCard,
                        config: ew
                    }),
                (0, i.jsx)(eu, {
                    isFullscreen: s,
                    inOfferExperience: eM,
                    setIsAllPerksVisible: eD,
                    hasRenderedOnce: eN,
                    isMarketingPageV2Enabled: ep,
                    isReducedMotion: U
                }),
                !ep && (0, i.jsx)(ec, { isFullscreen: s }),
                ep && eV,
                (0, i.jsxs)('div', {
                    className: et.planComparisonTableContainer,
                    children: [
                        ep
                            ? (0, i.jsx)(H.Z, { className: et.planComparisonTableV2 })
                            : (0, i.jsx)(G.Z, {
                                  className: et.planComparisonTable,
                                  hideCTAs: !0
                              }),
                        s && !ep
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: er,
                                          className: et.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: ee.intl.string(ee.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: es,
                                          className: et.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: ee.intl.string(ee.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                !ep && (0, i.jsx)('div', { className: s ? et.footerSpacingFullscreen : et.footerSpacing }),
                (0, i.jsx)(V.Z, {
                    isVisible: !ex && !eC && !e_ && eN,
                    isFullscreen: s,
                    subscriptionTier: eR,
                    isMarketingPageV2: ep
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !eS && (T.default.track(J.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eF }), eb(!0));
                    },
                    children: (0, i.jsx)('div', { className: et.bottomOfPageVisibilitySensor })
                }),
                !ep &&
                    (0, i.jsx)('img', {
                        src: ei,
                        className: et.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: ee.intl.string(ee.t.X4IxWF)
                    }),
                ep &&
                    (0, i.jsx)(o.$, {
                        onChange: (e) => {
                            eE(e);
                        },
                        children: (0, i.jsx)(Y.Z, {
                            isFooterVisible: e_,
                            isDarkMode: em,
                            isReducedMotion: U
                        })
                    })
            ]
        });
    return s
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: a()(et.scroller),
                      ref: w,
                      children: eG
                  }),
                  (0, i.jsx)(q.Z, {
                      previousComponent: K.MQ.MARKETING,
                      isAllPerksVisible: eB,
                      setIsAllPerksVisible: eD,
                      isFullScreen: s
                  })
              ]
          })
        : eG;
};
