n.d(t, { Z: () => eg }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
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
    _ = n(214852),
    x = n(594174),
    E = n(78839),
    C = n(626135),
    O = n(526167),
    j = n(74538),
    S = n(140465),
    v = n(278605),
    T = n(585612),
    N = n(286961),
    I = n(91802),
    y = n(639119),
    A = n(8647),
    P = n(784238),
    R = n(568126),
    D = n(605289),
    Z = n(346497),
    w = n(218390),
    k = n(823188),
    L = n(611116),
    B = n(135785),
    M = n(498765),
    U = n(635921),
    V = n(177839),
    G = n(349803),
    F = n(179984),
    H = n(706542),
    z = n(851001),
    W = n(304576),
    Y = n(560223),
    K = n(301724),
    q = n(391110),
    X = n(71363),
    Q = n(781800),
    J = n(474936),
    $ = n(981631),
    ee = n(869783),
    et = n(388032),
    en = n(651117),
    ei = n(499317),
    er = n(865215),
    es = n(735035),
    el = n(786362),
    ea = n(181960),
    eo = n(313199),
    ec = n(821969);
let ed = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === J.p9.TIER_2 && t) ? null : (0, i.jsx)(V.Z, { className: t ? en.perkCardsContainerSpacingFullscreen : en.perkCardsContainerSpacingSettings });
    },
    eu = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(M.Z, { lifted: !t && n }) : null;
    },
    em = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: s, isMarketingPageV2Enabled: a, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: l()(en.whatsNewSectionBackground, { [en.whatsNewSectionBackgroundV2]: a }),
                  children: [
                      !a &&
                          (0, i.jsx)(Y.Z, {
                              variant: q.gM.WHATS_NEW,
                              isFullScreen: t
                          }),
                      a &&
                          (0, i.jsx)(L.Z, {
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      !a &&
                          (0, i.jsx)(Y.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(Q.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: q.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !a &&
                          (0, i.jsx)(K.ZP, {
                              className: en.pdSparklesTop,
                              variant: K.u0.TOP
                          }),
                      n &&
                          !a &&
                          (0, i.jsx)(K.ZP, {
                              className: en.pdSparklesBottom,
                              variant: K.u0.BOTTOM
                          })
                  ]
              })
            : null;
    },
    eg = (e) => {
        var t, n;
        let { isFullscreen: s, entrypoint: L } = e;
        (0, _.z)(b.X);
        let M = L === J.EZ.ApplicationStoreHome,
            V = r.useRef(null),
            Y = r.useRef(null),
            K = r.useRef(null),
            Q = r.useRef(null),
            eg = r.useRef(null),
            ep = r.useRef(null),
            eh = r.useRef(null),
            ef = (0, a.e7)([g.Z], () => g.Z.useReducedMotion),
            eb = (0, m.ZP)(),
            e_ = (0, c.wj)(eb),
            ex = x.default.getCurrentUser(),
            eE = (0, j.I5)(ex),
            eC = (0, v.xP)('PremiumMarketingHome'),
            eO = (0, T.C)('PremiumMarketingHome'),
            ej = ((eC && !eE) || (eE && eO)) && M,
            [eS, ev] = r.useState(!1),
            [eT, eN] = r.useState(!1),
            [eI, ey] = r.useState(!1),
            [eA, eP] = r.useState(!1),
            eR = (0, O.rO)(),
            [eD, eZ] = r.useState(!1),
            ew = (0, a.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
            ek = null != ew ? (0, j.Af)(ew) : null,
            eL = null != ek ? j.ZP.getSkuIdForPlan(ek.planId) : null,
            eB = null !== eL && eL !== J.Si.TIER_2 ? J.Si.TIER_2 : null,
            eM = (0, I.n)(),
            eU = null != eM,
            [eV, eG] = r.useState(!1),
            eF = (0, y.N)(),
            eH = null == eF || null == (t = eF.subscription_trial) ? void 0 : t.sku_id,
            ez = (0, S.Nx)(),
            eW = (0, Z.Vi)(),
            eY = null != eW && eW,
            eK = null == (n = (0, N.Z)()) ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: eq } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
            eX = 'PremiumMarketingHome';
        (0, u.j)({
            location: eX + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: eX + ' auto off',
                autoTrackExposure: !1
            }),
            r.useEffect(() => {
                eZ(!0);
            }, []);
        let eQ = (0, i.jsx)('div', {
                className: l()({
                    [en.premiumTierCardsContainerSettings]: !s,
                    [en.premiumTierCardsContainerFullscreen]: s
                }),
                children: (0, i.jsx)(o.$, {
                    innerRef: K,
                    onChange: (e) => ey(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, i.jsx)(k.ZP, {
                        innerRef: K,
                        variant: ej ? k.NN.MARKETING_PAGE_V2 : k.NN.DEFAULT,
                        showWumpus: !ej,
                        tier0CTAButton: ej
                            ? (0, i.jsx)(P.Z, {
                                  forceInverted: e_ && !ej,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_0,
                                  className: en.marginTopForButtons,
                                  textOptions: { textClassName: ej ? en.v2SubButtonText : en.subButtonText },
                                  buttonShineClassName: en.buttonShine
                              })
                            : (0, i.jsx)(P.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_0,
                                  className: en.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: en.buttonShine
                              }),
                        tier2CTAButton:
                            eH !== J.Si.TIER_0 || ej
                                ? (0, i.jsx)(P.Z, {
                                      forceInverted: !ej,
                                      showIcon: !1,
                                      subscriptionTier: J.Si.TIER_2,
                                      className: en.marginTopForButtons,
                                      hasActivePromotion: eY,
                                      textOptions: { textClassName: ej ? en.v2SubButtonText : en.subButtonText },
                                      buttonShineClassName: en.buttonShine
                                  })
                                : (0, i.jsx)(P.Z, {
                                      forceInverted: !0,
                                      showIcon: !1,
                                      subscriptionTier: J.Si.TIER_2,
                                      className: en.marginTopForButtons,
                                      look: d.iLD.OUTLINED,
                                      color: d.Ttl.WHITE,
                                      buttonShineClassName: en.buttonShine
                                  })
                    })
                })
            }),
            eJ = (0, i.jsxs)('div', {
                className: l()(en.container, {
                    [en.settingsContainer]: !s,
                    [en.containerBackground]: ej && e_,
                    [en.responsiveContainer]: ej
                }),
                'data-cy': 'tier-0-marketing-page',
                children: [
                    ej && (0, i.jsx)('div', { className: en.heroHeaderSideGradient }),
                    ej &&
                        (0, i.jsx)('img', {
                            src: ei,
                            className: en.heroHeaderBackgroundStars,
                            alt: ''
                        }),
                    !ej &&
                        (0, i.jsx)(B.Z, {
                            premiumSubscription: ew,
                            className: l()(s ? en.fullscreenExistingSubscriberSpacing : en.existingSubscriberSpacing, { [en.zIndex1]: ez }),
                            isFullscreen: s
                        }),
                    !ej &&
                        (0, i.jsx)(eu, {
                            isFullscreen: s,
                            inOfferExperience: ez
                        }),
                    !s && eU
                        ? (0, i.jsx)(D.Z, {
                              localizedPricingPromo: eM,
                              smallGap: !0
                          })
                        : (0, i.jsxs)('div', {
                              className: l()({ [en.heroHeadingV2Container]: ej }),
                              children: [
                                  (0, i.jsx)(o.$, {
                                      innerRef: ej ? Q : eg,
                                      onChange: (e) => ev(e),
                                      threshold: 0,
                                      active: !0,
                                      children: ej
                                          ? (0, i.jsx)(W.Z, {
                                                ref: Q,
                                                subscriptionTier: eB,
                                                isFullscreen: s || ez,
                                                entrypoint: L,
                                                isDarkMode: e_
                                            })
                                          : (0, i.jsx)(U.ZP, {
                                                ref: eg,
                                                subscriptionTier: eB,
                                                isFullscreen: s || ez,
                                                isMarketingPageV2Enabled: ej,
                                                className: l()({
                                                    [en.fullscreenHero]: s,
                                                    [en.settingsHeroNoBackground]: !s && ez,
                                                    [en.trialMarketingMargin]: ez,
                                                    [en.settingsHeroBogoHeight]: !s && eW,
                                                    [en.settingsHeroBogoMarginFullscreen]: s && eW,
                                                    [en.noTopPaddingOverride]: null != ew
                                                }),
                                                entrypoint: L,
                                                isDarkMode: e_
                                            })
                                  }),
                                  ej &&
                                      (0, i.jsx)('div', {
                                          className: en.heroHeadingV2ArtContainer,
                                          children: (0, i.jsx)(f.Z, {
                                              autoPlay: !ef,
                                              playsInline: !0,
                                              preload: ef ? 'none' : 'auto',
                                              poster: eo.Z,
                                              loop: !0,
                                              className: en.heroHeadingV2Art,
                                              ref: Y,
                                              children: (0, i.jsx)('source', {
                                                  src: eR ? ea.Z : ec.Z,
                                                  type: eR ? ee.m.MP4 : ee.m.WEBM
                                              })
                                          })
                                      })
                              ]
                          }),
                    (0, i.jsxs)('div', {
                        className: en.promoBannerContainer,
                        children: [(0, i.jsx)(A.Z, { isFullScreen: s }), s && eU && (0, i.jsx)(R.Z, { localizedPricingPromo: eM })]
                    }),
                    !ej && eQ,
                    L === J.EZ.UserSettings &&
                        null != eK &&
                        (0, i.jsx)(w.C, {
                            className: en.giftPromoCard,
                            config: eK
                        }),
                    (0, i.jsx)(em, {
                        isFullscreen: s,
                        inOfferExperience: ez,
                        setIsAllPerksVisible: eG,
                        hasRenderedOnce: eD,
                        isMarketingPageV2Enabled: ej,
                        isReducedMotion: ef
                    }),
                    !ej && (0, i.jsx)(ed, { isFullscreen: s }),
                    ej && eQ,
                    (0, i.jsxs)('div', {
                        className: en.planComparisonTableContainer,
                        children: [
                            ej
                                ? (0, i.jsx)(H.Z, { className: en.planComparisonTableV2 })
                                : (0, i.jsx)(F.Z, {
                                      className: en.planComparisonTable,
                                      hideCTAs: !0
                                  }),
                            s && !ej
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)('img', {
                                              src: es,
                                              className: en.tableLeftSideDecoration,
                                              width: 197,
                                              height: 486,
                                              alt: et.intl.string(et.t.X4IxWF)
                                          }),
                                          (0, i.jsx)('img', {
                                              src: el,
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
                    !ej && (0, i.jsx)('div', { className: s ? en.footerSpacingFullscreen : en.footerSpacing }),
                    (0, i.jsx)(G.Z, {
                        isVisible: !eS && !eI && !eT && eD,
                        isFullscreen: s,
                        subscriptionTier: eB,
                        isMarketingPageV2: ej
                    }),
                    (0, i.jsx)(o.$, {
                        innerRef: ep,
                        onChange: (e) => {
                            e && !eA && (C.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eq }), eP(!0));
                        },
                        children: (0, i.jsx)('div', {
                            ref: ep,
                            className: en.bottomOfPageVisibilitySensor
                        })
                    }),
                    !ej &&
                        (0, i.jsx)('img', {
                            src: er,
                            className: en.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: et.intl.string(et.t.X4IxWF)
                        }),
                    ej &&
                        (0, i.jsx)(o.$, {
                            innerRef: eh,
                            onChange: (e) => {
                                eN(e);
                            },
                            children: (0, i.jsx)(z.Z, {
                                ref: eh,
                                isFooterVisible: eT,
                                isDarkMode: e_,
                                isReducedMotion: ef,
                                subscriptionTier: eB
                            })
                        })
                ]
            });
        return s
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.yWw, {
                          className: en.scroller,
                          ref: V,
                          children: eJ
                      }),
                      (0, i.jsx)(X.Z, {
                          previousComponent: q.MQ.MARKETING,
                          isAllPerksVisible: eV,
                          setIsAllPerksVisible: eG,
                          isFullScreen: s
                      })
                  ]
              })
            : eJ;
    };
