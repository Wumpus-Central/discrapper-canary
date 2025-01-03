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
    m = n(410030),
    g = n(607070),
    f = n(100527),
    p = n(906732),
    _ = n(70097),
    h = n(464824),
    E = n(214852),
    b = n(594174),
    x = n(78839),
    C = n(626135),
    T = n(526167),
    v = n(74538),
    N = n(140465),
    I = n(278605),
    S = n(286961),
    R = n(91802),
    j = n(104494),
    A = n(639119),
    P = n(906461),
    Z = n(8647),
    M = n(568126),
    B = n(605289),
    O = n(346497),
    w = n(218390),
    y = n(823188),
    k = n(241158),
    L = n(135785),
    U = n(498765),
    D = n(635921),
    H = n(177839),
    G = n(794484),
    V = n(392521),
    F = n(349803),
    W = n(179984),
    z = n(706542),
    Y = n(851001),
    K = n(304576),
    Q = n(409100),
    q = n(391110),
    J = n(71363),
    X = n(781800),
    $ = n(474936),
    ee = n(981631),
    et = n(869783),
    en = n(388032),
    ei = n(286919),
    er = n(499317),
    ea = n(865215),
    es = n(735035),
    el = n(786362),
    eo = n(181960),
    ec = n(313199),
    ed = n(821969);
