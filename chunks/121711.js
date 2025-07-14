n.d(t, { Z: () => Q });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    p = n(100527),
    h = n(213609),
    f = n(335131),
    g = n(252618),
    m = n(70097),
    b = n(114851),
    _ = n(175307),
    E = n(17845),
    O = n(374939),
    y = n(233374),
    I = n(611928),
    v = n(763433),
    C = n(283293),
    S = n(507808),
    N = n(794231),
    T = n(822857),
    P = n(775451),
    j = n(526167),
    A = n(63063),
    Z = n(113434),
    x = n(833435),
    w = n(150560),
    L = n(672188),
    R = n(558652),
    D = n(736683),
    k = n(879438),
    M = n(251360),
    U = n(466962),
    G = n(452081),
    B = n(46140),
    V = n(981631),
    H = n(215023),
    F = n(388032),
    z = n(87671),
    W = n(13299),
    Y = n(428383),
    K = n(843385);
function q(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, T.WX)({ location: B.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        { ref: o, inViewport: c } = (0, L.a)(),
        u = i.useRef(null);
    if (
        (i.useEffect(() => {
            (null == u ? void 0 : u.current) != null && (u.current.paused || (c && !l) ? u.current.paused && !l && c && u.current.play() : u.current.pause());
        }, [l, c]),
        n)
    ) {
        let e = (0, j.rO)();
        return (0, r.jsx)(m.Z, {
            ref: (e) => {
                ((u.current = e), (o.current = e));
            },
            autoPlay: !l,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(z.bannerAsset, z.orbsBannerAsset),
            onProgress: t,
            'data-mtctest-ignore': 'true',
            controls: !1,
            children: (0, r.jsx)('source', {
                src: e ? Y.Z : K.Z,
                type: e ? 'video/mp4' : 'video/webm'
            })
        });
    }
    return (0, r.jsx)('img', {
        src: W.ZP,
        className: a()(z.bannerAsset, z.oversizedImg),
        alt: '',
        onLoad: t
    });
}
let Q = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, G.z)(),
        { onScroll: l, scrollPosition: s } = (0, b.M)(),
        d = w.Z.getState().getUtmCurrentContext(),
        m = (0, x._)({ location: B.dr.QUEST_HOME_DESKTOP }) ? D.Z : D.j,
        j = (0, k.z)((e) => e.registerAssetLoad),
        L = i.useRef(d);
    (i.useEffect(() => {
        L.current = d;
    }),
        i.useEffect(() => {
            let { current: t } = L;
            (0, h.h)({
                name: o.ImpressionNames.QUEST_HOME,
                type: o.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: t.utmSourceCurrent,
                    utm_medium_current: t.utmMediumCurrent,
                    utm_campaign_current: t.utmCampaignCurrent,
                    utm_content_current: t.utmContentCurrent,
                    tab: e
                }
            });
        }, [e]));
    let { enabled: W } = (0, T.WX)({ location: B.dr.QUEST_HOME_DESKTOP }),
        { showBetaTag: Y } = N.Z.useExperiment({ location: B.dr.QUEST_HOME_DESKTOP }),
        K = i.useCallback(() => {
            if (W) return void window.open(V.EYA.PAID_TERMS_ORBS);
            window.open(A.Z.getArticleURL(V.BhN.QUESTS_LEARN_MORE));
        }, [W]);
    (0, g.Tt)({ location: F.intl.string(F.t.JALI2N) });
    let Q = W ? F.intl.format(F.t.BCBIlp, {}) : F.intl.format(F.t.lmMBf3, {}),
        X = W ? F.intl.format(F.t.U9FY0N, {}) : F.intl.string(F.t.oWCrBg),
        J = i.useRef(null);
    return (0, r.jsx)(M.k.Provider, {
        value: { onAssetLoadComplete: j },
        children: (0, r.jsx)('div', {
            className: z.container,
            children: W
                ? (0, r.jsx)(U.t.Provider, {
                      value: J,
                      children: (0, r.jsxs)(C.Z, {
                          onScroll: l,
                          ref: J,
                          children: [
                              (0, r.jsx)(v.a, {
                                  selectedTabId: e,
                                  handleTransition: t,
                                  tabs: n,
                                  icon: u.qDn,
                                  children: (0, r.jsx)(P.V9, {
                                      analyticsPage: V.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: P.ek.END,
                                      ctaText: F.intl.string(F.t['J+vlIS']),
                                      ctaOnClick: () => {
                                          ((0, S.Y)({
                                              pageType: V.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                              sectionType: V.jXE.ORBS_BALANCE_MENU,
                                              ctaObject: V.qAy.CTA_TO_ORBS_SHOP
                                          }),
                                              (0, f.mK)({
                                                  openInLayer: !1,
                                                  tab: H.AW.ORBS,
                                                  analyticsLocations: [],
                                                  analyticsSource: p.Z.ORBS_BALANCE_MENU
                                              }));
                                      }
                                  })
                              }),
                              (0, r.jsxs)(E.Z, {
                                  title: Q,
                                  description: X,
                                  betaTag: W && Y,
                                  button: W
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(u.zxk, {
                                                    variant: 'overlay-primary',
                                                    text: F.intl.string(F.t['1Wm129']),
                                                    onClick: () =>
                                                        (0, f.mK)({
                                                            openInLayer: !1,
                                                            tab: H.AW.ORBS,
                                                            analyticsLocations: [],
                                                            analyticsSource: p.Z.INTRO_TO_ORBS_QUEST_BANNER
                                                        })
                                                }),
                                                (0, r.jsx)(c.zx, {
                                                    look: c.iL.LINK,
                                                    color: c.Tt.CUSTOM,
                                                    className: z.orbsTermsButton,
                                                    onClick: K,
                                                    children: F.intl.string(F.t['7kTAgI'])
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(_.u, {
                                            text: F.intl.string(F.t.hvVgAQ),
                                            onClick: K
                                        }),
                                  className: a()(z.bannerContainer, { [z.orbsContainer]: W }),
                                  children: [(0, r.jsx)('div', { className: a()(z.bannerGradient, { [z.orbsGradient]: W }) }), (0, r.jsx)(q, { onLoadComplete: j })]
                              }),
                              (0, r.jsx)(O.Z, { children: e === Z.e5.CLAIMED ? (0, r.jsx)(m, { onSelectTab: t }) : (0, r.jsx)(R.Z, {}) })
                          ]
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(I.ZP, {
                              variant: I._6.OVERLAY,
                              children: [(0, r.jsx)('div', { className: z.dragRegion }), (0, r.jsx)(I.z6, { scrollPosition: s }), (0, r.jsx)(I.aV, { icon: u.qDn })]
                          }),
                          (0, r.jsx)(U.t.Provider, {
                              value: J,
                              children: (0, r.jsxs)(C.Z, {
                                  onScroll: l,
                                  ref: J,
                                  children: [
                                      (0, r.jsxs)(E.Z, {
                                          title: Q,
                                          description: X,
                                          button: (0, r.jsx)(_.u, {
                                              text: F.intl.string(F.t.hvVgAQ),
                                              onClick: K
                                          }),
                                          className: a()(z.bannerContainer, { [z.orbsContainer]: W }),
                                          children: [(0, r.jsx)('div', { className: a()(z.bannerGradient, { [z.orbsGradient]: W }) }), (0, r.jsx)(q, { onLoadComplete: j })]
                                      }),
                                      (0, r.jsxs)(O.Z, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: z.tabs,
                                                  children: (0, r.jsx)(y.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t
                                                  })
                                              }),
                                              e === Z.e5.CLAIMED ? (0, r.jsx)(m, { onSelectTab: t }) : (0, r.jsx)(R.Z, {})
                                          ]
                                      })
                                  ]
                              })
                          })
                      ]
                  })
        })
    });
};
