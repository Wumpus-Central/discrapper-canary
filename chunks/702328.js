n.d(t, { Z: () => ep }), n(47120);
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
    L = n(135785),
    B = n(498765),
    M = n(635921),
    U = n(177839),
    V = n(794484),
    G = n(392521),
    F = n(349803),
    H = n(179984),
    z = n(706542),
    Y = n(851001),
    K = n(304576),
    q = n(409100),
    X = n(391110),
    J = n(71363),
    Q = n(781800),
    $ = n(474936),
    ee = n(981631),
    et = n(869783),
    en = n(388032),
    er = n(454601),
    ei = n(499317),
    es = n(865215),
    ea = n(735035),
    el = n(786362),
    eo = n(181960),
    ec = n(313199),
    ed = n(821969);
let eu = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === $.p9.TIER_2 && t) ? null : (0, r.jsx)(U.Z, { className: t ? er.perkCardsContainerSpacingFullscreen : er.perkCardsContainerSpacingSettings });
    },
    em = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, r.jsx)(B.Z, { lifted: !t && n }) : null;
    },
    eg = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: i, hasRenderedOnce: s, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, r.jsxs)('div', {
                  className: a()(er.whatsNewSectionBackground, { [er.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, r.jsx)(V.Z, {
                              variant: X.R0.WHATS_NEW,
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
                          (0, r.jsx)(V.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, r.jsx)(Q.Z, {
                                        setIsAllPerksVisible: i,
                                        previousComponent: X.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, r.jsx)(G.ZP, {
                              className: er.pdSparklesTop,
                              variant: G.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, r.jsx)(G.ZP, {
                              className: er.pdSparklesBottom,
                              variant: G.u0.BOTTOM
                          })
                  ]
              })
            : null;
    },
    ep = (e) => {
        var t, n;
        let { isFullscreen: s, entrypoint: W } = e;
        (0, N.z)(b.X);
        let B = W === $.EZ.ApplicationStoreHome,
            U = i.useRef(null),
            V = i.useRef(null),
            G = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
            Q = (0, m.ZP)(),
            ep = (0, c.wj)(Q),
            eh = x.default.getCurrentUser(),
            ef = (0, C.I5)(eh),
            eb = (0, v.xP)('PremiumMarketingHome') && !ef && B,
            [eN, ex] = i.useState(!1),
            [e_, eE] = i.useState(!1),
            [ej, eC] = i.useState(!1),
            [eO, ev] = i.useState(!1),
            eS = (0, j.rO)(),
            [eT, eI] = i.useState(!1),
            ey = (0, l.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
            eA = null != ey ? (0, C.Af)(ey) : null,
            eP = null != eA ? C.ZP.getSkuIdForPlan(eA.planId) : null,
            eR = null !== eP && eP !== $.Si.TIER_2 ? $.Si.TIER_2 : null,
            eD = (0, I.n)(),
            eZ = null != eD,
            [ew, ek] = i.useState(!1),
            eW = (0, y.N)(),
            eL = null == eW ? void 0 : null === (t = eW.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            eB = (0, O.Nx)(),
            eM = (0, Z.Vi)(),
            eU = null === (n = (0, S.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: eV } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
            eG = 'PremiumMarketingHome';
        (0, u.j)({
            location: eG + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: eG + ' auto off',
                autoTrackExposure: !1
            });
        let eF = (0, T.m)({ location: 'PremiumMarketingHome' });
        i.useEffect(() => {
            eI(!0);
        }, []);
        let eH = (0, r.jsx)('div', {
                className: a()({
                    [er.premiumTierCardsContainerSettings]: !s,
                    [er.premiumTierCardsContainerFullscreen]: s
                }),
                children: (0, r.jsx)(o.$, {
                    onChange: (e) => eC(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, r.jsx)(k.ZP, {
                        variant: eb ? k.NN.MARKETING_PAGE_V2 : k.NN.DEFAULT,
                        showWumpus: !eb,
                        tier0CTAButton: eb
                            ? (0, r.jsx)(q.Z, {
                                  forceInverted: ep && !eb,
                                  showIcon: !1,
                                  subscriptionTier: $.Si.TIER_0,
                                  className: er.marginTopForButtons,
                                  buttonTextClassName: eb ? er.v2SubButtonText : er.subButtonText,
                                  buttonShineClassName: er.buttonShine
                              })
                            : (0, r.jsx)(q.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: $.Si.TIER_0,
                                  className: er.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: er.buttonShine
                              }),
                        tier2CTAButton:
                            eL !== $.Si.TIER_0 || eb
                                ? (0, r.jsx)(q.Z, {
                                      forceInverted: !eb,
                                      showIcon: !1,
                                      subscriptionTier: $.Si.TIER_2,
                                      className: er.marginTopForButtons,
                                      isEligibleForBogoPromotion: eM,
                                      buttonTextClassName: eb ? er.v2SubButtonText : er.subButtonText,
                                      buttonShineClassName: er.buttonShine
                                  })
                                : (0, r.jsx)(q.Z, {
                                      forceInverted: !0,
                                      showIcon: !1,
                                      subscriptionTier: $.Si.TIER_2,
                                      className: er.marginTopForButtons,
                                      look: d.iLD.OUTLINED,
                                      color: d.Ttl.WHITE,
                                      buttonShineClassName: er.buttonShine
                                  })
                    })
                })
            }),
            ez = (0, r.jsxs)('div', {
                className: a()(er.container, {
                    [er.settingsContainer]: !s,
                    [er.containerBackground]: eb && ep
                }),
                'data-cy': 'tier-0-marketing-page',
                children: [
                    eb && (0, r.jsx)('div', { className: er.heroHeaderSideGradient }),
                    eb &&
                        (0, r.jsx)('img', {
                            src: ei,
                            className: er.heroHeaderBackgroundStars,
                            alt: ''
                        }),
                    (0, r.jsx)(L.Z, {
                        premiumSubscription: ey,
                        className: a()(s ? er.fullscreenExistingSubscriberSpacing : er.existingSubscriberSpacing, { [er.zIndex1]: eB }),
                        isFullscreen: s
                    }),
                    !eb &&
                        (0, r.jsx)(em, {
                            isFullscreen: s,
                            inOfferExperience: eB
                        }),
                    !s && eZ
                        ? (0, r.jsx)(D.Z, {
                              localizedPricingPromo: eD,
                              smallGap: !0
                          })
                        : (0, r.jsxs)('div', {
                              className: a()({ [er.heroHeadingV2Container]: eb }),
                              children: [
                                  (0, r.jsx)(o.$, {
                                      onChange: (e) => ex(e),
                                      threshold: 0,
                                      active: !0,
                                      children: eb
                                          ? (0, r.jsx)(K.Z, {
                                                subscriptionTier: eR,
                                                isFullscreen: s || eB,
                                                entrypoint: W,
                                                isDarkMode: ep
                                            })
                                          : (0, r.jsx)(M.ZP, {
                                                subscriptionTier: eR,
                                                isFullscreen: s || eB,
                                                isMarketingPageV2Enabled: eb,
                                                className: a()({
                                                    [er.fullscreenHero]: s,
                                                    [er.settingsHeroNoBackground]: !s && eB,
                                                    [er.trialMarketingMargin]: eB,
                                                    [er.settingsHeroBogoHeight]: !s && eM,
                                                    [er.settingsHeroBogoMarginFullscreen]: s && eM,
                                                    [er.noTopPaddingOverride]: null != ey
                                                }),
                                                entrypoint: W,
                                                isDarkMode: ep
                                            })
                                  }),
                                  !eb &&
                                      !0 === eF &&
                                      (0, r.jsx)(A.W, {
                                          isFullScreen: s,
                                          analyticsLocations: eV
                                      }),
                                  eb &&
                                      (0, r.jsx)('div', {
                                          className: er.heroHeadingV2ArtContainer,
                                          children: (0, r.jsx)(f.Z, {
                                              autoPlay: !G,
                                              playsInline: !0,
                                              preload: 'auto',
                                              poster: ec.Z,
                                              loop: !0,
                                              className: a()(er.heroHeadingV2Art),
                                              ref: V,
                                              children: (0, r.jsx)('source', {
                                                  src: eS ? eo.Z : ed.Z,
                                                  type: eS ? et.m.MP4 : et.m.WEBM
                                              })
                                          })
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: er.promoBannerContainer,
                        children: [(0, r.jsx)(P.Z, { isFullScreen: s }), s && eZ && (0, r.jsx)(R.Z, { localizedPricingPromo: eD })]
                    }),
                    !eb && eH,
                    W === $.EZ.UserSettings &&
                        null != eU &&
                        (0, r.jsx)(w.C, {
                            className: er.giftPromoCard,
                            config: eU
                        }),
                    (0, r.jsx)(eg, {
                        isFullscreen: s,
                        inOfferExperience: eB,
                        setIsAllPerksVisible: ek,
                        hasRenderedOnce: eT,
                        isMarketingPageV2Enabled: eb,
                        isReducedMotion: G
                    }),
                    !eb && (0, r.jsx)(eu, { isFullscreen: s }),
                    eb && eH,
                    (0, r.jsxs)('div', {
                        className: er.planComparisonTableContainer,
                        children: [
                            eb
                                ? (0, r.jsx)(z.Z, { className: er.planComparisonTableV2 })
                                : (0, r.jsx)(H.Z, {
                                      className: er.planComparisonTable,
                                      hideCTAs: !0
                                  }),
                            s && !eb
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('img', {
                                              src: ea,
                                              className: er.tableLeftSideDecoration,
                                              width: 197,
                                              height: 486,
                                              alt: en.NW.string(en.t.X4IxWF)
                                          }),
                                          (0, r.jsx)('img', {
                                              src: el,
                                              className: er.tableRightSideDecoration,
                                              width: 241,
                                              height: 552,
                                              alt: en.NW.string(en.t.X4IxWF)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    !eb && (0, r.jsx)('div', { className: s ? er.footerSpacingFullscreen : er.footerSpacing }),
                    (0, r.jsx)(F.Z, {
                        isVisible: !eN && !ej && !e_ && eT,
                        isFullscreen: s,
                        subscriptionTier: eR,
                        isMarketingPageV2: eb
                    }),
                    (0, r.jsx)(o.$, {
                        onChange: (e) => {
                            e && !eO && (E.default.track(ee.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eV }), ev(!0));
                        },
                        children: (0, r.jsx)('div', { className: er.bottomOfPageVisibilitySensor })
                    }),
                    !eb &&
                        (0, r.jsx)('img', {
                            src: es,
                            className: er.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: en.NW.string(en.t.X4IxWF)
                        }),
                    eb &&
                        (0, r.jsx)(o.$, {
                            onChange: (e) => {
                                eE(e);
                            },
                            children: (0, r.jsx)(Y.Z, {
                                isFooterVisible: e_,
                                isDarkMode: ep,
                                isReducedMotion: G
                            })
                        })
                ]
            });
        return s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.yWw, {
                          className: a()(er.scroller),
                          ref: U,
                          children: ez
                      }),
                      (0, r.jsx)(J.Z, {
                          previousComponent: X.MQ.MARKETING,
                          isAllPerksVisible: ew,
                          setIsAllPerksVisible: ek,
                          isFullScreen: s
                      })
                  ]
              })
            : ez;
    };
