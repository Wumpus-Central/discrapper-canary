n.d(t, { Z: () => em }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(828700),
    o = n(772848),
    c = n(990547),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    f = n(150063),
    h = n(607070),
    g = n(100527),
    m = n(213609),
    _ = n(625128),
    b = n(362762),
    E = n(335131),
    O = n(252618),
    y = n(70097),
    v = n(266454),
    I = n(632285),
    C = n(979233),
    S = n(17845),
    T = n(374939),
    N = n(233374),
    j = n(611928),
    P = n(763433),
    x = n(283293),
    A = n(507808),
    Z = n(825102),
    w = n(775451),
    L = n(451478),
    R = n(626135),
    D = n(526167),
    M = n(63063),
    k = n(624138),
    U = n(617136),
    G = n(113434),
    B = n(833435),
    H = n(497505),
    V = n(220068),
    F = n(36243),
    z = n(877109),
    Y = n(110560),
    W = n(150560),
    q = n(672188),
    K = n(558652),
    Q = n(736683),
    J = n(879438),
    X = n(251360),
    $ = n(466962),
    ee = n(452081),
    et = n(46140),
    en = n(981631),
    er = n(215023),
    ei = n(186901),
    el = n(388032),
    ea = n(728963),
    es = n(13299),
    eo = n(890631),
    ec = n(164792),
    eu = n(524777),
    ed = n(913713),
    ep = n(431115);
function ef(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, Z.WX)({ location: et.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        s = (0, u.e7)([L.Z], () => L.Z.isFocused()),
        { ref: o, inViewport: c } = (0, q.a)(),
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
        let e = (0, D.rO)();
        return (0, r.jsx)(y.Z, {
            ref: (e) => {
                (d.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(ea.bannerAsset, ea.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? eo.Z : ec.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: es.ZP,
        className: a()(ea.bannerAsset, ea.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
function eh(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: eu.ZP,
                className: a()(ea.bannerAsset, ea.redirectNoticeBannerAsset),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: ep.ZP,
                className: a()(ea.bannerAsset, ea.redirectNoticeBannerAsset),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: ed.ZP,
                className: a()(ea.bannerAsset, ea.redirectNoticeBannerAsset),
                alt: "",
            }),
        ],
    });
}
function eg(e) {
    let {
            banner: t,
            children: n,
            header: i,
            scrollerRef: l,
            selectedTab: a,
            onScroll: s,
            onSelectTab: o,
            withQuestsGrid: c = !0,
        } = e,
        u = (0, B._)({ location: et.dr.QUEST_HOME_DESKTOP }) ? Q.Z : Q.j;
    return (0, r.jsxs)($.t.Provider, {
        value: l,
        children: [
            i,
            (0, r.jsxs)(x.Z, {
                onScroll: s,
                ref: l,
                children: [
                    t,
                    (0, r.jsxs)(T.Z, {
                        children: [
                            n,
                            c
                                ? a === G.e5.CLAIMED
                                    ? (0, r.jsx)(u, { onSelectTab: o })
                                    : a === G.e5.PREVIEW_TOOL
                                      ? (0, r.jsx)(z.Z, {})
                                      : (0, r.jsx)(K.Z, {})
                                : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
let em = function (e) {
    var t;
    let { topLevelRoute: n } = e,
        l = (0, s.TH)(),
        h = (0, s.k6)(),
        y = (null == (t = (0, s.LX)(l.pathname, en.Z5c.QUEST_HOME)) ? void 0 : t.isExact) === !0,
        T = (0, u.e7)([b.Z], () => b.Z.getState("quests")),
        { selectedTab: x, onSelectTab: L, tabs: D } = (0, ee.z)({ withClaimedQuestsTab: !y });
    i.useLayoutEffect(() => {
        y && x === G.e5.CLAIMED && V.Z.setState({ tab: G.e5.ALL });
    }, [y, x]);
    let { onScroll: B, scrollPosition: z } = (0, C.M)(),
        q = W.Z.getState().getUtmCurrentContext(),
        K = (0, J.z)((e) => e.registerAssetLoad),
        Q = i.useRef(q);
    i.useEffect(() => {
        Q.current = q;
    }),
        i.useEffect(() => {
            let { current: e } = Q;
            (0, m.h)({
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
    let { enabled: $ } = (0, Z.WX)({ location: et.dr.QUEST_HOME_DESKTOP }),
        es = i.useCallback(() => {
            if ($) return void window.open(en.EYA.PAID_TERMS_ORBS);
            window.open(M.Z.getArticleURL(en.BhN.QUESTS_LEARN_MORE));
        }, [$]);
    (0, O.Tt)({ location: el.intl.string(el.t.JALI2K) });
    let eo = $ ? el.intl.format(el.t.BCBIlp, {}) : el.intl.format(el.t.lmMBfy, {}),
        ec = $ ? el.intl.format(el.t.U9FY0J, {}) : el.intl.string(el.t.oWCrBq),
        eu = i.useRef(null),
        ed = i.useCallback(() => {
            (0, A.Y)({
                pageType: en.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: en.jXE.ORBS_BALANCE_MENU,
                ctaObject: en.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, E.mK)({
                    tab: er.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: g.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        (0, f.Y)(en.Z5c.QUEST_HOME_V2);
    }, []),
        i.useEffect(() => {
            I.C.trigger();
        }, []);
    let ep = (0, F.T)({ location: et.dr.QUEST_PREVIEW_TOOL_2 });
    i.useEffect(() => {
        if (null != T) return;
        let e = new URLSearchParams(l.search),
            t = e.get(G.tR.TAB);
        if (ep && t === G.e5.PREVIEW_TOOL) {
            let n = e.get(G.tR.QUEST_ID);
            _.Z.openNativeAppModal("quests", en.Etm.DEEP_LINK, {
                type: ei.jE.QUEST_PREVIEW_TOOL,
                params: {
                    questId: n,
                    tab: t,
                },
            });
            return;
        }
        let r = performance.getEntriesByType("navigation")[0];
        if ("POP" === h.action && (null == r ? void 0 : r.type) === "navigate" && n && t !== G.e5.PREVIEW_TOOL) {
            let t = (0, k.Ew)(l.hash) ? null : l.hash.substring(1),
                n = e.get(G.tR.SORT),
                r = e.get(G.tR.FILTER);
            _.Z.openNativeAppModal("quests", en.Etm.DEEP_LINK, {
                type: ei.jE.QUEST_HOME,
                params: {
                    questId: (0, k.Ew)(t) ? void 0 : t,
                    sort: n,
                    filter: r,
                },
            });
        }
    }, [l.search, T, ep, h.action, l.hash, n]),
        i.useEffect(() => {
            n && (0, v.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [n]);
    let em = i.useCallback(() => {
        (0, Y.navigateToQuestHome)({ fromContent: H.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
            R.default.track(
                en.rMx.QUEST_CONTENT_CLICKED,
                (function (e) {
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
                })(
                    {
                        cta_name: U.jZ.VIEW_QUESTS,
                        click_id: (0, o.Z)(),
                        is_targeted: !1,
                    },
                    (0, U.mH)(H.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                ),
            );
    }, []);
    return (0, r.jsx)(X.k.Provider, {
        value: { onAssetLoadComplete: K },
        children: (0, r.jsx)("div", {
            className: a()(ea.container, { [ea.withoutTopBorder]: !n }),
            children: y
                ? (0, r.jsx)(eg, {
                      banner: (0, r.jsx)(S.Z, {
                          title: el.intl.string(el.t.z8YP2A),
                          titleColor: "always-white",
                          button: (0, r.jsx)(p.Button, {
                              variant: "overlay-primary",
                              text: el.intl.string(el.t.GURBQl),
                              onClick: em,
                          }),
                          className: ea.redirectNoticeBannerContainer,
                          children: (0, r.jsx)(eh, { onLoadComplete: K }),
                      }),
                      header: (0, r.jsx)(P.a, {
                          selectedTabId: x,
                          handleTransition: L,
                          tabs: D,
                          icon: p.qDn,
                      }),
                      onScroll: B,
                      onSelectTab: L,
                      scrollerRef: eu,
                      selectedTab: x,
                      withQuestsGrid: !1,
                      children: (0, r.jsxs)("div", {
                          className: ea.redirectNoticeContainer,
                          children: [
                              (0, r.jsx)(p.Heading, {
                                  variant: "heading-xl/semibold",
                                  children: el.intl.string(el.t.z8YP2A),
                              }),
                              (0, r.jsx)(p.Text, {
                                  color: "text-secondary",
                                  variant: "text-md/normal",
                                  children: el.intl.string(el.t.HdKh65),
                              }),
                              (0, r.jsx)(p.Avr, {
                                  text: el.intl.string(el.t["1CdL8d"]),
                                  onClick: em,
                                  textVariant: "text-md/normal",
                                  variant: "primary",
                              }),
                          ],
                      }),
                  })
                : $
                  ? (0, r.jsx)(eg, {
                        banner:
                            x !== G.e5.PREVIEW_TOOL &&
                            (0, r.jsxs)(S.Z, {
                                title: eo,
                                description: ec,
                                button: (0, r.jsxs)(p.ButtonGroup, {
                                    children: [
                                        (0, r.jsx)(p.Button, {
                                            variant: "overlay-primary",
                                            text: el.intl.string(el.t["1Wm127"]),
                                            onClick: () =>
                                                (0, E.mK)({
                                                    tab: er.AW.ORBS,
                                                    analyticsLocations: [],
                                                    analyticsSource: g.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                }),
                                        }),
                                        (0, r.jsx)(p.Button, {
                                            variant: "overlay-secondary",
                                            text: el.intl.string(el.t["7kTAgJ"]),
                                            onClick: es,
                                        }),
                                    ],
                                }),
                                className: a()(ea.bannerContainer, ea.orbsContainer),
                                children: [
                                    (0, r.jsx)("div", { className: a()(ea.bannerGradient, ea.orbsGradient) }),
                                    (0, r.jsx)(ef, { onLoadComplete: K }),
                                ],
                            }),
                        header: (0, r.jsx)(P.a, {
                            selectedTabId: x,
                            handleTransition: L,
                            tabs: D,
                            icon: p.qDn,
                            children: (0, r.jsx)(w.V9, {
                                analyticsPage: en.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                cardAlignment: w.ek.END,
                                ctaText: el.intl.string(el.t["J+vlIR"]),
                                ctaOnClick: ed,
                            }),
                        }),
                        onScroll: B,
                        onSelectTab: L,
                        scrollerRef: eu,
                        selectedTab: x,
                    })
                  : (0, r.jsx)(eg, {
                        banner: (0, r.jsxs)(S.Z, {
                            title: eo,
                            description: ec,
                            button: (0, r.jsx)(p.Button, {
                                variant: "overlay-primary",
                                text: el.intl.string(el.t.hvVgAZ),
                                onClick: es,
                                icon: p.Gr1,
                                iconPosition: "end",
                            }),
                            className: ea.bannerContainer,
                            children: [
                                (0, r.jsx)("div", { className: ea.bannerGradient }),
                                (0, r.jsx)(ef, { onLoadComplete: K }),
                            ],
                        }),
                        header: (0, r.jsxs)(j.ZP, {
                            variant: j._6.OVERLAY,
                            children: [
                                (0, r.jsx)("div", { className: ea.dragRegion }),
                                (0, r.jsx)(j.z6, { scrollPosition: z }),
                                (0, r.jsx)(j.aV, { icon: p.qDn }),
                            ],
                        }),
                        onScroll: B,
                        onSelectTab: L,
                        scrollerRef: eu,
                        selectedTab: x,
                        children: (0, r.jsx)("div", {
                            className: ea.tabs,
                            children: (0, r.jsx)(N.Z, {
                                tabs: D,
                                selectedTab: x,
                                onTabSelect: L,
                            }),
                        }),
                    }),
        }),
    });
};
