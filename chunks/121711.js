n.d(t, { Z: () => em }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(843611),
    s = n(772848),
    c = n(990547),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    f = n(150063),
    h = n(607070),
    g = n(100527),
    m = n(213609),
    b = n(625128),
    _ = n(362762),
    E = n(335131),
    O = n(252618),
    v = n(70097),
    y = n(266454),
    I = n(632285),
    C = n(979233),
    S = n(17845),
    N = n(374939),
    T = n(233374),
    P = n(611928),
    j = n(763433),
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
    V = n(937797),
    F = n(36243),
    z = n(877109),
    W = n(110560),
    Y = n(150560),
    q = n(672188),
    K = n(558652),
    Q = n(736683),
    X = n(879438),
    J = n(251360),
    $ = n(466962),
    ee = n(452081),
    et = n(46140),
    en = n(981631),
    er = n(215023),
    ei = n(186901),
    el = n(388032),
    ea = n(728963),
    eo = n(13299),
    es = n(890631),
    ec = n(164792),
    eu = n(524777),
    ed = n(913713),
    ep = n(431115);
function ef(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, Z.WX)({ location: et.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        o = (0, u.e7)([L.Z], () => L.Z.isFocused()),
        { ref: s, inViewport: c } = (0, q.a)(),
        d = i.useRef(null);
    if (
        (i.useEffect(() => {
            (null == d ? void 0 : d.current) != null &&
                (d.current.paused || (o && c && !l)
                    ? d.current.paused && !l && c && o && d.current.play()
                    : d.current.pause());
        }, [l, c, o]),
        n)
    ) {
        let e = (0, D.rO)();
        return (0, r.jsx)(v.Z, {
            ref: (e) => {
                (d.current = e), (s.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(ea.bannerAsset, ea.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? es.Z : ec.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: eo.ZP,
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
    let { onLoadComplete: t, onScroll: n, onSelectTab: l, selectedTabId: a, scrollerRef: o, tabs: c } = e,
        u = i.useCallback(() => {
            (0, W.navigateToQuestHome)({ fromContent: B.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
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
                            cta_name: k.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
                            is_targeted: !1,
                        },
                        (0, k.mH)(B.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                    ),
                );
        }, []);
    return (0, r.jsx)($.t.Provider, {
        value: o,
        children: (0, r.jsxs)(x.Z, {
            onScroll: n,
            ref: o,
            children: [
                (0, r.jsx)(j.a, {
                    selectedTabId: a,
                    handleTransition: l,
                    tabs: c,
                    icon: p.qDn,
                }),
                (0, r.jsx)(S.Z, {
                    title: el.intl.string(el.t.z8YP2A),
                    titleColor: "always-white",
                    button: (0, r.jsx)(p.Button, {
                        variant: "overlay-primary",
                        text: el.intl.string(el.t.GURBQl),
                        onClick: u,
                    }),
                    className: ea.redirectNoticeBannerContainer,
                    children: (0, r.jsx)(eh, { onLoadComplete: t }),
                }),
                (0, r.jsx)(N.Z, {
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
                                onClick: u,
                                textVariant: "text-md/normal",
                                variant: "primary",
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
let em = function (e) {
    var t;
    let { topLevelRoute: n } = e,
        { enabled: l } = V.m8.useConfig({ location: et.dr.QUEST_HOME_DESKTOP }),
        s = (0, o.TH)(),
        h = (null == (t = (0, o.LX)(s.pathname, en.Z5c.QUEST_HOME)) ? void 0 : t.isExact) === !0,
        v = l && h,
        L = (0, u.e7)([_.Z], () => _.Z.getState("quests")),
        { selectedTab: R, onSelectTab: D, tabs: k } = (0, ee.z)({ withClaimedQuestsTab: !v });
    i.useLayoutEffect(() => {
        v && R === U.e5.CLAIMED && H.Z.setState({ tab: U.e5.ALL });
    }, [v, R]);
    let { onScroll: B, scrollPosition: W } = (0, C.M)(),
        q = Y.Z.getState().getUtmCurrentContext(),
        eo = (0, G._)({ location: et.dr.QUEST_HOME_DESKTOP }) ? Q.Z : Q.j,
        es = (0, X.z)((e) => e.registerAssetLoad),
        ec = i.useRef(q);
    i.useEffect(() => {
        ec.current = q;
    }),
        i.useEffect(() => {
            let { current: e } = ec;
            (0, m.h)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: R,
                },
            });
        }, [R]);
    let { enabled: eu } = (0, Z.WX)({ location: et.dr.QUEST_HOME_DESKTOP }),
        ed = i.useCallback(() => {
            if (eu) return void window.open(en.EYA.PAID_TERMS_ORBS);
            window.open(M.Z.getArticleURL(en.BhN.QUESTS_LEARN_MORE));
        }, [eu]);
    (0, O.Tt)({ location: el.intl.string(el.t.JALI2K) });
    let ep = eu ? el.intl.format(el.t.BCBIlp, {}) : el.intl.format(el.t.lmMBfy, {}),
        eh = eu ? el.intl.format(el.t.U9FY0J, {}) : el.intl.string(el.t.oWCrBq),
        em = i.useRef(null),
        eb = i.useCallback(() => {
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
        l && (0, f.Y)(en.Z5c.QUEST_HOME_V2);
    }, [l]),
        i.useEffect(() => {
            I.C.trigger();
        }, []);
    let e_ = (0, F.T)({ location: et.dr.QUEST_PREVIEW_TOOL_2 });
    i.useEffect(() => {
        if (null != L || !e_) return;
        let e = new URLSearchParams(s.search),
            t = e.get(U.tR.TAB),
            n = e.get(U.tR.QUEST_ID);
        t === U.e5.PREVIEW_TOOL &&
            b.Z.openNativeAppModal("quests", en.Etm.DEEP_LINK, {
                type: ei.jE.QUEST_PREVIEW_TOOL,
                params: {
                    questId: n,
                    tab: t,
                },
            });
    }, [s.search, L, e_]);
    let { enabled: eE } = V.GE.useConfig({ location: et.dr.QUEST_HOME_DESKTOP });
    return (
        i.useEffect(() => {
            n && eE && (0, y.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [n, eE]),
        (0, r.jsx)(J.k.Provider, {
            value: { onAssetLoadComplete: es },
            children: (0, r.jsx)("div", {
                className: a()(ea.container, { [ea.withoutTopBorder]: !n }),
                children: v
                    ? (0, r.jsx)(eg, {
                          onSelectTab: D,
                          onScroll: B,
                          onLoadComplete: es,
                          scrollerRef: em,
                          selectedTabId: R,
                          tabs: k,
                      })
                    : eu
                      ? (0, r.jsxs)($.t.Provider, {
                            value: em,
                            children: [
                                (0, r.jsx)(j.a, {
                                    selectedTabId: R,
                                    handleTransition: D,
                                    tabs: k,
                                    icon: p.qDn,
                                    children: (0, r.jsx)(w.V9, {
                                        analyticsPage: en.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                        cardAlignment: w.ek.END,
                                        ctaText: el.intl.string(el.t["J+vlIR"]),
                                        ctaOnClick: eb,
                                    }),
                                }),
                                (0, r.jsxs)(x.Z, {
                                    onScroll: B,
                                    ref: em,
                                    children: [
                                        R !== U.e5.PREVIEW_TOOL &&
                                            (0, r.jsxs)(S.Z, {
                                                title: ep,
                                                description: eh,
                                                button: eu
                                                    ? (0, r.jsxs)(p.ButtonGroup, {
                                                          children: [
                                                              (0, r.jsx)(p.Button, {
                                                                  variant: "overlay-primary",
                                                                  text: el.intl.string(el.t["1Wm127"]),
                                                                  onClick: () =>
                                                                      (0, E.mK)({
                                                                          tab: er.AW.ORBS,
                                                                          analyticsLocations: [],
                                                                          analyticsSource:
                                                                              g.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                                      }),
                                                              }),
                                                              (0, r.jsx)(p.Button, {
                                                                  variant: "overlay-secondary",
                                                                  text: el.intl.string(el.t["7kTAgJ"]),
                                                                  onClick: ed,
                                                              }),
                                                          ],
                                                      })
                                                    : (0, r.jsx)(p.Button, {
                                                          variant: "overlay-primary",
                                                          text: el.intl.string(el.t.hvVgAZ),
                                                          onClick: ed,
                                                          icon: p.Gr1,
                                                          iconPosition: "end",
                                                      }),
                                                className: a()(ea.bannerContainer, { [ea.orbsContainer]: eu }),
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: a()(ea.bannerGradient, { [ea.orbsGradient]: eu }),
                                                    }),
                                                    (0, r.jsx)(ef, { onLoadComplete: es }),
                                                ],
                                            }),
                                        (0, r.jsx)(N.Z, {
                                            children:
                                                R === U.e5.CLAIMED
                                                    ? (0, r.jsx)(eo, { onSelectTab: D })
                                                    : R === U.e5.PREVIEW_TOOL
                                                      ? (0, r.jsx)(z.Z, {})
                                                      : (0, r.jsx)(K.Z, {}),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(P.ZP, {
                                    variant: P._6.OVERLAY,
                                    children: [
                                        (0, r.jsx)("div", { className: ea.dragRegion }),
                                        (0, r.jsx)(P.z6, { scrollPosition: W }),
                                        (0, r.jsx)(P.aV, { icon: p.qDn }),
                                    ],
                                }),
                                (0, r.jsx)($.t.Provider, {
                                    value: em,
                                    children: (0, r.jsxs)(x.Z, {
                                        onScroll: B,
                                        ref: em,
                                        children: [
                                            (0, r.jsxs)(S.Z, {
                                                title: ep,
                                                description: eh,
                                                button: (0, r.jsx)(p.Button, {
                                                    variant: "overlay-primary",
                                                    text: el.intl.string(el.t.hvVgAZ),
                                                    onClick: ed,
                                                    icon: p.Gr1,
                                                    iconPosition: "end",
                                                }),
                                                className: a()(ea.bannerContainer, { [ea.orbsContainer]: eu }),
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: a()(ea.bannerGradient, { [ea.orbsGradient]: eu }),
                                                    }),
                                                    (0, r.jsx)(ef, { onLoadComplete: es }),
                                                ],
                                            }),
                                            (0, r.jsxs)(N.Z, {
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: ea.tabs,
                                                        children: (0, r.jsx)(T.Z, {
                                                            tabs: k,
                                                            selectedTab: R,
                                                            onTabSelect: D,
                                                        }),
                                                    }),
                                                    R === U.e5.CLAIMED
                                                        ? (0, r.jsx)(eo, { onSelectTab: D })
                                                        : R === U.e5.PREVIEW_TOOL
                                                          ? (0, r.jsx)(z.Z, {})
                                                          : (0, r.jsx)(K.Z, {}),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
            }),
        })
    );
};
