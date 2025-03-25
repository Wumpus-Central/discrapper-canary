n.d(t, { Z: () => ef }), n(47120);
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
    x = n(464824),
    N = n(214852),
    b = n(594174),
    _ = n(78839),
    E = n(626135),
    j = n(526167),
    C = n(74538),
    O = n(140465),
    v = n(278605),
    S = n(286961),
    T = n(351367),
    I = n(91802),
    y = n(639119),
    A = n(879214),
    P = n(8647),
    R = n(568126),
    D = n(605289),
    Z = n(346497),
    w = n(218390),
    k = n(823188),
    W = n(241158),
    L = n(114625),
    B = n(711896),
    M = n(135785),
    U = n(498765),
    V = n(635921),
    G = n(177839),
    F = n(794484),
    H = n(392521),
    z = n(349803),
    Y = n(179984),
    K = n(706542),
    q = n(851001),
    X = n(304576),
    J = n(409100),
    Q = n(391110),
    $ = n(71363),
    ee = n(781800),
    et = n(474936),
    en = n(981631),
    er = n(869783),
    ei = n(388032),
    es = n(658249),
    ea = n(499317),
    el = n(865215),
    eo = n(735035),
    ec = n(786362),
    ed = n(181960),
    eu = n(313199),
    em = n(821969);
