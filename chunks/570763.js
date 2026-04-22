s.r(t), s.d(t, { default: () => eT }), s(323874), s(14289), s(35956);
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(873263),
    o = s(835245),
    c = s(110259),
    u = s(311907),
    d = s(554146),
    m = s(577473),
    _ = s(825484),
    h = s(821609),
    x = s(509434),
    f = s(534514),
    b = s(834730),
    p = s(123292),
    A = s(944791),
    g = s(775602),
    E = s(793574),
    C = s(139286),
    j = s(197111),
    v = s(10088),
    N = s(979286),
    T = s(726249),
    S = s(607470),
    L = s(826673),
    I = s(239365),
    y = s(178629),
    O = s(701508),
    R = s(979590),
    P = s(153527),
    Q = s(783531),
    k = s(334465),
    w = s(318346),
    M = s(270051),
    D = s(142270),
    U = s(531685),
    q = s(954571),
    B = s(676279),
    F = s(975571),
    H = s(240248),
    V = s(341915),
    W = s(631001),
    Y = s(87549),
    G = s(890687),
    z = s(590202),
    $ = s(885459),
    K = s(545986),
    J = s(203879),
    Z = s(409389),
    X = s(881172),
    ee = s(724339),
    et = s(516226),
    es = s(854514),
    en = s(729168),
    el = s(321503),
    ea = s(475529),
    er = s(654487),
    ei = s(652215),
    eo = s(758836),
    ec = s(613057),
    eu = s(985018),
    ed = s(935824),
    em = s(92872),
    e_ = s(880440),
    eh = s(522303),
    ex = s(595411),
    ef = s(602557),
    eb = s(850493);
