n.d(t, { A: () => e_ }), n(896048), n(680155), n(323874), n(14289), n(35956), n(747238), n(812715);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(960488),
    o = n(835245),
    c = n(110259),
    u = n(311907),
    d = n(554146),
    p = n(397927),
    f = n(944791),
    h = n(775602),
    A = n(793574),
    g = n(139286),
    m = n(197111),
    b = n(10088),
    _ = n(979286),
    E = n(726249),
    O = n(607470),
    y = n(826673),
    I = n(239365),
    v = n(178629),
    S = n(701508),
    C = n(979590),
    N = n(45758),
    T = n(737823),
    j = n(153527),
    x = n(783531),
    P = n(318346),
    w = n(151252),
    L = n(142270),
    R = n(531685),
    D = n(954571),
    M = n(676279),
    k = n(975571),
    U = n(240248),
    G = n(216456),
    V = n(341915),
    B = n(631001),
    H = n(245853),
    F = n(807876),
    Y = n(890687),
    K = n(885459),
    z = n(545986),
    W = n(419818),
    q = n(203879),
    Q = n(409389),
    X = n(881172),
    Z = n(724339),
    J = n(516226),
    $ = n(321503),
    ee = n(65513),
    et = n(475529),
    en = n(654487),
    er = n(652215),
    ei = n(758836),
    el = n(613057),
    ea = n(985018),
    es = n(467303),
    eo = n(318808),
    ec = n(92872),
    eu = n(880440),
    ed = n(522303),
    ep = n(595411),
    ef = n(602557);
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
let eA = i.createContext({});
function eg(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, w.Z)({ location: en.rE.QUEST_HOME_DESKTOP }),
        l = (0, u.bG)([h.A], () => h.A.useReducedMotion),
        s = (0, u.bG)([R.A], () => R.A.isFocused()),
        { ref: o, inViewport: c } = (0, q.p)(),
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
        let e = (0, M.TM)();
        return (0, r.jsx)(O.A, {
            ref: (e) => {
                (d.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(es.BW, es.Lk),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? ec.A : eu.A,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: eo.Ay,
        className: a()(es.BW, es.J6),
        alt: "",
        onLoad: t,
    });
}
function em(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: ed.Ay,
                className: a()(es.BW, es.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: ef.Ay,
                className: a()(es.BW, es.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: ep.Ay,
                className: a()(es.BW, es.rZ),
                alt: "",
            }),
        ],
    });
}
function eb(e) {
    let { renderBanner: t, children: n, header: l, withQuestsGrid: s = !0 } = e,
        { isInDiscoverQuestHomeTab: o, onScroll: c, onSelectTab: u, scrollerRef: d, selectedTab: p } = i.useContext(eA),
        { takeover: f, isLoading: h } = (0, Y._b)(),
        { enabled: A } = (0, w.Z)({ location: en.rE.QUEST_HOME_DESKTOP }),
        { enabled: g } = H.XM.useConfig({ location: en.rE.QUEST_HOME_DESKTOP }),
        m = i.useRef(null),
        b = i.useCallback(() => {
            var e;
            null == (e = m.current) || e.resetSortingFiltering();
        }, []);
    return (0, r.jsxs)($.X.Provider, {
        value: d,
        children: [
            l,
            (0, r.jsxs)(x.A, {
                onScroll: c,
                ref: d,
                children: [
                    (function () {
                        if (!o && g) {
                            if (p !== Y.NC.ALL) return null;
                            if (h) return (0, r.jsx)(ee.s, {});
                            if (null != f)
                                return (0, r.jsx)(ee.A, {
                                    config: f,
                                    onQuestCtaClick: b,
                                });
                        }
                        return t();
                    })(),
                    (0, r.jsx)(C.A, {
                        children: (0, r.jsxs)("div", {
                            className: a()(es.Qs, { [es.HR]: g && !A && p !== Y.NC.ALL }),
                            children: [
                                n,
                                s
                                    ? p === Y.NC.CLAIMED
                                        ? (0, r.jsx)(X.A, { onSelectTab: u })
                                        : p === Y.NC.PREVIEW_TOOL
                                          ? (0, r.jsx)(K.A, {})
                                          : (0, r.jsx)(Q.A, { ref: m })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let e_ = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, s.zy)(),
        l = (0, s.W6)(),
        h = i.useMemo(() => {
            var e;
            return (null == (e = (0, s.B6)(n.pathname, er.BVt.QUEST_HOME)) ? void 0 : e.isExact) === !0;
        }, [n.pathname]),
        O = (0, u.bG)([b.A], () => b.A.getState("quests")),
        { selectedTab: C, onSelectTab: x, tabs: R } = (0, et.J)({ withClaimedQuestsTab: !h });
    i.useLayoutEffect(() => {
        h && C === Y.NC.CLAIMED && B.A.setState({ tab: Y.NC.ALL });
    }, [h, C]);
    let { onScroll: M, scrollPosition: H } = (0, v.G)(),
        K = W.A.getState().getUtmCurrentContext(),
        q = (0, Z.W)((e) => e.registerAssetLoad),
        Q = i.useRef(K);
    i.useEffect(() => {
        Q.current = K;
    }),
        i.useEffect(() => {
            let { current: e } = Q;
            (0, g.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: C,
                },
            });
        }, [C]);
    let { enabled: X } = (0, w.Z)({ location: en.rE.QUEST_HOME_DESKTOP }),
        $ = i.useCallback(() => {
            X ? window.open(er.X7G.PAID_TERMS_ORBS) : window.open(k.A.getArticleURL(er.MVz.QUESTS_LEARN_MORE));
        }, [X]);
    (0, E.HU)({ location: ea.intl.string(ea.t.JALI2K) });
    let ee = X ? ea.intl.format(ea.t.BCBIlp, {}) : ea.intl.format(ea.t.lmMBfy, {}),
        eo = X ? ea.intl.format(ea.t.U9FY0J, {}) : ea.intl.string(ea.t.oWCrBq),
        ec = i.useRef(null),
        eu = i.useCallback(() => {
            (0, P.Y)({
                pageType: er.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: er.JJy.ORBS_BALANCE_MENU,
                ctaObject: er.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, _.Cz)({
                    tab: ei.G2.ORBS,
                    analyticsLocations: [],
                    analyticsSource: A.A.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        (0, f.I)(er.BVt.QUEST_HOME_V2);
    }, []),
        i.useEffect(() => {
            I.g.trigger();
        }, []);
    let ed = (0, F.U)({ location: en.rE.QUEST_PREVIEW_TOOL_2 });
    i.useEffect(() => {
        if (null != O) return;
        let e = new URLSearchParams(n.search),
            r = e.get(Y.L1.TAB);
        if (ed && r === Y.NC.PREVIEW_TOOL) {
            let t = e.get(Y.L1.QUEST_ID);
            m.A.openNativeAppModal("quests", er.e$_.DEEP_LINK, {
                type: el.XK.QUEST_PREVIEW_TOOL,
                params: {
                    questId: t,
                    tab: r,
                },
            });
            return;
        }
        let i = performance.getEntriesByType("navigation")[0];
        if ("POP" === l.action && (null == i ? void 0 : i.type) === "navigate" && t && r !== Y.NC.PREVIEW_TOOL) {
            let t = (0, U.uJ)(n.hash) ? null : n.hash.substring(1),
                i = e.get(Y.L1.SORT),
                l = e.get(Y.L1.FILTER);
            m.A.openNativeAppModal("quests", er.e$_.DEEP_LINK, {
                type: el.XK.QUEST_HOME,
                params: {
                    questId: (0, U.uJ)(t) ? void 0 : t,
                    sort: i,
                    filter: l,
                    tab: r,
                },
            });
        }
    }, [n.search, O, ed, l.action, n.hash, t]),
        i.useEffect(() => {
            t && (0, y.Dr)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let ep = i.useCallback(() => {
            (0, z.navigateToQuestHome)({ fromContent: V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                D.default.track(
                    er.HAw.QUEST_CONTENT_CLICKED,
                    eh(
                        {
                            cta_name: G.Cy.VIEW_QUESTS,
                            click_id: (0, o.A)(),
                            is_targeted: !1,
                        },
                        (0, G.fF)(V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
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
    return (0, r.jsx)(J.M.Provider, {
        value: { onAssetLoadComplete: q },
        children: (0, r.jsx)(eA.Provider, {
            value: i.useMemo(
                () => ({
                    isInDiscoverQuestHomeTab: h,
                    onScroll: M,
                    onSelectTab: ef,
                    scrollerRef: ec,
                    selectedTab: C,
                }),
                [h, M, ef, ec, C],
            ),
            children: (0, r.jsx)("div", {
                className: a()(es.kL, { [es.KY]: !t }),
                children: h
                    ? (0, r.jsx)(eb, {
                          renderBanner: () =>
                              (0, r.jsx)(S.A, {
                                  title: ea.intl.string(ea.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, r.jsx)(p.Button, {
                                      variant: "overlay-primary",
                                      text: ea.intl.string(ea.t.GURBQl),
                                      onClick: ep,
                                  }),
                                  className: es.Gj,
                                  children: (0, r.jsx)(em, { onLoadComplete: q }),
                              }),
                          header: (0, r.jsx)(j.S, {
                              selectedTabId: C,
                              handleTransition: ef,
                              tabs: R,
                              icon: p.r2v,
                          }),
                          withQuestsGrid: !1,
                          children: (0, r.jsxs)("div", {
                              className: es.kj,
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
                                  (0, r.jsx)(p.QWc, {
                                      text: ea.intl.string(ea.t["1CdL8d"]),
                                      onClick: ep,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : X
                      ? (0, r.jsx)(eb, {
                            renderBanner: () =>
                                C !== Y.NC.PREVIEW_TOOL &&
                                (0, r.jsxs)(S.A, {
                                    title: ee,
                                    description: eo,
                                    button: (0, r.jsxs)(p.ButtonGroup, {
                                        children: [
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-primary",
                                                text: ea.intl.string(ea.t["1Wm127"]),
                                                onClick: () =>
                                                    (0, _.Cz)({
                                                        tab: ei.G2.ORBS,
                                                        analyticsLocations: [],
                                                        analyticsSource: A.A.INTRO_TO_ORBS_QUEST_BANNER,
                                                    }),
                                            }),
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-secondary",
                                                text: ea.intl.string(ea.t["7kTAgJ"]),
                                                onClick: $,
                                            }),
                                        ],
                                    }),
                                    className: a()(es.cI, es.GF),
                                    children: [
                                        (0, r.jsx)("div", { className: a()(es.nY, es.vu) }),
                                        (0, r.jsx)(eg, { onLoadComplete: q }),
                                    ],
                                }),
                            header: (0, r.jsx)(j.S, {
                                selectedTabId: C,
                                handleTransition: ef,
                                tabs: R,
                                icon: p.r2v,
                                children: (0, r.jsx)(L.SS, {
                                    analyticsPage: er.liQ.GLOBAL_DISCOVERY_QUESTS,
                                    cardAlignment: L.cP.END,
                                    ctaText: ea.intl.string(ea.t["J+vlIR"]),
                                    ctaOnClick: eu,
                                }),
                            }),
                        })
                      : (0, r.jsx)(eb, {
                            renderBanner: () =>
                                (0, r.jsxs)(S.A, {
                                    title: ee,
                                    description: eo,
                                    button: (0, r.jsx)(p.Button, {
                                        variant: "overlay-primary",
                                        text: ea.intl.string(ea.t.hvVgAZ),
                                        onClick: $,
                                        icon: p.I9m,
                                        iconPosition: "end",
                                    }),
                                    className: es.cI,
                                    children: [
                                        (0, r.jsx)("div", { className: es.nY }),
                                        (0, r.jsx)(eg, { onLoadComplete: q }),
                                    ],
                                }),
                            header: (0, r.jsxs)(T.Ay, {
                                variant: T.Z5.OVERLAY,
                                children: [
                                    (0, r.jsx)("div", { className: es.T_ }),
                                    (0, r.jsx)(T.ns, { scrollPosition: H }),
                                    (0, r.jsx)(T.T4, { icon: p.r2v }),
                                ],
                            }),
                            children: (0, r.jsx)("div", {
                                className: es.vR,
                                children: (0, r.jsx)(N.A, {
                                    tabs: R,
                                    selectedTab: C,
                                    onTabSelect: ef,
                                }),
                            }),
                        }),
            }),
        }),
    });
};
