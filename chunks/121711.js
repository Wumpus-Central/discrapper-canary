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
    W = n(428383),
    Y = n(843385);
function K(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, T.WX)({ location: G.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        o = i.useRef(null);
    if (
        (i.useEffect(() => {
            var e, t, n, r;
            null != o && (!l || (null == (e = o.current) ? void 0 : e.paused) ? !l && (null == (t = o.current) ? void 0 : t.paused) && (null == (r = o.current) || r.play()) : null == (n = o.current) || n.pause());
        }, [l]),
        n)
    ) {
        let e = (0, j.rO)();
        return (0, r.jsx)(m.Z, {
            ref: o,
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
        d = w.Z.getState().getUtmCurrentContext(),
        m = (0, x._)({ location: G.dr.QUEST_HOME_DESKTOP }) ? R.Z : R.j,
        j = (0, D.z)((e) => e.registerAssetLoad),
        z = i.useRef(d);
    (i.useEffect(() => {
        z.current = d;
    }),
        i.useEffect(() => {
            let { current: t } = z;
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
    let { enabled: W } = (0, T.WX)({ location: G.dr.QUEST_HOME_DESKTOP }),
        { showBetaTag: Y } = N.Z.useExperiment({ location: G.dr.QUEST_HOME_DESKTOP }),
        q = i.useCallback(() => {
            if (W) return void window.open(B.EYA.PAID_TERMS_ORBS);
            window.open(A.Z.getArticleURL(B.BhN.QUESTS_LEARN_MORE));
        }, [W]);
    (0, g.Tt)({ location: H.intl.string(H.t.JALI2N) });
    let X = W ? H.intl.format(H.t.BCBIlp, {}) : H.intl.format(H.t.lmMBf3, {}),
        Q = W ? H.intl.format(H.t.U9FY0N, {}) : H.intl.string(H.t.oWCrBg),
        J = i.useRef(null);
    return (0, r.jsx)(k.k.Provider, {
        value: { onAssetLoadComplete: j },
        children: (0, r.jsx)('div', {
            className: F.container,
            children: W
                ? (0, r.jsx)(M.t.Provider, {
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
                                      analyticsPage: B.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: P.ek.END,
                                      ctaText: H.intl.string(H.t['J+vlIS']),
                                      ctaOnClick: () => {
                                          ((0, S.Y)({
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
                              (0, r.jsxs)(E.Z, {
                                  title: X,
                                  description: Q,
                                  betaTag: W && Y,
                                  button: W
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
                                                    onClick: q,
                                                    children: H.intl.string(H.t['7kTAgI'])
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(_.u, {
                                            text: H.intl.string(H.t.hvVgAQ),
                                            onClick: q
                                        }),
                                  className: a()(F.bannerContainer, { [F.orbsContainer]: W }),
                                  children: [(0, r.jsx)('div', { className: a()(F.bannerGradient, { [F.orbsGradient]: W }) }), (0, r.jsx)(K, { onLoadComplete: j })]
                              }),
                              (0, r.jsx)(O.Z, { children: e === Z.e5.CLAIMED ? (0, r.jsx)(m, { onSelectTab: t }) : (0, r.jsx)(L.Z, {}) })
                          ]
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(I.ZP, {
                              variant: I._6.OVERLAY,
                              children: [(0, r.jsx)('div', { className: F.dragRegion }), (0, r.jsx)(I.z6, { scrollPosition: s }), (0, r.jsx)(I.aV, { icon: u.qDn })]
                          }),
                          (0, r.jsx)(M.t.Provider, {
                              value: J,
                              children: (0, r.jsxs)(C.Z, {
                                  onScroll: l,
                                  ref: J,
                                  children: [
                                      (0, r.jsxs)(E.Z, {
                                          title: X,
                                          description: Q,
                                          button: (0, r.jsx)(_.u, {
                                              text: H.intl.string(H.t.hvVgAQ),
                                              onClick: q
                                          }),
                                          className: a()(F.bannerContainer, { [F.orbsContainer]: W }),
                                          children: [(0, r.jsx)('div', { className: a()(F.bannerGradient, { [F.orbsGradient]: W }) }), (0, r.jsx)(K, { onLoadComplete: j })]
                                      }),
                                      (0, r.jsxs)(O.Z, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: F.tabs,
                                                  children: (0, r.jsx)(y.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t
                                                  })
                                              }),
                                              e === Z.e5.CLAIMED ? (0, r.jsx)(m, { onSelectTab: t }) : (0, r.jsx)(L.Z, {})
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
