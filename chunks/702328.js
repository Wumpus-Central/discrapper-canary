n.d(t, { Z: () => eb }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(634894),
    m = n(410030),
    g = n(607070),
    p = n(100527),
    h = n(906732),
    f = n(70097),
    b = n(433811),
    N = n(214852),
    x = n(594174),
    _ = n(78839),
    E = n(626135),
    j = n(526167),
    O = n(74538),
    C = n(140465),
    S = n(278605),
    v = n(585612),
    T = n(286961),
    I = n(351367),
    y = n(91802),
    A = n(639119),
    P = n(879214),
    R = n(8647),
    D = n(568126),
    Z = n(605289),
    w = n(346497),
    k = n(218390),
    W = n(823188),
    L = n(241158),
    B = n(114625),
    M = n(72623),
    U = n(135785),
    V = n(498765),
    G = n(635921),
    F = n(177839),
    H = n(794484),
    z = n(392521),
    Y = n(349803),
    K = n(179984),
    q = n(706542),
    X = n(851001),
    J = n(304576),
    Q = n(409100),
    $ = n(391110),
    ee = n(71363),
    et = n(781800),
    en = n(474936),
    er = n(981631),
    ei = n(869783),
    es = n(388032),
    ea = n(651117),
    el = n(499317),
    eo = n(865215),
    ec = n(735035),
    ed = n(786362),
    eu = n(181960),
    em = n(313199),
    eg = n(821969);
let ep = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === en.p9.TIER_2 && t) ? null : (0, r.jsx)(F.Z, { className: t ? ea.perkCardsContainerSpacingFullscreen : ea.perkCardsContainerSpacingSettings });
    },
    eh = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, r.jsx)(V.Z, { lifted: !t && n }) : null;
    },
    ef = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: i, hasRenderedOnce: s, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: a()(ea.whatsNewSectionBackground, { [ea.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, r.jsx)(H.Z, {
                              variant: $.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, r.jsx)(L.Z, {
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      l &&
                          (0, r.jsx)(L.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      !l &&
                          (0, r.jsx)(H.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, r.jsx)(et.Z, {
                                        setIsAllPerksVisible: i,
                                        previousComponent: $.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, r.jsx)(z.ZP, {
                              className: ea.pdSparklesTop,
                              variant: z.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, r.jsx)(z.ZP, {
                              className: ea.pdSparklesBottom,
                              variant: z.u0.BOTTOM
                          })
                  ]
              })
            : null;
    },
    eb = (e) => {
        var t, n, s;
        let { isFullscreen: L, entrypoint: V } = e;
        (0, N.z)(b.X);
        let F = V === en.EZ.ApplicationStoreHome,
            H = i.useRef(null),
            z = i.useRef(null),
            et = i.useRef(null),
            eb = i.useRef(null),
            eN = i.useRef(null),
            ex = i.useRef(null),
            e_ = i.useRef(null),
            eE = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
            ej = (0, m.ZP)(),
            eO = (0, c.wj)(ej),
            eC = x.default.getCurrentUser(),
            eS = (0, O.I5)(eC),
            ev = (0, S.xP)('PremiumMarketingHome'),
            eT = (0, v.C)('PremiumMarketingHome'),
            eI = ((ev && !eS) || (eS && eT)) && F,
            [ey, eA] = i.useState(!1),
            [eP, eR] = i.useState(!1),
            [eD, eZ] = i.useState(!1),
            [ew, ek] = i.useState(!1),
            eW = (0, j.rO)(),
            [eL, eB] = i.useState(!1),
            eM = (0, l.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
            eU = null != eM ? (0, O.Af)(eM) : null,
            eV = null != eU ? O.ZP.getSkuIdForPlan(eU.planId) : null,
            eG = null !== eV && eV !== en.Si.TIER_2 ? en.Si.TIER_2 : null,
            eF = (0, y.n)(),
            eH = null != eF,
            [ez, eY] = i.useState(!1),
            eK = (0, A.N)(),
            eq = null == eK || null == (t = eK.subscription_trial) ? void 0 : t.sku_id,
            eX = (0, C.Nx)(),
            eJ = (0, w.Vi)(),
            eQ = (0, I.m)({ location: 'PremiumMarketingHome' }),
            e$ = null != (s = eJ || eQ) && s,
            e0 = null == (n = (0, T.Z)()) ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: e1 } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
            e2 = 'PremiumMarketingHome';
        (0, u.j)({
            location: e2 + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: e2 + ' auto off',
                autoTrackExposure: !1
            }),
            i.useEffect(() => {
                eB(!0);
            }, []);
        let e3 = (0, r.jsx)('div', {
                className: a()({
                    [ea.premiumTierCardsContainerSettings]: !L,
                    [ea.premiumTierCardsContainerFullscreen]: L
                }),
                children: (0, r.jsx)(o.$, {
                    innerRef: et,
                    onChange: (e) => eZ(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, r.jsx)(W.ZP, {
                        innerRef: et,
                        variant: eI ? W.NN.MARKETING_PAGE_V2 : W.NN.DEFAULT,
                        showWumpus: !eI,
                        tier0CTAButton: eI
                            ? (0, r.jsx)(Q.Z, {
                                  forceInverted: eO && !eI,
                                  showIcon: !1,
                                  subscriptionTier: en.Si.TIER_0,
                                  className: ea.marginTopForButtons,
                                  buttonTextClassName: eI ? ea.v2SubButtonText : ea.subButtonText,
                                  buttonShineClassName: ea.buttonShine
                              })
                            : (0, r.jsx)(Q.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: en.Si.TIER_0,
                                  className: ea.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: ea.buttonShine
                              }),
                        tier2CTAButton:
                            eq !== en.Si.TIER_0 || eI
                                ? (0, r.jsx)(Q.Z, {
                                      forceInverted: !eI,
                                      showIcon: !1,
                                      subscriptionTier: en.Si.TIER_2,
                                      className: ea.marginTopForButtons,
                                      hasActivePromotion: e$,
                                      buttonTextClassName: eI ? ea.v2SubButtonText : ea.subButtonText,
                                      buttonShineClassName: ea.buttonShine,
                                      confirmationFooter: eQ ? (0, r.jsx)(B.Z, {}) : void 0,
                                      paymentModalBanner: eQ ? (0, r.jsx)(M.Z, {}) : void 0
                                  })
                                : (0, r.jsx)(Q.Z, {
                                      forceInverted: !0,
                                      showIcon: !1,
                                      subscriptionTier: en.Si.TIER_2,
                                      className: ea.marginTopForButtons,
                                      look: d.iLD.OUTLINED,
                                      color: d.Ttl.WHITE,
                                      buttonShineClassName: ea.buttonShine
                                  })
                    })
                })
            }),
            e6 = (0, r.jsxs)('div', {
                className: a()(ea.container, {
                    [ea.settingsContainer]: !L,
                    [ea.containerBackground]: eI && eO
                }),
                'data-cy': 'tier-0-marketing-page',
                children: [
                    eI && (0, r.jsx)('div', { className: ea.heroHeaderSideGradient }),
                    eI &&
                        (0, r.jsx)('img', {
                            src: el,
                            className: ea.heroHeaderBackgroundStars,
                            alt: ''
                        }),
                    !eI &&
                        (0, r.jsx)(U.Z, {
                            premiumSubscription: eM,
                            className: a()(L ? ea.fullscreenExistingSubscriberSpacing : ea.existingSubscriberSpacing, { [ea.zIndex1]: eX }),
                            isFullscreen: L
                        }),
                    !eI &&
                        (0, r.jsx)(eh, {
                            isFullscreen: L,
                            inOfferExperience: eX
                        }),
                    !L && eH
                        ? (0, r.jsx)(Z.Z, {
                              localizedPricingPromo: eF,
                              smallGap: !0
                          })
                        : (0, r.jsxs)('div', {
                              className: a()({ [ea.heroHeadingV2Container]: eI }),
                              children: [
                                  (0, r.jsx)(o.$, {
                                      innerRef: eI ? eb : eN,
                                      onChange: (e) => eA(e),
                                      threshold: 0,
                                      active: !0,
                                      children: eI
                                          ? (0, r.jsx)(J.Z, {
                                                ref: eb,
                                                subscriptionTier: eG,
                                                isFullscreen: L || eX,
                                                entrypoint: V,
                                                isDarkMode: eO
                                            })
                                          : (0, r.jsx)(G.ZP, {
                                                ref: eN,
                                                subscriptionTier: eG,
                                                isFullscreen: L || eX,
                                                isMarketingPageV2Enabled: eI,
                                                className: a()({
                                                    [ea.fullscreenHero]: L,
                                                    [ea.settingsHeroNoBackground]: !L && eX,
                                                    [ea.trialMarketingMargin]: eX,
                                                    [ea.settingsHeroBogoHeight]: !L && eJ,
                                                    [ea.settingsHeroBogoMarginFullscreen]: L && eJ,
                                                    [ea.noTopPaddingOverride]: null != eM
                                                }),
                                                entrypoint: V,
                                                isDarkMode: eO
                                            })
                                  }),
                                  !eI &&
                                      !0 === eQ &&
                                      (0, r.jsx)(P.W, {
                                          isFullScreen: L,
                                          analyticsLocations: e1
                                      }),
                                  eI &&
                                      (0, r.jsx)('div', {
                                          className: ea.heroHeadingV2ArtContainer,
                                          children: (0, r.jsx)(f.Z, {
                                              autoPlay: !eE,
                                              playsInline: !0,
                                              preload: 'auto',
                                              poster: em.Z,
                                              loop: !0,
                                              className: ea.heroHeadingV2Art,
                                              ref: z,
                                              children: (0, r.jsx)('source', {
                                                  src: eW ? eu.Z : eg.Z,
                                                  type: eW ? ei.m.MP4 : ei.m.WEBM
                                              })
                                          })
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: ea.promoBannerContainer,
                        children: [(0, r.jsx)(R.Z, { isFullScreen: L }), L && eH && (0, r.jsx)(D.Z, { localizedPricingPromo: eF })]
                    }),
                    !eI && e3,
                    V === en.EZ.UserSettings &&
                        null != e0 &&
                        (0, r.jsx)(k.C, {
                            className: ea.giftPromoCard,
                            config: e0
                        }),
                    (0, r.jsx)(ef, {
                        isFullscreen: L,
                        inOfferExperience: eX,
                        setIsAllPerksVisible: eY,
                        hasRenderedOnce: eL,
                        isMarketingPageV2Enabled: eI,
                        isReducedMotion: eE
                    }),
                    !eI && (0, r.jsx)(ep, { isFullscreen: L }),
                    eI && e3,
                    (0, r.jsxs)('div', {
                        className: ea.planComparisonTableContainer,
                        children: [
                            eI
                                ? (0, r.jsx)(q.Z, { className: ea.planComparisonTableV2 })
                                : (0, r.jsx)(K.Z, {
                                      className: ea.planComparisonTable,
                                      hideCTAs: !0
                                  }),
                            L && !eI
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('img', {
                                              src: ec,
                                              className: ea.tableLeftSideDecoration,
                                              width: 197,
                                              height: 486,
                                              alt: es.NW.string(es.t.X4IxWF)
                                          }),
                                          (0, r.jsx)('img', {
                                              src: ed,
                                              className: ea.tableRightSideDecoration,
                                              width: 241,
                                              height: 552,
                                              alt: es.NW.string(es.t.X4IxWF)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    !eI && (0, r.jsx)('div', { className: L ? ea.footerSpacingFullscreen : ea.footerSpacing }),
                    (0, r.jsx)(Y.Z, {
                        isVisible: !ey && !eD && !eP && eL,
                        isFullscreen: L,
                        subscriptionTier: eG,
                        isMarketingPageV2: eI
                    }),
                    (0, r.jsx)(o.$, {
                        innerRef: ex,
                        onChange: (e) => {
                            e && !ew && (E.default.track(er.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: e1 }), ek(!0));
                        },
                        children: (0, r.jsx)('div', {
                            ref: ex,
                            className: ea.bottomOfPageVisibilitySensor
                        })
                    }),
                    !eI &&
                        (0, r.jsx)('img', {
                            src: eo,
                            className: ea.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: es.NW.string(es.t.X4IxWF)
                        }),
                    eI &&
                        (0, r.jsx)(o.$, {
                            innerRef: e_,
                            onChange: (e) => {
                                eR(e);
                            },
                            children: (0, r.jsx)(X.Z, {
                                ref: e_,
                                isFooterVisible: eP,
                                isDarkMode: eO,
                                isReducedMotion: eE,
                                subscriptionTier: eG
                            })
                        })
                ]
            });
        return L
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.yWw, {
                          className: ea.scroller,
                          ref: H,
                          children: e6
                      }),
                      (0, r.jsx)(ee.Z, {
                          previousComponent: $.MQ.MARKETING,
                          isAllPerksVisible: ez,
                          setIsAllPerksVisible: eY,
                          isFullScreen: L
                      })
                  ]
              })
            : e6;
    };
