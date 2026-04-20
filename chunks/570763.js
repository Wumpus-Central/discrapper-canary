n.d(t, { A: () => ef }), n(323874), n(14289), n(35956);
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
    b = n(979590),
    v = n(153527),
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
    B = n(890687),
    H = n(590202),
    F = n(885459),
    Y = n(545986),
    W = n(203879),
    K = n(409389),
    q = n(881172),
    z = n(724339),
    $ = n(516226),
    Q = n(854514),
    X = n(729168),
    Z = n(321503),
    J = n(475529),
    ee = n(654487),
    et = n(652215),
    en = n(758836),
    ei = n(613057),
    el = n(985018),
    ea = n(935824),
    er = n(92872),
    es = n(880440),
    eo = n(522303),
    ed = n(595411),
    ec = n(602557),
    eu = n(850493);
let eA = l.createContext({});
function eh(e) {
    let { banner: t, children: n, header: a, withFullBleedBanner: r = !1 } = e,
        { onScroll: s, scrollerRef: o } = l.useContext(eA);
    return (0, i.jsxs)(Z.X.Provider, {
        value: o,
        children: [
            a,
            (0, i.jsxs)(y.A, {
                onScroll: s,
                ref: o,
                children: [
                    r && t,
                    (0, i.jsxs)(b.A, { className: ea.Jo, innerClassName: ea.FG, children: [!r && t, n] }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { selectedTab: t, onSelectTab: n, tabs: l, endContent: a } = e;
    return (0, i.jsx)(v.S, { selectedTabId: t, handleTransition: n, tabs: l, endContent: a, icon: A.r2v });
}
function em(e) {
    let { onLoadComplete: t, className: n } = e,
        { enabled: a } = (0, R.Z)({ location: ee.rE.QUEST_HOME_DESKTOP }),
        r = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        s = (0, c.bG)([D.A], () => D.A.isFocused()),
        { ref: o, inViewport: d } = (0, W.p)(),
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
            children: (0, i.jsx)("source", { src: e ? er.A : es.A, type: e ? "video/mp4" : "video/webm" }),
        });
    }
    return (0, i.jsx)("img", { src: eu.A, className: n, alt: "", onLoad: t });
}
function eg(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = (0, R.Z)({ location: ee.rE.QUEST_HOME_DESKTOP });
    return (0, i.jsxs)("div", {
        className: r()(ea.Tv, { [ea.lJ]: n }),
        children: [
            (0, i.jsx)(Q.Ae, {}),
            (0, i.jsx)("div", { className: r()(ea.nz, { [ea.ZZ]: n }) }),
            (0, i.jsx)(em, { onLoadComplete: t, className: r()(ea.Fe, { [ea.H4]: n, [ea.Q8]: !n }) }),
        ],
    });
}
function ep(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = (0, R.Z)({ location: ee.rE.QUEST_HOME_DESKTOP }),
        a = l.useCallback(() => {
            n ? window.open(et.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(et.MVz.QUESTS_LEARN_MORE));
        }, [n]);
    return (0, i.jsx)(X.A, {
        title: n ? el.intl.format(el.t.BCBIlp, {}) : el.intl.format(el.t.lmMBfy, {}),
        subtitle: n ? el.intl.format(el.t.U9FY0J, {}) : el.intl.string(el.t.oWCrBq),
        buttons: n
            ? (0, i.jsxs)(A.ButtonGroup, {
                  children: [
                      (0, i.jsx)(A.Button, {
                          variant: "overlay-primary",
                          text: el.intl.string(el.t["1Wm127"]),
                          onClick: () =>
                              (0, I.Cz)({
                                  tab: en.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: m.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, i.jsx)(A.Button, {
                          variant: "overlay-secondary",
                          text: el.intl.string(el.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, i.jsx)(A.Button, {
                  variant: "overlay-primary",
                  text: el.intl.string(el.t.hvVgAZ),
                  onClick: a,
                  icon: A.I9m,
                  iconPosition: "end",
              }),
        background: (0, i.jsx)(eg, { onAssetLoad: t }),
    });
}
function eE(e) {
    let { onAssetLoad: t, onQuestCtaClick: n } = e,
        { questHomeHero: l, isLoading: a } = (0, B.lg)();
    return a
        ? (0, i.jsx)(Q.Hk, {})
        : null != l
          ? (0, i.jsx)(Q.Ay, { hero: l, onQuestCtaClick: n })
          : (0, i.jsx)(ep, { onAssetLoad: t });
}
function eI(e) {
    let { onLoadComplete: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: eo.Ay, className: r()(ea.BW, ea.rZ), alt: "" }),
            (0, i.jsx)("img", { src: ec.Ay, className: r()(ea.BW, ea.rZ), alt: "", onLoad: t }),
            (0, i.jsx)("img", { src: ed.Ay, className: r()(ea.BW, ea.rZ), alt: "" }),
        ],
    });
}
let ef = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, s.zy)(),
        a = (0, s.W6)(),
        _ = l.useMemo(() => (0, O.B)(n.pathname, et.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [n.pathname]),
        C = (0, c.bG)([E.A], () => E.A.getState("quests")),
        { selectedTab: b, onSelectTab: v, tabs: y } = (0, J.J)({ withClaimedQuestsTab: !_ });
    l.useLayoutEffect(() => {
        _ && b === B.NC.CLAIMED && k.A.setState({ tab: B.NC.ALL });
    }, [_, b]);
    let { onScroll: D } = (0, S.G)(),
        M = V.A.getState().getUtmCurrentContext(),
        w = (0, z.W)((e) => e.registerAssetLoad),
        W = l.useRef(M);
    l.useEffect(() => {
        W.current = M;
    }),
        l.useEffect(() => {
            let { current: e } = W;
            (0, g.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: b,
                },
            });
        }, [b]);
    let { enabled: Q } = (0, R.Z)({ location: ee.rE.QUEST_HOME_DESKTOP });
    (0, f.HU)({ location: el.intl.string(el.t.JALI2K) });
    let X = l.useRef(null),
        Z = l.useRef(null),
        er = l.useCallback((e) => {
            Z.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    Z.current?.scrollToQuest(e);
                });
        }, []),
        es = l.useCallback(() => {
            (0, L.Y)({
                pageType: et.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: et.JJy.ORBS_BALANCE_MENU,
                ctaObject: et.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, I.Cz)({ tab: en.G2.ORBS, analyticsLocations: [], analyticsSource: m.A.ORBS_BALANCE_MENU });
        }, []);
    l.useEffect(() => {
        (0, h.I)(et.BVt.QUEST_HOME);
    }, []),
        l.useEffect(() => {
            N.g.trigger();
        }, []),
        l.useEffect(() => {
            if (null != C) return;
            let e = new URLSearchParams(n.search),
                i = e.get(B.L1.TAB);
            if (i === B.NC.PREVIEW_TOOL) {
                let t = e.get(B.L1.QUEST_ID);
                p.A.openNativeAppModal("quests", et.e$_.DEEP_LINK, {
                    type: ei.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: i },
                });
                return;
            }
            let l = performance.getEntriesByType("navigation")[0];
            if ("POP" === a.action && l?.type === "navigate" && t && i !== B.NC.PREVIEW_TOOL) {
                let t = (0, U.uJ)(n.hash) ? null : n.hash.substring(1),
                    l = e.get(B.L1.SORT),
                    a = e.get(B.L1.FILTER);
                p.A.openNativeAppModal("quests", et.e$_.DEEP_LINK, {
                    type: ei.XK.QUEST_HOME,
                    params: { questId: (0, U.uJ)(t) ? void 0 : t, sort: l, filter: a, tab: i },
                });
            }
        }, [n.search, C, a.action, n.hash, t]),
        l.useEffect(() => {
            t && (0, T.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eo = l.useCallback(() => {
            (0, Y.navigateToQuestHome)({ fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                j.default.track(et.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: H.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, H.fF)(G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        ed = l.useCallback(
            (e) => {
                a.replace({ ...a.location, hash: void 0 }), X.current?.scrollToTop({ animate: !1 }), v(e);
            },
            [a, v],
        );
    return (0, i.jsx)($.M.Provider, {
        value: { onAssetLoadComplete: w },
        children: (0, i.jsx)(eA.Provider, {
            value: l.useMemo(() => ({ onScroll: D, scrollerRef: X }), [D, X]),
            children: (0, i.jsx)("div", {
                className: r()(ea.kL, { [ea.KY]: !t }),
                children: _
                    ? (0, i.jsx)(eh, {
                          withFullBleedBanner: !0,
                          header: (0, i.jsx)(e_, { selectedTab: b, onSelectTab: ed, tabs: y }),
                          banner: (0, i.jsx)(x.A, {
                              title: el.intl.string(el.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, i.jsx)(A.Button, {
                                  variant: "overlay-primary",
                                  text: el.intl.string(el.t.GURBQl),
                                  onClick: eo,
                              }),
                              className: ea.Gj,
                              children: (0, i.jsx)(eI, { onLoadComplete: w }),
                          }),
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
                                      onClick: eo,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, i.jsx)(eh, {
                          header: (0, i.jsx)(e_, {
                              selectedTab: b,
                              onSelectTab: ed,
                              tabs: y,
                              endContent:
                                  Q &&
                                  (0, i.jsx)(P.SS, {
                                      analyticsPage: et.liQ.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: P.cP.END,
                                      ctaText: el.intl.string(el.t["J+vlIR"]),
                                      ctaOnClick: es,
                                  }),
                          }),
                          banner: b === B.NC.ALL && (0, i.jsx)(eE, { onAssetLoad: w, onQuestCtaClick: er }),
                          children:
                              b === B.NC.CLAIMED
                                  ? (0, i.jsx)(q.A, { onSelectTab: ed })
                                  : b === B.NC.PREVIEW_TOOL
                                    ? (0, i.jsx)(F.A, {})
                                    : (0, i.jsx)(K.A, { ref: Z }),
                      }),
            }),
        }),
    });
};
