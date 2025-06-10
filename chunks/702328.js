n.d(t, { Z: () => ed }), n(388685);
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
    x = n(78839),
    E = n(626135),
    j = n(526167),
    C = n(74538),
    O = n(140465),
    S = n(286961),
    v = n(91802),
    T = n(639119),
    I = n(8647),
    N = n(784238),
    y = n(568126),
    A = n(605289),
    P = n(346497),
    R = n(218390),
    D = n(823188),
    Z = n(611116),
    w = n(135785),
    k = n(498765),
    L = n(635921),
    B = n(177839),
    M = n(349803),
    U = n(179984),
    V = n(8231),
    G = n(836332),
    F = n(903250),
    H = n(560223),
    z = n(301724),
    Y = n(391110),
    W = n(71363),
    K = n(781800),
    q = n(474936),
    X = n(981631),
    Q = n(869783),
    J = n(388032),
    $ = n(651117),
    ee = n(107283),
    et = n(865215),
    en = n(735035),
    ei = n(786362),
    er = n(181960),
    es = n(313199),
    el = n(821969);
let ea = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === q.p9.TIER_2 && t) ? null : (0, i.jsx)(B.Z, { className: t ? $.perkCardsContainerSpacingFullscreen : $.perkCardsContainerSpacingSettings });
    },
    eo = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(k.Z, { lifted: !t && n }) : null;
    },
    ec = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: s, isApplicationHome: a, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: l()($.whatsNewSectionBackground, { [$.whatsNewSectionBackgroundV2]: a }),
                  children: [
                      !a &&
                          (0, i.jsx)(H.Z, {
                              variant: Y.gM.WHATS_NEW,
                              isFullScreen: t
                          }),
                      a &&
                          (0, i.jsx)(Z.Z, {
                              shouldLoadVideo: s,
                              isReducedMotion: o
                          }),
                      !a &&
                          (0, i.jsx)(H.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(K.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: Y.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !a &&
                          (0, i.jsx)(z.ZP, {
                              className: $.pdSparklesTop,
                              variant: z.u0.TOP
                          }),
                      n &&
                          !a &&
                          (0, i.jsx)(z.ZP, {
                              className: $.pdSparklesBottom,
                              variant: z.u0.BOTTOM
                          })
                  ]
              })
            : null;
    },
    ed = (e) => {
        var t, n;
        let { isFullscreen: s, entrypoint: Z } = e;
        (0, _.z)(b.X);
        let k = Z === q.EZ.ApplicationStoreHome,
            B = r.useRef(null),
            H = r.useRef(null),
            z = r.useRef(null),
            K = r.useRef(null),
            ed = r.useRef(null),
            eu = r.useRef(null),
            em = r.useRef(null),
            eg = (0, a.e7)([g.Z], () => g.Z.useReducedMotion),
            ep = (0, m.ZP)(),
            eh = (0, c.wj)(ep),
            [ef, eb] = r.useState(!1),
            [e_, ex] = r.useState(!1),
            [eE, ej] = r.useState(!1),
            [eC, eO] = r.useState(!1),
            eS = (0, j.rO)(),
            [ev, eT] = r.useState(!1),
            eI = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
            eN = null != eI ? (0, C.Af)(eI) : null,
            ey = null != eN ? C.ZP.getSkuIdForPlan(eN.planId) : null,
            eA = null !== ey && ey !== q.Si.TIER_2 ? q.Si.TIER_2 : null,
            eP = (0, v.n)(),
            eR = null != eP,
            [eD, eZ] = r.useState(!1),
            ew = (0, T.N)(),
            ek = null == ew || null == (t = ew.subscription_trial) ? void 0 : t.sku_id,
            eL = (0, O.Nx)(),
            eB = (0, P.Vi)(),
            eM = null != eB && eB,
            eU = null == (n = (0, S.Z)()) ? void 0 : n.billingSettingsMarketingBanner,
            { analyticsLocations: eV } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
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
                eT(!0);
            }, []);
        let eF = (0, i.jsx)('div', {
                className: l()({
                    [$.premiumTierCardsContainerSettings]: !s,
                    [$.premiumTierCardsContainerFullscreen]: s
                }),
                children: (0, i.jsx)(o.$, {
                    innerRef: z,
                    onChange: (e) => ej(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, i.jsx)(D.ZP, {
                        innerRef: z,
                        isApplicationHome: k,
                        showWumpus: !k,
                        tier0CTAButton: k
                            ? (0, i.jsx)(N.Z, {
                                  color: eh && !k ? d.Ttl.BRAND_INVERTED : void 0,
                                  showIcon: !1,
                                  subscriptionTier: q.Si.TIER_0,
                                  className: $.marginTopForButtons,
                                  textOptions: { textClassName: k ? $.v2SubButtonText : $.subButtonText },
                                  buttonShineClassName: $.buttonShine
                              })
                            : (0, i.jsx)(N.Z, {
                                  showIcon: !1,
                                  subscriptionTier: q.Si.TIER_0,
                                  className: $.marginTopForButtons,
                                  look: d.iLD.OUTLINED,
                                  color: d.Ttl.WHITE,
                                  buttonShineClassName: $.buttonShine
                              }),
                        tier2CTAButton:
                            ek !== q.Si.TIER_0 || k
                                ? (0, i.jsx)(N.Z, {
                                      color: k ? void 0 : d.Ttl.BRAND_INVERTED,
                                      showIcon: !1,
                                      subscriptionTier: q.Si.TIER_2,
                                      className: $.marginTopForButtons,
                                      hasActivePromotion: eM,
                                      textOptions: { textClassName: k ? $.v2SubButtonText : $.subButtonText },
                                      buttonShineClassName: $.buttonShine
                                  })
                                : (0, i.jsx)(N.Z, {
                                      showIcon: !1,
                                      subscriptionTier: q.Si.TIER_2,
                                      className: $.marginTopForButtons,
                                      look: d.iLD.OUTLINED,
                                      color: d.Ttl.WHITE,
                                      buttonShineClassName: $.buttonShine
                                  })
                    })
                })
            }),
            eH = (0, i.jsxs)('div', {
                className: l()($.container, {
                    [$.settingsContainer]: !s,
                    [$.containerBackground]: k && eh,
                    [$.responsiveContainer]: k
                }),
                'data-cy': 'tier-0-marketing-page',
                children: [
                    k && (0, i.jsx)('div', { className: $.heroHeaderSideGradient }),
                    k &&
                        (0, i.jsx)('img', {
                            src: ee,
                            className: $.heroHeaderBackgroundStars,
                            alt: ''
                        }),
                    !k &&
                        (0, i.jsx)(w.Z, {
                            premiumSubscription: eI,
                            className: l()(s ? $.fullscreenExistingSubscriberSpacing : $.existingSubscriberSpacing, { [$.zIndex1]: eL }),
                            isFullscreen: s
                        }),
                    !k &&
                        (0, i.jsx)(eo, {
                            isFullscreen: s,
                            inOfferExperience: eL
                        }),
                    !s && eR
                        ? (0, i.jsx)(A.Z, {
                              localizedPricingPromo: eP,
                              smallGap: !0
                          })
                        : (0, i.jsxs)('div', {
                              className: l()({ [$.heroHeadingV2Container]: k }),
                              children: [
                                  (0, i.jsx)(o.$, {
                                      innerRef: k ? K : ed,
                                      onChange: (e) => eb(e),
                                      threshold: 0,
                                      active: !0,
                                      children: k
                                          ? (0, i.jsx)(F.Z, {
                                                ref: K,
                                                subscriptionTier: eA,
                                                isFullscreen: s || eL,
                                                entrypoint: Z,
                                                isDarkMode: eh
                                            })
                                          : (0, i.jsx)(L.ZP, {
                                                ref: ed,
                                                subscriptionTier: eA,
                                                isFullscreen: s || eL,
                                                isApplicationHome: k,
                                                className: l()({
                                                    [$.fullscreenHero]: s,
                                                    [$.settingsHeroNoBackground]: !s && eL,
                                                    [$.trialMarketingMargin]: eL,
                                                    [$.settingsHeroBogoHeight]: !s && eB,
                                                    [$.settingsHeroBogoMarginFullscreen]: s && eB,
                                                    [$.noTopPaddingOverride]: null != eI
                                                }),
                                                entrypoint: Z,
                                                isDarkMode: eh
                                            })
                                  }),
                                  k &&
                                      (0, i.jsx)('div', {
                                          className: $.heroHeadingV2ArtContainer,
                                          children: (0, i.jsx)(f.Z, {
                                              autoPlay: !eg,
                                              playsInline: !0,
                                              preload: eg ? 'none' : 'auto',
                                              poster: es.Z,
                                              loop: !0,
                                              className: $.heroHeadingV2Art,
                                              ref: H,
                                              children: (0, i.jsx)('source', {
                                                  src: eS ? er.Z : el.Z,
                                                  type: eS ? Q.m.MP4 : Q.m.WEBM
                                              })
                                          })
                                      })
                              ]
                          }),
                    (0, i.jsxs)('div', {
                        className: $.promoBannerContainer,
                        children: [(0, i.jsx)(I.Z, { isFullScreen: s }), s && eR && (0, i.jsx)(y.Z, { localizedPricingPromo: eP })]
                    }),
                    !k && eF,
                    Z === q.EZ.UserSettings &&
                        null != eU &&
                        (0, i.jsx)(R.C, {
                            className: $.giftPromoCard,
                            config: eU
                        }),
                    (0, i.jsx)(ec, {
                        isFullscreen: s,
                        inOfferExperience: eL,
                        setIsAllPerksVisible: eZ,
                        hasRenderedOnce: ev,
                        isApplicationHome: k,
                        isReducedMotion: eg
                    }),
                    !k && (0, i.jsx)(ea, { isFullscreen: s }),
                    k && eF,
                    (0, i.jsxs)('div', {
                        className: $.planComparisonTableContainer,
                        children: [
                            k
                                ? (0, i.jsx)(V.Z, { className: $.planComparisonTableApplicationHome })
                                : (0, i.jsx)(U.Z, {
                                      className: $.planComparisonTable,
                                      hideCTAs: !0
                                  }),
                            s && !k
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)('img', {
                                              src: en,
                                              className: $.tableLeftSideDecoration,
                                              width: 197,
                                              height: 486,
                                              alt: J.intl.string(J.t.X4IxWF)
                                          }),
                                          (0, i.jsx)('img', {
                                              src: ei,
                                              className: $.tableRightSideDecoration,
                                              width: 241,
                                              height: 552,
                                              alt: J.intl.string(J.t.X4IxWF)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    !k && (0, i.jsx)('div', { className: s ? $.footerSpacingFullscreen : $.footerSpacing }),
                    (0, i.jsx)(M.Z, {
                        isVisible: !ef && !eE && !e_ && ev,
                        isFullscreen: s,
                        subscriptionTier: eA,
                        isApplicationHome: k
                    }),
                    (0, i.jsx)(o.$, {
                        innerRef: eu,
                        onChange: (e) => {
                            e && !eC && (E.default.track(X.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eV }), eO(!0));
                        },
                        children: (0, i.jsx)('div', {
                            ref: eu,
                            className: $.bottomOfPageVisibilitySensor
                        })
                    }),
                    !k &&
                        (0, i.jsx)('img', {
                            src: et,
                            className: $.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: J.intl.string(J.t.X4IxWF)
                        }),
                    k &&
                        (0, i.jsx)(o.$, {
                            innerRef: em,
                            onChange: (e) => {
                                ex(e);
                            },
                            children: (0, i.jsx)(G.Z, {
                                ref: em,
                                isFooterVisible: e_,
                                isDarkMode: eh,
                                isReducedMotion: eg,
                                subscriptionTier: eA
                            })
                        })
                ]
            });
        return s
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.yWw, {
                          className: $.scroller,
                          ref: B,
                          children: eH
                      }),
                      (0, i.jsx)(W.Z, {
                          previousComponent: Y.MQ.MARKETING,
                          isAllPerksVisible: eD,
                          setIsAllPerksVisible: eZ,
                          isFullScreen: s
                      })
                  ]
              })
            : eH;
    };
