n.d(t, { Z: () => eO }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(704826);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(828700),
    s = n(772848),
    c = n(990547),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    f = n(150063),
    g = n(607070),
    h = n(100527),
    m = n(213609),
    b = n(625128),
    _ = n(362762),
    E = n(335131),
    O = n(252618),
    v = n(70097),
    y = n(266454),
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
    G = n(892046),
    H = n(49436),
    B = n(283833),
    V = n(937797),
    F = n(36243),
    z = n(968843),
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
    er = n(324805),
    ei = n(981631),
    el = n(215023),
    ea = n(186901),
    eo = n(388032),
    es = n(359236),
    ec = n(770354),
    eu = n(457218),
    ed = n(179306),
    ep = n(588),
    ef = n(445620),
    eg = n(120550);
function eh(e) {
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
function eb(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, Z.W)({ location: er.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([g.Z], () => g.Z.useReducedMotion),
        o = (0, u.e7)([L.Z], () => L.Z.isFocused()),
        { ref: s, inViewport: c } = (0, K.a)(),
        d = i.useRef(null);
    if (
        (i.useEffect(() => {
            (null == d ? void 0 : d.current) != null &&
                (d.current.paused || (o && c && !l)
                    ? d.current.paused && !l && c && o && d.current.play()
                    : d.current.pause());
        }, [l, c, o]),
        n)
    ) {
        let e = (0, D.rO)();
        return (0, r.jsx)(v.Z, {
            ref: (e) => {
                (d.current = e), (s.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(es.bannerAsset, es.orbsBannerAsset),
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
        className: a()(es.bannerAsset, es.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
function e_(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: ep.ZP,
                className: a()(es.bannerAsset, es.redirectNoticeBannerAsset),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: eg.ZP,
                className: a()(es.bannerAsset, es.redirectNoticeBannerAsset),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: ef.ZP,
                className: a()(es.bannerAsset, es.redirectNoticeBannerAsset),
                alt: "",
            }),
        ],
    });
}
function eE(e) {
    let { renderBanner: t, children: n, header: l, withQuestsGrid: o = !0 } = e,
        { isInDiscoverQuestHomeTab: s, onScroll: c, onSelectTab: u, scrollerRef: d, selectedTab: p } = i.useContext(em),
        f = (0, G._)({ location: er.dr.QUEST_HOME_DESKTOP }) ? J.Z : J.j,
        { takeover: g, isLoading: h } = (0, z.Nm)(),
        { enabled: m } = (0, Z.W)({ location: er.dr.QUEST_HOME_DESKTOP }),
        { enabled: b } = V.n0.useConfig({ location: er.dr.QUEST_HOME_DESKTOP }),
        _ = i.useRef(null),
        E = i.useCallback(() => {
            var e;
            null == (e = _.current) || e.resetSortingFiltering();
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
                        if (!s && b) {
                            if (p !== z.e5.ALL) return null;
                            if (h) return (0, r.jsx)(et.o, {});
                            if (null != g)
                                return (0, r.jsx)(et.Z, {
                                    config: g,
                                    onQuestCtaClick: E,
                                });
                        }
                        return t();
                    })(),
                    (0, r.jsx)(T.Z, {
                        children: (0, r.jsxs)("div", {
                            className: a()(es.content, { [es.contentWithExtraPadding]: b && !m && p !== z.e5.ALL }),
                            children: [
                                n,
                                o
                                    ? p === z.e5.CLAIMED
                                        ? (0, r.jsx)(f, { onSelectTab: u })
                                        : p === z.e5.PREVIEW_TOOL
                                          ? (0, r.jsx)(Y.Z, {})
                                          : (0, r.jsx)(Q.Z, { ref: _ })
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
        n = (0, o.TH)(),
        l = (0, o.k6)(),
        g = i.useMemo(() => {
            var e;
            return (null == (e = (0, o.LX)(n.pathname, ei.Z5c.QUEST_HOME)) ? void 0 : e.isExact) === !0;
        }, [n.pathname]),
        v = (0, u.e7)([_.Z], () => _.Z.getState("quests")),
        { selectedTab: T, onSelectTab: x, tabs: L } = (0, en.z)({ withClaimedQuestsTab: !g });
    i.useLayoutEffect(() => {
        g && T === z.e5.CLAIMED && B.Z.setState({ tab: z.e5.ALL });
    }, [g, T]);
    let { onScroll: D, scrollPosition: G } = (0, C.M)(),
        V = q.Z.getState().getUtmCurrentContext(),
        Y = (0, X.z)((e) => e.registerAssetLoad),
        K = i.useRef(V);
    i.useEffect(() => {
        K.current = V;
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
    let { enabled: Q } = (0, Z.W)({ location: er.dr.QUEST_HOME_DESKTOP }),
        J = i.useCallback(() => {
            if (Q) return void window.open(ei.EYA.PAID_TERMS_ORBS);
            window.open(M.Z.getArticleURL(ei.BhN.QUESTS_LEARN_MORE));
        }, [Q]);
    (0, O.Tt)({ location: eo.intl.string(eo.t.JALI2K) });
    let ee = Q ? eo.intl.format(eo.t.BCBIlp, {}) : eo.intl.format(eo.t.lmMBfy, {}),
        et = Q ? eo.intl.format(eo.t.U9FY0J, {}) : eo.intl.string(eo.t.oWCrBq),
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
                    analyticsSource: h.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        (0, f.Y)(ei.Z5c.QUEST_HOME_V2);
    }, []),
        i.useEffect(() => {
            I.C.trigger();
        }, []);
    let ed = (0, F.T)({ location: er.dr.QUEST_PREVIEW_TOOL_2 });
    i.useEffect(() => {
        if (null != v) return;
        let e = new URLSearchParams(n.search),
            r = e.get(z.tR.TAB);
        if (ed && r === z.e5.PREVIEW_TOOL) {
            let t = e.get(z.tR.QUEST_ID);
            b.Z.openNativeAppModal("quests", ei.Etm.DEEP_LINK, {
                type: ea.jE.QUEST_PREVIEW_TOOL,
                params: {
                    questId: t,
                    tab: r,
                },
            });
            return;
        }
        let i = performance.getEntriesByType("navigation")[0];
        if ("POP" === l.action && (null == i ? void 0 : i.type) === "navigate" && t && r !== z.e5.PREVIEW_TOOL) {
            let t = (0, k.Ew)(n.hash) ? null : n.hash.substring(1),
                i = e.get(z.tR.SORT),
                l = e.get(z.tR.FILTER);
            b.Z.openNativeAppModal("quests", ei.Etm.DEEP_LINK, {
                type: ea.jE.QUEST_HOME,
                params: {
                    questId: (0, k.Ew)(t) ? void 0 : t,
                    sort: i,
                    filter: l,
                    tab: r,
                },
            });
        }
    }, [n.search, v, ed, l.action, n.hash, t]),
        i.useEffect(() => {
            t && (0, y.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let ep = i.useCallback(() => {
            (0, W.navigateToQuestHome)({ fromContent: H.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                R.default.track(
                    ei.rMx.QUEST_CONTENT_CLICKED,
                    eh(
                        {
                            cta_name: U.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
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
                    ((n = eh({}, l.location)),
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
                    isInDiscoverQuestHomeTab: g,
                    onScroll: D,
                    onSelectTab: ef,
                    scrollerRef: ec,
                    selectedTab: T,
                }),
                [g, D, ef, ec, T],
            ),
            children: (0, r.jsx)("div", {
                className: a()(es.container, { [es.withoutTopBorder]: !t }),
                children: g
                    ? (0, r.jsx)(eE, {
                          renderBanner: () =>
                              (0, r.jsx)(S.Z, {
                                  title: eo.intl.string(eo.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, r.jsx)(p.Button, {
                                      variant: "overlay-primary",
                                      text: eo.intl.string(eo.t.GURBQl),
                                      onClick: ep,
                                  }),
                                  className: es.redirectNoticeBannerContainer,
                                  children: (0, r.jsx)(e_, { onLoadComplete: Y }),
                              }),
                          header: (0, r.jsx)(P.a, {
                              selectedTabId: T,
                              handleTransition: ef,
                              tabs: L,
                              icon: p.qDn,
                          }),
                          withQuestsGrid: !1,
                          children: (0, r.jsxs)("div", {
                              className: es.redirectNoticeContainer,
                              children: [
                                  (0, r.jsx)(p.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: eo.intl.string(eo.t.z8YP2A),
                                  }),
                                  (0, r.jsx)(p.Text, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: eo.intl.string(eo.t.HdKh65),
                                  }),
                                  (0, r.jsx)(p.Avr, {
                                      text: eo.intl.string(eo.t["1CdL8d"]),
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
                                T !== z.e5.PREVIEW_TOOL &&
                                (0, r.jsxs)(S.Z, {
                                    title: ee,
                                    description: et,
                                    button: (0, r.jsxs)(p.ButtonGroup, {
                                        children: [
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-primary",
                                                text: eo.intl.string(eo.t["1Wm127"]),
                                                onClick: () =>
                                                    (0, E.mK)({
                                                        tab: el.AW.ORBS,
                                                        analyticsLocations: [],
                                                        analyticsSource: h.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                    }),
                                            }),
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-secondary",
                                                text: eo.intl.string(eo.t["7kTAgJ"]),
                                                onClick: J,
                                            }),
                                        ],
                                    }),
                                    className: a()(es.bannerContainer, es.orbsContainer),
                                    children: [
                                        (0, r.jsx)("div", { className: a()(es.bannerGradient, es.orbsGradient) }),
                                        (0, r.jsx)(eb, { onLoadComplete: Y }),
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
                                    ctaText: eo.intl.string(eo.t["J+vlIR"]),
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
                                        text: eo.intl.string(eo.t.hvVgAZ),
                                        onClick: J,
                                        icon: p.Gr1,
                                        iconPosition: "end",
                                    }),
                                    className: es.bannerContainer,
                                    children: [
                                        (0, r.jsx)("div", { className: es.bannerGradient }),
                                        (0, r.jsx)(eb, { onLoadComplete: Y }),
                                    ],
                                }),
                            header: (0, r.jsxs)(j.ZP, {
                                variant: j._6.OVERLAY,
                                children: [
                                    (0, r.jsx)("div", { className: es.dragRegion }),
                                    (0, r.jsx)(j.z6, { scrollPosition: G }),
                                    (0, r.jsx)(j.aV, { icon: p.qDn }),
                                ],
                            }),
                            children: (0, r.jsx)("div", {
                                className: es.tabs,
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
