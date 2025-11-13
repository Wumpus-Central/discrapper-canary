n.d(t, { Z: () => eg }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(843611),
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
    k = n(617136),
    U = n(113434),
    G = n(833435),
    B = n(497505),
    H = n(220068),
    V = n(36243),
    F = n(877109),
    z = n(110560),
    Y = n(150560),
    W = n(672188),
    q = n(558652),
    K = n(736683),
    Q = n(879438),
    J = n(251360),
    X = n(466962),
    $ = n(452081),
    ee = n(46140),
    et = n(981631),
    en = n(215023),
    er = n(186901),
    ei = n(388032),
    el = n(728963),
    ea = n(13299),
    es = n(890631),
    eo = n(164792),
    ec = n(524777),
    eu = n(913713),
    ed = n(431115);
function ep(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, Z.WX)({ location: ee.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        s = (0, u.e7)([L.Z], () => L.Z.isFocused()),
        { ref: o, inViewport: c } = (0, W.a)(),
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
            className: a()(el.bannerAsset, el.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? es.Z : eo.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: ea.ZP,
        className: a()(el.bannerAsset, el.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
function ef(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: ec.ZP,
                className: a()(el.bannerAsset, el.redirectNoticeBannerAsset),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: ed.ZP,
                className: a()(el.bannerAsset, el.redirectNoticeBannerAsset),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: eu.ZP,
                className: a()(el.bannerAsset, el.redirectNoticeBannerAsset),
                alt: "",
            }),
        ],
    });
}
function eh(e) {
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
        u = (0, G._)({ location: ee.dr.QUEST_HOME_DESKTOP }) ? K.Z : K.j;
    return (0, r.jsxs)(X.t.Provider, {
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
                                ? a === U.e5.CLAIMED
                                    ? (0, r.jsx)(u, { onSelectTab: o })
                                    : a === U.e5.PREVIEW_TOOL
                                      ? (0, r.jsx)(F.Z, {})
                                      : (0, r.jsx)(q.Z, {})
                                : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
let eg = function (e) {
    var t;
    let { topLevelRoute: n } = e,
        l = (0, s.TH)(),
        h = (null == (t = (0, s.LX)(l.pathname, et.Z5c.QUEST_HOME)) ? void 0 : t.isExact) === !0,
        y = (0, u.e7)([b.Z], () => b.Z.getState("quests")),
        { selectedTab: T, onSelectTab: x, tabs: L } = (0, $.z)({ withClaimedQuestsTab: !h });
    i.useLayoutEffect(() => {
        h && T === U.e5.CLAIMED && H.Z.setState({ tab: U.e5.ALL });
    }, [h, T]);
    let { onScroll: D, scrollPosition: G } = (0, C.M)(),
        F = Y.Z.getState().getUtmCurrentContext(),
        W = (0, Q.z)((e) => e.registerAssetLoad),
        q = i.useRef(F);
    i.useEffect(() => {
        q.current = F;
    }),
        i.useEffect(() => {
            let { current: e } = q;
            (0, m.h)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: T,
                },
            });
        }, [T]);
    let { enabled: K } = (0, Z.WX)({ location: ee.dr.QUEST_HOME_DESKTOP }),
        X = i.useCallback(() => {
            if (K) return void window.open(et.EYA.PAID_TERMS_ORBS);
            window.open(M.Z.getArticleURL(et.BhN.QUESTS_LEARN_MORE));
        }, [K]);
    (0, O.Tt)({ location: ei.intl.string(ei.t.JALI2K) });
    let ea = K ? ei.intl.format(ei.t.BCBIlp, {}) : ei.intl.format(ei.t.lmMBfy, {}),
        es = K ? ei.intl.format(ei.t.U9FY0J, {}) : ei.intl.string(ei.t.oWCrBq),
        eo = i.useRef(null),
        ec = i.useCallback(() => {
            (0, A.Y)({
                pageType: et.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: et.jXE.ORBS_BALANCE_MENU,
                ctaObject: et.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, E.mK)({
                    tab: en.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: g.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        (0, f.Y)(et.Z5c.QUEST_HOME_V2);
    }, []),
        i.useEffect(() => {
            I.C.trigger();
        }, []);
    let eu = (0, V.T)({ location: ee.dr.QUEST_PREVIEW_TOOL_2 });
    i.useEffect(() => {
        if (null != y || !eu) return;
        let e = new URLSearchParams(l.search),
            t = e.get(U.tR.TAB),
            n = e.get(U.tR.QUEST_ID);
        t === U.e5.PREVIEW_TOOL &&
            _.Z.openNativeAppModal("quests", et.Etm.DEEP_LINK, {
                type: er.jE.QUEST_PREVIEW_TOOL,
                params: {
                    questId: n,
                    tab: t,
                },
            });
    }, [l.search, y, eu]),
        i.useEffect(() => {
            n && (0, v.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [n]);
    let ed = i.useCallback(() => {
        (0, z.navigateToQuestHome)({ fromContent: B.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
            R.default.track(
                et.rMx.QUEST_CONTENT_CLICKED,
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
                        cta_name: k.jZ.VIEW_QUESTS,
                        click_id: (0, o.Z)(),
                        is_targeted: !1,
                    },
                    (0, k.mH)(B.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                ),
            );
    }, []);
    return (0, r.jsx)(J.k.Provider, {
        value: { onAssetLoadComplete: W },
        children: (0, r.jsx)("div", {
            className: a()(el.container, { [el.withoutTopBorder]: !n }),
            children: h
                ? (0, r.jsx)(eh, {
                      banner: (0, r.jsx)(S.Z, {
                          title: ei.intl.string(ei.t.z8YP2A),
                          titleColor: "always-white",
                          button: (0, r.jsx)(p.Button, {
                              variant: "overlay-primary",
                              text: ei.intl.string(ei.t.GURBQl),
                              onClick: ed,
                          }),
                          className: el.redirectNoticeBannerContainer,
                          children: (0, r.jsx)(ef, { onLoadComplete: W }),
                      }),
                      header: (0, r.jsx)(P.a, {
                          selectedTabId: T,
                          handleTransition: x,
                          tabs: L,
                          icon: p.qDn,
                      }),
                      onScroll: D,
                      onSelectTab: x,
                      scrollerRef: eo,
                      selectedTab: T,
                      withQuestsGrid: !1,
                      children: (0, r.jsxs)("div", {
                          className: el.redirectNoticeContainer,
                          children: [
                              (0, r.jsx)(p.Heading, {
                                  variant: "heading-xl/semibold",
                                  children: ei.intl.string(ei.t.z8YP2A),
                              }),
                              (0, r.jsx)(p.Text, {
                                  color: "text-secondary",
                                  variant: "text-md/normal",
                                  children: ei.intl.string(ei.t.HdKh65),
                              }),
                              (0, r.jsx)(p.Avr, {
                                  text: ei.intl.string(ei.t["1CdL8d"]),
                                  onClick: ed,
                                  textVariant: "text-md/normal",
                                  variant: "primary",
                              }),
                          ],
                      }),
                  })
                : K
                  ? (0, r.jsx)(eh, {
                        banner:
                            T !== U.e5.PREVIEW_TOOL &&
                            (0, r.jsxs)(S.Z, {
                                title: ea,
                                description: es,
                                button: (0, r.jsxs)(p.ButtonGroup, {
                                    children: [
                                        (0, r.jsx)(p.Button, {
                                            variant: "overlay-primary",
                                            text: ei.intl.string(ei.t["1Wm127"]),
                                            onClick: () =>
                                                (0, E.mK)({
                                                    tab: en.AW.ORBS,
                                                    analyticsLocations: [],
                                                    analyticsSource: g.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                }),
                                        }),
                                        (0, r.jsx)(p.Button, {
                                            variant: "overlay-secondary",
                                            text: ei.intl.string(ei.t["7kTAgJ"]),
                                            onClick: X,
                                        }),
                                    ],
                                }),
                                className: a()(el.bannerContainer, el.orbsContainer),
                                children: [
                                    (0, r.jsx)("div", { className: a()(el.bannerGradient, el.orbsGradient) }),
                                    (0, r.jsx)(ep, { onLoadComplete: W }),
                                ],
                            }),
                        header: (0, r.jsx)(P.a, {
                            selectedTabId: T,
                            handleTransition: x,
                            tabs: L,
                            icon: p.qDn,
                            children: (0, r.jsx)(w.V9, {
                                analyticsPage: et.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                cardAlignment: w.ek.END,
                                ctaText: ei.intl.string(ei.t["J+vlIR"]),
                                ctaOnClick: ec,
                            }),
                        }),
                        onScroll: D,
                        onSelectTab: x,
                        scrollerRef: eo,
                        selectedTab: T,
                    })
                  : (0, r.jsx)(eh, {
                        banner: (0, r.jsxs)(S.Z, {
                            title: ea,
                            description: es,
                            button: (0, r.jsx)(p.Button, {
                                variant: "overlay-primary",
                                text: ei.intl.string(ei.t.hvVgAZ),
                                onClick: X,
                                icon: p.Gr1,
                                iconPosition: "end",
                            }),
                            className: el.bannerContainer,
                            children: [
                                (0, r.jsx)("div", { className: el.bannerGradient }),
                                (0, r.jsx)(ep, { onLoadComplete: W }),
                            ],
                        }),
                        header: (0, r.jsxs)(j.ZP, {
                            variant: j._6.OVERLAY,
                            children: [
                                (0, r.jsx)("div", { className: el.dragRegion }),
                                (0, r.jsx)(j.z6, { scrollPosition: G }),
                                (0, r.jsx)(j.aV, { icon: p.qDn }),
                            ],
                        }),
                        onScroll: D,
                        onSelectTab: x,
                        scrollerRef: eo,
                        selectedTab: T,
                        children: (0, r.jsx)("div", {
                            className: el.tabs,
                            children: (0, r.jsx)(N.Z, {
                                tabs: L,
                                selectedTab: T,
                                onTabSelect: x,
                            }),
                        }),
                    }),
        }),
    });
};
