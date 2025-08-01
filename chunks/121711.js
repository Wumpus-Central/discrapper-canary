n.d(t, { Z: () => Q });
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
    P = n(451478),
    j = n(526167),
    A = n(63063),
    x = n(113434),
    Z = n(833435),
    w = n(150560),
    L = n(672188),
    R = n(558652),
    D = n(736683),
    k = n(879438),
    M = n(251360),
    U = n(466962),
    G = n(452081),
    V = n(46140),
    H = n(981631),
    B = n(215023),
    F = n(388032),
    z = n(87671),
    W = n(13299),
    Y = n(606199),
    K = n(164792);
function q(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, N.WX)({ location: V.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        o = (0, s.e7)([P.Z], () => P.Z.isFocused()),
        { ref: c, inViewport: u } = (0, L.a)(),
        p = i.useRef(null);
    if (
        (i.useEffect(() => {
            (null == p ? void 0 : p.current) != null && (p.current.paused || (o && u && !l) ? p.current.paused && !l && u && o && p.current.play() : p.current.pause());
        }, [l, u, o]),
        n)
    ) {
        let e = (0, j.rO)();
        return (0, r.jsx)(m.Z, {
            ref: (e) => {
                ((p.current = e), (c.current = e));
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(z.bannerAsset, z.orbsBannerAsset),
            onProgress: t,
            'data-mtctest-ignore': 'true',
            controls: !1,
            children: (0, r.jsx)('source', {
                src: e ? Y.Z : K.Z,
                type: e ? 'video/mp4' : 'video/webm'
            })
        });
    }
    return (0, r.jsx)('img', {
        src: W.ZP,
        className: a()(z.bannerAsset, z.oversizedImg),
        alt: '',
        onLoad: t
    });
}
let Q = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, G.z)(),
        { onScroll: l, scrollPosition: s } = (0, b.M)(),
        d = w.Z.getState().getUtmCurrentContext(),
        m = (0, Z._)({ location: V.dr.QUEST_HOME_DESKTOP }) ? D.Z : D.j,
        P = (0, k.z)((e) => e.registerAssetLoad),
        j = i.useRef(d);
    (i.useEffect(() => {
        j.current = d;
    }),
        i.useEffect(() => {
            let { current: t } = j;
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
    let { enabled: L } = (0, N.WX)({ location: V.dr.QUEST_HOME_DESKTOP }),
        { showBetaTag: W } = S.Z.useExperiment({ location: V.dr.QUEST_HOME_DESKTOP }),
        Y = i.useCallback(() => {
            if (L) return void window.open(H.EYA.PAID_TERMS_ORBS);
            window.open(A.Z.getArticleURL(H.BhN.QUESTS_LEARN_MORE));
        }, [L]);
    (0, g.Tt)({ location: F.intl.string(F.t.JALI2N) });
    let K = L ? F.intl.format(F.t.BCBIlp, {}) : F.intl.format(F.t.lmMBf3, {}),
        Q = L ? F.intl.format(F.t.U9FY0N, {}) : F.intl.string(F.t.oWCrBg),
        X = i.useRef(null),
        J = i.useCallback(() => {
            ((0, C.Y)({
                pageType: H.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: H.jXE.ORBS_BALANCE_MENU,
                ctaObject: H.qAy.CTA_TO_ORBS_SHOP
            }),
                (0, f.mK)({
                    openInLayer: !1,
                    tab: B.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: p.Z.ORBS_BALANCE_MENU
                }));
        }, []);
    return (0, r.jsx)(M.k.Provider, {
        value: { onAssetLoadComplete: P },
        children: (0, r.jsx)('div', {
            className: z.container,
            children: L
                ? (0, r.jsx)(U.t.Provider, {
                      value: X,
                      children: (0, r.jsxs)(I.Z, {
                          onScroll: l,
                          ref: X,
                          children: [
                              (0, r.jsx)(v.a, {
                                  selectedTabId: e,
                                  handleTransition: t,
                                  tabs: n,
                                  icon: u.qDn,
                                  children: (0, r.jsx)(T.V9, {
                                      analyticsPage: H.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: T.ek.END,
                                      ctaText: F.intl.string(F.t['J+vlIS']),
                                      ctaOnClick: J
                                  })
                              }),
                              (0, r.jsxs)(_.Z, {
                                  title: K,
                                  description: Q,
                                  betaTag: L && W,
                                  button: L
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(u.zxk, {
                                                    variant: 'overlay-primary',
                                                    text: F.intl.string(F.t['1Wm129']),
                                                    onClick: () =>
                                                        (0, f.mK)({
                                                            openInLayer: !1,
                                                            tab: B.AW.ORBS,
                                                            analyticsLocations: [],
                                                            analyticsSource: p.Z.INTRO_TO_ORBS_QUEST_BANNER
                                                        })
                                                }),
                                                (0, r.jsx)(c.zx, {
                                                    look: c.iL.LINK,
                                                    color: c.Tt.CUSTOM,
                                                    className: z.orbsTermsButton,
                                                    onClick: Y,
                                                    children: F.intl.string(F.t['7kTAgI'])
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(u.zxk, {
                                            variant: 'overlay-primary',
                                            text: F.intl.string(F.t.hvVgAQ),
                                            onClick: Y,
                                            icon: u.Gr1,
                                            iconPosition: 'end'
                                        }),
                                  className: a()(z.bannerContainer, { [z.orbsContainer]: L }),
                                  children: [(0, r.jsx)('div', { className: a()(z.bannerGradient, { [z.orbsGradient]: L }) }), (0, r.jsx)(q, { onLoadComplete: P })]
                              }),
                              (0, r.jsx)(O.Z, { children: e === x.e5.CLAIMED ? (0, r.jsx)(m, { onSelectTab: t }) : (0, r.jsx)(R.Z, {}) })
                          ]
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(y.ZP, {
                              variant: y._6.OVERLAY,
                              children: [(0, r.jsx)('div', { className: z.dragRegion }), (0, r.jsx)(y.z6, { scrollPosition: s }), (0, r.jsx)(y.aV, { icon: u.qDn })]
                          }),
                          (0, r.jsx)(U.t.Provider, {
                              value: X,
                              children: (0, r.jsxs)(I.Z, {
                                  onScroll: l,
                                  ref: X,
                                  children: [
                                      (0, r.jsxs)(_.Z, {
                                          title: K,
                                          description: Q,
                                          button: (0, r.jsx)(u.zxk, {
                                              variant: 'overlay-primary',
                                              text: F.intl.string(F.t.hvVgAQ),
                                              onClick: Y,
                                              icon: u.Gr1,
                                              iconPosition: 'end'
                                          }),
                                          className: a()(z.bannerContainer, { [z.orbsContainer]: L }),
                                          children: [(0, r.jsx)('div', { className: a()(z.bannerGradient, { [z.orbsGradient]: L }) }), (0, r.jsx)(q, { onLoadComplete: P })]
                                      }),
                                      (0, r.jsxs)(O.Z, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: z.tabs,
                                                  children: (0, r.jsx)(E.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t
                                                  })
                                              }),
                                              e === x.e5.CLAIMED ? (0, r.jsx)(m, { onSelectTab: t }) : (0, r.jsx)(R.Z, {})
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
