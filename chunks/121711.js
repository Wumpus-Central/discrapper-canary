n.d(t, { Z: () => F });
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
    v = n(507808),
    C = n(822857),
    S = n(775451),
    T = n(63063),
    P = n(113434),
    j = n(569984),
    A = n(833435),
    Z = n(918701),
    x = n(150560),
    L = n(558652),
    w = n(736683),
    R = n(452081),
    D = n(46140),
    k = n(981631),
    M = n(215023),
    U = n(388032),
    G = n(613932),
    W = n(13299),
    V = n(843385);
function B() {
    return (0, s.e7)(
        [j.Z],
        () => {
            let e = j.Z.getQuest(D.V6);
            return null != e && !(0, Z.zi)(e);
        },
        []
    );
}
function H() {
    let e = B(),
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
              className: a()(G.bannerAsset, G.orbsBannerAsset),
              controls: !1,
              children: (0, r.jsx)('source', {
                  src: V.Z,
                  type: 'video/webm'
              })
          })
        : (0, r.jsx)('img', {
              src: W.ZP,
              className: a()(G.bannerAsset, G.oversizedImg),
              alt: ''
          });
}
let F = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, R.z)(),
        { onScroll: l, scrollPosition: s } = (0, m.M)(),
        u = x.Z.getState().getUtmCurrentContext(),
        g = (0, A._)({ location: D.dr.QUEST_HOME_DESKTOP }) ? w.Z : w.j,
        j = i.useRef(u);
    i.useEffect(() => {
        j.current = u;
    }),
        i.useEffect(() => {
            let { current: t } = j;
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
    let { enabled: Z } = (0, C.W)({ location: D.dr.QUEST_HOME_DESKTOP }),
        W = B(),
        V = i.useCallback(() => {
            if (W) return void window.open(T.Z.getArticleURL(k.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            window.open(T.Z.getArticleURL(k.BhN.QUESTS_LEARN_MORE));
        }, [W]);
    (0, f.Tt)({ location: U.NW.string(U.t.JALI2N) });
    let F = W ? U.NW.format(U.t.BCBIlp, {}) : U.NW.format(U.t.lmMBf3, {}),
        z = W ? U.NW.format(U.t.U9FY0N, {}) : U.NW.string(U.t.oWCrBg);
    return (0, r.jsx)('div', {
        className: G.container,
        children: Z
            ? (0, r.jsxs)(I.Z, {
                  onScroll: l,
                  children: [
                      (0, r.jsx)(y.a, {
                          selectedTabId: e,
                          handleTransition: t,
                          tabs: n,
                          icon: c.qDn,
                          children: (0, r.jsx)(S.V9, {
                              analyticsPage: k.ZY5.GLOBAL_DISCOVERY_QUESTS,
                              cardAlignment: S.ek.END,
                              ctaText: U.NW.string(U.t['J+vlIS']),
                              ctaOnClick: () => {
                                  (0, v.Y)({
                                      pageType: k.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      sectionType: k.jXE.ORBS_BALANCE_MENU,
                                      ctaObject: k.qAy.CTA_TO_ORBS_SHOP
                                  }),
                                      (0, h.mK)({
                                          openInLayer: !1,
                                          tab: M.AW.ORBS,
                                          analyticsLocations: [],
                                          analyticsSource: d.Z.ORBS_BALANCE_MENU
                                      });
                              }
                          })
                      }),
                      (0, r.jsxs)(_.Z, {
                          title: F,
                          description: z,
                          button: (0, r.jsx)(b.u, {
                              text: U.NW.string(U.t.hvVgAQ),
                              onClick: V
                          }),
                          className: a()(G.bannerContainer, { [G.orbsContainer]: W }),
                          children: [(0, r.jsx)('div', { className: a()(G.bannerGradient, { [G.orbsGradient]: W }) }), (0, r.jsx)(H, {})]
                      }),
                      (0, r.jsx)(E.Z, { children: e === P.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(L.Z, {}) })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(N.ZP, {
                          variant: N._6.OVERLAY,
                          children: [(0, r.jsx)('div', { className: G.dragRegion }), (0, r.jsx)(N.z6, { scrollPosition: s }), (0, r.jsx)(N.aV, { icon: c.qDn })]
                      }),
                      (0, r.jsxs)(I.Z, {
                          onScroll: l,
                          children: [
                              (0, r.jsxs)(_.Z, {
                                  title: F,
                                  description: z,
                                  button: (0, r.jsx)(b.u, {
                                      text: U.NW.string(U.t.hvVgAQ),
                                      onClick: V
                                  }),
                                  className: a()(G.bannerContainer, { [G.orbsContainer]: W }),
                                  children: [(0, r.jsx)('div', { className: a()(G.bannerGradient, { [G.orbsGradient]: W }) }), (0, r.jsx)(H, {})]
                              }),
                              (0, r.jsxs)(E.Z, {
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: G.tabs,
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
    });
};
