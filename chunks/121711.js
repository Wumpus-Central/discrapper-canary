n.d(t, { Z: () => K });
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
    O = n(374939),
    E = n(233374),
    y = n(611928),
    I = n(763433),
    v = n(283293),
    C = n(507808),
    S = n(794231),
    N = n(822857),
    T = n(775451),
    P = n(526167),
    j = n(63063),
    A = n(113434),
    Z = n(833435),
    x = n(150560),
    L = n(558652),
    w = n(736683),
    R = n(879438),
    D = n(251360),
    k = n(466962),
    M = n(452081),
    U = n(46140),
    G = n(981631),
    B = n(215023),
    V = n(388032),
    H = n(87671),
    F = n(13299),
    z = n(428383),
    W = n(843385);
function Y(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, N.WX)({ location: U.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        o = i.useRef(null);
    if (
        (i.useEffect(() => {
            var e, t, n, r;
            null != o && (!l || (null == (e = o.current) ? void 0 : e.paused) ? !l && (null == (t = o.current) ? void 0 : t.paused) && (null == (r = o.current) || r.play()) : null == (n = o.current) || n.pause());
        }, [l]),
        n)
    ) {
        let e = (0, P.rO)();
        return (0, r.jsx)(g.Z, {
            ref: o,
            autoPlay: !l,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(H.bannerAsset, H.orbsBannerAsset),
            onProgress: t,
            'data-mtctest-ignore': 'true',
            controls: !1,
            children: (0, r.jsx)('source', {
                src: e ? z.Z : W.Z,
                type: e ? 'video/mp4' : 'video/webm'
            })
        });
    }
    return (0, r.jsx)('img', {
        src: F.ZP,
        className: a()(H.bannerAsset, H.oversizedImg),
        alt: '',
        onLoad: t
    });
}
let K = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, M.z)(),
        { onScroll: l, scrollPosition: s } = (0, m.M)(),
        u = x.Z.getState().getUtmCurrentContext(),
        g = (0, Z._)({ location: U.dr.QUEST_HOME_DESKTOP }) ? w.Z : w.j,
        P = (0, R.z)((e) => e.registerAssetLoad),
        F = i.useRef(u);
    (i.useEffect(() => {
        F.current = u;
    }),
        i.useEffect(() => {
            let { current: t } = F;
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
        }, [e]));
    let { enabled: z } = (0, N.WX)({ location: U.dr.QUEST_HOME_DESKTOP }),
        { showBetaTag: W } = S.Z.useExperiment({ location: U.dr.QUEST_HOME_DESKTOP }),
        K = i.useCallback(() => {
            if (z) return void window.open(G.EYA.PAID_TERMS_ORBS);
            window.open(j.Z.getArticleURL(G.BhN.QUESTS_LEARN_MORE));
        }, [z]);
    (0, f.Tt)({ location: V.intl.string(V.t.JALI2N) });
    let q = z ? V.intl.format(V.t.BCBIlp, {}) : V.intl.format(V.t.lmMBf3, {}),
        X = z ? V.intl.format(V.t.U9FY0N, {}) : V.intl.string(V.t.oWCrBg),
        Q = i.useRef(null);
    return (0, r.jsx)(D.k.Provider, {
        value: { onAssetLoadComplete: P },
        children: (0, r.jsx)('div', {
            className: H.container,
            children: z
                ? (0, r.jsx)(k.t.Provider, {
                      value: Q,
                      children: (0, r.jsxs)(v.Z, {
                          onScroll: l,
                          ref: Q,
                          children: [
                              (0, r.jsx)(I.a, {
                                  selectedTabId: e,
                                  handleTransition: t,
                                  tabs: n,
                                  icon: c.qDn,
                                  children: (0, r.jsx)(T.V9, {
                                      analyticsPage: G.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: T.ek.END,
                                      ctaText: V.intl.string(V.t['J+vlIS']),
                                      ctaOnClick: () => {
                                          ((0, C.Y)({
                                              pageType: G.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                              sectionType: G.jXE.ORBS_BALANCE_MENU,
                                              ctaObject: G.qAy.CTA_TO_ORBS_SHOP
                                          }),
                                              (0, h.mK)({
                                                  openInLayer: !1,
                                                  tab: B.AW.ORBS,
                                                  analyticsLocations: [],
                                                  analyticsSource: d.Z.ORBS_BALANCE_MENU
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
                                                (0, r.jsx)(c.zxk, {
                                                    color: c.Ttl.WHITE,
                                                    onClick: () =>
                                                        (0, h.mK)({
                                                            openInLayer: !1,
                                                            tab: B.AW.ORBS,
                                                            analyticsLocations: [],
                                                            analyticsSource: d.Z.INTRO_TO_ORBS_QUEST_BANNER
                                                        }),
                                                    children: V.intl.string(V.t['1Wm129'])
                                                }),
                                                (0, r.jsx)(c.zxk, {
                                                    look: c.iLD.LINK,
                                                    color: c.Ttl.CUSTOM,
                                                    className: H.orbsTermsButton,
                                                    onClick: K,
                                                    children: V.intl.string(V.t['7kTAgI'])
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(b.u, {
                                            text: V.intl.string(V.t.hvVgAQ),
                                            onClick: K
                                        }),
                                  className: a()(H.bannerContainer, { [H.orbsContainer]: z }),
                                  children: [(0, r.jsx)('div', { className: a()(H.bannerGradient, { [H.orbsGradient]: z }) }), (0, r.jsx)(Y, { onLoadComplete: P })]
                              }),
                              (0, r.jsx)(O.Z, { children: e === A.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(L.Z, {}) })
                          ]
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(y.ZP, {
                              variant: y._6.OVERLAY,
                              children: [(0, r.jsx)('div', { className: H.dragRegion }), (0, r.jsx)(y.z6, { scrollPosition: s }), (0, r.jsx)(y.aV, { icon: c.qDn })]
                          }),
                          (0, r.jsx)(k.t.Provider, {
                              value: Q,
                              children: (0, r.jsxs)(v.Z, {
                                  onScroll: l,
                                  ref: Q,
                                  children: [
                                      (0, r.jsxs)(_.Z, {
                                          title: q,
                                          description: X,
                                          button: (0, r.jsx)(b.u, {
                                              text: V.intl.string(V.t.hvVgAQ),
                                              onClick: K
                                          }),
                                          className: a()(H.bannerContainer, { [H.orbsContainer]: z }),
                                          children: [(0, r.jsx)('div', { className: a()(H.bannerGradient, { [H.orbsGradient]: z }) }), (0, r.jsx)(Y, { onLoadComplete: P })]
                                      }),
                                      (0, r.jsxs)(O.Z, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: H.tabs,
                                                  children: (0, r.jsx)(E.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t
                                                  })
                                              }),
                                              e === A.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(L.Z, {})
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
