n.d(t, { A: () => ep }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    er = n(613057),
    el = n(985018),
    ea = n(749504),
    es = n(92872),
    eo = n(880440),
    ed = n(522303),
    ec = n(595411),
    eu = n(602557),
    eA = n(850493);
let eh = r.createContext({});
function e_(e) {
    let { onLoadComplete: t, className: n } = e,
        { enabled: l } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP }),
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
        l)
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
function em(e) {
    let { onLoadComplete: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: ed.Ay, className: a()(ea.BW, ea.rZ), alt: "" }),
            (0, i.jsx)("img", { src: eu.Ay, className: a()(ea.BW, ea.rZ), alt: "", onLoad: t }),
            (0, i.jsx)("img", { src: ec.Ay, className: a()(ea.BW, ea.rZ), alt: "" }),
        ],
    });
}
function eg(e) {
    let { renderBanner: t, children: n, header: l, withQuestsGrid: s = !0 } = e,
        { isInDiscoverQuestHomeTab: o, onScroll: d, onSelectTab: c, scrollerRef: u, selectedTab: A } = r.useContext(eh),
        { questHomeHero: h, isLoading: _ } = (0, H.lg)(),
        { enabled: m } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP }),
        { enabled: g } = B.sn.useConfig({ location: et.rE.QUEST_HOME_DESKTOP }),
        p = r.useRef(null),
        E = r.useCallback((e) => {
            p.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    p.current?.scrollToQuest(e);
                });
        }, []);
    return (0, i.jsxs)(J.X.Provider, {
        value: u,
        children: [
            l,
            (0, i.jsxs)(y.A, {
                onScroll: d,
                ref: u,
                children: [
                    (function () {
                        if (!o && g) {
                            if (A !== H.NC.ALL) return null;
                            if (_) return (0, i.jsx)(X.Hk, {});
                            if (null != h) return (0, i.jsx)(X.Ay, { hero: h, onQuestCtaClick: E });
                        }
                        return t();
                    })(),
                    (0, i.jsx)(v.A, {
                        children: (0, i.jsxs)("div", {
                            className: a()(ea.Qs, { [ea.HR]: g && !m && A !== H.NC.ALL }),
                            children: [
                                n,
                                s
                                    ? A === H.NC.CLAIMED
                                        ? (0, i.jsx)(z.A, { onSelectTab: c })
                                        : A === H.NC.PREVIEW_TOOL
                                          ? (0, i.jsx)(Y.A, {})
                                          : (0, i.jsx)(q.A, { ref: p })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let ep = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, s.zy)(),
        l = (0, s.W6)(),
        _ = r.useMemo(() => (0, O.B)(n.pathname, en.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [n.pathname]),
        C = (0, c.bG)([E.A], () => E.A.getState("quests")),
        { selectedTab: v, onSelectTab: y, tabs: D } = (0, ee.J)({ withClaimedQuestsTab: !_ });
    r.useLayoutEffect(() => {
        _ && v === H.NC.CLAIMED && k.A.setState({ tab: H.NC.ALL });
    }, [_, v]);
    let { onScroll: M } = (0, S.G)(),
        B = V.A.getState().getUtmCurrentContext(),
        Y = (0, $.W)((e) => e.registerAssetLoad),
        K = r.useRef(B);
    r.useEffect(() => {
        K.current = B;
    }),
        r.useEffect(() => {
            let { current: e } = K;
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
    let { enabled: q } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP }),
        z = r.useCallback(() => {
            q ? window.open(en.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(en.MVz.QUESTS_LEARN_MORE));
        }, [q]);
    (0, f.HU)({ location: el.intl.string(el.t.JALI2K) });
    let J = q ? el.intl.format(el.t.BCBIlp, {}) : el.intl.format(el.t.lmMBfy, {}),
        es = q ? el.intl.format(el.t.U9FY0J, {}) : el.intl.string(el.t.oWCrBq),
        eo = r.useRef(null),
        ed = r.useCallback(() => {
            (0, L.Y)({
                pageType: en.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: en.JJy.ORBS_BALANCE_MENU,
                ctaObject: en.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, I.Cz)({ tab: ei.G2.ORBS, analyticsLocations: [], analyticsSource: m.A.ORBS_BALANCE_MENU });
        }, []);
    r.useEffect(() => {
        (0, h.I)(en.BVt.QUEST_HOME);
    }, []),
        r.useEffect(() => {
            N.g.trigger();
        }, []),
        r.useEffect(() => {
            if (null != C) return;
            let e = new URLSearchParams(n.search),
                i = e.get(H.L1.TAB);
            if (i === H.NC.PREVIEW_TOOL) {
                let t = e.get(H.L1.QUEST_ID);
                p.A.openNativeAppModal("quests", en.e$_.DEEP_LINK, {
                    type: er.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: i },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === l.action && r?.type === "navigate" && t && i !== H.NC.PREVIEW_TOOL) {
                let t = (0, U.uJ)(n.hash) ? null : n.hash.substring(1),
                    r = e.get(H.L1.SORT),
                    l = e.get(H.L1.FILTER);
                p.A.openNativeAppModal("quests", en.e$_.DEEP_LINK, {
                    type: er.XK.QUEST_HOME,
                    params: { questId: (0, U.uJ)(t) ? void 0 : t, sort: r, filter: l, tab: i },
                });
            }
        }, [n.search, C, l.action, n.hash, t]),
        r.useEffect(() => {
            t && (0, T.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let ec = r.useCallback(() => {
            (0, W.navigateToQuestHome)({ fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                j.default.track(en.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: F.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, F.fF)(G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        eu = r.useCallback(
            (e) => {
                l.replace({ ...l.location, hash: void 0 }), eo.current?.scrollToTop({ animate: !1 }), y(e);
            },
            [l, y],
        );
    return (0, i.jsx)(Q.M.Provider, {
        value: { onAssetLoadComplete: Y },
        children: (0, i.jsx)(eh.Provider, {
            value: r.useMemo(
                () => ({ isInDiscoverQuestHomeTab: _, onScroll: M, onSelectTab: eu, scrollerRef: eo, selectedTab: v }),
                [_, M, eu, eo, v],
            ),
            children: (0, i.jsx)("div", {
                className: a()(ea.kL, { [ea.KY]: !t }),
                children: _
                    ? (0, i.jsx)(eg, {
                          renderBanner: () =>
                              (0, i.jsx)(x.A, {
                                  title: el.intl.string(el.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, i.jsx)(A.Button, {
                                      variant: "overlay-primary",
                                      text: el.intl.string(el.t.GURBQl),
                                      onClick: ec,
                                  }),
                                  className: ea.Gj,
                                  children: (0, i.jsx)(em, { onLoadComplete: Y }),
                              }),
                          header: (0, i.jsx)(b.S, { selectedTabId: v, handleTransition: eu, tabs: D, icon: A.r2v }),
                          withQuestsGrid: !1,
                          children: (0, i.jsxs)("div", {
                              className: ea.kj,
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
                                      onClick: ec,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, i.jsx)(eg, {
                          renderBanner: () =>
                              v !== H.NC.PREVIEW_TOOL &&
                              (0, i.jsx)(Z.A, {
                                  title: J,
                                  subtitle: es,
                                  buttons: q
                                      ? (0, i.jsxs)(A.ButtonGroup, {
                                            children: [
                                                (0, i.jsx)(A.Button, {
                                                    variant: "overlay-primary",
                                                    text: el.intl.string(el.t["1Wm127"]),
                                                    onClick: () =>
                                                        (0, I.Cz)({
                                                            tab: ei.G2.ORBS,
                                                            analyticsLocations: [],
                                                            analyticsSource: m.A.INTRO_TO_ORBS_QUEST_BANNER,
                                                        }),
                                                }),
                                                (0, i.jsx)(A.Button, {
                                                    variant: "overlay-secondary",
                                                    text: el.intl.string(el.t["7kTAgJ"]),
                                                    onClick: z,
                                                }),
                                            ],
                                        })
                                      : (0, i.jsx)(A.Button, {
                                            variant: "overlay-primary",
                                            text: el.intl.string(el.t.hvVgAZ),
                                            onClick: z,
                                            icon: A.I9m,
                                            iconPosition: "end",
                                        }),
                                  background: (0, i.jsxs)("div", {
                                      className: a()(ea.Tv, { [ea.lJ]: q }),
                                      children: [
                                          (0, i.jsx)(X.Ae, {}),
                                          (0, i.jsx)("div", { className: a()(ea.nz, { [ea.ZZ]: q }) }),
                                          (0, i.jsx)(e_, {
                                              onLoadComplete: Y,
                                              className: a()(ea.Fe, { [ea.H4]: q, [ea.Q8]: !q }),
                                          }),
                                      ],
                                  }),
                              }),
                          header: (0, i.jsx)(b.S, {
                              selectedTabId: v,
                              handleTransition: eu,
                              tabs: D,
                              endContent: q
                                  ? (0, i.jsx)(P.SS, {
                                        analyticsPage: en.liQ.GLOBAL_DISCOVERY_QUESTS,
                                        cardAlignment: P.cP.END,
                                        ctaText: el.intl.string(el.t["J+vlIR"]),
                                        ctaOnClick: ed,
                                    })
                                  : null,
                              icon: A.r2v,
                          }),
                      }),
            }),
        }),
    });
};
