n.d(t, { Z: () => Y });
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
    j = n(569984),
    A = n(833435),
    Z = n(918701),
    x = n(150560),
    L = n(558652),
    w = n(736683),
    R = n(879438),
    D = n(251360),
    k = n(452081),
    M = n(46140),
    U = n(981631),
    G = n(215023),
    V = n(388032),
    B = n(87671),
    H = n(13299),
    F = n(843385);
function z() {
    return (0, s.e7)(
        [j.Z],
        () => {
            let e = j.Z.getQuest(M.V6);
            return null != e && !(0, Z.zi)(e);
        },
        []
    );
}
function W(e) {
    let { onLoadComplete: t } = e,
        n = z(),
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
                  src: F.Z,
                  type: 'video/webm'
              })
          })
        : (0, r.jsx)('img', {
              src: H.ZP,
              className: a()(B.bannerAsset, B.oversizedImg),
              alt: '',
              onLoad: t
          });
}
let Y = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, k.z)(),
        { onScroll: l, scrollPosition: s } = (0, m.M)(),
        u = x.Z.getState().getUtmCurrentContext(),
        g = (0, A._)({ location: M.dr.QUEST_HOME_DESKTOP }) ? w.Z : w.j,
        j = (0, R.z)((e) => e.registerAssetLoad),
        Z = i.useRef(u);
    i.useEffect(() => {
        Z.current = u;
    }),
        i.useEffect(() => {
            let { current: t } = Z;
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
    let { enabled: H } = (0, S.W)({ location: M.dr.QUEST_HOME_DESKTOP }),
        F = z(),
        Y = i.useCallback(() => {
            if (F) return void window.open(T.Z.getArticleURL(U.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            window.open(T.Z.getArticleURL(U.BhN.QUESTS_LEARN_MORE));
        }, [F]);
    (0, f.Tt)({ location: V.intl.string(V.t.JALI2N) });
    let K = F ? V.intl.format(V.t.BCBIlp, {}) : V.intl.format(V.t.lmMBf3, {}),
        q = F ? V.intl.format(V.t.U9FY0N, {}) : V.intl.string(V.t.oWCrBg);
    return (0, r.jsx)(D.k.Provider, {
        value: { onAssetLoadComplete: j },
        children: (0, r.jsx)('div', {
            className: B.container,
            children: H
                ? (0, r.jsxs)(v.Z, {
                      onScroll: l,
                      children: [
                          (0, r.jsx)(I.a, {
                              selectedTabId: e,
                              handleTransition: t,
                              tabs: n,
                              icon: c.qDn,
                              children: (0, r.jsx)(N.V9, {
                                  analyticsPage: U.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                  cardAlignment: N.ek.END,
                                  ctaText: V.intl.string(V.t['J+vlIS']),
                                  ctaOnClick: () => {
                                      (0, C.Y)({
                                          pageType: U.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                          sectionType: U.jXE.ORBS_BALANCE_MENU,
                                          ctaObject: U.qAy.CTA_TO_ORBS_SHOP
                                      }),
                                          (0, h.mK)({
                                              openInLayer: !1,
                                              tab: G.AW.ORBS,
                                              analyticsLocations: [],
                                              analyticsSource: d.Z.ORBS_BALANCE_MENU
                                          });
                                  }
                              })
                          }),
                          (0, r.jsxs)(_.Z, {
                              title: K,
                              description: q,
                              betaTag: F,
                              button: F
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.zxk, {
                                                color: c.Ttl.WHITE,
                                                onClick: () =>
                                                    (0, h.mK)({
                                                        openInLayer: !1,
                                                        tab: G.AW.ORBS,
                                                        analyticsLocations: [],
                                                        analyticsSource: d.Z.INTRO_TO_ORBS_QUEST_BANNER
                                                    }),
                                                children: V.intl.string(V.t['1Wm129'])
                                            }),
                                            (0, r.jsx)(c.zxk, {
                                                look: c.iLD.LINK,
                                                color: c.Ttl.CUSTOM,
                                                className: B.orbsTermsButton,
                                                onClick: Y,
                                                children: V.intl.string(V.t['7kTAgI'])
                                            })
                                        ]
                                    })
                                  : (0, r.jsx)(b.u, {
                                        text: V.intl.string(V.t.hvVgAQ),
                                        onClick: Y
                                    }),
                              className: a()(B.bannerContainer, { [B.orbsContainer]: F }),
                              children: [(0, r.jsx)('div', { className: a()(B.bannerGradient, { [B.orbsGradient]: F }) }), (0, r.jsx)(W, { onLoadComplete: j })]
                          }),
                          (0, r.jsx)(E.Z, { children: e === P.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(L.Z, {}) })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(y.ZP, {
                              variant: y._6.OVERLAY,
                              children: [(0, r.jsx)('div', { className: B.dragRegion }), (0, r.jsx)(y.z6, { scrollPosition: s }), (0, r.jsx)(y.aV, { icon: c.qDn })]
                          }),
                          (0, r.jsxs)(v.Z, {
                              onScroll: l,
                              children: [
                                  (0, r.jsxs)(_.Z, {
                                      title: K,
                                      description: q,
                                      button: (0, r.jsx)(b.u, {
                                          text: V.intl.string(V.t.hvVgAQ),
                                          onClick: Y
                                      }),
                                      className: a()(B.bannerContainer, { [B.orbsContainer]: F }),
                                      children: [(0, r.jsx)('div', { className: a()(B.bannerGradient, { [B.orbsGradient]: F }) }), (0, r.jsx)(W, { onLoadComplete: j })]
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
                                          e === P.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(L.Z, {})
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
        })
    });
};
