n.d(t, {
    A: () => eE,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238),
    n(812715);
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
    h = n(944791),
    g = n(775602),
    f = n(793574),
    m = n(139286),
    A = n(197111),
    _ = n(10088),
    b = n(979286),
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
    P = n(545746),
    w = n(318346),
    L = n(151252),
    R = n(142270),
    D = n(531685),
    M = n(954571),
    k = n(676279),
    U = n(975571),
    G = n(240248),
    V = n(341915),
    B = n(631001),
    H = n(245853),
    F = n(807876),
    Y = n(890687),
    K = n(590202),
    W = n(885459),
    q = n(545986),
    z = n(419818),
    Q = n(203879),
    X = n(409389),
    Z = n(881172),
    J = n(724339),
    $ = n(516226),
    ee = n(321503),
    et = n(65513),
    en = n(475529),
    er = n(654487),
    ei = n(652215),
    el = n(758836),
    ea = n(613057),
    es = n(985018),
    eo = n(467303),
    ec = n(318808),
    eu = n(92872),
    ed = n(880440),
    ep = n(522303),
    eh = n(595411),
    eg = n(602557);

function ef(e) {
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

function eA(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, L.Z)({
            location: er.rE.QUEST_HOME_DESKTOP,
        }),
        l = (0, u.bG)([g.A], () => g.A.useReducedMotion),
        s = (0, u.bG)([D.A], () => D.A.isFocused()),
        { ref: o, inViewport: c } = (0, Q.p)(),
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
        let e = (0, k.TM)();
        return (0, r.jsx)(O.A, {
            ref: (e) => {
                (d.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(eo.BW, eo.Lk),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? eu.A : ed.A,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: ec.Ay,
        className: a()(eo.BW, eo.J6),
        alt: "",
        onLoad: t,
    });
}

function e_(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: ep.Ay,
                className: a()(eo.BW, eo.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: eg.Ay,
                className: a()(eo.BW, eo.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: eh.Ay,
                className: a()(eo.BW, eo.rZ),
                alt: "",
            }),
        ],
    });
}

