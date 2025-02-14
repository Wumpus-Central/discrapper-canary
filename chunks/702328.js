n.d(t, { Z: () => em }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(634894),
    m = n(410030),
    g = n(607070),
    h = n(100527),
    x = n(906732),
    _ = n(70097),
    p = n(433811),
    E = n(214852),
    C = n(594174),
    f = n(78839),
    T = n(626135),
    N = n(526167),
    S = n(74538),
    I = n(140465),
    b = n(278605),
    v = n(286961),
    j = n(91802),
    A = n(639119),
    O = n(8647),
    R = n(568126),
    P = n(605289),
    D = n(346497),
    y = n(218390),
    Z = n(823188),
    k = n(241158),
    L = n(135785),
    B = n(498765),
    M = n(635921),
    w = n(177839),
    V = n(794484),
    U = n(392521),
    G = n(349803),
    F = n(179984),
    H = n(706542),
    z = n(851001),
    Y = n(304576),
    W = n(409100),
    K = n(391110),
    q = n(71363),
    X = n(781800),
    J = n(474936),
    Q = n(981631),
    $ = n(869783),
    ee = n(388032),
    et = n(313164),
    en = n(499317),
    ei = n(865215),
    es = n(735035),
    er = n(786362),
    el = n(181960),
    ea = n(313199),
    eo = n(821969);
let ec = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === J.p9.TIER_2 && t) ? null : (0, i.jsx)(w.Z, { className: t ? et.perkCardsContainerSpacingFullscreen : et.perkCardsContainerSpacingSettings });
    },
    ed = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(B.Z, { lifted: !t && n }) : null;
    },
    eu = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: s, hasRenderedOnce: r, isMarketingPageV2Enabled: a, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: l()(et.whatsNewSectionBackground, { [et.whatsNewSectionBackgroundV2]: a }),
                  children: [
                      !a &&
                          (0, i.jsx)(V.Z, {
                              variant: K.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      a &&
                          (0, i.jsx)(k.Z, {
                              shouldLoadVideo: r,
                              isReducedMotion: o
                          }),
                      a &&
                          (0, i.jsx)(k.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: r,
                              isReducedMotion: o
                          }),
                      !a &&
                          (0, i.jsx)(V.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(X.Z, {
                                        setIsAllPerksVisible: s,
                                        previousComponent: K.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !a &&
                          (0, i.jsx)(U.ZP, {
                              className: et.pdSparklesTop,
                              variant: U.u0.TOP
                          }),
                      n &&
                          !a &&
                          (0, i.jsx)(U.ZP, {
                              className: et.pdSparklesBottom,
                              variant: U.u0.BOTTOM
                          })
                  ]
              })
            : null;
    },
    em = (e) => {
        var t, n;
        let { isFullscreen: r, entrypoint: k } = e;
        (0, E.z)(p.X);
        let B = k === J.EZ.ApplicationStoreHome,
            w = s.useRef(null),
            V = s.useRef(null),
            U = (0, a.e7)([g.Z], () => g.Z.useReducedMotion),
            X = (0, m.ZP)(),
            em = (0, c.wj)(X),
            eg = C.default.getCurrentUser(),
            eh = (0, S.I5)(eg),
            ex = (0, b.xP)('PremiumMarketingHome') && !eh && B,
            [e_, ep] = s.useState(!1),
            [eE, eC] = s.useState(!1),
            [ef, eT] = s.useState(!1),
            [eN, eS] = s.useState(!1),
            eI = (0, N.rO)(),
            [eb, ev] = s.useState(!1),
            ej = (0, a.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
            eA = null != ej ? (0, S.Af)(ej) : null,
            eO = null != eA ? S.ZP.getSkuIdForPlan(eA.planId) : null,
            eR = null !== eO && eO !== J.Si.TIER_2 ? J.Si.TIER_2 : null,
            eP = (0, j.n)(),
            eD = null != eP,
            [ey, eZ] = s.useState(!1),
            ek = (0, A.N)(),
            eL = null == ek ? void 0 : null === (t = ek.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            eB = (0, I.Nx)(),
            eM = (0, D.Vi)(),
            ew = null === (n = (0, v.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: eV } = (0, x.ZP)(h.Z.PREMIUM_MARKETING),
            eU = 'PremiumMarketingHome';
        (0, u.j)({
            location: eU + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: eU + ' auto off',
                autoTrackExposure: !1
            }),
            s.useEffect(() => {
                ev(!0);
            }, []);
        let eG = (0, i.jsx)('div', {
                className: l()({
                    [et.premiumTierCardsContainerSettings]: !r,
                    [et.premiumTierCardsContainerFullscreen]: r
                }),
                children: (0, i.jsx)(o.$, {
                    onChange: (e) => eT(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, i.jsx)(Z.ZP, {
                        variant: ex ? Z.NN.MARKETING_PAGE_V2 : Z.NN.DEFAULT,
                        showWumpus: !ex,
                        tier0CTAButton: ex
                            ? (0, i.jsx)(W.Z, {
                                  forceInverted: em && !ex,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_0,
                                  className: et.marginTopForButtons,
                                  buttonTextClassName: ex ? et.v2SubButtonText : et.subButtonText,
                                  buttonShineClassName: et.buttonShine
                              })
                            : (0, i.jsx)(W.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_0,
                                  className: et.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: et.buttonShine
                              }),
                        tier2CTAButton:
                            eL !== J.Si.TIER_0 || ex
                                ? (0, i.jsx)(W.Z, {
                                      forceInverted: !ex,
                                      showIcon: !1,
                                      subscriptionTier: J.Si.TIER_2,
                                      className: et.marginTopForButtons,
                                      isEligibleForBogoPromotion: eM,
                                      buttonTextClassName: ex ? et.v2SubButtonText : et.subButtonText,
                                      buttonShineClassName: et.buttonShine
                                  })
                                : (0, i.jsx)(W.Z, {
                                      forceInverted: !0,
                                      showIcon: !1,
                                      subscriptionTier: J.Si.TIER_2,
                                      className: et.marginTopForButtons,
                                      look: d.iLD.OUTLINED,
                                      color: d.Ttl.WHITE,
                                      buttonShineClassName: et.buttonShine
                                  })
                    })
                })
            }),
            eF = (0, i.jsxs)('div', {
                className: l()(et.container, {
                    [et.settingsContainer]: !r,
                    [et.containerBackground]: ex && em
                }),
                'data-cy': 'tier-0-marketing-page',
                children: [
                    ex && (0, i.jsx)('div', { className: et.heroHeaderSideGradient }),
                    ex &&
                        (0, i.jsx)('img', {
                            src: en,
                            className: et.heroHeaderBackgroundStars,
                            alt: ''
                        }),
                    (0, i.jsx)(L.Z, {
                        premiumSubscription: ej,
                        className: l()(r ? et.fullscreenExistingSubscriberSpacing : et.existingSubscriberSpacing, { [et.zIndex1]: eB }),
                        isFullscreen: r
                    }),
                    !ex &&
                        (0, i.jsx)(ed, {
                            isFullscreen: r,
                            inOfferExperience: eB
                        }),
                    !r && eD
                        ? (0, i.jsx)(P.Z, {
                              localizedPricingPromo: eP,
                              smallGap: !0
                          })
                        : (0, i.jsxs)('div', {
                              className: l()({ [et.heroHeadingV2Container]: ex }),
                              children: [
                                  (0, i.jsx)(o.$, {
                                      onChange: (e) => ep(e),
                                      threshold: 0,
                                      active: !0,
                                      children: ex
                                          ? (0, i.jsx)(Y.Z, {
                                                subscriptionTier: eR,
                                                isFullscreen: r || eB,
                                                entrypoint: k,
                                                isDarkMode: em
                                            })
                                          : (0, i.jsx)(M.ZP, {
                                                subscriptionTier: eR,
                                                isFullscreen: r || eB,
                                                isMarketingPageV2Enabled: ex,
                                                className: l()({
                                                    [et.fullscreenHero]: r,
                                                    [et.settingsHeroNoBackground]: !r && eB,
                                                    [et.trialMarketingMargin]: eB,
                                                    [et.settingsHeroBogoHeight]: !r && eM,
                                                    [et.settingsHeroBogoMarginFullscreen]: r && eM,
                                                    [et.noTopPaddingOverride]: null != ej
                                                }),
                                                entrypoint: k,
                                                isDarkMode: em
                                            })
                                  }),
                                  ex &&
                                      (0, i.jsx)('div', {
                                          className: et.heroHeadingV2ArtContainer,
                                          children: (0, i.jsx)(_.Z, {
                                              autoPlay: !U,
                                              playsInline: !0,
                                              preload: 'auto',
                                              poster: ea.Z,
                                              loop: !0,
                                              className: l()(et.heroHeadingV2Art),
                                              ref: V,
                                              children: (0, i.jsx)('source', {
                                                  src: eI ? el.Z : eo.Z,
                                                  type: eI ? $.m.MP4 : $.m.WEBM
                                              })
                                          })
                                      })
                              ]
                          }),
                    (0, i.jsxs)('div', {
                        className: et.promoBannerContainer,
                        children: [(0, i.jsx)(O.Z, { isFullScreen: r }), r && eD && (0, i.jsx)(R.Z, { localizedPricingPromo: eP })]
                    }),
                    !ex && eG,
                    k === J.EZ.UserSettings &&
                        null != ew &&
                        (0, i.jsx)(y.C, {
                            className: et.giftPromoCard,
                            config: ew
                        }),
                    (0, i.jsx)(eu, {
                        isFullscreen: r,
                        inOfferExperience: eB,
                        setIsAllPerksVisible: eZ,
                        hasRenderedOnce: eb,
                        isMarketingPageV2Enabled: ex,
                        isReducedMotion: U
                    }),
                    !ex && (0, i.jsx)(ec, { isFullscreen: r }),
                    ex && eG,
                    (0, i.jsxs)('div', {
                        className: et.planComparisonTableContainer,
                        children: [
                            ex
                                ? (0, i.jsx)(H.Z, { className: et.planComparisonTableV2 })
                                : (0, i.jsx)(F.Z, {
                                      className: et.planComparisonTable,
                                      hideCTAs: !0
                                  }),
                            r && !ex
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)('img', {
                                              src: es,
                                              className: et.tableLeftSideDecoration,
                                              width: 197,
                                              height: 486,
                                              alt: ee.intl.string(ee.t.X4IxWF)
                                          }),
                                          (0, i.jsx)('img', {
                                              src: er,
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
                    !ex && (0, i.jsx)('div', { className: r ? et.footerSpacingFullscreen : et.footerSpacing }),
                    (0, i.jsx)(G.Z, {
                        isVisible: !e_ && !ef && !eE && eb,
                        isFullscreen: r,
                        subscriptionTier: eR,
                        isMarketingPageV2: ex
                    }),
                    (0, i.jsx)(o.$, {
                        onChange: (e) => {
                            e && !eN && (T.default.track(Q.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eV }), eS(!0));
                        },
                        children: (0, i.jsx)('div', { className: et.bottomOfPageVisibilitySensor })
                    }),
                    !ex &&
                        (0, i.jsx)('img', {
                            src: ei,
                            className: et.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: ee.intl.string(ee.t.X4IxWF)
                        }),
                    ex &&
                        (0, i.jsx)(o.$, {
                            onChange: (e) => {
                                eC(e);
                            },
                            children: (0, i.jsx)(z.Z, {
                                isFooterVisible: eE,
                                isDarkMode: em,
                                isReducedMotion: U
                            })
                        })
                ]
            });
        return r
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.yWw, {
                          className: l()(et.scroller),
                          ref: w,
                          children: eF
                      }),
                      (0, i.jsx)(q.Z, {
                          previousComponent: K.MQ.MARKETING,
                          isAllPerksVisible: ey,
                          setIsAllPerksVisible: eZ,
                          isFullScreen: r
                      })
                  ]
              })
            : eF;
    };