let eu = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === $.p9.TIER_2 && t) ? null : (0, i.jsx)(H.Z, { className: t ? ei.perkCardsContainerSpacingFullscreen : ei.perkCardsContainerSpacingSettings });
    },
    em = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(U.Z, { lifted: !t && n }) : null;
    },
    eg = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(ei.whatsNewSectionBackground, { [ei.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(G.Z, {
                              variant: q.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, i.jsx)(k.Z, {
                              shouldLoadVideo: a,
                              isReducedMotion: o
                          }),
                      l &&
                          (0, i.jsx)(k.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a,
                              isReducedMotion: o
                          }),
                      !l &&
                          (0, i.jsx)(G.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(X.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: q.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(V.ZP, {
                              className: ei.pdSparklesTop,
                              variant: V.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(V.ZP, {
                              className: ei.pdSparklesBottom,
                              variant: V.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t, n;
    let { isFullscreen: a, entrypoint: k } = e;
    (0, E.z)(h.X);
    let U = k === $.EZ.ApplicationStoreHome,
        H = r.useRef(null),
        G = r.useRef(null),
        V = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        X = (0, m.ZP)(),
        ef = (0, c.wj)(X),
        ep = b.default.getCurrentUser(),
        e_ = (0, v.I5)(ep),
        eh = (0, I.xP)('PremiumMarketingHome') && !e_ && U,
        [eE, eb] = r.useState(!1),
        [ex, eC] = r.useState(!1),
        [eT, ev] = r.useState(!1),
        [eN, eI] = r.useState(!1),
        eS = (0, T.rO)(),
        [eR, ej] = r.useState(!1),
        eA = (0, l.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        eP = null != eA ? (0, v.Af)(eA) : null,
        eZ = null != eP ? v.ZP.getSkuIdForPlan(eP.planId) : null,
        eM = null !== eZ && eZ !== $.Si.TIER_2 ? $.Si.TIER_2 : null,
        eB = (0, R.n)(),
        eO = null != eB,
        [ew, ey] = r.useState(!1),
        ek = (0, j.Ng)(),
        eL = (0, A.N)(),
        eU = null == eL ? void 0 : null === (t = eL.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eD = (0, N.Nx)(),
        eH = (0, O.Vi)(),
        eG = null === (n = (0, S.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
        { analyticsLocations: eV } = (0, p.ZP)(f.Z.PREMIUM_MARKETING),
        eF = 'PremiumMarketingHome';
    (0, u.j)({
        location: eF + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eF + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            ej(!0);
        }, []);
    let eW = (0, i.jsx)('div', {
            className: s()({
                [ei.premiumTierCardsContainerSettings]: !a,
                [ei.premiumTierCardsContainerFullscreen]: a
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => ev(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(y.ZP, {
                    variant: eh ? y.NN.MARKETING_PAGE_V2 : y.NN.DEFAULT,
                    showWumpus: !eh,
                    tier0CTAButton:
                        (eU === $.Si.TIER_2 || eH || null != ek) && !eh
                            ? (0, i.jsx)(Q.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: $.Si.TIER_0,
                                  className: ei.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: ei.buttonShine
                              })
                            : (0, i.jsx)(Q.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: $.Si.TIER_0,
                                  className: ei.marginTopForButtons,
                                  buttonShineClassName: ei.buttonShine
                              }),
                    tier2CTAButton:
                        eU !== $.Si.TIER_0 || eh
                            ? (0, i.jsx)(Q.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: $.Si.TIER_2,
                                  className: ei.marginTopForButtons,
                                  isEligibleForBogoPromotion: eH,
                                  buttonShineClassName: ei.buttonShine
                              })
                            : (0, i.jsx)(Q.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: $.Si.TIER_2,
                                  className: ei.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: ei.buttonShine
                              })
                })
            })
        }),
        ez = (0, i.jsxs)('div', {
            className: s()(ei.container, {
                [ei.settingsContainer]: !a,
                [ei.containerBackground]: eh && ef
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                eh && (0, i.jsx)('div', { className: ei.heroHeaderSideGradient }),
                eh &&
                    (0, i.jsx)('img', {
                        src: er,
                        className: ei.heroHeaderBackgroundStars,
                        alt: ''
                    }),
                (0, i.jsx)(L.Z, {
                    premiumSubscription: eA,
                    className: s()(a ? ei.fullscreenExistingSubscriberSpacing : ei.existingSubscriberSpacing, { [ei.zIndex1]: eD }),
                    isFullscreen: a
                }),
                !eh &&
                    (0, i.jsx)(em, {
                        isFullscreen: a,
                        inOfferExperience: eD
                    }),
                !a && eO
                    ? (0, i.jsx)(B.Z, {
                          localizedPricingPromo: eB,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: s()({ [ei.heroHeadingV2Container]: eh }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => eb(e),
                                  threshold: 0,
                                  active: !0,
                                  children: eh
                                      ? (0, i.jsx)(K.Z, {
                                            subscriptionTier: eM,
                                            isFullscreen: a || eD,
                                            entrypoint: k,
                                            isDarkMode: ef
                                        })
                                      : (0, i.jsx)(D.ZP, {
                                            subscriptionTier: eM,
                                            isFullscreen: a || eD,
                                            isMarketingPageV2Enabled: eh,
                                            className: s()({
                                                [ei.fullscreenHero]: a,
                                                [ei.settingsHeroNoBackground]: !a && eD,
                                                [ei.trialMarketingMargin]: eD,
                                                [ei.settingsHeroBogoHeight]: !a && eH,
                                                [ei.settingsHeroBogoMarginFullscreen]: a && eH,
                                                [ei.noTopPaddingOverride]: null != eA
                                            }),
                                            entrypoint: k,
                                            isDarkMode: ef
                                        })
                              }),
                              eh &&
                                  (0, i.jsx)('div', {
                                      className: ei.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !V,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: ec.Z,
                                          loop: !0,
                                          className: s()(ei.heroHeadingV2Art),
                                          ref: G,
                                          children: (0, i.jsx)('source', {
                                              src: eS ? eo.Z : ed.Z,
                                              type: eS ? et.m.MP4 : et.m.WEBM
                                          })
                                      })
                                  })
                          ]
                      }),
                (0, i.jsxs)('div', {
                    className: ei.promoBannerContainer,
                    children: [(0, i.jsx)(Z.Z, { isFullScreen: a }), (0, i.jsx)(P.Z, { isFullScreen: a }), a && eO && (0, i.jsx)(M.Z, { localizedPricingPromo: eB })]
                }),
                !eh && eW,
                k === $.EZ.UserSettings &&
                    null != eG &&
                    (0, i.jsx)(w.C, {
                        className: ei.giftPromoCard,
                        config: eG
                    }),
                (0, i.jsx)(eg, {
                    isFullscreen: a,
                    inOfferExperience: eD,
                    setIsAllPerksVisible: ey,
                    hasRenderedOnce: eR,
                    isMarketingPageV2Enabled: eh,
                    isReducedMotion: V
                }),
                !eh && (0, i.jsx)(eu, { isFullscreen: a }),
                eh && eW,
                (0, i.jsxs)('div', {
                    className: ei.planComparisonTableContainer,
                    children: [
                        eh
                            ? (0, i.jsx)(z.Z, { className: ei.planComparisonTableV2 })
                            : (0, i.jsx)(W.Z, {
                                  className: ei.planComparisonTable,
                                  hideCTAs: !0
                              }),
                        a && !eh
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: es,
                                          className: ei.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: en.intl.string(en.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: el,
                                          className: ei.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: en.intl.string(en.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                !eh && (0, i.jsx)('div', { className: a ? ei.footerSpacingFullscreen : ei.footerSpacing }),
                (0, i.jsx)(F.Z, {
                    isVisible: !eE && !eT && !ex && eR,
                    isFullscreen: a,
                    subscriptionTier: eM,
                    isMarketingPageV2: eh
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !eN && (C.default.track(ee.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eV }), eI(!0));
                    },
                    children: (0, i.jsx)('div', { className: ei.bottomOfPageVisibilitySensor })
                }),
                !eh &&
                    (0, i.jsx)('img', {
                        src: ea,
                        className: ei.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: en.intl.string(en.t.X4IxWF)
                    }),
                eh &&
                    (0, i.jsx)(o.$, {
                        onChange: (e) => {
                            eC(e);
                        },
                        children: (0, i.jsx)(Y.Z, {
                            isFooterVisible: ex,
                            isDarkMode: ef,
                            isReducedMotion: V
                        })
                    })
            ]
        });
    return a
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()(ei.scroller),
                      ref: H,
                      children: ez
                  }),
                  (0, i.jsx)(J.Z, {
                      previousComponent: q.MQ.MARKETING,
                      isAllPerksVisible: ew,
                      setIsAllPerksVisible: ey,
                      isFullScreen: a
                  })
              ]
          })
        : ez;
};
