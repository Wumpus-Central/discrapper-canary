n.d(t, { Z: () => z });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(100527),
    p = n(213609),
    h = n(335131),
    f = n(252618),
    g = n(70097),
    m = n(114851),
    b = n(175307),
    _ = n(17845),
    E = n(374939),
    O = n(233374),
    y = n(611928),
    I = n(763433),
    v = n(283293),
    C = n(507808),
    S = n(822857),
    N = n(775451),
    T = n(63063),
    P = n(113434),
    j = n(833435),
    A = n(150560),
    Z = n(558652),
    x = n(736683),
    w = n(879438),
    L = n(251360),
    R = n(466962),
    D = n(452081),
    k = n(46140),
    M = n(981631),
    U = n(215023),
    G = n(388032),
    B = n(87671),
    V = n(13299),
    H = n(843385);
function F(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, S.WX)({ location: k.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        o = i.useRef(null);
    return (i.useEffect(() => {
        var e, t, n, r;
        null != o && (!l || (null == (e = o.current) ? void 0 : e.paused) ? !l && (null == (t = o.current) ? void 0 : t.paused) && (null == (r = o.current) || r.play()) : null == (n = o.current) || n.pause());
    }, [l]),
    n)
        ? (0, r.jsx)(g.Z, {
              ref: o,
              autoPlay: !l,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: a()(B.bannerAsset, B.orbsBannerAsset),
              onProgress: t,
              'data-mtctest-ignore': 'true',
              controls: !1,
              children: (0, r.jsx)('source', {
                  src: H.Z,
                  type: 'video/webm'
              })
          })
        : (0, r.jsx)('img', {
              src: V.ZP,
              className: a()(B.bannerAsset, B.oversizedImg),
              alt: '',
              onLoad: t
          });
}
let z = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, D.z)(),
        { onScroll: l, scrollPosition: s } = (0, m.M)(),
        u = A.Z.getState().getUtmCurrentContext(),
        g = (0, j._)({ location: k.dr.QUEST_HOME_DESKTOP }) ? x.Z : x.j,
        V = (0, w.z)((e) => e.registerAssetLoad),
        H = i.useRef(u);
    i.useEffect(() => {
        H.current = u;
    }),
        i.useEffect(() => {
            let { current: t } = H;
            (0, p.h)({
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
        }, [e]);
    let { enabled: z } = (0, S.WX)({ location: k.dr.QUEST_HOME_DESKTOP }),
        W = i.useCallback(() => {
            if (z) return void window.open(M.EYA.PAID_TERMS_ORBS);
            window.open(T.Z.getArticleURL(M.BhN.QUESTS_LEARN_MORE));
        }, [z]);
    (0, f.Tt)({ location: G.intl.string(G.t.JALI2N) });
    let Y = z ? G.intl.format(G.t.BCBIlp, {}) : G.intl.format(G.t.lmMBf3, {}),
        K = z ? G.intl.format(G.t.U9FY0N, {}) : G.intl.string(G.t.oWCrBg),
        q = i.useRef(null);
    return (0, r.jsx)(L.k.Provider, {
        value: { onAssetLoadComplete: V },
        children: (0, r.jsx)('div', {
            className: B.container,
            children: z
                ? (0, r.jsx)(R.t.Provider, {
                      value: q,
                      children: (0, r.jsxs)(v.Z, {
                          onScroll: l,
                          ref: q,
                          children: [
                              (0, r.jsx)(I.a, {
                                  selectedTabId: e,
                                  handleTransition: t,
                                  tabs: n,
                                  icon: c.qDn,
                                  children: (0, r.jsx)(N.V9, {
                                      analyticsPage: M.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: N.ek.END,
                                      ctaText: G.intl.string(G.t['J+vlIS']),
                                      ctaOnClick: () => {
                                          (0, C.Y)({
                                              pageType: M.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                              sectionType: M.jXE.ORBS_BALANCE_MENU,
                                              ctaObject: M.qAy.CTA_TO_ORBS_SHOP
                                          }),
                                              (0, h.mK)({
                                                  openInLayer: !1,
                                                  tab: U.AW.ORBS,
                                                  analyticsLocations: [],
                                                  analyticsSource: d.Z.ORBS_BALANCE_MENU
                                              });
                                      }
                                  })
                              }),
                              (0, r.jsxs)(_.Z, {
                                  title: Y,
                                  description: K,
                                  betaTag: z,
                                  button: z
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(c.zxk, {
                                                    color: c.Ttl.WHITE,
                                                    onClick: () =>
                                                        (0, h.mK)({
                                                            openInLayer: !1,
                                                            tab: U.AW.ORBS,
                                                            analyticsLocations: [],
                                                            analyticsSource: d.Z.INTRO_TO_ORBS_QUEST_BANNER
                                                        }),
                                                    children: G.intl.string(G.t['1Wm129'])
                                                }),
                                                (0, r.jsx)(c.zxk, {
                                                    look: c.iLD.LINK,
                                                    color: c.Ttl.CUSTOM,
                                                    className: B.orbsTermsButton,
                                                    onClick: W,
                                                    children: G.intl.string(G.t['7kTAgI'])
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(b.u, {
                                            text: G.intl.string(G.t.hvVgAQ),
                                            onClick: W
                                        }),
                                  className: a()(B.bannerContainer, { [B.orbsContainer]: z }),
                                  children: [(0, r.jsx)('div', { className: a()(B.bannerGradient, { [B.orbsGradient]: z }) }), (0, r.jsx)(F, { onLoadComplete: V })]
                              }),
                              (0, r.jsx)(E.Z, { children: e === P.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(Z.Z, {}) })
                          ]
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(y.ZP, {
                              variant: y._6.OVERLAY,
                              children: [(0, r.jsx)('div', { className: B.dragRegion }), (0, r.jsx)(y.z6, { scrollPosition: s }), (0, r.jsx)(y.aV, { icon: c.qDn })]
                          }),
                          (0, r.jsx)(R.t.Provider, {
                              value: q,
                              children: (0, r.jsxs)(v.Z, {
                                  onScroll: l,
                                  ref: q,
                                  children: [
                                      (0, r.jsxs)(_.Z, {
                                          title: Y,
                                          description: K,
                                          button: (0, r.jsx)(b.u, {
                                              text: G.intl.string(G.t.hvVgAQ),
                                              onClick: W
                                          }),
                                          className: a()(B.bannerContainer, { [B.orbsContainer]: z }),
                                          children: [(0, r.jsx)('div', { className: a()(B.bannerGradient, { [B.orbsGradient]: z }) }), (0, r.jsx)(F, { onLoadComplete: V })]
                                      }),
                                      (0, r.jsxs)(E.Z, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: B.tabs,
                                                  children: (0, r.jsx)(O.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t
                                                  })
                                              }),
                                              e === P.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(Z.Z, {})
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
