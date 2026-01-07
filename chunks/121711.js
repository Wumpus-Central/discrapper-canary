n.d(t, { Z: () => eE }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(704826);
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
    m = n(100527),
    h = n(213609),
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
    G = n(49436),
    H = n(283833),
    B = n(937797),
    V = n(36243),
    F = n(968843),
    z = n(877109),
    Y = n(110560),
    W = n(150560),
    q = n(672188),
    K = n(558652),
    Q = n(736683),
    J = n(879438),
    X = n(251360),
    $ = n(466962),
    ee = n(85517),
    et = n(452081),
    en = n(324805),
    er = n(981631),
    ei = n(215023),
    el = n(186901),
    ea = n(388032),
    eo = n(359236),
    es = n(770354),
    ec = n(457218),
    eu = n(179306),
    ed = n(588),
    ep = n(445620),
    ef = n(120550);
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
function eh(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, Z.W)({ location: en.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([g.Z], () => g.Z.useReducedMotion),
        o = (0, u.e7)([L.Z], () => L.Z.isFocused()),
        { ref: s, inViewport: c } = (0, q.a)(),
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
            className: a()(eo.bannerAsset, eo.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? ec.Z : eu.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: es.ZP,
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
                src: ed.ZP,
                className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: ef.ZP,
                className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: ep.ZP,
                className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
                alt: "",
            }),
        ],
    });
}
function e_(e) {
    let { renderBanner: t, children: n, header: l, withQuestsGrid: o = !0 } = e,
        { isInDiscoverQuestHomeTab: s, onScroll: c, onSelectTab: u, scrollerRef: d, selectedTab: p } = i.useContext(em),
        { takeover: f, isLoading: g } = (0, F.Nm)(),
        { enabled: m } = (0, Z.W)({ location: en.dr.QUEST_HOME_DESKTOP }),
        { enabled: h } = B.n0.useConfig({ location: en.dr.QUEST_HOME_DESKTOP }),
        b = i.useRef(null),
        _ = i.useCallback(() => {
            var e;
            null == (e = b.current) || e.resetSortingFiltering();
        }, []);
    return (0, r.jsxs)($.t.Provider, {
        value: d,
        children: [
            l,
            (0, r.jsxs)(x.Z, {
                onScroll: c,
                ref: d,
                children: [
                    (function () {
                        if (!s && h) {
                            if (p !== F.e5.ALL) return null;
                            if (g) return (0, r.jsx)(ee.o, {});
                            if (null != f)
                                return (0, r.jsx)(ee.Z, {
                                    config: f,
                                    onQuestCtaClick: _,
                                });
                        }
                        return t();
                    })(),
                    (0, r.jsx)(T.Z, {
                        children: (0, r.jsxs)("div", {
                            className: a()(eo.content, { [eo.contentWithExtraPadding]: h && !m && p !== F.e5.ALL }),
                            children: [
                                n,
                                o
                                    ? p === F.e5.CLAIMED
                                        ? (0, r.jsx)(Q.Z, { onSelectTab: u })
                                        : p === F.e5.PREVIEW_TOOL
                                          ? (0, r.jsx)(z.Z, {})
                                          : (0, r.jsx)(K.Z, { ref: b })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let eE = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, o.TH)(),
        l = (0, o.k6)(),
        g = i.useMemo(() => {
            var e;
            return (null == (e = (0, o.LX)(n.pathname, er.Z5c.QUEST_HOME)) ? void 0 : e.isExact) === !0;
        }, [n.pathname]),
        v = (0, u.e7)([_.Z], () => _.Z.getState("quests")),
        { selectedTab: T, onSelectTab: x, tabs: L } = (0, et.z)({ withClaimedQuestsTab: !g });
    i.useLayoutEffect(() => {
        g && T === F.e5.CLAIMED && H.Z.setState({ tab: F.e5.ALL });
    }, [g, T]);
    let { onScroll: D, scrollPosition: B } = (0, C.M)(),
        z = W.Z.getState().getUtmCurrentContext(),
        q = (0, J.z)((e) => e.registerAssetLoad),
        K = i.useRef(z);
    i.useEffect(() => {
        K.current = z;
    }),
        i.useEffect(() => {
            let { current: e } = K;
            (0, h.h)({
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
    let { enabled: Q } = (0, Z.W)({ location: en.dr.QUEST_HOME_DESKTOP }),
        $ = i.useCallback(() => {
            if (Q) return void window.open(er.EYA.PAID_TERMS_ORBS);
            window.open(M.Z.getArticleURL(er.BhN.QUESTS_LEARN_MORE));
        }, [Q]);
    (0, O.Tt)({ location: ea.intl.string(ea.t.JALI2K) });
    let ee = Q ? ea.intl.format(ea.t.BCBIlp, {}) : ea.intl.format(ea.t.lmMBfy, {}),
        es = Q ? ea.intl.format(ea.t.U9FY0J, {}) : ea.intl.string(ea.t.oWCrBq),
        ec = i.useRef(null),
        eu = i.useCallback(() => {
            (0, A.Y)({
                pageType: er.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: er.jXE.ORBS_BALANCE_MENU,
                ctaObject: er.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, E.mK)({
                    tab: ei.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: m.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        (0, f.Y)(er.Z5c.QUEST_HOME_V2);
    }, []),
        i.useEffect(() => {
            I.C.trigger();
        }, []);
    let ed = (0, V.T)({ location: en.dr.QUEST_PREVIEW_TOOL_2 });
    i.useEffect(() => {
        if (null != v) return;
        let e = new URLSearchParams(n.search),
            r = e.get(F.tR.TAB);
        if (ed && r === F.e5.PREVIEW_TOOL) {
            let t = e.get(F.tR.QUEST_ID);
            b.Z.openNativeAppModal("quests", er.Etm.DEEP_LINK, {
                type: el.jE.QUEST_PREVIEW_TOOL,
                params: {
                    questId: t,
                    tab: r,
                },
            });
            return;
        }
        let i = performance.getEntriesByType("navigation")[0];
        if ("POP" === l.action && (null == i ? void 0 : i.type) === "navigate" && t && r !== F.e5.PREVIEW_TOOL) {
            let t = (0, k.Ew)(n.hash) ? null : n.hash.substring(1),
                i = e.get(F.tR.SORT),
                l = e.get(F.tR.FILTER);
            b.Z.openNativeAppModal("quests", er.Etm.DEEP_LINK, {
                type: el.jE.QUEST_HOME,
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
            (0, Y.navigateToQuestHome)({ fromContent: G.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                R.default.track(
                    er.rMx.QUEST_CONTENT_CLICKED,
                    eg(
                        {
                            cta_name: U.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
                            is_targeted: !1,
                        },
                        (0, U.mH)(G.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
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
    return (0, r.jsx)(X.k.Provider, {
        value: { onAssetLoadComplete: q },
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
                className: a()(eo.container, { [eo.withoutTopBorder]: !t }),
                children: g
                    ? (0, r.jsx)(e_, {
                          renderBanner: () =>
                              (0, r.jsx)(S.Z, {
                                  title: ea.intl.string(ea.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, r.jsx)(p.Button, {
                                      variant: "overlay-primary",
                                      text: ea.intl.string(ea.t.GURBQl),
                                      onClick: ep,
                                  }),
                                  className: eo.redirectNoticeBannerContainer,
                                  children: (0, r.jsx)(eb, { onLoadComplete: q }),
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
                                      children: ea.intl.string(ea.t.z8YP2A),
                                  }),
                                  (0, r.jsx)(p.Text, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: ea.intl.string(ea.t.HdKh65),
                                  }),
                                  (0, r.jsx)(p.Avr, {
                                      text: ea.intl.string(ea.t["1CdL8d"]),
                                      onClick: ep,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : Q
                      ? (0, r.jsx)(e_, {
                            renderBanner: () =>
                                T !== F.e5.PREVIEW_TOOL &&
                                (0, r.jsxs)(S.Z, {
                                    title: ee,
                                    description: es,
                                    button: (0, r.jsxs)(p.ButtonGroup, {
                                        children: [
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-primary",
                                                text: ea.intl.string(ea.t["1Wm127"]),
                                                onClick: () =>
                                                    (0, E.mK)({
                                                        tab: ei.AW.ORBS,
                                                        analyticsLocations: [],
                                                        analyticsSource: m.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                    }),
                                            }),
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-secondary",
                                                text: ea.intl.string(ea.t["7kTAgJ"]),
                                                onClick: $,
                                            }),
                                        ],
                                    }),
                                    className: a()(eo.bannerContainer, eo.orbsContainer),
                                    children: [
                                        (0, r.jsx)("div", { className: a()(eo.bannerGradient, eo.orbsGradient) }),
                                        (0, r.jsx)(eh, { onLoadComplete: q }),
                                    ],
                                }),
                            header: (0, r.jsx)(P.a, {
                                selectedTabId: T,
                                handleTransition: ef,
                                tabs: L,
                                icon: p.qDn,
                                children: (0, r.jsx)(w.V9, {
                                    analyticsPage: er.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                    cardAlignment: w.ek.END,
                                    ctaText: ea.intl.string(ea.t["J+vlIR"]),
                                    ctaOnClick: eu,
                                }),
                            }),
                        })
                      : (0, r.jsx)(e_, {
                            renderBanner: () =>
                                (0, r.jsxs)(S.Z, {
                                    title: ee,
                                    description: es,
                                    button: (0, r.jsx)(p.Button, {
                                        variant: "overlay-primary",
                                        text: ea.intl.string(ea.t.hvVgAZ),
                                        onClick: $,
                                        icon: p.Gr1,
                                        iconPosition: "end",
                                    }),
                                    className: eo.bannerContainer,
                                    children: [
                                        (0, r.jsx)("div", { className: eo.bannerGradient }),
                                        (0, r.jsx)(eh, { onLoadComplete: q }),
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
