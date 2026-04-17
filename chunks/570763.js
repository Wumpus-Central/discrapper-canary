n.d(t, { A: () => eC }), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
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
    b = n(153527),
    y = n(783531),
    O = n(334465),
    L = n(318346),
    R = n(270051),
    P = n(142270),
    D = n(531685),
    j = n(954571),
    M = n(676279),
    w = n(975571),
    U = n(240248),
    G = n(341915),
    k = n(631001),
    V = n(87549),
    B = n(245853),
    H = n(890687),
    F = n(590202),
    Y = n(885459),
    W = n(545986),
    K = n(203879),
    q = n(409389),
    z = n(881172),
    $ = n(724339),
    Q = n(516226),
    X = n(854514),
    Z = n(729168),
    J = n(321503),
    ee = n(475529),
    et = n(654487),
    en = n(652215),
    ei = n(758836),
    el = n(613057),
    ea = n(985018),
    er = n(935824),
    es = n(92872),
    eo = n(880440),
    ed = n(522303),
    ec = n(595411),
    eu = n(602557),
    eA = n(850493);
let eh = l.createContext({});
function e_(e) {
    let { banner: t, children: n, header: a, withFullBleedBanner: r = !1 } = e,
        { onScroll: s, scrollerRef: o } = l.useContext(eh);
    return (0, i.jsxs)(J.X.Provider, {
        value: o,
        children: [
            a,
            (0, i.jsxs)(y.A, {
                onScroll: s,
                ref: o,
                children: [
                    r && t,
                    (0, i.jsxs)(v.A, { className: er.Jo, innerClassName: er.FG, children: [!r && t, n] }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { selectedTab: t, onSelectTab: n, tabs: l, endContent: a } = e;
    return (0, i.jsx)(b.S, { selectedTabId: t, handleTransition: n, tabs: l, endContent: a, icon: A.r2v });
}
function eg(e) {
    let { onLoadComplete: t, className: n } = e,
        { enabled: a } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP }),
        r = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        s = (0, c.bG)([D.A], () => D.A.isFocused()),
        { ref: o, inViewport: d } = (0, K.p)(),
        u = l.useRef(null);
    if (
        (l.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (s && d && !r)
                    ? u.current.paused && !r && d && s && u.current.play()
                    : u.current.pause());
        }, [r, d, s]),
        a)
    ) {
        let e = (0, M.TM)();
        return (0, i.jsx)(C.A, {
            ref: (e) => {
                (u.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: n,
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, i.jsx)("source", { src: e ? es.A : eo.A, type: e ? "video/mp4" : "video/webm" }),
        });
    }
    return (0, i.jsx)("img", { src: eA.A, className: n, alt: "", onLoad: t });
}
function ep(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP });
    return (0, i.jsxs)("div", {
        className: r()(er.Tv, { [er.lJ]: n }),
        children: [
            (0, i.jsx)(X.Ae, {}),
            (0, i.jsx)("div", { className: r()(er.nz, { [er.ZZ]: n }) }),
            (0, i.jsx)(eg, { onLoadComplete: t, className: r()(er.Fe, { [er.H4]: n, [er.Q8]: !n }) }),
        ],
    });
}
function eE(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP }),
        a = l.useCallback(() => {
            n ? window.open(en.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(en.MVz.QUESTS_LEARN_MORE));
        }, [n]);
    return (0, i.jsx)(Z.A, {
        title: n ? ea.intl.format(ea.t.BCBIlp, {}) : ea.intl.format(ea.t.lmMBfy, {}),
        subtitle: n ? ea.intl.format(ea.t.U9FY0J, {}) : ea.intl.string(ea.t.oWCrBq),
        buttons: n
            ? (0, i.jsxs)(A.ButtonGroup, {
                  children: [
                      (0, i.jsx)(A.Button, {
                          variant: "overlay-primary",
                          text: ea.intl.string(ea.t["1Wm127"]),
                          onClick: () =>
                              (0, I.Cz)({
                                  tab: ei.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: m.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, i.jsx)(A.Button, {
                          variant: "overlay-secondary",
                          text: ea.intl.string(ea.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, i.jsx)(A.Button, {
                  variant: "overlay-primary",
                  text: ea.intl.string(ea.t.hvVgAZ),
                  onClick: a,
                  icon: A.I9m,
                  iconPosition: "end",
              }),
        background: (0, i.jsx)(ep, { onAssetLoad: t }),
    });
}
function eI(e) {
    let { onAssetLoad: t, onQuestCtaClick: n } = e,
        { questHomeHero: l, isLoading: a } = (0, H.lg)(),
        { enabled: r } = B.sn.useConfig({ location: et.rE.QUEST_HOME_DESKTOP });
    if (r) {
        if (a) return (0, i.jsx)(X.Hk, {});
        if (null != l) return (0, i.jsx)(X.Ay, { hero: l, onQuestCtaClick: n });
    }
    return (0, i.jsx)(eE, { onAssetLoad: t });
}
function ef(e) {
    let { onLoadComplete: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: ed.Ay, className: r()(er.BW, er.rZ), alt: "" }),
            (0, i.jsx)("img", { src: eu.Ay, className: r()(er.BW, er.rZ), alt: "", onLoad: t }),
            (0, i.jsx)("img", { src: ec.Ay, className: r()(er.BW, er.rZ), alt: "" }),
        ],
    });
}
let eC = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, s.zy)(),
        a = (0, s.W6)(),
        _ = l.useMemo(() => (0, O.B)(n.pathname, en.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [n.pathname]),
        C = (0, c.bG)([E.A], () => E.A.getState("quests")),
        { selectedTab: v, onSelectTab: b, tabs: y } = (0, ee.J)({ withClaimedQuestsTab: !_ });
    l.useLayoutEffect(() => {
        _ && v === H.NC.CLAIMED && k.A.setState({ tab: H.NC.ALL });
    }, [_, v]);
    let { onScroll: D } = (0, S.G)(),
        M = V.A.getState().getUtmCurrentContext(),
        w = (0, $.W)((e) => e.registerAssetLoad),
        B = l.useRef(M);
    l.useEffect(() => {
        B.current = M;
    }),
        l.useEffect(() => {
            let { current: e } = B;
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
    let { enabled: K } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP });
    (0, f.HU)({ location: ea.intl.string(ea.t.JALI2K) });
    let X = l.useRef(null),
        Z = l.useRef(null),
        J = l.useCallback((e) => {
            Z.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    Z.current?.scrollToQuest(e);
                });
        }, []),
        es = l.useCallback(() => {
            (0, L.Y)({
                pageType: en.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: en.JJy.ORBS_BALANCE_MENU,
                ctaObject: en.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, I.Cz)({ tab: ei.G2.ORBS, analyticsLocations: [], analyticsSource: m.A.ORBS_BALANCE_MENU });
        }, []);
    l.useEffect(() => {
        (0, h.I)(en.BVt.QUEST_HOME);
    }, []),
        l.useEffect(() => {
            N.g.trigger();
        }, []),
        l.useEffect(() => {
            if (null != C) return;
            let e = new URLSearchParams(n.search),
                i = e.get(H.L1.TAB);
            if (i === H.NC.PREVIEW_TOOL) {
                let t = e.get(H.L1.QUEST_ID);
                p.A.openNativeAppModal("quests", en.e$_.DEEP_LINK, {
                    type: el.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: i },
                });
                return;
            }
            let l = performance.getEntriesByType("navigation")[0];
            if ("POP" === a.action && l?.type === "navigate" && t && i !== H.NC.PREVIEW_TOOL) {
                let t = (0, U.uJ)(n.hash) ? null : n.hash.substring(1),
                    l = e.get(H.L1.SORT),
                    a = e.get(H.L1.FILTER);
                p.A.openNativeAppModal("quests", en.e$_.DEEP_LINK, {
                    type: el.XK.QUEST_HOME,
                    params: { questId: (0, U.uJ)(t) ? void 0 : t, sort: l, filter: a, tab: i },
                });
            }
        }, [n.search, C, a.action, n.hash, t]),
        l.useEffect(() => {
            t && (0, T.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eo = l.useCallback(() => {
            (0, W.navigateToQuestHome)({ fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                j.default.track(en.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: F.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, F.fF)(G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        ed = l.useCallback(
            (e) => {
                a.replace({ ...a.location, hash: void 0 }), X.current?.scrollToTop({ animate: !1 }), b(e);
            },
            [a, b],
        );
    return (0, i.jsx)(Q.M.Provider, {
        value: { onAssetLoadComplete: w },
        children: (0, i.jsx)(eh.Provider, {
            value: l.useMemo(() => ({ onScroll: D, scrollerRef: X }), [D, X]),
            children: (0, i.jsx)("div", {
                className: r()(er.kL, { [er.KY]: !t }),
                children: _
                    ? (0, i.jsx)(e_, {
                          withFullBleedBanner: !0,
                          header: (0, i.jsx)(em, { selectedTab: v, onSelectTab: ed, tabs: y }),
                          banner: (0, i.jsx)(x.A, {
                              title: ea.intl.string(ea.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, i.jsx)(A.Button, {
                                  variant: "overlay-primary",
                                  text: ea.intl.string(ea.t.GURBQl),
                                  onClick: eo,
                              }),
                              className: er.Gj,
                              children: (0, i.jsx)(ef, { onLoadComplete: w }),
                          }),
                          children: (0, i.jsxs)("div", {
                              className: er.kj,
                              children: [
                                  (0, i.jsx)(A.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: ea.intl.string(ea.t.z8YP2A),
                                  }),
                                  (0, i.jsx)(A.Text, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: ea.intl.string(ea.t.HdKh65),
                                  }),
                                  (0, i.jsx)(A.QWc, {
                                      text: ea.intl.string(ea.t["1CdL8d"]),
                                      onClick: eo,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, i.jsx)(e_, {
                          header: (0, i.jsx)(em, {
                              selectedTab: v,
                              onSelectTab: ed,
                              tabs: y,
                              endContent:
                                  K &&
                                  (0, i.jsx)(P.SS, {
                                      analyticsPage: en.liQ.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: P.cP.END,
                                      ctaText: ea.intl.string(ea.t["J+vlIR"]),
                                      ctaOnClick: es,
                                  }),
                          }),
                          banner: v === H.NC.ALL && (0, i.jsx)(eI, { onAssetLoad: w, onQuestCtaClick: J }),
                          children:
                              v === H.NC.CLAIMED
                                  ? (0, i.jsx)(z.A, { onSelectTab: ed })
                                  : v === H.NC.PREVIEW_TOOL
                                    ? (0, i.jsx)(Y.A, {})
                                    : (0, i.jsx)(q.A, { ref: Z }),
                      }),
            }),
        }),
    });
};
