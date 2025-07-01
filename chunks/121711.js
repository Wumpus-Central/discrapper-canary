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
    T = n(526167),
    P = n(63063),
    j = n(113434),
    A = n(833435),
    Z = n(150560),
    x = n(558652),
    L = n(736683),
    w = n(879438),
    R = n(251360),
    D = n(466962),
    k = n(452081),
    M = n(46140),
    U = n(981631),
    G = n(215023),
    B = n(388032),
    V = n(87671),
    H = n(13299),
    F = n(428383),
    z = n(843385);
function W(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, S.WX)({ location: M.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        o = i.useRef(null);
    if (
        (i.useEffect(() => {
            var e, t, n, r;
            null != o && (!l || (null == (e = o.current) ? void 0 : e.paused) ? !l && (null == (t = o.current) ? void 0 : t.paused) && (null == (r = o.current) || r.play()) : null == (n = o.current) || n.pause());
        }, [l]),
        n)
    ) {
        let e = (0, T.rO)();
        return (0, r.jsx)(g.Z, {
            ref: o,
            autoPlay: !l,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(V.bannerAsset, V.orbsBannerAsset),
            onProgress: t,
            'data-mtctest-ignore': 'true',
            controls: !1,
            children: (0, r.jsx)('source', {
                src: e ? F.Z : z.Z,
                type: e ? 'video/mp4' : 'video/webm'
            })
        });
    }
    return (0, r.jsx)('img', {
        src: H.ZP,
        className: a()(V.bannerAsset, V.oversizedImg),
        alt: '',
        onLoad: t
    });
}
let Y = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, k.z)(),
        { onScroll: l, scrollPosition: s } = (0, m.M)(),
        u = Z.Z.getState().getUtmCurrentContext(),
        g = (0, A._)({ location: M.dr.QUEST_HOME_DESKTOP }) ? L.Z : L.j,
        T = (0, w.z)((e) => e.registerAssetLoad),
        H = i.useRef(u);
    (i.useEffect(() => {
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
        }, [e]));
    let { enabled: F } = (0, S.WX)({ location: M.dr.QUEST_HOME_DESKTOP }),
        z = i.useCallback(() => {
            if (F) return void window.open(U.EYA.PAID_TERMS_ORBS);
            window.open(P.Z.getArticleURL(U.BhN.QUESTS_LEARN_MORE));
        }, [F]);
    (0, f.Tt)({ location: B.intl.string(B.t.JALI2N) });
    let Y = F ? B.intl.format(B.t.BCBIlp, {}) : B.intl.format(B.t.lmMBf3, {}),
        K = F ? B.intl.format(B.t.U9FY0N, {}) : B.intl.string(B.t.oWCrBg),
        q = i.useRef(null);
    return (0, r.jsx)(R.k.Provider, {
        value: { onAssetLoadComplete: T },
        children: (0, r.jsx)('div', {
            className: V.container,
            children: F
                ? (0, r.jsx)(D.t.Provider, {
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
                                      analyticsPage: U.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: N.ek.END,
                                      ctaText: B.intl.string(B.t['J+vlIS']),
                                      ctaOnClick: () => {
                                          ((0, C.Y)({
                                              pageType: U.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                              sectionType: U.jXE.ORBS_BALANCE_MENU,
                                              ctaObject: U.qAy.CTA_TO_ORBS_SHOP
                                          }),
                                              (0, h.mK)({
                                                  openInLayer: !1,
                                                  tab: G.AW.ORBS,
                                                  analyticsLocations: [],
                                                  analyticsSource: d.Z.ORBS_BALANCE_MENU
                                              }));
                                      }
                                  })
                              }),
                              (0, r.jsxs)(_.Z, {
                                  title: Y,
                                  description: K,
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
                                                    children: B.intl.string(B.t['1Wm129'])
                                                }),
                                                (0, r.jsx)(c.zxk, {
                                                    look: c.iLD.LINK,
                                                    color: c.Ttl.CUSTOM,
                                                    className: V.orbsTermsButton,
                                                    onClick: z,
                                                    children: B.intl.string(B.t['7kTAgI'])
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(b.u, {
                                            text: B.intl.string(B.t.hvVgAQ),
                                            onClick: z
                                        }),
                                  className: a()(V.bannerContainer, { [V.orbsContainer]: F }),
                                  children: [(0, r.jsx)('div', { className: a()(V.bannerGradient, { [V.orbsGradient]: F }) }), (0, r.jsx)(W, { onLoadComplete: T })]
                              }),
                              (0, r.jsx)(E.Z, { children: e === j.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(x.Z, {}) })
                          ]
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(y.ZP, {
                              variant: y._6.OVERLAY,
                              children: [(0, r.jsx)('div', { className: V.dragRegion }), (0, r.jsx)(y.z6, { scrollPosition: s }), (0, r.jsx)(y.aV, { icon: c.qDn })]
                          }),
                          (0, r.jsx)(D.t.Provider, {
                              value: q,
                              children: (0, r.jsxs)(v.Z, {
                                  onScroll: l,
                                  ref: q,
                                  children: [
                                      (0, r.jsxs)(_.Z, {
                                          title: Y,
                                          description: K,
                                          button: (0, r.jsx)(b.u, {
                                              text: B.intl.string(B.t.hvVgAQ),
                                              onClick: z
                                          }),
                                          className: a()(V.bannerContainer, { [V.orbsContainer]: F }),
                                          children: [(0, r.jsx)('div', { className: a()(V.bannerGradient, { [V.orbsGradient]: F }) }), (0, r.jsx)(W, { onLoadComplete: T })]
                                      }),
                                      (0, r.jsxs)(E.Z, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: V.tabs,
                                                  children: (0, r.jsx)(O.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t
                                                  })
                                              }),
                                              e === j.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(x.Z, {})
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
