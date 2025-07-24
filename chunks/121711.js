n.d(t, { Z: () => q });
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
    _ = n(17845),
    O = n(374939),
    E = n(233374),
    y = n(611928),
    v = n(763433),
    I = n(283293),
    C = n(507808),
    S = n(794231),
    N = n(822857),
    T = n(775451),
    P = n(526167),
    j = n(63063),
    x = n(113434),
    A = n(833435),
    Z = n(150560),
    w = n(672188),
    L = n(558652),
    R = n(736683),
    D = n(879438),
    k = n(251360),
    M = n(466962),
    U = n(452081),
    G = n(46140),
    B = n(981631),
    V = n(215023),
    H = n(388032),
    F = n(87671),
    z = n(13299),
    W = n(606199),
    Y = n(164792);
function K(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, N.WX)({ location: G.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        { ref: o, inViewport: c } = (0, w.a)(),
        u = i.useRef(null);
    if (
        (i.useEffect(() => {
            (null == u ? void 0 : u.current) != null && (u.current.paused || (c && !l) ? u.current.paused && !l && c && u.current.play() : u.current.pause());
        }, [l, c]),
        n)
    ) {
        let e = (0, P.rO)();
        return (0, r.jsx)(m.Z, {
            ref: (e) => {
                ((u.current = e), (o.current = e));
            },
            autoPlay: !l,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(F.bannerAsset, F.orbsBannerAsset),
            onProgress: t,
            'data-mtctest-ignore': 'true',
            controls: !1,
            children: (0, r.jsx)('source', {
                src: e ? W.Z : Y.Z,
                type: e ? 'video/mp4' : 'video/webm'
            })
        });
    }
    return (0, r.jsx)('img', {
        src: z.ZP,
        className: a()(F.bannerAsset, F.oversizedImg),
        alt: '',
        onLoad: t
    });
}
let q = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, U.z)(),
        { onScroll: l, scrollPosition: s } = (0, b.M)(),
        d = Z.Z.getState().getUtmCurrentContext(),
        m = (0, A._)({ location: G.dr.QUEST_HOME_DESKTOP }) ? R.Z : R.j,
        P = (0, D.z)((e) => e.registerAssetLoad),
        w = i.useRef(d);
    (i.useEffect(() => {
        w.current = d;
    }),
        i.useEffect(() => {
            let { current: t } = w;
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
    let { enabled: z } = (0, N.WX)({ location: G.dr.QUEST_HOME_DESKTOP }),
        { showBetaTag: W } = S.Z.useExperiment({ location: G.dr.QUEST_HOME_DESKTOP }),
        Y = i.useCallback(() => {
            if (z) return void window.open(B.EYA.PAID_TERMS_ORBS);
            window.open(j.Z.getArticleURL(B.BhN.QUESTS_LEARN_MORE));
        }, [z]);
    (0, g.Tt)({ location: H.intl.string(H.t.JALI2N) });
    let q = z ? H.intl.format(H.t.BCBIlp, {}) : H.intl.format(H.t.lmMBf3, {}),
        X = z ? H.intl.format(H.t.U9FY0N, {}) : H.intl.string(H.t.oWCrBg),
        Q = i.useRef(null);
    return (0, r.jsx)(k.k.Provider, {
        value: { onAssetLoadComplete: P },
        children: (0, r.jsx)('div', {
            className: F.container,
            children: z
                ? (0, r.jsx)(M.t.Provider, {
                      value: Q,
                      children: (0, r.jsxs)(I.Z, {
                          onScroll: l,
                          ref: Q,
                          children: [
                              (0, r.jsx)(v.a, {
                                  selectedTabId: e,
                                  handleTransition: t,
                                  tabs: n,
                                  icon: u.qDn,
                                  children: (0, r.jsx)(T.V9, {
                                      analyticsPage: B.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: T.ek.END,
                                      ctaText: H.intl.string(H.t['J+vlIS']),
                                      ctaOnClick: () => {
                                          ((0, C.Y)({
                                              pageType: B.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                              sectionType: B.jXE.ORBS_BALANCE_MENU,
                                              ctaObject: B.qAy.CTA_TO_ORBS_SHOP
                                          }),
                                              (0, f.mK)({
                                                  openInLayer: !1,
                                                  tab: V.AW.ORBS,
                                                  analyticsLocations: [],
                                                  analyticsSource: p.Z.ORBS_BALANCE_MENU
                                              }));
                                      }
                                  })
                              }),
                              (0, r.jsxs)(_.Z, {
                                  title: q,
                                  description: X,
                                  betaTag: z && W,
                                  button: z
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(u.zxk, {
                                                    variant: 'overlay-primary',
                                                    text: H.intl.string(H.t['1Wm129']),
                                                    onClick: () =>
                                                        (0, f.mK)({
                                                            openInLayer: !1,
                                                            tab: V.AW.ORBS,
                                                            analyticsLocations: [],
                                                            analyticsSource: p.Z.INTRO_TO_ORBS_QUEST_BANNER
                                                        })
                                                }),
                                                (0, r.jsx)(c.zx, {
                                                    look: c.iL.LINK,
                                                    color: c.Tt.CUSTOM,
                                                    className: F.orbsTermsButton,
                                                    onClick: Y,
                                                    children: H.intl.string(H.t['7kTAgI'])
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(u.zxk, {
                                            variant: 'overlay-primary',
                                            text: H.intl.string(H.t.hvVgAQ),
                                            onClick: Y,
                                            icon: u.Gr1,
                                            iconPosition: 'end'
                                        }),
                                  className: a()(F.bannerContainer, { [F.orbsContainer]: z }),
                                  children: [(0, r.jsx)('div', { className: a()(F.bannerGradient, { [F.orbsGradient]: z }) }), (0, r.jsx)(K, { onLoadComplete: P })]
                              }),
                              (0, r.jsx)(O.Z, { children: e === x.e5.CLAIMED ? (0, r.jsx)(m, { onSelectTab: t }) : (0, r.jsx)(L.Z, {}) })
                          ]
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(y.ZP, {
                              variant: y._6.OVERLAY,
                              children: [(0, r.jsx)('div', { className: F.dragRegion }), (0, r.jsx)(y.z6, { scrollPosition: s }), (0, r.jsx)(y.aV, { icon: u.qDn })]
                          }),
                          (0, r.jsx)(M.t.Provider, {
                              value: Q,
                              children: (0, r.jsxs)(I.Z, {
                                  onScroll: l,
                                  ref: Q,
                                  children: [
                                      (0, r.jsxs)(_.Z, {
                                          title: q,
                                          description: X,
                                          button: (0, r.jsx)(u.zxk, {
                                              variant: 'overlay-primary',
                                              text: H.intl.string(H.t.hvVgAQ),
                                              onClick: Y,
                                              icon: u.Gr1,
                                              iconPosition: 'end'
                                          }),
                                          className: a()(F.bannerContainer, { [F.orbsContainer]: z }),
                                          children: [(0, r.jsx)('div', { className: a()(F.bannerGradient, { [F.orbsGradient]: z }) }), (0, r.jsx)(K, { onLoadComplete: P })]
                                      }),
                                      (0, r.jsxs)(O.Z, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: F.tabs,
                                                  children: (0, r.jsx)(E.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t
                                                  })
                                              }),
                                              e === x.e5.CLAIMED ? (0, r.jsx)(m, { onSelectTab: t }) : (0, r.jsx)(L.Z, {})
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