function eb(e) {
    let { renderBanner: t, children: n, header: l, withQuestsGrid: s = !0 } = e,
        { isInDiscoverQuestHomeTab: o, onScroll: c, onSelectTab: u, scrollerRef: d, selectedTab: p } = i.useContext(em),
        { takeover: h, isLoading: g } = (0, Y._b)(),
        { enabled: f } = (0, L.Z)({
            location: er.rE.QUEST_HOME_DESKTOP,
        }),
        { enabled: m } = H.XM.useConfig({
            location: er.rE.QUEST_HOME_DESKTOP,
        }),
        A = i.useRef(null),
        _ = i.useCallback(() => {
            var e;
            null == (e = A.current) || e.resetSortingFiltering();
        }, []);
    return (0, r.jsxs)(ee.X.Provider, {
        value: d,
        children: [
            l,
            (0, r.jsxs)(x.A, {
                onScroll: c,
                ref: d,
                children: [
                    (function () {
                        if (!o && m) {
                            if (p !== Y.NC.ALL) return null;
                            if (g) return (0, r.jsx)(et.s, {});
                            if (null != h)
                                return (0, r.jsx)(et.A, {
                                    config: h,
                                    onQuestCtaClick: _,
                                });
                        }
                        return t();
                    })(),
                    (0, r.jsx)(C.A, {
                        children: (0, r.jsxs)("div", {
                            className: a()(eo.Qs, {
                                [eo.HR]: m && !f && p !== Y.NC.ALL,
                            }),
                            children: [
                                n,
                                s
                                    ? p === Y.NC.CLAIMED
                                        ? (0, r.jsx)(Z.A, {
                                              onSelectTab: u,
                                          })
                                        : p === Y.NC.PREVIEW_TOOL
                                          ? (0, r.jsx)(W.A, {})
                                          : (0, r.jsx)(X.A, {
                                                ref: A,
                                            })
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
        n = (0, s.zy)(),
        l = (0, s.W6)(),
        g = i.useMemo(() => {
            var e;
            return (null == (e = (0, s.B6)(n.pathname, ei.BVt.QUEST_HOME)) ? void 0 : e.isExact) === !0;
        }, [n.pathname]),
        O = (0, u.bG)([_.A], () => _.A.getState("quests")),
        {
            selectedTab: C,
            onSelectTab: x,
            tabs: D,
        } = (0, en.J)({
            withClaimedQuestsTab: !g,
        });
    i.useLayoutEffect(() => {
        g &&
            C === Y.NC.CLAIMED &&
            B.A.setState({
                tab: Y.NC.ALL,
            });
    }, [g, C]);
    let { onScroll: k, scrollPosition: H } = (0, v.G)(),
        W = z.A.getState().getUtmCurrentContext(),
        Q = (0, J.W)((e) => e.registerAssetLoad),
        X = i.useRef(W);
    i.useEffect(() => {
        X.current = W;
    }),
        i.useEffect(() => {
            let { current: e } = X;
            (0, m.x)({
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
    let { enabled: Z } = (0, L.Z)({
            location: er.rE.QUEST_HOME_DESKTOP,
        }),
        ee = i.useCallback(() => {
            Z ? window.open(ei.X7G.PAID_TERMS_ORBS) : window.open(U.A.getArticleURL(ei.MVz.QUESTS_LEARN_MORE));
        }, [Z]);
    (0, E.HU)({
        location: es.intl.string(es.t.JALI2K),
    });
    let et = Z ? es.intl.format(es.t.BCBIlp, {}) : es.intl.format(es.t.lmMBfy, {}),
        ec = Z ? es.intl.format(es.t.U9FY0J, {}) : es.intl.string(es.t.oWCrBq),
        eu = i.useRef(null),
        ed = i.useCallback(() => {
            (0, w.Y)({
                pageType: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ei.JJy.ORBS_BALANCE_MENU,
                ctaObject: ei.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, b.Cz)({
                    tab: el.G2.ORBS,
                    analyticsLocations: [],
                    analyticsSource: f.A.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        (0, h.I)(ei.BVt.QUEST_HOME_V2);
    }, []),
        i.useEffect(() => {
            I.g.trigger();
        }, []),
        (0, P.A)({
            ignoreCacheTTL: !0,
        });
    let ep = (0, F.U)({
        location: er.rE.QUEST_PREVIEW_TOOL_2,
    });
    i.useEffect(() => {
        if (null != O) return;
        let e = new URLSearchParams(n.search),
            r = e.get(Y.L1.TAB);
        if (ep && r === Y.NC.PREVIEW_TOOL) {
            let t = e.get(Y.L1.QUEST_ID);
            A.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
                type: ea.XK.QUEST_PREVIEW_TOOL,
                params: {
                    questId: t,
                    tab: r,
                },
            });
            return;
        }
        let i = performance.getEntriesByType("navigation")[0];
        if ("POP" === l.action && (null == i ? void 0 : i.type) === "navigate" && t && r !== Y.NC.PREVIEW_TOOL) {
            let t = (0, G.uJ)(n.hash) ? null : n.hash.substring(1),
                i = e.get(Y.L1.SORT),
                l = e.get(Y.L1.FILTER);
            A.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
                type: ea.XK.QUEST_HOME,
                params: {
                    questId: (0, G.uJ)(t) ? void 0 : t,
                    sort: i,
                    filter: l,
                    tab: r,
                },
            });
        }
    }, [n.search, O, ep, l.action, n.hash, t]),
        i.useEffect(() => {
            t && (0, y.Dr)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eh = i.useCallback(() => {
            (0, q.navigateToQuestHome)({
                fromContent: V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER,
            }),
                M.default.track(
                    ei.HAw.QUEST_CONTENT_CLICKED,
                    ef(
                        {
                            cta_name: K.Cy.VIEW_QUESTS,
                            click_id: (0, o.A)(),
                            is_targeted: !1,
                        },
                        (0, K.fF)(V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                    ),
                );
        }, []),
        eg = i.useCallback(
            (e) => {
                var t, n, r;
                l.replace(
                    ((n = ef({}, l.location)),
                    (r = r =
                        {
                            hash: void 0,
                        }),
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
                    null == (t = eu.current) ||
                        t.scrollToTop({
                            animate: !1,
                        }),
                    x(e);
            },
            [l, x],
        );
    return (0, r.jsx)($.M.Provider, {
        value: {
            onAssetLoadComplete: Q,
        },
        children: (0, r.jsx)(em.Provider, {
            value: i.useMemo(
                () => ({
                    isInDiscoverQuestHomeTab: g,
                    onScroll: k,
                    onSelectTab: eg,
                    scrollerRef: eu,
                    selectedTab: C,
                }),
                [g, k, eg, eu, C],
            ),
            children: (0, r.jsx)("div", {
                className: a()(eo.kL, {
                    [eo.KY]: !t,
                }),
                children: g
                    ? (0, r.jsx)(eb, {
                          renderBanner: () =>
                              (0, r.jsx)(S.A, {
                                  title: es.intl.string(es.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, r.jsx)(p.Button, {
                                      variant: "overlay-primary",
                                      text: es.intl.string(es.t.GURBQl),
                                      onClick: eh,
                                  }),
                                  className: eo.Gj,
                                  children: (0, r.jsx)(e_, {
                                      onLoadComplete: Q,
                                  }),
                              }),
                          header: (0, r.jsx)(j.S, {
                              selectedTabId: C,
                              handleTransition: eg,
                              tabs: D,
                              icon: p.r2v,
                          }),
                          withQuestsGrid: !1,
                          children: (0, r.jsxs)("div", {
                              className: eo.kj,
                              children: [
                                  (0, r.jsx)(p.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: es.intl.string(es.t.z8YP2A),
                                  }),
                                  (0, r.jsx)(p.Text, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: es.intl.string(es.t.HdKh65),
                                  }),
                                  (0, r.jsx)(p.QWc, {
                                      text: es.intl.string(es.t["1CdL8d"]),
                                      onClick: eh,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : Z
                      ? (0, r.jsx)(eb, {
                            renderBanner: () =>
                                C !== Y.NC.PREVIEW_TOOL &&
                                (0, r.jsxs)(S.A, {
                                    title: et,
                                    description: ec,
                                    button: (0, r.jsxs)(p.ButtonGroup, {
                                        children: [
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-primary",
                                                text: es.intl.string(es.t["1Wm127"]),
                                                onClick: () =>
                                                    (0, b.Cz)({
                                                        tab: el.G2.ORBS,
                                                        analyticsLocations: [],
                                                        analyticsSource: f.A.INTRO_TO_ORBS_QUEST_BANNER,
                                                    }),
                                            }),
                                            (0, r.jsx)(p.Button, {
                                                variant: "overlay-secondary",
                                                text: es.intl.string(es.t["7kTAgJ"]),
                                                onClick: ee,
                                            }),
                                        ],
                                    }),
                                    className: a()(eo.cI, eo.GF),
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: a()(eo.nY, eo.vu),
                                        }),
                                        (0, r.jsx)(eA, {
                                            onLoadComplete: Q,
                                        }),
                                    ],
                                }),
                            header: (0, r.jsx)(j.S, {
                                selectedTabId: C,
                                handleTransition: eg,
                                tabs: D,
                                icon: p.r2v,
                                children: (0, r.jsx)(R.SS, {
                                    analyticsPage: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
                                    cardAlignment: R.cP.END,
                                    ctaText: es.intl.string(es.t["J+vlIR"]),
                                    ctaOnClick: ed,
                                }),
                            }),
                        })
                      : (0, r.jsx)(eb, {
                            renderBanner: () =>
                                (0, r.jsxs)(S.A, {
                                    title: et,
                                    description: ec,
                                    button: (0, r.jsx)(p.Button, {
                                        variant: "overlay-primary",
                                        text: es.intl.string(es.t.hvVgAZ),
                                        onClick: ee,
                                        icon: p.I9m,
                                        iconPosition: "end",
                                    }),
                                    className: eo.cI,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: eo.nY,
                                        }),
                                        (0, r.jsx)(eA, {
                                            onLoadComplete: Q,
                                        }),
                                    ],
                                }),
                            header: (0, r.jsxs)(T.Ay, {
                                variant: T.Z5.OVERLAY,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: eo.T_,
                                    }),
                                    (0, r.jsx)(T.ns, {
                                        scrollPosition: H,
                                    }),
                                    (0, r.jsx)(T.T4, {
                                        icon: p.r2v,
                                    }),
                                ],
                            }),
                            children: (0, r.jsx)("div", {
                                className: eo.vR,
                                children: (0, r.jsx)(N.A, {
                                    tabs: D,
                                    selectedTab: C,
                                    onTabSelect: eg,
                                }),
                            }),
                        }),
            }),
        }),
    });
};