let ep = l.createContext({});
function eA(e) {
    let { banner: t, children: s, header: a, withFullBleedBanner: r = !1 } = e,
        { onScroll: i, scrollerRef: o } = l.useContext(ep);
    return (0, n.jsxs)(el.X.Provider, {
        value: o,
        children: [
            a,
            (0, n.jsxs)(Q.A, {
                onScroll: i,
                ref: o,
                children: [
                    r && t,
                    (0, n.jsxs)(R.A, { className: ed.Jo, innerClassName: ed.FG, children: [!r && t, s] }),
                ],
            }),
        ],
    });
}
function eg(e) {
    let { selectedTab: t, onSelectTab: s, tabs: l, endContent: a } = e;
    return (0, n.jsx)(P.S, { selectedTabId: t, handleTransition: s, tabs: l, endContent: a, icon: m.r });
}
function eE(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: a } = (0, M.Z)({ location: er.rE.QUEST_HOME_DESKTOP }),
        r = (0, u.bG)([g.A], () => g.A.useReducedMotion),
        i = (0, u.bG)([U.A], () => U.A.isFocused()),
        { ref: o, inViewport: c } = (0, J.p)(),
        d = l.useRef(null);
    if (
        (l.useEffect(() => {
            d?.current != null &&
                (d.current.paused || (i && c && !r)
                    ? d.current.paused && !r && c && i && d.current.play()
                    : d.current.pause());
        }, [r, c, i]),
        a)
    ) {
        let e = (0, B.TM)();
        return (0, n.jsx)(S.A, {
            ref: (e) => {
                (d.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: s,
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, n.jsx)("source", { src: e ? em.A : e_.A, type: e ? "video/mp4" : "video/webm" }),
        });
    }
    return (0, n.jsx)("img", { src: eb.A, className: s, alt: "", onLoad: t });
}
function eC(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, M.Z)({ location: er.rE.QUEST_HOME_DESKTOP });
    return (0, n.jsxs)("div", {
        className: r()(ed.Tv, { [ed.lJ]: s }),
        children: [
            (0, n.jsx)(es.Ae, {}),
            (0, n.jsx)("div", { className: r()(ed.nz, { [ed.ZZ]: s }) }),
            (0, n.jsx)(eE, { onLoadComplete: t, className: r()(ed.Fe, { [ed.H4]: s, [ed.Q8]: !s }) }),
        ],
    });
}
function ej(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, M.Z)({ location: er.rE.QUEST_HOME_DESKTOP }),
        a = l.useCallback(() => {
            s ? window.open(ei.X7G.PAID_TERMS_ORBS) : window.open(F.A.getArticleURL(ei.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, n.jsx)(en.A, {
        title: s ? eu.intl.format(eu.t.BCBIlp, {}) : eu.intl.format(eu.t.lmMBfy, {}),
        subtitle: s ? eu.intl.format(eu.t.U9FY0J, {}) : eu.intl.string(eu.t.oWCrBq),
        buttons: s
            ? (0, n.jsxs)(_.e, {
                  children: [
                      (0, n.jsx)(h.$, {
                          variant: "overlay-primary",
                          text: eu.intl.string(eu.t["1Wm127"]),
                          onClick: () =>
                              (0, N.Cz)({
                                  tab: eo.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: E.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, n.jsx)(h.$, {
                          variant: "overlay-secondary",
                          text: eu.intl.string(eu.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, n.jsx)(h.$, {
                  variant: "overlay-primary",
                  text: eu.intl.string(eu.t.hvVgAZ),
                  onClick: a,
                  icon: x.I,
                  iconPosition: "end",
              }),
        background: (0, n.jsx)(eC, { onAssetLoad: t }),
    });
}
function ev(e) {
    let { onAssetLoad: t, onQuestCtaClick: s } = e,
        { questHomeHero: l, isLoading: a } = (0, G.lg)();
    return a
        ? (0, n.jsx)(es.Hk, {})
        : null != l
          ? (0, n.jsx)(es.Ay, { hero: l, onQuestCtaClick: s })
          : (0, n.jsx)(ej, { onAssetLoad: t });
}
function eN(e) {
    let { onLoadComplete: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: eh.Ay, className: r()(ed.BW, ed.rZ), alt: "" }),
            (0, n.jsx)("img", { src: ef.Ay, className: r()(ed.BW, ed.rZ), alt: "", onLoad: t }),
            (0, n.jsx)("img", { src: ex.Ay, className: r()(ed.BW, ed.rZ), alt: "" }),
        ],
    });
}
let eT = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, i.zy)(),
        a = (0, i.W6)(),
        m = l.useMemo(() => (0, k.B)(s.pathname, ei.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        _ = (0, u.bG)([v.A], () => v.A.getState("quests")),
        { selectedTab: x, onSelectTab: g, tabs: S } = (0, ea.J)({ withClaimedQuestsTab: !m });
    l.useLayoutEffect(() => {
        m && x === G.NC.CLAIMED && W.A.setState({ tab: G.NC.ALL });
    }, [m, x]);
    let { onScroll: R } = (0, y.G)(),
        P = Y.A.getState().getUtmCurrentContext(),
        Q = (0, ee.W)((e) => e.registerAssetLoad),
        U = l.useRef(P);
    l.useEffect(() => {
        U.current = P;
    }),
        l.useEffect(() => {
            let { current: e } = U;
            (0, C.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: x,
                },
            });
        }, [x]);
    let { enabled: B } = (0, M.Z)({ location: er.rE.QUEST_HOME_DESKTOP });
    (0, T.HU)({ location: eu.intl.string(eu.t.JALI2K) });
    let F = l.useRef(null),
        J = l.useRef(null),
        es = l.useCallback((e) => {
            J.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    J.current?.scrollToQuest(e);
                });
        }, []),
        en = l.useCallback(() => {
            (0, w.Y)({
                pageType: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ei.JJy.ORBS_BALANCE_MENU,
                ctaObject: ei.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, N.Cz)({ tab: eo.G2.ORBS, analyticsLocations: [], analyticsSource: E.A.ORBS_BALANCE_MENU });
        }, []);
    l.useEffect(() => {
        (0, A.I)(ei.BVt.QUEST_HOME);
    }, []),
        l.useEffect(() => {
            I.g.trigger();
        }, []),
        l.useEffect(() => {
            if (null != _) return;
            let e = new URLSearchParams(s.search),
                n = e.get(G.L1.TAB);
            if (n === G.NC.PREVIEW_TOOL) {
                let t = e.get(G.L1.QUEST_ID);
                j.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
                    type: ec.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: n },
                });
                return;
            }
            let l = performance.getEntriesByType("navigation")[0];
            if ("POP" === a.action && l?.type === "navigate" && t && n !== G.NC.PREVIEW_TOOL) {
                let t = (0, H.uJ)(s.hash) ? null : s.hash.substring(1),
                    l = e.get(G.L1.SORT),
                    a = e.get(G.L1.FILTER);
                j.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
                    type: ec.XK.QUEST_HOME,
                    params: { questId: (0, H.uJ)(t) ? void 0 : t, sort: l, filter: a, tab: n },
                });
            }
        }, [s.search, _, a.action, s.hash, t]),
        l.useEffect(() => {
            t && (0, L.Dr)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let el = l.useCallback(() => {
            (0, K.navigateToQuestHome)({ fromContent: V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                q.default.track(ei.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: z.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, z.fF)(V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        em = l.useCallback(
            (e) => {
                a.replace({ ...a.location, hash: void 0 }), F.current?.scrollToTop({ animate: !1 }), g(e);
            },
            [a, g],
        );
    return (0, n.jsx)(et.M.Provider, {
        value: { onAssetLoadComplete: Q },
        children: (0, n.jsx)(ep.Provider, {
            value: l.useMemo(() => ({ onScroll: R, scrollerRef: F }), [R, F]),
            children: (0, n.jsx)("div", {
                className: r()(ed.kL, { [ed.KY]: !t }),
                children: m
                    ? (0, n.jsx)(eA, {
                          withFullBleedBanner: !0,
                          header: (0, n.jsx)(eg, { selectedTab: x, onSelectTab: em, tabs: S }),
                          banner: (0, n.jsx)(O.A, {
                              title: eu.intl.string(eu.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, n.jsx)(h.$, {
                                  variant: "overlay-primary",
                                  text: eu.intl.string(eu.t.GURBQl),
                                  onClick: el,
                              }),
                              className: ed.Gj,
                              children: (0, n.jsx)(eN, { onLoadComplete: Q }),
                          }),
                          children: (0, n.jsxs)("div", {
                              className: ed.kj,
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-xl/semibold",
                                      children: eu.intl.string(eu.t.z8YP2A),
                                  }),
                                  (0, n.jsx)(b.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: eu.intl.string(eu.t.HdKh65),
                                  }),
                                  (0, n.jsx)(p.Q, {
                                      text: eu.intl.string(eu.t["1CdL8d"]),
                                      onClick: el,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, n.jsx)(eA, {
                          header: (0, n.jsx)(eg, {
                              selectedTab: x,
                              onSelectTab: em,
                              tabs: S,
                              endContent:
                                  B &&
                                  (0, n.jsx)(D.SS, {
                                      analyticsPage: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: D.cP.END,
                                      ctaText: eu.intl.string(eu.t["J+vlIR"]),
                                      ctaOnClick: en,
                                  }),
                          }),
                          banner: x === G.NC.ALL && (0, n.jsx)(ev, { onAssetLoad: Q, onQuestCtaClick: es }),
                          children:
                              x === G.NC.CLAIMED
                                  ? (0, n.jsx)(X.A, { onSelectTab: em })
                                  : x === G.NC.PREVIEW_TOOL
                                    ? (0, n.jsx)($.A, {})
                                    : (0, n.jsx)(Z.A, { ref: J }),
                      }),
            }),
        }),
    });
};
