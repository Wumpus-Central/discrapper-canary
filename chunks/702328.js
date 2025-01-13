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
    j = n(639119),
    A = n(8647),
    P = n(568126),
    O = n(605289),
    M = n(346497),
    Z = n(218390),
    B = n(823188),
    y = n(241158),
    w = n(135785),
    k = n(498765),
    L = n(635921),
    U = n(177839),
    D = n(794484),
    G = n(392521),
    H = n(349803),
    V = n(179984),
    F = n(706542),
    W = n(851001),
    z = n(304576),
    Y = n(409100),
    K = n(391110),
    Q = n(71363),
    q = n(781800),
    J = n(474936),
    X = n(981631),
    $ = n(869783),
    ee = n(388032),
    et = n(286919),
    en = n(499317),
    ei = n(865215),
    er = n(735035),
    ea = n(786362),
    es = n(181960),
    el = n(313199),
    eo = n(821969);
let ec = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === J.p9.TIER_2 && t) ? null : (0, i.jsx)(U.Z, { className: t ? et.perkCardsContainerSpacingFullscreen : et.perkCardsContainerSpacingSettings });
    },
    ed = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(k.Z, { lifted: !t && n }) : null;
    },
    eu = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(et.whatsNewSectionBackground, { [et.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(D.Z, {
                              variant: K.R0.WHATS_NEW,
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
                          (0, i.jsx)(D.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(q.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: K.MQ.MARKETING
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
    };
t.Z = (e) => {
    var t, n;
    let { isFullscreen: a, entrypoint: y } = e;
    (0, x.z)(h.X);
    let k = y === J.EZ.ApplicationStoreHome,
        U = r.useRef(null),
        D = r.useRef(null),
        G = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        q = (0, g.ZP)(),
        eg = (0, c.wj)(q),
        em = E.default.getCurrentUser(),
        ef = (0, T.I5)(em),
        ep = (0, I.xP)('PremiumMarketingHome') && !ef && k,
        [e_, eh] = r.useState(!1),
        [ex, eE] = r.useState(!1),
        [eb, eC] = r.useState(!1),
        [ev, eT] = r.useState(!1),
        eN = (0, v.rO)(),
        [eI, eS] = r.useState(!1),
        eR = (0, l.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        ej = null != eR ? (0, T.Af)(eR) : null,
        eA = null != ej ? T.ZP.getSkuIdForPlan(ej.planId) : null,
        eP = null !== eA && eA !== J.Si.TIER_2 ? J.Si.TIER_2 : null,
        eO = (0, R.n)(),
        eM = null != eO,
        [eZ, eB] = r.useState(!1),
        ey = (0, j.N)(),
        ew = null == ey ? void 0 : null === (t = ey.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ek = (0, N.Nx)(),
        eL = (0, M.Vi)(),
        eU = null === (n = (0, S.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
        { analyticsLocations: eD } = (0, p.ZP)(f.Z.PREMIUM_MARKETING),
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
            eS(!0);
        }, []);
    let eH = (0, i.jsx)('div', {
            className: s()({
                [et.premiumTierCardsContainerSettings]: !a,
                [et.premiumTierCardsContainerFullscreen]: a
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => eC(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(B.ZP, {
                    variant: ep ? B.NN.MARKETING_PAGE_V2 : B.NN.DEFAULT,
                    showWumpus: !ep,
                    tier0CTAButton: ep
                        ? (0, i.jsx)(Y.Z, {
                              forceInverted: eg && !ep,
                              showIcon: !1,
                              subscriptionTier: J.Si.TIER_0,
                              className: et.marginTopForButtons,
                              buttonTextClassName: et.subButtonText,
                              buttonShineClassName: et.buttonShine
                          })
                        : (0, i.jsx)(Y.Z, {
                              forceInverted: !0,
                              showIcon: !1,
                              subscriptionTier: J.Si.TIER_0,
                              className: et.marginTopForButtons,
                              look: d.ButtonLooks.OUTLINED,
                              color: d.ButtonColors.WHITE,
                              buttonShineClassName: et.buttonShine
                          }),
                    tier2CTAButton:
                        ew !== J.Si.TIER_0 || ep
                            ? (0, i.jsx)(Y.Z, {
                                  forceInverted: eg && !ep,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_2,
                                  className: et.marginTopForButtons,
                                  isEligibleForBogoPromotion: eL,
                                  buttonTextClassName: et.subButtonText,
                                  buttonShineClassName: et.buttonShine
                              })
                            : (0, i.jsx)(Y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_2,
                                  className: et.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: et.buttonShine
                              })
                })
            })
        }),
        eV = (0, i.jsxs)('div', {
            className: s()(et.container, {
                [et.settingsContainer]: !a,
                [et.containerBackground]: ep && eg
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
                (0, i.jsx)(w.Z, {
                    premiumSubscription: eR,
                    className: s()(a ? et.fullscreenExistingSubscriberSpacing : et.existingSubscriberSpacing, { [et.zIndex1]: ek }),
                    isFullscreen: a
                }),
                !ep &&
                    (0, i.jsx)(ed, {
                        isFullscreen: a,
                        inOfferExperience: ek
                    }),
                !a && eM
                    ? (0, i.jsx)(O.Z, {
                          localizedPricingPromo: eO,
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
                                            isFullscreen: a || ek,
                                            entrypoint: y,
                                            isDarkMode: eg
                                        })
                                      : (0, i.jsx)(L.ZP, {
                                            subscriptionTier: eP,
                                            isFullscreen: a || ek,
                                            isMarketingPageV2Enabled: ep,
                                            className: s()({
                                                [et.fullscreenHero]: a,
                                                [et.settingsHeroNoBackground]: !a && ek,
                                                [et.trialMarketingMargin]: ek,
                                                [et.settingsHeroBogoHeight]: !a && eL,
                                                [et.settingsHeroBogoMarginFullscreen]: a && eL,
                                                [et.noTopPaddingOverride]: null != eR
                                            }),
                                            entrypoint: y,
                                            isDarkMode: eg
                                        })
                              }),
                              ep &&
                                  (0, i.jsx)('div', {
                                      className: et.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !G,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: el.Z,
                                          loop: !0,
                                          className: s()(et.heroHeadingV2Art),
                                          ref: D,
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
                    children: [(0, i.jsx)(A.Z, { isFullScreen: a }), a && eM && (0, i.jsx)(P.Z, { localizedPricingPromo: eO })]
                }),
                !ep && eH,
                y === J.EZ.UserSettings &&
                    null != eU &&
                    (0, i.jsx)(Z.C, {
                        className: et.giftPromoCard,
                        config: eU
                    }),
                (0, i.jsx)(eu, {
                    isFullscreen: a,
                    inOfferExperience: ek,
                    setIsAllPerksVisible: eB,
                    hasRenderedOnce: eI,
                    isMarketingPageV2Enabled: ep,
                    isReducedMotion: G
                }),
                !ep && (0, i.jsx)(ec, { isFullscreen: a }),
                ep && eH,
                (0, i.jsxs)('div', {
                    className: et.planComparisonTableContainer,
                    children: [
                        ep
                            ? (0, i.jsx)(F.Z, { className: et.planComparisonTableV2 })
                            : (0, i.jsx)(V.Z, {
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
                (0, i.jsx)(H.Z, {
                    isVisible: !e_ && !eb && !ex && eI,
                    isFullscreen: a,
                    subscriptionTier: eP,
                    isMarketingPageV2: ep
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !ev && (C.default.track(X.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eD }), eT(!0));
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
                            isDarkMode: eg,
                            isReducedMotion: G
                        })
                    })
            ]
        });
    return a
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()(et.scroller),
                      ref: U,
                      children: eV
                  }),
                  (0, i.jsx)(Q.Z, {
                      previousComponent: K.MQ.MARKETING,
                      isAllPerksVisible: eZ,
                      setIsAllPerksVisible: eB,
                      isFullScreen: a
                  })
              ]
          })
        : eV;
};
