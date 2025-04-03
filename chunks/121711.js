n.d(t, { Z: () => H });
var r = n(200651),
    i = n(192379),
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
    N = n(611928),
    y = n(763433),
    I = n(283293),
    v = n(822857),
    C = n(775451),
    S = n(63063),
    T = n(113434),
    P = n(569984),
    j = n(833435),
    A = n(918701),
    Z = n(150560),
    x = n(558652),
    L = n(736683),
    w = n(452081),
    R = n(46140),
    D = n(981631),
    k = n(215023),
    M = n(388032),
    U = n(87671),
    G = n(13299),
    W = n(843385);
function V() {
    return (0, s.e7)(
        [P.Z],
        () => {
            let e = P.Z.getQuest(R.V6);
            return null != e && !(0, A.zi)(e);
        },
        []
    );
}
function B() {
    let e = V(),
        t = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        n = i.useRef(null);
    return (i.useEffect(() => {
        var e, r, i, l;
        null != n && (!t || (null == (e = n.current) ? void 0 : e.paused) ? !t && (null == (r = n.current) ? void 0 : r.paused) && (null == (l = n.current) || l.play()) : null == (i = n.current) || i.pause());
    }, [t]),
    e)
        ? (0, r.jsx)(g.Z, {
              ref: n,
              autoPlay: !t,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: a()(U.bannerAsset, U.orbsBannerAsset),
              controls: !1,
              children: (0, r.jsx)('source', {
                  src: W.Z,
                  type: 'video/webm'
              })
          })
        : (0, r.jsx)('img', {
              src: G.ZP,
              className: a()(U.bannerAsset, U.oversizedImg),
              alt: ''
          });
}
let H = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, w.z)(),
        { onScroll: l, scrollPosition: s } = (0, m.M)(),
        u = Z.Z.getState().getUtmCurrentContext(),
        g = (0, j._)({ location: R.dr.QUEST_HOME_DESKTOP }) ? L.Z : L.j,
        P = i.useRef(u);
    i.useEffect(() => {
        P.current = u;
    }),
        i.useEffect(() => {
            let { current: t } = P;
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
    let { enabled: A } = (0, v.W)({ location: R.dr.QUEST_HOME_DESKTOP }),
        G = V(),
        W = i.useCallback(() => {
            if (G) return void window.open(S.Z.getArticleURL(D.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            window.open(S.Z.getArticleURL(D.BhN.QUESTS_LEARN_MORE));
        }, [G]);
    (0, f.Tt)({ location: M.NW.string(M.t.JALI2N) });
    let H = G ? M.NW.format(M.t.BCBIlp, {}) : M.NW.format(M.t.lmMBf3, {}),
        F = G ? M.NW.format(M.t.U9FY0N, {}) : M.NW.string(M.t.oWCrBg);
    return (0, r.jsx)('div', {
        className: U.container,
        children: A
            ? (0, r.jsxs)(I.Z, {
                  onScroll: l,
                  children: [
                      (0, r.jsx)(y.a, {
                          selectedTabId: e,
                          handleTransition: t,
                          tabs: n,
                          icon: c.qDn,
                          children: (0, r.jsx)(C.V9, {
                              cardAlignment: C.ek.END,
                              ctaText: M.NW.string(M.t['J+vlIS']),
                              ctaOnClick: () => {
                                  (0, h.mK)({
                                      openInLayer: !1,
                                      tab: k.AW.ORBS,
                                      analyticsLocations: [],
                                      analyticsSource: d.Z.QUEST_HOME_PAGE
                                  });
                              }
                          })
                      }),
                      (0, r.jsxs)(_.Z, {
                          title: H,
                          description: F,
                          button: (0, r.jsx)(b.u, {
                              text: M.NW.string(M.t.hvVgAQ),
                              onClick: W
                          }),
                          className: a()(U.bannerContainer, { [U.orbsContainer]: G }),
                          children: [(0, r.jsx)('div', { className: a()(U.bannerGradient, { [U.orbsGradient]: G }) }), (0, r.jsx)(B, {})]
                      }),
                      (0, r.jsx)(E.Z, { children: e === T.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(x.Z, {}) })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(N.ZP, {
                          variant: N._6.OVERLAY,
                          children: [(0, r.jsx)('div', { className: U.dragRegion }), (0, r.jsx)(N.z6, { scrollPosition: s }), (0, r.jsx)(N.aV, { icon: c.qDn })]
                      }),
                      (0, r.jsxs)(I.Z, {
                          onScroll: l,
                          children: [
                              (0, r.jsxs)(_.Z, {
                                  title: H,
                                  description: F,
                                  button: (0, r.jsx)(b.u, {
                                      text: M.NW.string(M.t.hvVgAQ),
                                      onClick: W
                                  }),
                                  className: a()(U.bannerContainer, { [U.orbsContainer]: G }),
                                  children: [(0, r.jsx)('div', { className: a()(U.bannerGradient, { [U.orbsGradient]: G }) }), (0, r.jsx)(B, {})]
                              }),
                              (0, r.jsxs)(E.Z, {
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: U.tabs,
                                          children: (0, r.jsx)(O.Z, {
                                              tabs: n,
                                              selectedTab: e,
                                              onTabSelect: t
                                          })
                                      }),
                                      e === T.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(x.Z, {})
                                  ]
                              })
                          ]
                      })
                  ]
              })
    });
};
