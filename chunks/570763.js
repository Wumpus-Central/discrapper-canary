n.d(t, { A: () => ef }), n(323874), n(14289), n(35956);
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
    f = n(979286),
    I = n(726249),
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
    R = n(545746),
    P = n(318346),
    j = n(151252),
    D = n(142270),
    w = n(531685),
    M = n(954571),
    U = n(676279),
    G = n(975571),
    k = n(240248),
    V = n(341915),
    B = n(631001),
    H = n(245853),
    F = n(807876),
    Y = n(890687),
    W = n(590202),
    q = n(885459),
    z = n(545986),
    K = n(419818),
    $ = n(203879),
    Q = n(409389),
    X = n(881172),
    Z = n(724339),
    J = n(516226),
    ee = n(321503),
    et = n(65513),
    en = n(475529),
    ei = n(654487),
    er = n(652215),
    ea = n(758836),
    el = n(613057),
    es = n(985018),
    eo = n(467303),
    ed = n(318808),
    ec = n(92872),
    eu = n(880440),
    eA = n(522303),
    eh = n(595411),
    e_ = n(602557);
let em = r.createContext({});
function ep(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, j.Z)({ location: ei.rE.QUEST_HOME_DESKTOP }),
        a = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        s = (0, c.bG)([w.A], () => w.A.isFocused()),
        { ref: o, inViewport: d } = (0, $.p)(),
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
        let e = (0, U.TM)();
        return (0, i.jsx)(C.A, {
            ref: (e) => {
                (u.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: l()(eo.BW, eo.Lk),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, i.jsx)("source", { src: e ? ec.A : eu.A, type: e ? "video/mp4" : "video/webm" }),
        });
    }
    return (0, i.jsx)("img", { src: ed.Ay, className: l()(eo.BW, eo.J6), alt: "", onLoad: t });
}
function eg(e) {
    let { onLoadComplete: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: eA.Ay, className: l()(eo.BW, eo.rZ), alt: "" }),
            (0, i.jsx)("img", { src: e_.Ay, className: l()(eo.BW, eo.rZ), alt: "", onLoad: t }),
            (0, i.jsx)("img", { src: eh.Ay, className: l()(eo.BW, eo.rZ), alt: "" }),
        ],
    });
}
function eE(e) {
    let { renderBanner: t, children: n, header: a, withQuestsGrid: s = !0 } = e,
        { isInDiscoverQuestHomeTab: o, onScroll: d, onSelectTab: c, scrollerRef: u, selectedTab: A } = r.useContext(em),
        { takeover: h, isLoading: _ } = (0, Y._b)(),
        { enabled: m } = (0, j.Z)({ location: ei.rE.QUEST_HOME_DESKTOP }),
        { enabled: p } = H.XM.useConfig({ location: ei.rE.QUEST_HOME_DESKTOP }),
        g = r.useRef(null),
        E = r.useCallback(() => {
            g.current?.resetSortingFiltering();
        }, []);
    return (0, i.jsxs)(ee.X.Provider, {
        value: u,
        children: [
            a,
            (0, i.jsxs)(O.A, {
                onScroll: d,
                ref: u,
                children: [
                    (function () {
                        if (!o && p) {
                            if (A !== Y.NC.ALL) return null;
                            if (_) return (0, i.jsx)(et.s, {});
                            if (null != h) return (0, i.jsx)(et.A, { config: h, onQuestCtaClick: E });
                        }
                        return t();
                    })(),
                    (0, i.jsx)(v.A, {
                        children: (0, i.jsxs)("div", {
                            className: l()(eo.Qs, { [eo.HR]: p && !m && A !== Y.NC.ALL }),
                            children: [
                                n,
                                s
                                    ? A === Y.NC.CLAIMED
                                        ? (0, i.jsx)(X.A, { onSelectTab: c })
                                        : A === Y.NC.PREVIEW_TOOL
                                          ? (0, i.jsx)(q.A, {})
                                          : (0, i.jsx)(Q.A, { ref: g })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let ef = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, s.zy)(),
        a = (0, s.W6)(),
        _ = r.useMemo(() => (0, s.B6)(n.pathname, er.BVt.QUEST_HOME)?.isExact === !0, [n.pathname]),
        C = (0, c.bG)([E.A], () => E.A.getState("quests")),
        { selectedTab: v, onSelectTab: O, tabs: w } = (0, en.J)({ withClaimedQuestsTab: !_ });
    r.useLayoutEffect(() => {
        _ && v === Y.NC.CLAIMED && B.A.setState({ tab: Y.NC.ALL });
    }, [_, v]);
    let { onScroll: U, scrollPosition: H } = (0, S.G)(),
        q = K.A.getState().getUtmCurrentContext(),
        $ = (0, Z.W)((e) => e.registerAssetLoad),
        Q = r.useRef(q);
    r.useEffect(() => {
        Q.current = q;
    }),
        r.useEffect(() => {
            let { current: e } = Q;
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
    let { enabled: X } = (0, j.Z)({ location: ei.rE.QUEST_HOME_DESKTOP }),
        ee = r.useCallback(() => {
            X ? window.open(er.X7G.PAID_TERMS_ORBS) : window.open(G.A.getArticleURL(er.MVz.QUESTS_LEARN_MORE));
        }, [X]);
    (0, I.HU)({ location: es.intl.string(es.t.JALI2K) });
    let et = X ? es.intl.format(es.t.BCBIlp, {}) : es.intl.format(es.t.lmMBfy, {}),
        ed = X ? es.intl.format(es.t.U9FY0J, {}) : es.intl.string(es.t.oWCrBq),
        ec = r.useRef(null),
        eu = r.useCallback(() => {
            (0, P.Y)({
                pageType: er.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: er.JJy.ORBS_BALANCE_MENU,
                ctaObject: er.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, f.Cz)({ tab: ea.G2.ORBS, analyticsLocations: [], analyticsSource: m.A.ORBS_BALANCE_MENU });
        }, []);
    r.useEffect(() => {
        (0, h.I)(er.BVt.QUEST_HOME_V2);
    }, []),
        r.useEffect(() => {
            T.g.trigger();
        }, []),
        (0, R.A)({ ignoreCacheTTL: !0 });
    let eA = (0, F.U)({ location: ei.rE.QUEST_PREVIEW_TOOL_2 });
    r.useEffect(() => {
        if (null != C) return;
        let e = new URLSearchParams(n.search),
            i = e.get(Y.L1.TAB);
        if (eA && i === Y.NC.PREVIEW_TOOL) {
            let t = e.get(Y.L1.QUEST_ID);
            g.A.openNativeAppModal("quests", er.e$_.DEEP_LINK, {
                type: el.XK.QUEST_PREVIEW_TOOL,
                params: { questId: t, tab: i },
            });
            return;
        }
        let r = performance.getEntriesByType("navigation")[0];
        if ("POP" === a.action && r?.type === "navigate" && t && i !== Y.NC.PREVIEW_TOOL) {
            let t = (0, k.uJ)(n.hash) ? null : n.hash.substring(1),
                r = e.get(Y.L1.SORT),
                a = e.get(Y.L1.FILTER);
            g.A.openNativeAppModal("quests", er.e$_.DEEP_LINK, {
                type: el.XK.QUEST_HOME,
                params: { questId: (0, k.uJ)(t) ? void 0 : t, sort: r, filter: a, tab: i },
            });
        }
    }, [n.search, C, eA, a.action, n.hash, t]),
        r.useEffect(() => {
            t && (0, N.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eh = r.useCallback(() => {
            (0, z.navigateToQuestHome)({ fromContent: V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                M.default.track(er.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: W.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, W.fF)(V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        e_ = r.useCallback(
            (e) => {
                a.replace({ ...a.location, hash: void 0 }), ec.current?.scrollToTop({ animate: !1 }), O(e);
            },
            [a, O],
        );
    return (0, i.jsx)(J.M.Provider, {
        value: { onAssetLoadComplete: $ },
        children: (0, i.jsx)(em.Provider, {
            value: r.useMemo(
                () => ({ isInDiscoverQuestHomeTab: _, onScroll: U, onSelectTab: e_, scrollerRef: ec, selectedTab: v }),
                [_, U, e_, ec, v],
            ),
            children: (0, i.jsx)("div", {
                className: l()(eo.kL, { [eo.KY]: !t }),
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
                                  children: (0, i.jsx)(eg, { onLoadComplete: $ }),
                              }),
                          header: (0, i.jsx)(L.S, { selectedTabId: v, handleTransition: e_, tabs: w, icon: A.r2v }),
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
                                v !== Y.NC.PREVIEW_TOOL &&
                                (0, i.jsxs)(x.A, {
                                    title: et,
                                    description: ed,
                                    button: (0, i.jsxs)(A.ButtonGroup, {
                                        children: [
                                            (0, i.jsx)(A.Button, {
                                                variant: "overlay-primary",
                                                text: es.intl.string(es.t["1Wm127"]),
                                                onClick: () =>
                                                    (0, f.Cz)({
                                                        tab: ea.G2.ORBS,
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
                                    className: l()(eo.cI, eo.GF),
                                    children: [
                                        (0, i.jsx)("div", { className: l()(eo.nY, eo.vu) }),
                                        (0, i.jsx)(ep, { onLoadComplete: $ }),
                                    ],
                                }),
                            header: (0, i.jsx)(L.S, {
                                selectedTabId: v,
                                handleTransition: e_,
                                tabs: w,
                                icon: A.r2v,
                                children: (0, i.jsx)(D.SS, {
                                    analyticsPage: er.liQ.GLOBAL_DISCOVERY_QUESTS,
                                    cardAlignment: D.cP.END,
                                    ctaText: es.intl.string(es.t["J+vlIR"]),
                                    ctaOnClick: eu,
                                }),
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
                                        (0, i.jsx)(ep, { onLoadComplete: $ }),
                                    ],
                                }),
                            header: (0, i.jsxs)(y.Ay, {
                                variant: y.Z5.OVERLAY,
                                children: [
                                    (0, i.jsx)("div", { className: eo.T_ }),
                                    (0, i.jsx)(y.ns, { scrollPosition: H }),
                                    (0, i.jsx)(y.T4, { icon: A.r2v }),
                                ],
                            }),
                            children: (0, i.jsx)("div", {
                                className: eo.vR,
                                children: (0, i.jsx)(b.A, { tabs: w, selectedTab: v, onTabSelect: e_ }),
                            }),
                        }),
            }),
        }),
    });
};
