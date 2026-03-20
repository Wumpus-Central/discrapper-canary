n.d(t, { A: () => eI }), n(323874), n(14289), n(35956);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(873263),
    o = n(835245),
    d = n(110259),
    c = n(311907),
    u = n(554146),
    A = n(397927),
    h = n(944791),
    _ = n(775602),
    m = n(793574),
    g = n(139286),
    p = n(197111),
    E = n(10088),
    I = n(979286),
    f = n(726249),
    C = n(607470),
    T = n(826673),
    N = n(239365),
    S = n(178629),
    x = n(701508),
    v = n(979590),
    y = n(45758),
    b = n(737823),
    O = n(153527),
    L = n(783531),
    R = n(334465),
    P = n(318346),
    D = n(151252),
    M = n(142270),
    j = n(531685),
    w = n(954571),
    U = n(676279),
    G = n(975571),
    k = n(240248),
    V = n(341915),
    B = n(631001),
    H = n(87549),
    F = n(245853),
    Y = n(807876),
    W = n(890687),
    K = n(590202),
    q = n(885459),
    z = n(545986),
    $ = n(203879),
    Q = n(409389),
    X = n(881172),
    Z = n(724339),
    J = n(516226),
    ee = n(854514),
    et = n(321503),
    en = n(475529),
    ei = n(654487),
    ea = n(652215),
    el = n(758836),
    er = n(613057),
    es = n(985018),
    eo = n(941797),
    ed = n(318808),
    ec = n(92872),
    eu = n(880440),
    eA = n(522303),
    eh = n(595411),
    e_ = n(602557);
