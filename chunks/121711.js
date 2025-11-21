n.d(t, { Z: () => eO }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(704826);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(828700),
    o = n(772848),
    c = n(990547),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    f = n(150063),
    h = n(607070),
    g = n(100527),
    m = n(213609),
    _ = n(625128),
    b = n(362762),
    E = n(335131),
    O = n(252618),
    y = n(70097),
    v = n(266454),
    I = n(632285),
    C = n(979233),
    S = n(17845),
    T = n(374939),
    N = n(233374),
    j = n(611928),
    P = n(763433),
    x = n(283293),
    A = n(507808),
    Z = n(825102),
    w = n(775451),
    L = n(451478),
    R = n(626135),
    D = n(526167),
    M = n(63063),
    k = n(624138),
    U = n(617136),
    G = n(113434),
    B = n(833435),
    H = n(497505),
    V = n(220068),
    F = n(937797),
    z = n(36243),
    Y = n(877109),
    W = n(110560),
    q = n(150560),
    K = n(672188),
    Q = n(558652),
    J = n(736683),
    X = n(879438),
    $ = n(251360),
    ee = n(466962),
    et = n(85517),
    en = n(452081),
    er = n(46140),
    ei = n(981631),
    el = n(215023),
    ea = n(186901),
    es = n(388032),
    eo = n(728963),
    ec = n(13299),
    eu = n(890631),
    ed = n(164792),
    ep = n(524777),
    ef = n(913713),
    eh = n(431115);
function eg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let em = i.createContext({});
function e_(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, Z.WX)({ location: er.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        s = (0, u.e7)([L.Z], () => L.Z.isFocused()),
        { ref: o, inViewport: c } = (0, K.a)(),
        d = i.useRef(null);
    if (
        (i.useEffect(() => {
            (null == d ? void 0 : d.current) != null &&
                (d.current.paused || (s && c && !l)
                    ? d.current.paused && !l && c && s && d.current.play()
                    : d.current.pause());
        }, [l, c, s]),
        n)
    ) {
        let e = (0, D.rO)();
        return (0, r.jsx)(y.Z, {
            ref: (e) => {
                (d.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(eo.bannerAsset, eo.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? eu.Z : ed.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: ec.ZP,
        className: a()(eo.bannerAsset, eo.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
function eb(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: ep.ZP,
                className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: eh.ZP,
                className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: ef.ZP,
                className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
                alt: "",
            }),
        ],
    });
}
function eE(e) {
    let { renderBanner: t, children: n, header: l, withQuestsGrid: s = !0 } = e,
        { isInDiscoverQuestHomeTab: o, onScroll: c, onSelectTab: u, scrollerRef: d, selectedTab: p } = i.useContext(em),
        f = (0, B._)({ location: er.dr.QUEST_HOME_DESKTOP }) ? J.Z : J.j,
        { takeover: h, isLoading: g } = (0, G.Ut)(),
        { enabled: m } = (0, Z.WX)({ location: er.dr.QUEST_HOME_DESKTOP }),
        { enabled: _ } = F.n0.useConfig({ location: er.dr.QUEST_HOME_DESKTOP }),
        b = i.useRef(null),
        E = i.useCallback(() => {
            var e;
            null == (e = b.current) || e.resetSortingFiltering();
        }, []);
    return (0, r.jsxs)(ee.t.Provider, {
        value: d,
        children: [
            l,
            (0, r.jsxs)(x.Z, {
                onScroll: c,
                ref: d,
                children: [
                    (function () {
                        if (!o && _) {
                            if (p !== G.e5.ALL) return null;
                            if (g) return (0, r.jsx)(et.o, {});
                            if (null != h)
                                return (0, r.jsx)(et.Z, {
                                    config: h,
                                    onQuestCtaClick: E,
                                });
                        }
                        return t();
                    })(),
                    (0, r.jsx)(T.Z, {
                        children: (0, r.jsxs)("div", {
                            className: a()(eo.content, { [eo.contentWithExtraPadding]: _ && !m && p !== G.e5.ALL }),
                            children: [
                                n,
                                s
                                    ? p === G.e5.CLAIMED
                                        ? (0, r.jsx)(f, { onSelectTab: u })
                                        : p === G.e5.PREVIEW_TOOL
                                          ? (0, r.jsx)(Y.Z, {})
                                          : (0, r.jsx)(Q.Z, { ref: b })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let eO = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, s.TH)(),
        l = (0, s.k6)(),
        h = i.useMemo(() => {
            var e;
            return (null == (e = (0, s.LX)(n.pathname, ei.Z5c.QUEST_HOME)) ? void 0 : e.isExact) === !0;
        }, [n.pathname]),
        y = (0, u.e7)([b.Z], () => b.Z.getState("quests")),
        { selectedTab: T, onSelectTab: x, tabs: L } = (0, en.z)({ withClaimedQuestsTab: !h });
    i.useLayoutEffect(() => {
        h && T === G.e5.CLAIMED && V.Z.setState({ tab: G.e5.ALL });
    }, [h, T]);
    let { onScroll: D, scrollPosition: B } = (0, C.M)(),
        F = q.Z.getState().getUtmCurrentContext(),
        Y = (0, X.z)((e) => e.registerAssetLoad),
        K = i.useRef(F);
    i.useEffect(() => {
        K.current = F;
    }),
        i.useEffect(() => {
            let { current: e } = K;
            (0, m.h)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: T,
                },
            });
        }, [T]);
    let { enabled: Q } = (0, Z.WX)({ location: er.dr.QUEST_HOME_DESKTOP }),
        J = i.useCallback(() => {
            if (Q) return void window.open(ei.EYA.PAID_TERMS_ORBS);
            window.open(M.Z.getArticleURL(ei.BhN.QUESTS_LEARN_MORE));
        }, [Q]);
    (0, O.Tt)({ location: es.intl.string(es.t.JALI2K) });
    let ee = Q ? es.intl.format(es.t.BCBIlp, {}) : es.intl.format(es.t.lmMBfy, {}),
        et = Q ? es.intl.format(es.t.U9FY0J, {}) : es.intl.string(es.t.oWCrBq),
        ec = i.useRef(null),
        eu = i.useCallback(() => {
            (0, A.Y)({
                pageType: ei.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ei.jXE.ORBS_BALANCE_MENU,
                ctaObject: ei.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, E.mK)({
                    tab: el.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: g.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        (0, f.Y)(ei.Z5c.QUEST_HOME_V2);
    }, []),
        i.useEffect(() => {
            I.C.trigger();
        }, []);
    let ed = (0, z.T)({ location: er.dr.QUEST_PREVIEW_TOOL_2 });
    i.useEffect(() => {
        if (null != y) return;
        let e = new URLSearchParams(n.search),
            r = e.get(G.tR.TAB);
        if (ed && r === G.e5.PREVIEW_TOOL) {
            let t = e.get(G.tR.QUEST_ID);
            _.Z.openNativeAppModal("quests", ei.Etm.DEEP_LINK, {
                type: ea.jE.QUEST_PREVIEW_TOOL,
                params: {
                    questId: t,
                    tab: r,
                },
            });
            return;
        }
        let i = performance.getEntriesByType("navigation")[0];
        if ("POP" === l.action && (null == i ? void 0 : i.type) === "navigate" && t && r !== G.e5.PREVIEW_TOOL) {
            let t = (0, k.Ew)(n.hash) ? null : n.hash.substring(1),
                r = e.get(G.tR.SORT),
                i = e.get(G.tR.FILTER);
            _.Z.openNativeAppModal("quests", ei.Etm.DEEP_LINK, {
                type: ea.jE.QUEST_HOME,
                params: {
                    questId: (0, k.Ew)(t) ? void 0 : t,
                    sort: r,
                    filter: i,
                },
            });
        }
    }, [n.search, y, ed, l.action, n.hash, t]),
        i.useEffect(() => {
            t && (0, v.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let ep = i.useCallback(() => {
            (0, W.navigateToQuestHome)({ fromContent: H.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                R.default.track(
                    ei.rMx.QUEST_CONTENT_CLICKED,
                    eg(
                        {
                            cta_name: U.jZ.VIEW_QUESTS,
                            click_id: (0, o.Z)(),
                            is_targeted: !1,
                        },
                        (0, U.mH)(H.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                    ),
                );
        }, []),
        ef = i.useCallback(
            (e) => {
                var t, n, r;
                l.replace(
                    ((n = eg({}, l.location)),
                    (r = r = { hash: void 0 }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n),
                ),
                    null == (t = ec.current) || t.scrollToTop({ animate: !1 }),
                    x(e);
            },
            [l, x],
        );
    return (0, r.jsx)($.k.Provider, {
        value: { onAssetLoadComplete: Y },
        children: (0, r.jsx)(em.Provider, {
            value: i.useMemo(
                () => ({
                    isInDiscoverQuestHomeTab: h,
                    onScroll: D,
                    onSelectTab: ef,
                    scrollerRef: ec,
                    selectedTab: T,
                }),
                [h, D, ef, ec, T],
            ),
            children: (0, r.jsx)("div", {
                className: a()(eo.container, { [eo.withoutTopBorder]: !t }),
                children: h
                    ? (0, r.jsx)(eE, {
                          renderBanner: () =>
                              (0, r.jsx)(S.Z, {
                                  title: es.intl.string(es.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, r.jsx)(p.Button, {
                                      variant: "overlay-primary",
                                      text: es.intl.string(es.t.GURBQl),
                                      onClick: ep,
                                  }),
                                  className: eo.redirectNoticeBannerContainer,
                                  children: (0, r.jsx)(eb, { onLoadComplete: Y }),
                              }),
                          header: (0, r.jsx)(P.a, {
                              selectedTabId: T,
                              handleTransition: ef,
                              tabs: L,
                              icon: p.qDn,
                          }),
                          withQuestsGrid: !1,
                          children: (0, r.jsxs)("div", {
                              className: eo.redirectNoticeContainer,
                              children: [
                                  (0, r.jsx)(p.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: es.intl.string(es.t.z8YP2A),
                                  }),
                                  (0, r.jsx)(p.Text, {
                                      color: "text-secondary",
                                      variant: "text-md/normal",
                                      children: es.intl.string(es.t.HdKh65),
                                  }),
                                  (0, r.jsx)(p.Avr, {
                                      text: es.intl.string(es.t["1CdL8d"]),
                                      onClick: ep,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : Q
                      ? (0, r.jsx)(eE, {
                            renderBanner: () =>
                                T !== G.e5.PREVIEW_TOOL &&
                                (0, r.jsxs)(S.Z, {
                                    title: ee,
                                    description: et,
                                    button: (0, r.jsxs)(p.ButtonGroup, {
                                        children: [
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-primary",
                                                text: es.intl.string(es.t["1Wm127"]),
                                                onClick: () =>
                                                    (0, E.mK)({
                                                        tab: el.AW.ORBS,
                                                        analyticsLocations: [],
                                                        analyticsSource: g.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                    }),
                                            }),
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-secondary",
                                                text: es.intl.string(es.t["7kTAgJ"]),
                                                onClick: J,
                                            }),
                                        ],
                                    }),
                                    className: a()(eo.bannerContainer, eo.orbsContainer),
                                    children: [
                                        (0, r.jsx)("div", { className: a()(eo.bannerGradient, eo.orbsGradient) }),
                                        (0, r.jsx)(e_, { onLoadComplete: Y }),
                                    ],
                                }),
                            header: (0, r.jsx)(P.a, {
                                selectedTabId: T,
                                handleTransition: ef,
                                tabs: L,
                                icon: p.qDn,
                                children: (0, r.jsx)(w.V9, {
                                    analyticsPage: ei.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                    cardAlignment: w.ek.END,
                                    ctaText: es.intl.string(es.t["J+vlIR"]),
                                    ctaOnClick: eu,
                                }),
                            }),
                        })
                      : (0, r.jsx)(eE, {
                            renderBanner: () =>
                                (0, r.jsxs)(S.Z, {
                                    title: ee,
                                    description: et,
                                    button: (0, r.jsx)(p.Button, {
                                        variant: "overlay-primary",
                                        text: es.intl.string(es.t.hvVgAZ),
                                        onClick: J,
                                        icon: p.Gr1,
                                        iconPosition: "end",
                                    }),
                                    className: eo.bannerContainer,
                                    children: [
                                        (0, r.jsx)("div", { className: eo.bannerGradient }),
                                        (0, r.jsx)(e_, { onLoadComplete: Y }),
                                    ],
                                }),
                            header: (0, r.jsxs)(j.ZP, {
                                variant: j._6.OVERLAY,
                                children: [
                                    (0, r.jsx)("div", { className: eo.dragRegion }),
                                    (0, r.jsx)(j.z6, { scrollPosition: B }),
                                    (0, r.jsx)(j.aV, { icon: p.qDn }),
                                ],
                            }),
                            children: (0, r.jsx)("div", {
                                className: eo.tabs,
                                children: (0, r.jsx)(N.Z, {
                                    tabs: L,
                                    selectedTab: T,
                                    onTabSelect: ef,
                                }),
                            }),
                        }),
            }),
        }),
    });
};
