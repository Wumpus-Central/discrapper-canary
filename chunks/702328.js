n.d(t, { Z: () => eb }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(634894),
    m = n(410030),
    p = n(607070),
    g = n(100527),
    h = n(906732),
    f = n(70097),
    b = n(433811),
    _ = n(214852),
    x = n(594174),
    E = n(78839),
    C = n(626135),
    j = n(526167),
    O = n(74538),
    S = n(140465),
    v = n(278605),
    T = n(585612),
    I = n(286961),
    N = n(351367),
    y = n(91802),
    A = n(639119),
    P = n(879214),
    R = n(8647),
    D = n(568126),
    Z = n(605289),
    w = n(346497),
    k = n(218390),
    L = n(823188),
    B = n(241158),
    M = n(114625),
    U = n(72623),
    V = n(135785),
    G = n(498765),
    F = n(635921),
    H = n(177839),
    z = n(794484),
    W = n(392521),
    Y = n(349803),
    K = n(179984),
    q = n(706542),
    X = n(851001),
    Q = n(304576),
    J = n(409100),
    $ = n(391110),
    ee = n(71363),
    et = n(781800),
    en = n(474936),
    ei = n(981631),
    er = n(869783),
    es = n(388032),
    el = n(651117),
    ea = n(499317),
    eo = n(865215),
    ec = n(735035),
    ed = n(786362),
    eu = n(181960),
    em = n(313199),
    ep = n(821969);
let eg = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === en.p9.TIER_2 && t) ? null : (0, i.jsx)(H.Z, { className: t ? el.perkCardsContainerSpacingFullscreen : el.perkCardsContainerSpacingSettings });
    },
    eh = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(G.Z, { lifted: !t && n }) : null;
    },
    ef = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: s, isMarketingPageV2Enabled: a, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: l()(el.whatsNewSectionBackground, { [el.whatsNewSectionBackgroundV2]: a }),
                  children: [
                      !a &&
                          (0, i.jsx)(z.Z, {
                              variant: $.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      a &&
                          (0, i.jsx)(B.Z, {
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      a &&
                          (0, i.jsx)(B.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      !a &&
                          (0, i.jsx)(z.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(et.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: $.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !a &&
                          (0, i.jsx)(W.ZP, {
                              className: el.pdSparklesTop,
                              variant: W.u0.TOP
                          }),
                      n &&
                          !a &&
                          (0, i.jsx)(W.ZP, {
                              className: el.pdSparklesBottom,
                              variant: W.u0.BOTTOM
                          })
                  ]
              })
            : null;
    },
    eb = (e) => {
        var t, n, s;
        let { isFullscreen: B, entrypoint: G } = e;
        (0, _.z)(b.X);
        let H = G === en.EZ.ApplicationStoreHome,
            z = r.useRef(null),
            W = r.useRef(null),
            et = r.useRef(null),
            eb = r.useRef(null),
            e_ = r.useRef(null),
            ex = r.useRef(null),
            eE = r.useRef(null),
            eC = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
            ej = (0, m.ZP)(),
            eO = (0, c.wj)(ej),
            eS = x.default.getCurrentUser(),
            ev = (0, O.I5)(eS),
            eT = (0, v.xP)('PremiumMarketingHome'),
            eI = (0, T.C)('PremiumMarketingHome'),
            eN = ((eT && !ev) || (ev && eI)) && H,
            [ey, eA] = r.useState(!1),
            [eP, eR] = r.useState(!1),
            [eD, eZ] = r.useState(!1),
            [ew, ek] = r.useState(!1),
            eL = (0, j.rO)(),
            [eB, eM] = r.useState(!1),
            eU = (0, a.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
            eV = null != eU ? (0, O.Af)(eU) : null,
            eG = null != eV ? O.ZP.getSkuIdForPlan(eV.planId) : null,
            eF = null !== eG && eG !== en.Si.TIER_2 ? en.Si.TIER_2 : null,
            eH = (0, y.n)(),
            ez = null != eH,
            [eW, eY] = r.useState(!1),
            eK = (0, A.N)(),
            eq = null == eK || null == (t = eK.subscription_trial) ? void 0 : t.sku_id,
            eX = (0, S.Nx)(),
            eQ = (0, w.Vi)(),
            eJ = (0, N.m)({ location: 'PremiumMarketingHome' }),
            e$ = null != (s = eQ || eJ) && s,
            e0 = null == (n = (0, I.Z)()) ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: e1 } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
            e2 = 'PremiumMarketingHome';
        (0, u.j)({
            location: e2 + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: e2 + ' auto off',
                autoTrackExposure: !1
            }),
            r.useEffect(() => {
                eM(!0);
            }, []);
        let e3 = (0, i.jsx)('div', {
                className: l()({
                    [el.premiumTierCardsContainerSettings]: !B,
                    [el.premiumTierCardsContainerFullscreen]: B
                }),
                children: (0, i.jsx)(o.$, {
                    innerRef: et,
                    onChange: (e) => eZ(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, i.jsx)(L.ZP, {
                        innerRef: et,
                        variant: eN ? L.NN.MARKETING_PAGE_V2 : L.NN.DEFAULT,
                        showWumpus: !eN,
                        tier0CTAButton: eN
                            ? (0, i.jsx)(J.Z, {
                                  forceInverted: eO && !eN,
                                  showIcon: !1,
                                  subscriptionTier: en.Si.TIER_0,
                                  className: el.marginTopForButtons,
                                  buttonTextClassName: eN ? el.v2SubButtonText : el.subButtonText,
                                  buttonShineClassName: el.buttonShine
                              })
                            : (0, i.jsx)(J.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: en.Si.TIER_0,
                                  className: el.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: el.buttonShine
                              }),
                        tier2CTAButton:
                            eq !== en.Si.TIER_0 || eN
                                ? (0, i.jsx)(J.Z, {
                                      forceInverted: !eN,
                                      showIcon: !1,
                                      subscriptionTier: en.Si.TIER_2,
                                      className: el.marginTopForButtons,
                                      hasActivePromotion: e$,
                                      buttonTextClassName: eN ? el.v2SubButtonText : el.subButtonText,
                                      buttonShineClassName: el.buttonShine,
                                      confirmationFooter: eJ ? (0, i.jsx)(M.Z, {}) : void 0,
                                      paymentModalBanner: eJ ? (0, i.jsx)(U.Z, {}) : void 0
                                  })
                                : (0, i.jsx)(J.Z, {
                                      forceInverted: !0,
                                      showIcon: !1,
                                      subscriptionTier: en.Si.TIER_2,
                                      className: el.marginTopForButtons,
                                      look: d.iLD.OUTLINED,
                                      color: d.Ttl.WHITE,
                                      buttonShineClassName: el.buttonShine
                                  })
                    })
                })
            }),
            e6 = (0, i.jsxs)('div', {
                className: l()(el.container, {
                    [el.settingsContainer]: !B,
                    [el.containerBackground]: eN && eO
                }),
                'data-cy': 'tier-0-marketing-page',
                children: [
                    eN && (0, i.jsx)('div', { className: el.heroHeaderSideGradient }),
                    eN &&
                        (0, i.jsx)('img', {
                            src: ea,
                            className: el.heroHeaderBackgroundStars,
                            alt: ''
                        }),
                    !eN &&
                        (0, i.jsx)(V.Z, {
                            premiumSubscription: eU,
                            className: l()(B ? el.fullscreenExistingSubscriberSpacing : el.existingSubscriberSpacing, { [el.zIndex1]: eX }),
                            isFullscreen: B
                        }),
                    !eN &&
                        (0, i.jsx)(eh, {
                            isFullscreen: B,
                            inOfferExperience: eX
                        }),
                    !B && ez
                        ? (0, i.jsx)(Z.Z, {
                              localizedPricingPromo: eH,
                              smallGap: !0
                          })
                        : (0, i.jsxs)('div', {
                              className: l()({ [el.heroHeadingV2Container]: eN }),
                              children: [
                                  (0, i.jsx)(o.$, {
                                      innerRef: eN ? eb : e_,
                                      onChange: (e) => eA(e),
                                      threshold: 0,
                                      active: !0,
                                      children: eN
                                          ? (0, i.jsx)(Q.Z, {
                                                ref: eb,
                                                subscriptionTier: eF,
                                                isFullscreen: B || eX,
                                                entrypoint: G,
                                                isDarkMode: eO
                                            })
                                          : (0, i.jsx)(F.ZP, {
                                                ref: e_,
                                                subscriptionTier: eF,
                                                isFullscreen: B || eX,
                                                isMarketingPageV2Enabled: eN,
                                                className: l()({
                                                    [el.fullscreenHero]: B,
                                                    [el.settingsHeroNoBackground]: !B && eX,
                                                    [el.trialMarketingMargin]: eX,
                                                    [el.settingsHeroBogoHeight]: !B && eQ,
                                                    [el.settingsHeroBogoMarginFullscreen]: B && eQ,
                                                    [el.noTopPaddingOverride]: null != eU
                                                }),
                                                entrypoint: G,
                                                isDarkMode: eO
                                            })
                                  }),
                                  !eN &&
                                      !0 === eJ &&
                                      (0, i.jsx)(P.W, {
                                          isFullScreen: B,
                                          analyticsLocations: e1
                                      }),
                                  eN &&
                                      (0, i.jsx)('div', {
                                          className: el.heroHeadingV2ArtContainer,
                                          children: (0, i.jsx)(f.Z, {
                                              autoPlay: !eC,
                                              playsInline: !0,
                                              preload: eC ? 'none' : 'auto',
                                              poster: em.Z,
                                              loop: !0,
                                              className: el.heroHeadingV2Art,
                                              ref: W,
                                              children: (0, i.jsx)('source', {
                                                  src: eL ? eu.Z : ep.Z,
                                                  type: eL ? er.m.MP4 : er.m.WEBM
                                              })
                                          })
                                      })
                              ]
                          }),
                    (0, i.jsxs)('div', {
                        className: el.promoBannerContainer,
                        children: [(0, i.jsx)(R.Z, { isFullScreen: B }), B && ez && (0, i.jsx)(D.Z, { localizedPricingPromo: eH })]
                    }),
                    !eN && e3,
                    G === en.EZ.UserSettings &&
                        null != e0 &&
                        (0, i.jsx)(k.C, {
                            className: el.giftPromoCard,
                            config: e0
                        }),
                    (0, i.jsx)(ef, {
                        isFullscreen: B,
                        inOfferExperience: eX,
                        setIsAllPerksVisible: eY,
                        hasRenderedOnce: eB,
                        isMarketingPageV2Enabled: eN,
                        isReducedMotion: eC
                    }),
                    !eN && (0, i.jsx)(eg, { isFullscreen: B }),
                    eN && e3,
                    (0, i.jsxs)('div', {
                        className: el.planComparisonTableContainer,
                        children: [
                            eN
                                ? (0, i.jsx)(q.Z, { className: el.planComparisonTableV2 })
                                : (0, i.jsx)(K.Z, {
                                      className: el.planComparisonTable,
                                      hideCTAs: !0
                                  }),
                            B && !eN
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)('img', {
                                              src: ec,
                                              className: el.tableLeftSideDecoration,
                                              width: 197,
                                              height: 486,
                                              alt: es.intl.string(es.t.X4IxWF)
                                          }),
                                          (0, i.jsx)('img', {
                                              src: ed,
                                              className: el.tableRightSideDecoration,
                                              width: 241,
                                              height: 552,
                                              alt: es.intl.string(es.t.X4IxWF)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    !eN && (0, i.jsx)('div', { className: B ? el.footerSpacingFullscreen : el.footerSpacing }),
                    (0, i.jsx)(Y.Z, {
                        isVisible: !ey && !eD && !eP && eB,
                        isFullscreen: B,
                        subscriptionTier: eF,
                        isMarketingPageV2: eN
                    }),
                    (0, i.jsx)(o.$, {
                        innerRef: ex,
                        onChange: (e) => {
                            e && !ew && (C.default.track(ei.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: e1 }), ek(!0));
                        },
                        children: (0, i.jsx)('div', {
                            ref: ex,
                            className: el.bottomOfPageVisibilitySensor
                        })
                    }),
                    !eN &&
                        (0, i.jsx)('img', {
                            src: eo,
                            className: el.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: es.intl.string(es.t.X4IxWF)
                        }),
                    eN &&
                        (0, i.jsx)(o.$, {
                            innerRef: eE,
                            onChange: (e) => {
                                eR(e);
                            },
                            children: (0, i.jsx)(X.Z, {
                                ref: eE,
                                isFooterVisible: eP,
                                isDarkMode: eO,
                                isReducedMotion: eC,
                                subscriptionTier: eF
                            })
                        })
                ]
            });
        return B
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.yWw, {
                          className: el.scroller,
                          ref: z,
                          children: e6
                      }),
                      (0, i.jsx)(ee.Z, {
                          previousComponent: $.MQ.MARKETING,
                          isAllPerksVisible: eW,
                          setIsAllPerksVisible: eY,
                          isFullScreen: B
                      })
                  ]
              })
            : e6;
    };
