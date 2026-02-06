n.d(t, { A: () => eE }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(960488),
    o = n(835245),
    d = n(110259),
    c = n(311907),
    u = n(554146),
    A = n(397927),
    h = n(944791),
    _ = n(775602),
    m = n(793574),
    p = n(139286),
    g = n(197111),
    E = n(10088),
    I = n(979286),
    f = n(726249),
    C = n(607470),
    N = n(826673),
    T = n(239365),
    S = n(178629),
    x = n(701508),
    v = n(979590),
    b = n(45758),
    y = n(737823),
    L = n(153527),
    O = n(783531),
    R = n(318346),
    P = n(151252),
    j = n(142270),
    D = n(531685),
    w = n(954571),
    M = n(676279),
    U = n(975571),
    G = n(240248),
    k = n(341915),
    V = n(631001),
    B = n(245853),
    H = n(807876),
    F = n(890687),
    Y = n(590202),
    W = n(885459),
    q = n(545986),
    z = n(419818),
    K = n(203879),
    $ = n(409389),
    Q = n(881172),
    X = n(724339),
    Z = n(516226),
    J = n(321503),
    ee = n(65513),
    et = n(475529),
    en = n(654487),
    ei = n(652215),
    er = n(758836),
    ea = n(613057),
    el = n(985018),
    es = n(467303),
    eo = n(318808),
    ed = n(92872),
    ec = n(880440),
    eu = n(522303),
    eA = n(595411),
    eh = n(602557);
let e_ = r.createContext({});
function em(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, P.Z)({ location: en.rE.QUEST_HOME_DESKTOP }),
        a = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        s = (0, c.bG)([D.A], () => D.A.isFocused()),
        { ref: o, inViewport: d } = (0, K.p)(),
        u = r.useRef(null);
    if (
        (r.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (s && d && !a)
                    ? u.current.paused && !a && d && s && u.current.play()
                    : u.current.pause());
        }, [a, d, s]),
        n)
    ) {
        let e = (0, M.TM)();
        return (0, i.jsx)(C.A, {
            ref: (e) => {
                (u.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: l()(es.BW, es.Lk),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, i.jsx)("source", { src: e ? ed.A : ec.A, type: e ? "video/mp4" : "video/webm" }),
        });
    }
    return (0, i.jsx)("img", { src: eo.Ay, className: l()(es.BW, es.J6), alt: "", onLoad: t });
}
function ep(e) {
    let { onLoadComplete: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: eu.Ay, className: l()(es.BW, es.rZ), alt: "" }),
            (0, i.jsx)("img", { src: eh.Ay, className: l()(es.BW, es.rZ), alt: "", onLoad: t }),
            (0, i.jsx)("img", { src: eA.Ay, className: l()(es.BW, es.rZ), alt: "" }),
        ],
    });
}
function eg(e) {
    let { renderBanner: t, children: n, header: a, withQuestsGrid: s = !0 } = e,
        { isInDiscoverQuestHomeTab: o, onScroll: d, onSelectTab: c, scrollerRef: u, selectedTab: A } = r.useContext(e_),
        { takeover: h, isLoading: _ } = (0, F._b)(),
        { enabled: m } = (0, P.Z)({ location: en.rE.QUEST_HOME_DESKTOP }),
        { enabled: p } = B.XM.useConfig({ location: en.rE.QUEST_HOME_DESKTOP }),
        g = r.useRef(null),
        E = r.useCallback(() => {
            g.current?.resetSortingFiltering();
        }, []);
    return (0, i.jsxs)(J.X.Provider, {
        value: u,
        children: [
            a,
            (0, i.jsxs)(O.A, {
                onScroll: d,
                ref: u,
                children: [
                    (function () {
                        if (!o && p) {
                            if (A !== F.NC.ALL) return null;
                            if (_) return (0, i.jsx)(ee.s, {});
                            if (null != h) return (0, i.jsx)(ee.A, { config: h, onQuestCtaClick: E });
                        }
                        return t();
                    })(),
                    (0, i.jsx)(v.A, {
                        children: (0, i.jsxs)("div", {
                            className: l()(es.Qs, { [es.HR]: p && !m && A !== F.NC.ALL }),
                            children: [
                                n,
                                s
                                    ? A === F.NC.CLAIMED
                                        ? (0, i.jsx)(Q.A, { onSelectTab: c })
                                        : A === F.NC.PREVIEW_TOOL
                                          ? (0, i.jsx)(W.A, {})
                                          : (0, i.jsx)($.A, { ref: g })
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
        a = (0, s.W6)(),
        _ = r.useMemo(() => (0, s.B6)(n.pathname, ei.BVt.QUEST_HOME)?.isExact === !0, [n.pathname]),
        C = (0, c.bG)([E.A], () => E.A.getState("quests")),
        { selectedTab: v, onSelectTab: O, tabs: D } = (0, et.J)({ withClaimedQuestsTab: !_ });
    r.useLayoutEffect(() => {
        _ && v === F.NC.CLAIMED && V.A.setState({ tab: F.NC.ALL });
    }, [_, v]);
    let { onScroll: M, scrollPosition: B } = (0, S.G)(),
        W = z.A.getState().getUtmCurrentContext(),
        K = (0, X.W)((e) => e.registerAssetLoad),
        $ = r.useRef(W);
    r.useEffect(() => {
        $.current = W;
    }),
        r.useEffect(() => {
            let { current: e } = $;
            (0, p.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: v,
                },
            });
        }, [v]);
    let { enabled: Q } = (0, P.Z)({ location: en.rE.QUEST_HOME_DESKTOP }),
        J = r.useCallback(() => {
            Q ? window.open(ei.X7G.PAID_TERMS_ORBS) : window.open(U.A.getArticleURL(ei.MVz.QUESTS_LEARN_MORE));
        }, [Q]);
    (0, f.HU)({ location: el.intl.string(el.t.JALI2K) });
    let ee = Q ? el.intl.format(el.t.BCBIlp, {}) : el.intl.format(el.t.lmMBfy, {}),
        eo = Q ? el.intl.format(el.t.U9FY0J, {}) : el.intl.string(el.t.oWCrBq),
        ed = r.useRef(null),
        ec = r.useCallback(() => {
            (0, R.Y)({
                pageType: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ei.JJy.ORBS_BALANCE_MENU,
                ctaObject: ei.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, I.Cz)({ tab: er.G2.ORBS, analyticsLocations: [], analyticsSource: m.A.ORBS_BALANCE_MENU });
        }, []);
    r.useEffect(() => {
        (0, h.I)(ei.BVt.QUEST_HOME_V2);
    }, []),
        r.useEffect(() => {
            T.g.trigger();
        }, []);
    let eu = (0, H.U)({ location: en.rE.QUEST_PREVIEW_TOOL_2 });
    r.useEffect(() => {
        if (null != C) return;
        let e = new URLSearchParams(n.search),
            i = e.get(F.L1.TAB);
        if (eu && i === F.NC.PREVIEW_TOOL) {
            let t = e.get(F.L1.QUEST_ID);
            g.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
                type: ea.XK.QUEST_PREVIEW_TOOL,
                params: { questId: t, tab: i },
            });
            return;
        }
        let r = performance.getEntriesByType("navigation")[0];
        if ("POP" === a.action && r?.type === "navigate" && t && i !== F.NC.PREVIEW_TOOL) {
            let t = (0, G.uJ)(n.hash) ? null : n.hash.substring(1),
                r = e.get(F.L1.SORT),
                a = e.get(F.L1.FILTER);
            g.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
                type: ea.XK.QUEST_HOME,
                params: { questId: (0, G.uJ)(t) ? void 0 : t, sort: r, filter: a, tab: i },
            });
        }
    }, [n.search, C, eu, a.action, n.hash, t]),
        r.useEffect(() => {
            t && (0, N.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eA = r.useCallback(() => {
            (0, q.navigateToQuestHome)({ fromContent: k.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                w.default.track(ei.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: Y.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, Y.fF)(k.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        eh = r.useCallback(
            (e) => {
                a.replace({ ...a.location, hash: void 0 }), ed.current?.scrollToTop({ animate: !1 }), O(e);
            },
            [a, O],
        );
    return (0, i.jsx)(Z.M.Provider, {
        value: { onAssetLoadComplete: K },
        children: (0, i.jsx)(e_.Provider, {
            value: r.useMemo(
                () => ({ isInDiscoverQuestHomeTab: _, onScroll: M, onSelectTab: eh, scrollerRef: ed, selectedTab: v }),
                [_, M, eh, ed, v],
            ),
            children: (0, i.jsx)("div", {
                className: l()(es.kL, { [es.KY]: !t }),
                children: _
                    ? (0, i.jsx)(eg, {
                          renderBanner: () =>
                              (0, i.jsx)(x.A, {
                                  title: el.intl.string(el.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, i.jsx)(A.Button, {
                                      variant: "overlay-primary",
                                      text: el.intl.string(el.t.GURBQl),
                                      onClick: eA,
                                  }),
                                  className: es.Gj,
                                  children: (0, i.jsx)(ep, { onLoadComplete: K }),
                              }),
                          header: (0, i.jsx)(L.S, { selectedTabId: v, handleTransition: eh, tabs: D, icon: A.r2v }),
                          withQuestsGrid: !1,
                          children: (0, i.jsxs)("div", {
                              className: es.kj,
                              children: [
                                  (0, i.jsx)(A.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: el.intl.string(el.t.z8YP2A),
                                  }),
                                  (0, i.jsx)(A.Text, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: el.intl.string(el.t.HdKh65),
                                  }),
                                  (0, i.jsx)(A.QWc, {
                                      text: el.intl.string(el.t["1CdL8d"]),
                                      onClick: eA,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : Q
                      ? (0, i.jsx)(eg, {
                            renderBanner: () =>
                                v !== F.NC.PREVIEW_TOOL &&
                                (0, i.jsxs)(x.A, {
                                    title: ee,
                                    description: eo,
                                    button: (0, i.jsxs)(A.ButtonGroup, {
                                        children: [
                                            (0, i.jsx)(A.Button, {
                                                variant: "overlay-primary",
                                                text: el.intl.string(el.t["1Wm127"]),
                                                onClick: () =>
                                                    (0, I.Cz)({
                                                        tab: er.G2.ORBS,
                                                        analyticsLocations: [],
                                                        analyticsSource: m.A.INTRO_TO_ORBS_QUEST_BANNER,
                                                    }),
                                            }),
                                            (0, i.jsx)(A.Button, {
                                                variant: "overlay-secondary",
                                                text: el.intl.string(el.t["7kTAgJ"]),
                                                onClick: J,
                                            }),
                                        ],
                                    }),
                                    className: l()(es.cI, es.GF),
                                    children: [
                                        (0, i.jsx)("div", { className: l()(es.nY, es.vu) }),
                                        (0, i.jsx)(em, { onLoadComplete: K }),
                                    ],
                                }),
                            header: (0, i.jsx)(L.S, {
                                selectedTabId: v,
                                handleTransition: eh,
                                tabs: D,
                                icon: A.r2v,
                                children: (0, i.jsx)(j.SS, {
                                    analyticsPage: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
                                    cardAlignment: j.cP.END,
                                    ctaText: el.intl.string(el.t["J+vlIR"]),
                                    ctaOnClick: ec,
                                }),
                            }),
                        })
                      : (0, i.jsx)(eg, {
                            renderBanner: () =>
                                (0, i.jsxs)(x.A, {
                                    title: ee,
                                    description: eo,
                                    button: (0, i.jsx)(A.Button, {
                                        variant: "overlay-primary",
                                        text: el.intl.string(el.t.hvVgAZ),
                                        onClick: J,
                                        icon: A.I9m,
                                        iconPosition: "end",
                                    }),
                                    className: es.cI,
                                    children: [
                                        (0, i.jsx)("div", { className: es.nY }),
                                        (0, i.jsx)(em, { onLoadComplete: K }),
                                    ],
                                }),
                            header: (0, i.jsxs)(y.Ay, {
                                variant: y.Z5.OVERLAY,
                                children: [
                                    (0, i.jsx)("div", { className: es.T_ }),
                                    (0, i.jsx)(y.ns, { scrollPosition: B }),
                                    (0, i.jsx)(y.T4, { icon: A.r2v }),
                                ],
                            }),
                            children: (0, i.jsx)("div", {
                                className: es.vR,
                                children: (0, i.jsx)(b.A, { tabs: D, selectedTab: v, onTabSelect: eh }),
                            }),
                        }),
            }),
        }),
    });
};