let eg = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === et.p9.TIER_2 && t) ? null : (0, r.jsx)(G.Z, { className: t ? es.perkCardsContainerSpacingFullscreen : es.perkCardsContainerSpacingSettings });
    },
    ep = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, r.jsx)(U.Z, { lifted: !t && n }) : null;
    },
    eh = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: i, hasRenderedOnce: s, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: a()(es.whatsNewSectionBackground, { [es.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, r.jsx)(F.Z, {
                              variant: Q.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, r.jsx)(W.Z, {
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      l &&
                          (0, r.jsx)(W.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      !l &&
                          (0, r.jsx)(F.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, r.jsx)(ee.Z, {
                                        setIsAllPerksVisible: i,
                                        previousComponent: Q.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, r.jsx)(H.ZP, {
                              className: es.pdSparklesTop,
                              variant: H.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, r.jsx)(H.ZP, {
                              className: es.pdSparklesBottom,
                              variant: H.u0.BOTTOM
                          })
                  ]
              })
            : null;
    },
    ef = (e) => {
        var t, n, s;
        let { isFullscreen: W, entrypoint: U } = e;
        (0, N.z)(x.X);
        let G = U === et.EZ.ApplicationStoreHome,
            F = i.useRef(null),
            H = i.useRef(null),
            ee = i.useRef(null),
            ef = i.useRef(null),
            ex = i.useRef(null),
            eN = i.useRef(null),
            eb = i.useRef(null),
            e_ = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
            eE = (0, m.ZP)(),
            ej = (0, c.wj)(eE),
            eC = b.default.getCurrentUser(),
            eO = (0, C.I5)(eC),
            ev = (0, v.xP)('PremiumMarketingHome') && !eO && G,
            [eS, eT] = i.useState(!1),
            [eI, ey] = i.useState(!1),
            [eA, eP] = i.useState(!1),
            [eR, eD] = i.useState(!1),
            eZ = (0, j.rO)(),
            [ew, ek] = i.useState(!1),
            eW = (0, l.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
            eL = null != eW ? (0, C.Af)(eW) : null,
            eB = null != eL ? C.ZP.getSkuIdForPlan(eL.planId) : null,
            eM = null !== eB && eB !== et.Si.TIER_2 ? et.Si.TIER_2 : null,
            eU = (0, I.n)(),
            eV = null != eU,
            [eG, eF] = i.useState(!1),
            eH = (0, y.N)(),
            ez = null == eH ? void 0 : null === (t = eH.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            eY = (0, O.Nx)(),
            eK = (0, Z.Vi)(),
            eq = (0, T.m)({ location: 'PremiumMarketingHome' }),
            eX = null !== (s = eK || eq) && void 0 !== s && s,
            eJ = null === (n = (0, S.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: eQ } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
            e$ = 'PremiumMarketingHome';
        (0, u.j)({
            location: e$ + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: e$ + ' auto off',
                autoTrackExposure: !1
            }),
            i.useEffect(() => {
                ek(!0);
            }, []);
        let e0 = (0, r.jsx)('div', {
                className: a()({
                    [es.premiumTierCardsContainerSettings]: !W,
                    [es.premiumTierCardsContainerFullscreen]: W
                }),
                children: (0, r.jsx)(o.$, {
                    innerRef: ee,
                    onChange: (e) => eP(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, r.jsx)(k.ZP, {
                        innerRef: ee,
                        variant: ev ? k.NN.MARKETING_PAGE_V2 : k.NN.DEFAULT,
                        showWumpus: !ev,
                        tier0CTAButton: ev
                            ? (0, r.jsx)(J.Z, {
                                  forceInverted: ej && !ev,
                                  showIcon: !1,
                                  subscriptionTier: et.Si.TIER_0,
                                  className: es.marginTopForButtons,
                                  buttonTextClassName: ev ? es.v2SubButtonText : es.subButtonText,
                                  buttonShineClassName: es.buttonShine
                              })
                            : (0, r.jsx)(J.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: et.Si.TIER_0,
                                  className: es.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: es.buttonShine
                              }),
                        tier2CTAButton:
                            ez !== et.Si.TIER_0 || ev
                                ? (0, r.jsx)(J.Z, {
                                      forceInverted: !ev,
                                      showIcon: !1,
                                      subscriptionTier: et.Si.TIER_2,
                                      className: es.marginTopForButtons,
                                      hasActivePromotion: eX,
                                      buttonTextClassName: ev ? es.v2SubButtonText : es.subButtonText,
                                      buttonShineClassName: es.buttonShine,
                                      confirmationFooter: eq ? (0, r.jsx)(L.Z, {}) : void 0,
                                      planSelectBanner: eq ? (0, r.jsx)(B.Z, {}) : void 0
                                  })
                                : (0, r.jsx)(J.Z, {
                                      forceInverted: !0,
                                      showIcon: !1,
                                      subscriptionTier: et.Si.TIER_2,
                                      className: es.marginTopForButtons,
                                      look: d.iLD.OUTLINED,
                                      color: d.Ttl.WHITE,
                                      buttonShineClassName: es.buttonShine
                                  })
                    })
                })
            }),
            e1 = (0, r.jsxs)('div', {
                className: a()(es.container, {
                    [es.settingsContainer]: !W,
                    [es.containerBackground]: ev && ej
                }),
                'data-cy': 'tier-0-marketing-page',
                children: [
                    ev && (0, r.jsx)('div', { className: es.heroHeaderSideGradient }),
                    ev &&
                        (0, r.jsx)('img', {
                            src: ea,
                            className: es.heroHeaderBackgroundStars,
                            alt: ''
                        }),
                    (0, r.jsx)(M.Z, {
                        premiumSubscription: eW,
                        className: a()(W ? es.fullscreenExistingSubscriberSpacing : es.existingSubscriberSpacing, { [es.zIndex1]: eY }),
                        isFullscreen: W
                    }),
                    !ev &&
                        (0, r.jsx)(ep, {
                            isFullscreen: W,
                            inOfferExperience: eY
                        }),
                    !W && eV
                        ? (0, r.jsx)(D.Z, {
                              localizedPricingPromo: eU,
                              smallGap: !0
                          })
                        : (0, r.jsxs)('div', {
                              className: a()({ [es.heroHeadingV2Container]: ev }),
                              children: [
                                  (0, r.jsx)(o.$, {
                                      innerRef: ev ? ef : ex,
                                      onChange: (e) => eT(e),
                                      threshold: 0,
                                      active: !0,
                                      children: ev
                                          ? (0, r.jsx)(X.Z, {
                                                ref: ef,
                                                subscriptionTier: eM,
                                                isFullscreen: W || eY,
                                                entrypoint: U,
                                                isDarkMode: ej
                                            })
                                          : (0, r.jsx)(V.ZP, {
                                                ref: ex,
                                                subscriptionTier: eM,
                                                isFullscreen: W || eY,
                                                isMarketingPageV2Enabled: ev,
                                                className: a()({
                                                    [es.fullscreenHero]: W,
                                                    [es.settingsHeroNoBackground]: !W && eY,
                                                    [es.trialMarketingMargin]: eY,
                                                    [es.settingsHeroBogoHeight]: !W && eK,
                                                    [es.settingsHeroBogoMarginFullscreen]: W && eK,
                                                    [es.noTopPaddingOverride]: null != eW
                                                }),
                                                entrypoint: U,
                                                isDarkMode: ej
                                            })
                                  }),
                                  !ev &&
                                      !0 === eq &&
                                      (0, r.jsx)(A.W, {
                                          isFullScreen: W,
                                          analyticsLocations: eQ
                                      }),
                                  ev &&
                                      (0, r.jsx)('div', {
                                          className: es.heroHeadingV2ArtContainer,
                                          children: (0, r.jsx)(f.Z, {
                                              autoPlay: !e_,
                                              playsInline: !0,
                                              preload: 'auto',
                                              poster: eu.Z,
                                              loop: !0,
                                              className: es.heroHeadingV2Art,
                                              ref: H,
                                              children: (0, r.jsx)('source', {
                                                  src: eZ ? ed.Z : em.Z,
                                                  type: eZ ? er.m.MP4 : er.m.WEBM
                                              })
                                          })
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: es.promoBannerContainer,
                        children: [(0, r.jsx)(P.Z, { isFullScreen: W }), W && eV && (0, r.jsx)(R.Z, { localizedPricingPromo: eU })]
                    }),
                    !ev && e0,
                    U === et.EZ.UserSettings &&
                        null != eJ &&
                        (0, r.jsx)(w.C, {
                            className: es.giftPromoCard,
                            config: eJ
                        }),
                    (0, r.jsx)(eh, {
                        isFullscreen: W,
                        inOfferExperience: eY,
                        setIsAllPerksVisible: eF,
                        hasRenderedOnce: ew,
                        isMarketingPageV2Enabled: ev,
                        isReducedMotion: e_
                    }),
                    !ev && (0, r.jsx)(eg, { isFullscreen: W }),
                    ev && e0,
                    (0, r.jsxs)('div', {
                        className: es.planComparisonTableContainer,
                        children: [
                            ev
                                ? (0, r.jsx)(K.Z, { className: es.planComparisonTableV2 })
                                : (0, r.jsx)(Y.Z, {
                                      className: es.planComparisonTable,
                                      hideCTAs: !0
                                  }),
                            W && !ev
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('img', {
                                              src: eo,
                                              className: es.tableLeftSideDecoration,
                                              width: 197,
                                              height: 486,
                                              alt: ei.NW.string(ei.t.X4IxWF)
                                          }),
                                          (0, r.jsx)('img', {
                                              src: ec,
                                              className: es.tableRightSideDecoration,
                                              width: 241,
                                              height: 552,
                                              alt: ei.NW.string(ei.t.X4IxWF)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    !ev && (0, r.jsx)('div', { className: W ? es.footerSpacingFullscreen : es.footerSpacing }),
                    (0, r.jsx)(z.Z, {
                        isVisible: !eS && !eA && !eI && ew,
                        isFullscreen: W,
                        subscriptionTier: eM,
                        isMarketingPageV2: ev
                    }),
                    (0, r.jsx)(o.$, {
                        innerRef: eN,
                        onChange: (e) => {
                            e && !eR && (E.default.track(en.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eQ }), eD(!0));
                        },
                        children: (0, r.jsx)('div', {
                            ref: eN,
                            className: es.bottomOfPageVisibilitySensor
                        })
                    }),
                    !ev &&
                        (0, r.jsx)('img', {
                            src: el,
                            className: es.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: ei.NW.string(ei.t.X4IxWF)
                        }),
                    ev &&
                        (0, r.jsx)(o.$, {
                            innerRef: eb,
                            onChange: (e) => {
                                ey(e);
                            },
                            children: (0, r.jsx)(q.Z, {
                                ref: eb,
                                isFooterVisible: eI,
                                isDarkMode: ej,
                                isReducedMotion: e_
                            })
                        })
                ]
            });
        return W
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.yWw, {
                          className: es.scroller,
                          ref: F,
                          children: e1
                      }),
                      (0, r.jsx)($.Z, {
                          previousComponent: Q.MQ.MARKETING,
                          isAllPerksVisible: eG,
                          setIsAllPerksVisible: eF,
                          isFullScreen: W
                      })
                  ]
              })
            : e1;
    };
