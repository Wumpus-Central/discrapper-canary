n.d(t, { A: () => eg }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(873263),
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
    T = n(826673),
    N = n(239365),
    S = n(178629),
    v = n(701508),
    x = n(979590),
    y = n(153527),
    b = n(783531),
    O = n(334465),
    L = n(318346),
    R = n(270051),
    P = n(142270),
    D = n(531685),
    M = n(954571),
    j = n(676279),
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
    ea = n(985018),
    el = n(207573),
    es = n(92872),
    eo = n(880440),
    ed = n(522303),
    ec = n(595411),
    eu = n(602557),
    eA = n(850493);
let eh = r.createContext({});
function e_(e) {
    let { onLoadComplete: t, className: n } = e,
        { enabled: a } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP }),
        l = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        s = (0, c.bG)([D.A], () => D.A.isFocused()),
        { ref: o, inViewport: d } = (0, K.p)(),
        u = r.useRef(null);
    if (
        (r.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (s && d && !l)
                    ? u.current.paused && !l && d && s && u.current.play()
                    : u.current.pause());
        }, [l, d, s]),
        a)
    ) {
        let e = (0, j.TM)();
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
            (0, i.jsx)("img", { src: ed.Ay, className: l()(el.BW, el.rZ), alt: "" }),
            (0, i.jsx)("img", { src: eu.Ay, className: l()(el.BW, el.rZ), alt: "", onLoad: t }),
            (0, i.jsx)("img", { src: ec.Ay, className: l()(el.BW, el.rZ), alt: "" }),
        ],
    });
}
function ep(e) {
    let { renderBanner: t, children: n, header: a, withQuestsGrid: s = !0 } = e,
        { isInDiscoverQuestHomeTab: o, onScroll: d, onSelectTab: c, scrollerRef: u, selectedTab: A } = r.useContext(eh),
        { questHomeHero: h, isLoading: _ } = (0, H.vG)(),
        { enabled: m } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP }),
        { enabled: p } = B.sn.useConfig({ location: et.rE.QUEST_HOME_DESKTOP }),
        g = r.useRef(null),
        E = r.useCallback((e) => {
            g.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    g.current?.scrollToQuest(e);
                });
        }, []);
    return (0, i.jsxs)(J.X.Provider, {
        value: u,
        children: [
            a,
            (0, i.jsxs)(b.A, {
                onScroll: d,
                ref: u,
                children: [
                    (function () {
                        if (!o && p) {
                            if (A !== H.NC.ALL) return null;
                            if (_) return (0, i.jsx)(X.Hk, {});
                            if (null != h) return (0, i.jsx)(X.Ay, { config: h, onQuestCtaClick: E });
                        }
                        return t();
                    })(),
                    (0, i.jsx)(x.A, {
                        children: (0, i.jsxs)("div", {
                            className: l()(el.Qs, { [el.HR]: p && !m && A !== H.NC.ALL }),
                            children: [
                                n,
                                s
                                    ? A === H.NC.CLAIMED
                                        ? (0, i.jsx)(z.A, { onSelectTab: c })
                                        : A === H.NC.PREVIEW_TOOL
                                          ? (0, i.jsx)(Y.A, {})
                                          : (0, i.jsx)(q.A, { ref: g })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let eg = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, s.zy)(),
        a = (0, s.W6)(),
        _ = r.useMemo(() => (0, O.B)(n.pathname, en.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [n.pathname]),
        C = (0, c.bG)([E.A], () => E.A.getState("quests")),
        { selectedTab: x, onSelectTab: b, tabs: D } = (0, ee.J)({ withClaimedQuestsTab: !_ });
    r.useLayoutEffect(() => {
        _ && x === H.NC.CLAIMED && k.A.setState({ tab: H.NC.ALL });
    }, [_, x]);
    let { onScroll: j } = (0, S.G)(),
        B = V.A.getState().getUtmCurrentContext(),
        Y = (0, $.W)((e) => e.registerAssetLoad),
        K = r.useRef(B);
    r.useEffect(() => {
        K.current = B;
    }),
        r.useEffect(() => {
            let { current: e } = K;
            (0, p.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: x,
                },
            });
        }, [x]);
    let { enabled: q } = (0, R.Z)({ location: et.rE.QUEST_HOME_DESKTOP }),
        z = r.useCallback(() => {
            q ? window.open(en.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(en.MVz.QUESTS_LEARN_MORE));
        }, [q]);
    (0, f.HU)({ location: ea.intl.string(ea.t.JALI2K) });
    let J = q ? ea.intl.format(ea.t.BCBIlp, {}) : ea.intl.format(ea.t.lmMBfy, {}),
        es = q ? ea.intl.format(ea.t.U9FY0J, {}) : ea.intl.string(ea.t.oWCrBq),
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
                g.A.openNativeAppModal("quests", en.e$_.DEEP_LINK, {
                    type: er.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: i },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === a.action && r?.type === "navigate" && t && i !== H.NC.PREVIEW_TOOL) {
                let t = (0, U.uJ)(n.hash) ? null : n.hash.substring(1),
                    r = e.get(H.L1.SORT),
                    a = e.get(H.L1.FILTER);
                g.A.openNativeAppModal("quests", en.e$_.DEEP_LINK, {
                    type: er.XK.QUEST_HOME,
                    params: { questId: (0, U.uJ)(t) ? void 0 : t, sort: r, filter: a, tab: i },
                });
            }
        }, [n.search, C, a.action, n.hash, t]),
        r.useEffect(() => {
            t && (0, T.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let ec = r.useCallback(() => {
            (0, W.navigateToQuestHome)({ fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                M.default.track(en.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: F.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, F.fF)(G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        eu = r.useCallback(
            (e) => {
                a.replace({ ...a.location, hash: void 0 }), eo.current?.scrollToTop({ animate: !1 }), b(e);
            },
            [a, b],
        );
    return (0, i.jsx)(Q.M.Provider, {
        value: { onAssetLoadComplete: Y },
        children: (0, i.jsx)(eh.Provider, {
            value: r.useMemo(
                () => ({ isInDiscoverQuestHomeTab: _, onScroll: j, onSelectTab: eu, scrollerRef: eo, selectedTab: x }),
                [_, j, eu, eo, x],
            ),
            children: (0, i.jsx)("div", {
                className: l()(el.kL, { [el.KY]: !t }),
                children: _
                    ? (0, i.jsx)(ep, {
                          renderBanner: () =>
                              (0, i.jsx)(v.A, {
                                  title: ea.intl.string(ea.t.z8YP2A),
                                  titleColor: "always-white",
                                  button: (0, i.jsx)(A.Button, {
                                      variant: "overlay-primary",
                                      text: ea.intl.string(ea.t.GURBQl),
                                      onClick: ec,
                                  }),
                                  className: el.Gj,
                                  children: (0, i.jsx)(em, { onLoadComplete: Y }),
                              }),
                          header: (0, i.jsx)(y.S, { selectedTabId: x, handleTransition: eu, tabs: D, icon: A.r2v }),
                          withQuestsGrid: !1,
                          children: (0, i.jsxs)("div", {
                              className: el.kj,
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
                                      onClick: ec,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, i.jsx)(ep, {
                          renderBanner: () =>
                              x !== H.NC.PREVIEW_TOOL &&
                              (0, i.jsx)(Z.A, {
                                  title: J,
                                  subtitle: es,
                                  buttons: q
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
                                                    onClick: z,
                                                }),
                                            ],
                                        })
                                      : (0, i.jsx)(A.Button, {
                                            variant: "overlay-primary",
                                            text: ea.intl.string(ea.t.hvVgAZ),
                                            onClick: z,
                                            icon: A.I9m,
                                            iconPosition: "end",
                                        }),
                                  background: (0, i.jsxs)("div", {
                                      className: l()(el.Tv, { [el.lJ]: q }),
                                      children: [
                                          (0, i.jsx)(X.Ae, {}),
                                          (0, i.jsx)("div", { className: l()(el.nz, { [el.ZZ]: q }) }),
                                          (0, i.jsx)(e_, {
                                              onLoadComplete: Y,
                                              className: l()(el.Fe, { [el.H4]: q, [el.Q8]: !q }),
                                          }),
                                      ],
                                  }),
                              }),
                          header: (0, i.jsx)(y.S, {
                              selectedTabId: x,
                              handleTransition: eu,
                              tabs: D,
                              endContent: q
                                  ? (0, i.jsx)(P.SS, {
                                        analyticsPage: en.liQ.GLOBAL_DISCOVERY_QUESTS,
                                        cardAlignment: P.cP.END,
                                        ctaText: ea.intl.string(ea.t["J+vlIR"]),
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
