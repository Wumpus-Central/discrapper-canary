n.d(t, { Z: () => D });
var r = n(200651),
    i = n(192379),
    l = n(990547),
    o = n(442837),
    a = n(481060),
    s = n(100527),
    c = n(213609),
    u = n(335131),
    d = n(252618),
    p = n(979233),
    h = n(175307),
    f = n(17845),
    g = n(374939),
    m = n(233374),
    b = n(611928),
    _ = n(763433),
    E = n(283293),
    O = n(822857),
    N = n(775451),
    v = n(63063),
    y = n(113434),
    I = n(569984),
    C = n(833435),
    S = n(918701),
    T = n(150560),
    P = n(558652),
    j = n(736683),
    A = n(452081),
    Z = n(46140),
    x = n(981631),
    w = n(215023),
    L = n(388032),
    R = n(642601);
let D = function () {
    var e;
    let { selectedTab: t, onSelectTab: n, tabs: D } = (0, A.z)(),
        { onScroll: k, scrollPosition: M } = (0, p.M)(),
        U = T.Z.getState().getUtmCurrentContext(),
        G = (0, C._)({ location: Z.dr.QUEST_HOME_DESKTOP }) ? j.Z : j.j,
        W = i.useRef(U);
    i.useEffect(() => {
        W.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = W;
            (0, c.h)({
                name: l.ImpressionNames.QUEST_HOME,
                type: l.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: t
                }
            });
        }, [t]);
    let { enabled: V } = (0, O.W)({ location: Z.dr.QUEST_HOME_DESKTOP }),
        B = null !== (e = (0, o.e7)([I.Z], () => I.Z.getQuest(Z.V6), [])) && void 0 !== e ? e : null,
        H = null !== B && !(0, S.zi)(B),
        F = i.useCallback(() => {
            if (H) {
                window.open(v.Z.getArticleURL(x.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
                return;
            }
            window.open(v.Z.getArticleURL(x.BhN.QUESTS_LEARN_MORE));
        }, [H]);
    (0, d.Tt)({ location: L.NW.string(L.t.JALI2N) });
    let z = H ? L.NW.format(L.t.BCBIlp, {}) : L.NW.format(L.t.lmMBf3, {}),
        Y = H ? L.NW.format(L.t.U9FY0N, {}) : L.NW.string(L.t.oWCrBg);
    return (0, r.jsx)('div', {
        className: R.container,
        children: V
            ? (0, r.jsxs)(E.Z, {
                  onScroll: k,
                  children: [
                      (0, r.jsx)(_.a, {
                          selectedTabId: t,
                          handleTransition: n,
                          tabs: D,
                          icon: a.qDn,
                          children: (0, r.jsx)(N.V9, {
                              cardAlignment: N.ek.END,
                              ctaText: L.NW.string(L.t['J+vlIS']),
                              ctaOnClick: () => {
                                  (0, u.mK)({
                                      openInLayer: !1,
                                      tab: w.AW.ORBS,
                                      analyticsLocations: [],
                                      analyticsSource: s.Z.QUEST_HOME_PAGE
                                  });
                              }
                          })
                      }),
                      (0, r.jsx)(f.Z, {
                          title: z,
                          description: Y,
                          button: (0, r.jsx)(h.u, {
                              text: L.NW.string(L.t.hvVgAQ),
                              onClick: F
                          }),
                          className: R.bannerContainer,
                          children: (0, r.jsx)('div', {
                              className: R.bannerImage,
                              children: (0, r.jsx)('div', { className: R.bannerGradient })
                          })
                      }),
                      (0, r.jsx)(g.Z, { children: t === y.e5.CLAIMED ? (0, r.jsx)(G, { onSelectTab: n }) : (0, r.jsx)(P.Z, {}) })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(b.ZP, {
                          variant: b._6.OVERLAY,
                          children: [(0, r.jsx)('div', { className: R.dragRegion }), (0, r.jsx)(b.z6, { scrollPosition: M }), (0, r.jsx)(b.aV, { icon: a.qDn })]
                      }),
                      (0, r.jsxs)(E.Z, {
                          onScroll: k,
                          children: [
                              (0, r.jsx)(f.Z, {
                                  title: z,
                                  description: Y,
                                  button: (0, r.jsx)(h.u, {
                                      text: L.NW.string(L.t.hvVgAQ),
                                      onClick: F
                                  }),
                                  className: R.bannerContainer,
                                  children: (0, r.jsx)('div', {
                                      className: R.bannerImage,
                                      children: (0, r.jsx)('div', { className: R.bannerGradient })
                                  })
                              }),
                              (0, r.jsxs)(g.Z, {
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: R.tabs,
                                          children: (0, r.jsx)(m.Z, {
                                              tabs: D,
                                              selectedTab: t,
                                              onTabSelect: n
                                          })
                                      }),
                                      t === y.e5.CLAIMED ? (0, r.jsx)(G, { onSelectTab: n }) : (0, r.jsx)(P.Z, {})
                                  ]
                              })
                          ]
                      })
                  ]
              })
    });
};
