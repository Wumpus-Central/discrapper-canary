n.d(t, { Z: () => K });
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
    C = n(822857),
    S = n(775451),
    N = n(451478),
    T = n(526167),
    P = n(63063),
    j = n(113434),
    x = n(833435),
    A = n(150560),
    Z = n(672188),
    w = n(558652),
    L = n(736683),
    R = n(879438),
    D = n(251360),
    k = n(466962),
    M = n(452081),
    U = n(46140),
    G = n(981631),
    B = n(215023),
    V = n(388032),
    H = n(728963),
    F = n(13299),
    z = n(606199),
    W = n(164792);
function Y(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, C.WX)({ location: U.dr.QUEST_HOME_DESKTOP }),
        l = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        o = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        { ref: c, inViewport: d } = (0, Z.a)(),
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
        let e = (0, T.rO)();
        return (0, r.jsx)(g.Z, {
            ref: (e) => {
                (p.current = e), (c.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(H.bannerAsset, H.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? z.Z : W.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: F.ZP,
        className: a()(H.bannerAsset, H.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
let K = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, M.z)(),
        { onScroll: l, scrollPosition: s } = (0, m.M)(),
        u = A.Z.getState().getUtmCurrentContext(),
        g = (0, x._)({ location: U.dr.QUEST_HOME_DESKTOP }) ? L.Z : L.j,
        N = (0, R.z)((e) => e.registerAssetLoad),
        T = i.useRef(u);
    i.useEffect(() => {
        T.current = u;
    }),
        i.useEffect(() => {
            let { current: t } = T;
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
    let { enabled: Z } = (0, C.WX)({ location: U.dr.QUEST_HOME_DESKTOP }),
        F = i.useCallback(() => {
            if (Z) return void window.open(G.EYA.PAID_TERMS_ORBS);
            window.open(P.Z.getArticleURL(G.BhN.QUESTS_LEARN_MORE));
        }, [Z]);
    (0, h.Tt)({ location: V.intl.string(V.t.JALI2N) });
    let z = Z ? V.intl.format(V.t.BCBIlp, {}) : V.intl.format(V.t.lmMBf3, {}),
        W = Z ? V.intl.format(V.t.U9FY0N, {}) : V.intl.string(V.t.oWCrBg),
        K = i.useRef(null),
        q = i.useCallback(() => {
            (0, I.Y)({
                pageType: G.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: G.jXE.ORBS_BALANCE_MENU,
                ctaObject: G.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, f.mK)({
                    openInLayer: !1,
                    tab: B.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: d.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    return (0, r.jsx)(D.k.Provider, {
        value: { onAssetLoadComplete: N },
        children: (0, r.jsx)("div", {
            className: H.container,
            children: Z
                ? (0, r.jsx)(k.t.Provider, {
                      value: K,
                      children: (0, r.jsxs)(v.Z, {
                          onScroll: l,
                          ref: K,
                          children: [
                              (0, r.jsx)(y.a, {
                                  selectedTabId: e,
                                  handleTransition: t,
                                  tabs: n,
                                  icon: c.qDn,
                                  children: (0, r.jsx)(S.V9, {
                                      analyticsPage: G.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: S.ek.END,
                                      ctaText: V.intl.string(V.t["J+vlIS"]),
                                      ctaOnClick: q,
                                  }),
                              }),
                              (0, r.jsxs)(b.Z, {
                                  title: z,
                                  description: W,
                                  button: Z
                                      ? (0, r.jsxs)(c.hE2, {
                                            children: [
                                                (0, r.jsx)(c.zxk, {
                                                    variant: "overlay-primary",
                                                    text: V.intl.string(V.t["1Wm129"]),
                                                    onClick: () =>
                                                        (0, f.mK)({
                                                            openInLayer: !1,
                                                            tab: B.AW.ORBS,
                                                            analyticsLocations: [],
                                                            analyticsSource: d.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                        }),
                                                }),
                                                (0, r.jsx)(c.zxk, {
                                                    variant: "overlay-secondary",
                                                    text: V.intl.string(V.t["7kTAgI"]),
                                                    onClick: F,
                                                }),
                                            ],
                                        })
                                      : (0, r.jsx)(c.zxk, {
                                            variant: "overlay-primary",
                                            text: V.intl.string(V.t.hvVgAQ),
                                            onClick: F,
                                            icon: c.Gr1,
                                            iconPosition: "end",
                                        }),
                                  className: a()(H.bannerContainer, { [H.orbsContainer]: Z }),
                                  children: [
                                      (0, r.jsx)("div", { className: a()(H.bannerGradient, { [H.orbsGradient]: Z }) }),
                                      (0, r.jsx)(Y, { onLoadComplete: N }),
                                  ],
                              }),
                              (0, r.jsx)(_.Z, {
                                  children:
                                      e === j.e5.CLAIMED ? (0, r.jsx)(g, { onSelectTab: t }) : (0, r.jsx)(w.Z, {}),
                              }),
                          ],
                      }),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(E.ZP, {
                              variant: E._6.OVERLAY,
                              children: [
                                  (0, r.jsx)("div", { className: H.dragRegion }),
                                  (0, r.jsx)(E.z6, { scrollPosition: s }),
                                  (0, r.jsx)(E.aV, { icon: c.qDn }),
                              ],
                          }),
                          (0, r.jsx)(k.t.Provider, {
                              value: K,
                              children: (0, r.jsxs)(v.Z, {
                                  onScroll: l,
                                  ref: K,
                                  children: [
                                      (0, r.jsxs)(b.Z, {
                                          title: z,
                                          description: W,
                                          button: (0, r.jsx)(c.zxk, {
                                              variant: "overlay-primary",
                                              text: V.intl.string(V.t.hvVgAQ),
                                              onClick: F,
                                              icon: c.Gr1,
                                              iconPosition: "end",
                                          }),
                                          className: a()(H.bannerContainer, { [H.orbsContainer]: Z }),
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: a()(H.bannerGradient, { [H.orbsGradient]: Z }),
                                              }),
                                              (0, r.jsx)(Y, { onLoadComplete: N }),
                                          ],
                                      }),
                                      (0, r.jsxs)(_.Z, {
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: H.tabs,
                                                  children: (0, r.jsx)(O.Z, {
                                                      tabs: n,
                                                      selectedTab: e,
                                                      onTabSelect: t,
                                                  }),
                                              }),
                                              e === j.e5.CLAIMED
                                                  ? (0, r.jsx)(g, { onSelectTab: t })
                                                  : (0, r.jsx)(w.Z, {}),
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