let em = a.createContext({});
function eg(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, D.Z)({ location: ei.rE.QUEST_HOME_DESKTOP }),
        l = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        s = (0, c.bG)([j.A], () => j.A.isFocused()),
        { ref: o, inViewport: d } = (0, $.p)(),
        u = a.useRef(null);
    if (
        (a.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (s && d && !l)
                    ? u.current.paused && !l && d && s && u.current.play()
                    : u.current.pause());
        }, [l, d, s]),
        n)
    ) {
        let e = (0, U.TM)();
        return (0, i.jsx)(C.A, {
            ref: (e) => {
                (u.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r()(eo.BW, eo.Lk),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, i.jsx)("source", { src: e ? ec.A : eu.A, type: e ? "video/mp4" : "video/webm" }),
        });
    }
    return (0, i.jsx)("img", { src: ed.Ay, className: r()(eo.BW, eo.J6), alt: "", onLoad: t });
}
function ep(e) {
    let { onLoadComplete: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: eA.Ay, className: r()(eo.BW, eo.rZ), alt: "" }),
            (0, i.jsx)("img", { src: e_.Ay, className: r()(eo.BW, eo.rZ), alt: "", onLoad: t }),
            (0, i.jsx)("img", { src: eh.Ay, className: r()(eo.BW, eo.rZ), alt: "" }),
        ],
    });
}
function eE(e) {
    let { renderBanner: t, children: n, header: l, withQuestsGrid: s = !0 } = e,
        { isInDiscoverQuestHomeTab: o, onScroll: d, onSelectTab: c, scrollerRef: u, selectedTab: A } = a.useContext(em),
        { questHomeHero: h, isLoading: _ } = (0, W.vG)(),
        { enabled: m } = (0, D.Z)({ location: ei.rE.QUEST_HOME_DESKTOP }),
        { enabled: g } = F.sn.useConfig({ location: ei.rE.QUEST_HOME_DESKTOP }),
        p = a.useRef(null),
        E = a.useCallback((e) => {
            p.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    p.current?.scrollToQuest(e);
                });
        }, []);
    return (0, i.jsxs)(et.X.Provider, {
        value: u,
        children: [
            l,
            (0, i.jsxs)(L.A, {
                onScroll: d,
                ref: u,
                children: [
                    (function () {
                        if (!o && g) {
                            if (A !== W.NC.ALL) return null;
                            if (_) return (0, i.jsx)(ee.H, {});
                            if (null != h) return (0, i.jsx)(ee.A, { config: h, onQuestCtaClick: E });
                        }
                        return t();
                    })(),
                    (0, i.jsx)(v.A, {
                        children: (0, i.jsxs)("div", {
                            className: r()(eo.Qs, { [eo.HR]: g && !m && A !== W.NC.ALL }),
                            children: [
                                n,
                                s
                                    ? A === W.NC.CLAIMED
                                        ? (0, i.jsx)(X.A, { onSelectTab: c })
                                        : A === W.NC.PREVIEW_TOOL
                                          ? (0, i.jsx)(q.A, {})
                                          : (0, i.jsx)(Q.A, { ref: p })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let eI = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, s.zy)(),
        l = (0, s.W6)(),
        _ = a.useMemo(() => (0, R.B)(n.pathname, ea.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [n.pathname]),
        C = (0, c.bG)([E.A], () => E.A.getState("quests")),
        { selectedTab: v, onSelectTab: L, tabs: j } = (0, en.J)({ withClaimedQuestsTab: !_ });
    a.useLayoutEffect(() => {
        _ && v === W.NC.CLAIMED && B.A.setState({ tab: W.NC.ALL });
    }, [_, v]);
    let { onScroll: U, scrollPosition: F } = (0, S.G)(),
        q = H.A.getState().getUtmCurrentContext(),
        $ = (0, Z.W)((e) => e.registerAssetLoad),
        Q = a.useRef(q);
    a.useEffect(() => {
        Q.current = q;
    }),
        a.useEffect(() => {
            let { current: e } = Q;
            (0, g.x)({
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
    let { enabled: X } = (0, D.Z)({ location: ei.rE.QUEST_HOME_DESKTOP }),
        ee = a.useCallback(() => {
            X ? window.open(ea.X7G.PAID_TERMS_ORBS) : window.open(G.A.getArticleURL(ea.MVz.QUESTS_LEARN_MORE));
        }, [X]);
    (0, f.HU)({ location: es.intl.string(es.t.JALI2K) });
    let et = X ? es.intl.format(es.t.BCBIlp, {}) : es.intl.format(es.t.lmMBfy, {}),
        ed = X ? es.intl.format(es.t.U9FY0J, {}) : es.intl.string(es.t.oWCrBq),
        ec = a.useRef(null),
        eu = a.useCallback(() => {
            (0, P.Y)({
                pageType: ea.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ea.JJy.ORBS_BALANCE_MENU,
                ctaObject: ea.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, I.Cz)({ tab: el.G2.ORBS, analyticsLocations: [], analyticsSource: m.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, h.I)(ea.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            N.g.trigger();
        }, []);
    let eA = (0, Y.U)({ location: ei.rE.QUEST_PREVIEW_TOOL_2 });
    a.useEffect(() => {
        if (null != C) return;
        let e = new URLSearchParams(n.search),
            i = e.get(W.L1.TAB);
        if (eA && i === W.NC.PREVIEW_TOOL) {
            let t = e.get(W.L1.QUEST_ID);
            p.A.openNativeAppModal("quests", ea.e$_.DEEP_LINK, {
                type: er.XK.QUEST_PREVIEW_TOOL,
                params: { questId: t, tab: i },
            });
            return;
        }
        let a = performance.getEntriesByType("navigation")[0];
        if ("POP" === l.action && a?.type === "navigate" && t && i !== W.NC.PREVIEW_TOOL) {
            let t = (0, k.uJ)(n.hash) ? null : n.hash.substring(1),
                a = e.get(W.L1.SORT),
                l = e.get(W.L1.FILTER);
            p.A.openNativeAppModal("quests", ea.e$_.DEEP_LINK, {
                type: er.XK.QUEST_HOME,
                params: { questId: (0, k.uJ)(t) ? void 0 : t, sort: a, filter: l, tab: i },
            });
        }
    }, [n.search, C, eA, l.action, n.hash, t]),
        a.useEffect(() => {
            t && (0, T.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eh = a.useCallback(() => {
            (0, z.navigateToQuestHome)({ fromContent: V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                w.default.track(ea.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: K.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, K.fF)(V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        e_ = a.useCallback(
            (e) => {
                l.replace({ ...l.location, hash: void 0 }), ec.current?.scrollToTop({ animate: !1 }), L(e);
            },
            [l, L],
        );
    return (0, i.jsx)(J.M.Provider, {
        value: { onAssetLoadComplete: $ },
        children: (0, i.jsx)(em.Provider, {
            value: a.useMemo(
                () => ({ isInDiscoverQuestHomeTab: _, onScroll: U, onSelectTab: e_, scrollerRef: ec, selectedTab: v }),
                [_, U, e_, ec, v],
            ),
            children: (0, i.jsx)("div", {
                className: r()(eo.kL, { [eo.KY]: !t }),
                children: _
                    ? (0, i.jsx)(eE, {
                          renderBanner: () =>
                              (0, i.jsx)(x.A, {
                                  title: es.intl.string(es.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, i.jsx)(A.Button, {
                                      variant: "overlay-primary",
                                      text: es.intl.string(es.t.GURBQl),
                                      onClick: eh,
                                  }),
                                  className: eo.Gj,
                                  children: (0, i.jsx)(ep, { onLoadComplete: $ }),
                              }),
                          header: (0, i.jsx)(O.S, { selectedTabId: v, handleTransition: e_, tabs: j, icon: A.r2v }),
                          withQuestsGrid: !1,
                          children: (0, i.jsxs)("div", {
                              className: eo.kj,
                              children: [
                                  (0, i.jsx)(A.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: es.intl.string(es.t.z8YP2A),
                                  }),
                                  (0, i.jsx)(A.Text, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: es.intl.string(es.t.HdKh65),
                                  }),
                                  (0, i.jsx)(A.QWc, {
                                      text: es.intl.string(es.t["1CdL8d"]),
                                      onClick: eh,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : X
                      ? (0, i.jsx)(eE, {
                            renderBanner: () =>
                                v !== W.NC.PREVIEW_TOOL &&
                                (0, i.jsxs)(x.A, {
                                    title: et,
                                    description: ed,
                                    button: (0, i.jsxs)(A.ButtonGroup, {
                                        children: [
                                            (0, i.jsx)(A.Button, {
                                                variant: "overlay-primary",
                                                text: es.intl.string(es.t["1Wm127"]),
                                                onClick: () =>
                                                    (0, I.Cz)({
                                                        tab: el.G2.ORBS,
                                                        analyticsLocations: [],
                                                        analyticsSource: m.A.INTRO_TO_ORBS_QUEST_BANNER,
                                                    }),
                                            }),
                                            (0, i.jsx)(A.Button, {
                                                variant: "overlay-secondary",
                                                text: es.intl.string(es.t["7kTAgJ"]),
                                                onClick: ee,
                                            }),
                                        ],
                                    }),
                                    className: r()(eo.cI, eo.GF),
                                    children: [
                                        (0, i.jsx)("div", { className: r()(eo.nY, eo.vu) }),
                                        (0, i.jsx)(eg, { onLoadComplete: $ }),
                                    ],
                                }),
                            header: (0, i.jsx)(O.S, {
                                selectedTabId: v,
                                handleTransition: e_,
                                tabs: j,
                                endContent: (0, i.jsx)(M.SS, {
                                    analyticsPage: ea.liQ.GLOBAL_DISCOVERY_QUESTS,
                                    cardAlignment: M.cP.END,
                                    ctaText: es.intl.string(es.t["J+vlIR"]),
                                    ctaOnClick: eu,
                                }),
                                icon: A.r2v,
                            }),
                        })
                      : (0, i.jsx)(eE, {
                            renderBanner: () =>
                                (0, i.jsxs)(x.A, {
                                    title: et,
                                    description: ed,
                                    button: (0, i.jsx)(A.Button, {
                                        variant: "overlay-primary",
                                        text: es.intl.string(es.t.hvVgAZ),
                                        onClick: ee,
                                        icon: A.I9m,
                                        iconPosition: "end",
                                    }),
                                    className: eo.cI,
                                    children: [
                                        (0, i.jsx)("div", { className: eo.nY }),
                                        (0, i.jsx)(eg, { onLoadComplete: $ }),
                                    ],
                                }),
                            header: (0, i.jsxs)(b.Ay, {
                                variant: b.Z5.OVERLAY,
                                children: [
                                    (0, i.jsx)("div", { className: eo.T_ }),
                                    (0, i.jsx)(b.ns, { scrollPosition: F }),
                                    (0, i.jsx)(b.T4, { icon: A.r2v }),
                                ],
                            }),
                            children: (0, i.jsx)("div", {
                                className: eo.vR,
                                children: (0, i.jsx)(y.A, { tabs: j, selectedTab: v, onTabSelect: e_ }),
                            }),
                        }),
            }),
        }),
    });
};
