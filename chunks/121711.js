n.d(t, { Z: () => q });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(100527),
    p = n(213609),
    f = n(335131),
    h = n(252618),
    g = n(70097),
    m = n(979233),
    b = n(17845),
    _ = n(374939),
    O = n(233374),
    E = n(611928),
    y = n(763433),
    v = n(283293),
    I = n(507808),
    C = n(794231),
    S = n(822857),
    N = n(775451),
    T = n(451478),
    P = n(526167),
    j = n(63063),
    x = n(113434),
    A = n(833435),
    Z = n(150560),
    w = n(672188),
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
    F = n(728963),
    z = n(13299),
    W = n(606199),
    Y = n(164792);
function K(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, S.WX)({ location: G.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        o = (0, s.e7)([T.Z], () => T.Z.isFocused()),
        { ref: c, inViewport: d } = (0, w.a)(),
        p = i.useRef(null);
    if (
        (i.useEffect(() => {
            (null == p ? void 0 : p.current) != null &&
                (p.current.paused || (o && d && !l)
                    ? p.current.paused && !l && d && o && p.current.play()
                    : p.current.pause());
        }, [l, d, o]),
        n)
    ) {
        let e = (0, P.rO)();
        return (0, r.jsx)(g.Z, {
            ref: (e) => {
                (p.current = e), (c.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(F.bannerAsset, F.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? W.Z : Y.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: z.ZP,
        className: a()(F.bannerAsset, F.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
let q = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, U.z)(),
        { onScroll: l, scrollPosition: s } = (0, m.M)(),
        u = Z.Z.getState().getUtmCurrentContext(),
        g = (0, A._)({ location: G.dr.QUEST_HOME_DESKTOP }) ? R.Z : R.j,
        T = (0, D.z)((e) => e.registerAssetLoad),
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
                    tab: e,
                },
            });
        }, [e]);
    let { enabled: w } = (0, S.WX)({ location: G.dr.QUEST_HOME_DESKTOP }),
        { showBetaTag: z } = C.Z.useExperiment({ location: G.dr.QUEST_HOME_DESKTOP }),
        W = i.useCallback(() => {
            if (w) return void window.open(B.EYA.PAID_TERMS_ORBS);
            window.open(j.Z.getArticleURL(B.BhN.QUESTS_LEARN_MORE));
        }, [w]);
    (0, h.Tt)({ location: H.intl.string(H.t.JALI2N) });
    let Y = w ? H.intl.format(H.t.BCBIlp, {}) : H.intl.format(H.t.lmMBf3, {}),
        q = w ? H.intl.format(H.t.U9FY0N, {}) : H.intl.string(H.t.oWCrBg),
        Q = i.useRef(null),
        X = i.useCallback(() => {
            (0, I.Y)({
                pageType: B.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: B.jXE.ORBS_BALANCE_MENU,
                ctaObject: B.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, f.mK)({
                    openInLayer: !1,
                    tab: V.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: d.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    return (0, r.jsx)(k.k.Provider, {
        value: { onAssetLoadComplete: T },
        children: (0, r.jsx)("div", {
            className: F.container,
            children: w
                ? (0, r.jsx)(M.t.Provider, {
                      value: Q,
                      children: (0, r.jsxs)(v.Z, {
                          onScroll: l,
                          ref: Q,
                          children: [
                              (0, r.jsx)(y.a, {
                                  selectedTabId: e,
                                  handleTransition: t,
                                  tabs: n,
                                  icon: c.qDn,
                                  children: (0, r.jsx)(N.V9, {
                                      analyticsPage: B.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: N.ek.END,
                                      ctaText: H.intl.string(H.t["J+vlIS"]),
                                      ctaOnClick: X,
                                  }),
                              }),
                              (0, r.jsxs)(b.Z, {
                                  title: Y,
                                  description: q,
                                  betaTag: w && z,
                                  button: w
                                      ? (0, r.jsxs)(c.hE2, {
                                            children: [
                                                (0, r.jsx)(c.zxk, {
                                                    variant: "overlay-primary",
                                                    text: H.intl.string(H.t["1Wm129"]),
                                                    onClick: () =>
                                                        (0, f.mK)({
                                                            openInLayer: !1,
                                                            tab: V.AW.ORBS,
                                                            analyticsLocations: [],
                                                            analyticsSource: d.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                        }),
                                                }),
                                                (0, r.jsx)(c.zxk, {
                                                    variant: "overlay-secondary",
                                                    text: H.intl.string(H.t["7kTAgI"]),
                                                    onClick: W,
                                                }),
                                            ],
                                        })
                                      : (0, r.jsx)(c.zxk, {
                                            variant: "overlay-primary",
                                            text: H.intl.string(H.t.hvVgAQ),
                                            onClick: W,
                                            icon: c.Gr1,
                                            iconPosition: "end",
                                        }),
                                  className: a()(F.bannerContainer, { [F.orbsContainer]: w }),
                                  children: [
                                      (0, r.jsx)("div", { className: a()(F.bannerGradient, { [F.orbsGradient]: w }) }),
                                      (0, r.jsx)(K, { onLoadComplete: T }),
                                  ],
                              }),
                              (0, r.jsx)(_.Z, {
                                  children:
                                      e === x.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(L.Z, {}),
                              }),
                          ],
                      }),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(E.ZP, {
                              variant: E._6.OVERLAY,
                              children: [
                                  (0, r.jsx)("div", { className: F.dragRegion }),
                                  (0, r.jsx)(E.z6, { scrollPosition: s }),
                                  (0, r.jsx)(E.aV, { icon: c.qDn }),
                              ],
                          }),
                          (0, r.jsx)(M.t.Provider, {
                              value: Q,
                              children: (0, r.jsxs)(v.Z, {
                                  onScroll: l,
                                  ref: Q,
                                  children: [
                                      (0, r.jsxs)(b.Z, {
                                          title: Y,
                                          description: q,
                                          button: (0, r.jsx)(c.zxk, {
                                              variant: "overlay-primary",
                                              text: H.intl.string(H.t.hvVgAQ),
                                              onClick: W,
                                              icon: c.Gr1,
                                              iconPosition: "end",
                                          }),
                                          className: a()(F.bannerContainer, { [F.orbsContainer]: w }),
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: a()(F.bannerGradient, { [F.orbsGradient]: w }),
                                              }),
                                              (0, r.jsx)(K, { onLoadComplete: T }),
                                          ],
                                      }),
                                      (0, r.jsxs)(_.Z, {
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: F.tabs,
                                                  children: (0, r.jsx)(O.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t,
                                                  }),
                                              }),
                                              e === x.e5.CLAIMED
                                                  ? (0, r.jsx)(g, { onSelectTab: t })
                                                  : (0, r.jsx)(L.Z, {}),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
        }),
    });
};
