n.d(t, { Z: () => z });
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
    R = n(452081),
    D = n(46140),
    k = n(981631),
    M = n(215023),
    U = n(388032),
    G = n(87671),
    V = n(13299),
    B = n(843385);
function H() {
    return (0, s.e7)(
        [j.Z],
        () => {
            let e = j.Z.getQuest(D.V6);
            return null != e && !(0, Z.zi)(e);
        },
        []
    );
}
function F() {
    let e = H(),
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
                  src: B.Z,
                  type: 'video/webm'
              })
          })
        : (0, r.jsx)('img', {
              src: V.ZP,
              className: a()(G.bannerAsset, G.oversizedImg),
              alt: ''
          });
}
let z = function () {
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
    let { enabled: Z } = (0, S.W)({ location: D.dr.QUEST_HOME_DESKTOP }),
        V = H(),
        B = i.useCallback(() => {
            if (V) return void window.open(T.Z.getArticleURL(k.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            window.open(T.Z.getArticleURL(k.BhN.QUESTS_LEARN_MORE));
        }, [V]);
    (0, f.Tt)({ location: U.intl.string(U.t.JALI2N) });
    let z = V ? U.intl.format(U.t.BCBIlp, {}) : U.intl.format(U.t.lmMBf3, {}),
        W = V ? U.intl.format(U.t.U9FY0N, {}) : U.intl.string(U.t.oWCrBg);
    return (0, r.jsx)('div', {
        className: G.container,
        children: Z
            ? (0, r.jsxs)(v.Z, {
                  onScroll: l,
                  children: [
                      (0, r.jsx)(I.a, {
                          selectedTabId: e,
                          handleTransition: t,
                          tabs: n,
                          icon: c.qDn,
                          children: (0, r.jsx)(N.V9, {
                              analyticsPage: k.ZY5.GLOBAL_DISCOVERY_QUESTS,
                              cardAlignment: N.ek.END,
                              ctaText: U.intl.string(U.t['J+vlIS']),
                              ctaOnClick: () => {
                                  (0, C.Y)({
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
                          title: z,
                          description: W,
                          button: (0, r.jsx)(b.u, {
                              text: U.intl.string(U.t.hvVgAQ),
                              onClick: B
                          }),
                          className: a()(G.bannerContainer, { [G.orbsContainer]: V }),
                          children: [(0, r.jsx)('div', { className: a()(G.bannerGradient, { [G.orbsGradient]: V }) }), (0, r.jsx)(F, {})]
                      }),
                      (0, r.jsx)(E.Z, { children: e === P.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(L.Z, {}) })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(y.ZP, {
                          variant: y._6.OVERLAY,
                          children: [(0, r.jsx)('div', { className: G.dragRegion }), (0, r.jsx)(y.z6, { scrollPosition: s }), (0, r.jsx)(y.aV, { icon: c.qDn })]
                      }),
                      (0, r.jsxs)(v.Z, {
                          onScroll: l,
                          children: [
                              (0, r.jsxs)(_.Z, {
                                  title: z,
                                  description: W,
                                  button: (0, r.jsx)(b.u, {
                                      text: U.intl.string(U.t.hvVgAQ),
                                      onClick: B
                                  }),
                                  className: a()(G.bannerContainer, { [G.orbsContainer]: V }),
                                  children: [(0, r.jsx)('div', { className: a()(G.bannerGradient, { [G.orbsGradient]: V }) }), (0, r.jsx)(F, {})]
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
