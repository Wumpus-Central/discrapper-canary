n.d(t, { Z: () => em }), n(47120);
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
    _ = n(100527),
    p = n(906732),
    f = n(70097),
    h = n(433811),
    x = n(214852),
    E = n(594174),
    C = n(78839),
    b = n(626135),
    v = n(526167),
    T = n(74538),
    N = n(140465),
    I = n(278605),
    R = n(286961),
    j = n(91802),
    S = n(639119),
    A = n(8647),
    P = n(568126),
    Z = n(605289),
    w = n(346497),
    M = n(218390),
    B = n(823188),
    y = n(241158),
    k = n(135785),
    O = n(498765),
    L = n(635921),
    D = n(177839),
    U = n(794484),
    G = n(392521),
    V = n(349803),
    H = n(179984),
    F = n(706542),
    W = n(851001),
    z = n(304576),
    Y = n(409100),
    q = n(391110),
    Q = n(71363),
    K = n(781800),
    X = n(474936),
    J = n(981631),
    $ = n(869783),
    ee = n(388032),
    et = n(226621),
    en = n(499317),
    ei = n(865215),
    er = n(735035),
    ea = n(786362),
    es = n(181960),
    el = n(313199),
    eo = n(821969);
let ec = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === X.p9.TIER_2 && t) ? null : (0, i.jsx)(D.Z, { className: t ? et.perkCardsContainerSpacingFullscreen : et.perkCardsContainerSpacingSettings });
    },
    ed = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(O.Z, { lifted: !t && n }) : null;
    },
    eu = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(et.whatsNewSectionBackground, { [et.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(U.Z, {
                              variant: q.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, i.jsx)(y.Z, {
                              shouldLoadVideo: a,
                              isReducedMotion: o
                          }),
                      l &&
                          (0, i.jsx)(y.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a,
                              isReducedMotion: o
                          }),
                      !l &&
                          (0, i.jsx)(U.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(K.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: q.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(G.ZP, {
                              className: et.pdSparklesTop,
                              variant: G.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(G.ZP, {
                              className: et.pdSparklesBottom,
                              variant: G.u0.BOTTOM
                          })
                  ]
              })
            : null;
    },
    em = (e) => {
        var t, n;
        let { isFullscreen: a, entrypoint: y } = e;
        (0, x.z)(h.X);
        let O = y === X.EZ.ApplicationStoreHome,
            D = r.useRef(null),
            U = r.useRef(null),
            G = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
            K = (0, m.ZP)(),
            em = (0, c.wj)(K),
            eg = E.default.getCurrentUser(),
            e_ = (0, T.I5)(eg),
            ep = (0, I.xP)('PremiumMarketingHome') && !e_ && O,
            [ef, eh] = r.useState(!1),
            [ex, eE] = r.useState(!1),
            [eC, eb] = r.useState(!1),
            [ev, eT] = r.useState(!1),
            eN = (0, v.rO)(),
            [eI, eR] = r.useState(!1),
            ej = (0, l.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
            eS = null != ej ? (0, T.Af)(ej) : null,
            eA = null != eS ? T.ZP.getSkuIdForPlan(eS.planId) : null,
            eP = null !== eA && eA !== X.Si.TIER_2 ? X.Si.TIER_2 : null,
            eZ = (0, j.n)(),
            ew = null != eZ,
            [eM, eB] = r.useState(!1),
            ey = (0, S.N)(),
            ek = null == ey ? void 0 : null === (t = ey.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            eO = (0, N.Nx)(),
            eL = (0, w.Vi)(),
            eD = null === (n = (0, R.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: eU } = (0, p.ZP)(_.Z.PREMIUM_MARKETING),
            eG = 'PremiumMarketingHome';
        (0, u.j)({
            location: eG + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: eG + ' auto off',
                autoTrackExposure: !1
            }),
            r.useEffect(() => {
                eR(!0);
            }, []);
        let eV = (0, i.jsx)('div', {
                className: s()({
                    [et.premiumTierCardsContainerSettings]: !a,
                    [et.premiumTierCardsContainerFullscreen]: a
                }),
                children: (0, i.jsx)(o.$, {
                    onChange: (e) => eb(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, i.jsx)(B.ZP, {
                        variant: ep ? B.NN.MARKETING_PAGE_V2 : B.NN.DEFAULT,
                        showWumpus: !ep,
                        tier0CTAButton: ep
                            ? (0, i.jsx)(Y.Z, {
                                  forceInverted: em && !ep,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_0,
                                  className: et.marginTopForButtons,
                                  buttonTextClassName: ep ? et.v2SubButtonText : et.subButtonText,
                                  buttonShineClassName: et.buttonShine
                              })
                            : (0, i.jsx)(Y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_0,
                                  className: et.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: et.buttonShine
                              }),
                        tier2CTAButton:
                            ek !== X.Si.TIER_0 || ep
                                ? (0, i.jsx)(Y.Z, {
                                      forceInverted: !ep,
                                      showIcon: !1,
                                      subscriptionTier: X.Si.TIER_2,
                                      className: et.marginTopForButtons,
                                      isEligibleForBogoPromotion: eL,
                                      buttonTextClassName: ep ? et.v2SubButtonText : et.subButtonText,
                                      buttonShineClassName: et.buttonShine
                                  })
                                : (0, i.jsx)(Y.Z, {
                                      forceInverted: !0,
                                      showIcon: !1,
                                      subscriptionTier: X.Si.TIER_2,
                                      className: et.marginTopForButtons,
                                      look: d.iLD.OUTLINED,
                                      color: d.Ttl.WHITE,
                                      buttonShineClassName: et.buttonShine
                                  })
                    })
                })
            }),
            eH = (0, i.jsxs)('div', {
                className: s()(et.container, {
                    [et.settingsContainer]: !a,
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
                    (0, i.jsx)(k.Z, {
                        premiumSubscription: ej,
                        className: s()(a ? et.fullscreenExistingSubscriberSpacing : et.existingSubscriberSpacing, { [et.zIndex1]: eO }),
                        isFullscreen: a
                    }),
                    !ep &&
                        (0, i.jsx)(ed, {
                            isFullscreen: a,
                            inOfferExperience: eO
                        }),
                    !a && ew
                        ? (0, i.jsx)(Z.Z, {
                              localizedPricingPromo: eZ,
                              smallGap: !0
                          })
                        : (0, i.jsxs)('div', {
                              className: s()({ [et.heroHeadingV2Container]: ep }),
                              children: [
                                  (0, i.jsx)(o.$, {
                                      onChange: (e) => eh(e),
                                      threshold: 0,
                                      active: !0,
                                      children: ep
                                          ? (0, i.jsx)(z.Z, {
                                                subscriptionTier: eP,
                                                isFullscreen: a || eO,
                                                entrypoint: y,
                                                isDarkMode: em
                                            })
                                          : (0, i.jsx)(L.ZP, {
                                                subscriptionTier: eP,
                                                isFullscreen: a || eO,
                                                isMarketingPageV2Enabled: ep,
                                                className: s()({
                                                    [et.fullscreenHero]: a,
                                                    [et.settingsHeroNoBackground]: !a && eO,
                                                    [et.trialMarketingMargin]: eO,
                                                    [et.settingsHeroBogoHeight]: !a && eL,
                                                    [et.settingsHeroBogoMarginFullscreen]: a && eL,
                                                    [et.noTopPaddingOverride]: null != ej
                                                }),
                                                entrypoint: y,
                                                isDarkMode: em
                                            })
                                  }),
                                  ep &&
                                      (0, i.jsx)('div', {
                                          className: et.heroHeadingV2ArtContainer,
                                          children: (0, i.jsx)(f.Z, {
                                              autoPlay: !G,
                                              playsInline: !0,
                                              preload: 'auto',
                                              poster: el.Z,
                                              loop: !0,
                                              className: s()(et.heroHeadingV2Art),
                                              ref: U,
                                              children: (0, i.jsx)('source', {
                                                  src: eN ? es.Z : eo.Z,
                                                  type: eN ? $.m.MP4 : $.m.WEBM
                                              })
                                          })
                                      })
                              ]
                          }),
                    (0, i.jsxs)('div', {
                        className: et.promoBannerContainer,
                        children: [(0, i.jsx)(A.Z, { isFullScreen: a }), a && ew && (0, i.jsx)(P.Z, { localizedPricingPromo: eZ })]
                    }),
                    !ep && eV,
                    y === X.EZ.UserSettings &&
                        null != eD &&
                        (0, i.jsx)(M.C, {
                            className: et.giftPromoCard,
                            config: eD
                        }),
                    (0, i.jsx)(eu, {
                        isFullscreen: a,
                        inOfferExperience: eO,
                        setIsAllPerksVisible: eB,
                        hasRenderedOnce: eI,
                        isMarketingPageV2Enabled: ep,
                        isReducedMotion: G
                    }),
                    !ep && (0, i.jsx)(ec, { isFullscreen: a }),
                    ep && eV,
                    (0, i.jsxs)('div', {
                        className: et.planComparisonTableContainer,
                        children: [
                            ep
                                ? (0, i.jsx)(F.Z, { className: et.planComparisonTableV2 })
                                : (0, i.jsx)(H.Z, {
                                      className: et.planComparisonTable,
                                      hideCTAs: !0
                                  }),
                            a && !ep
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
                                              src: ea,
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
                    !ep && (0, i.jsx)('div', { className: a ? et.footerSpacingFullscreen : et.footerSpacing }),
                    (0, i.jsx)(V.Z, {
                        isVisible: !ef && !eC && !ex && eI,
                        isFullscreen: a,
                        subscriptionTier: eP,
                        isMarketingPageV2: ep
                    }),
                    (0, i.jsx)(o.$, {
                        onChange: (e) => {
                            e && !ev && (b.default.track(J.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eU }), eT(!0));
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
                            children: (0, i.jsx)(W.Z, {
                                isFooterVisible: ex,
                                isDarkMode: em,
                                isReducedMotion: G
                            })
                        })
                ]
            });
        return a
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.yWw, {
                          className: s()(et.scroller),
                          ref: D,
                          children: eH
                      }),
                      (0, i.jsx)(Q.Z, {
                          previousComponent: q.MQ.MARKETING,
                          isAllPerksVisible: eM,
                          setIsAllPerksVisible: eB,
                          isFullScreen: a
                      })
                  ]
              })
            : eH;
    };
