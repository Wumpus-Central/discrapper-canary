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
    m = n(607070),
    h = n(100527),
    g = n(213609),
    _ = n(625128),
    b = n(362762),
    E = n(335131),
    O = n(252618),
    I = n(70097),
    y = n(266454),
    v = n(632285),
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
    V = n(937797),
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
        l = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
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
        return (0, r.jsx)(I.Z, {
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
function em(e) {
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
        u = (0, G._)({ location: et.dr.QUEST_HOME_DESKTOP }) ? Q.Z : Q.j;
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
                                ? a === U.e5.CLAIMED
                                    ? (0, r.jsx)(u, { onSelectTab: o })
                                    : a === U.e5.PREVIEW_TOOL
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
let eg = function (e) {
    var t;
    let { topLevelRoute: n } = e,
        l = (0, s.TH)(),
        m = (null == (t = (0, s.LX)(l.pathname, en.Z5c.QUEST_HOME)) ? void 0 : t.isExact) === !0,
        I = (0, u.e7)([b.Z], () => b.Z.getState("quests")),
        { selectedTab: T, onSelectTab: x, tabs: L } = (0, ee.z)({ withClaimedQuestsTab: !m });
    i.useLayoutEffect(() => {
        m && T === U.e5.CLAIMED && H.Z.setState({ tab: U.e5.ALL });
    }, [m, T]);
    let { onScroll: D, scrollPosition: G } = (0, C.M)(),
        z = W.Z.getState().getUtmCurrentContext(),
        q = (0, J.z)((e) => e.registerAssetLoad),
        K = i.useRef(z);
    i.useEffect(() => {
        K.current = z;
    }),
        i.useEffect(() => {
            let { current: e } = K;
            (0, g.h)({
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
    let { enabled: Q } = (0, Z.WX)({ location: et.dr.QUEST_HOME_DESKTOP }),
        $ = i.useCallback(() => {
            if (Q) return void window.open(en.EYA.PAID_TERMS_ORBS);
            window.open(M.Z.getArticleURL(en.BhN.QUESTS_LEARN_MORE));
        }, [Q]);
    (0, O.Tt)({ location: el.intl.string(el.t.JALI2K) });
    let es = Q ? el.intl.format(el.t.BCBIlp, {}) : el.intl.format(el.t.lmMBfy, {}),
        eo = Q ? el.intl.format(el.t.U9FY0J, {}) : el.intl.string(el.t.oWCrBq),
        ec = i.useRef(null),
        eu = i.useCallback(() => {
            (0, A.Y)({
                pageType: en.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: en.jXE.ORBS_BALANCE_MENU,
                ctaObject: en.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, E.mK)({
                    tab: er.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: h.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        (0, f.Y)(en.Z5c.QUEST_HOME_V2);
    }, []),
        i.useEffect(() => {
            v.C.trigger();
        }, []);
    let ed = (0, F.T)({ location: et.dr.QUEST_PREVIEW_TOOL_2 });
    i.useEffect(() => {
        if (null != I || !ed) return;
        let e = new URLSearchParams(l.search),
            t = e.get(U.tR.TAB),
            n = e.get(U.tR.QUEST_ID);
        t === U.e5.PREVIEW_TOOL &&
            _.Z.openNativeAppModal("quests", en.Etm.DEEP_LINK, {
                type: ei.jE.QUEST_PREVIEW_TOOL,
                params: {
                    questId: n,
                    tab: t,
                },
            });
    }, [l.search, I, ed]);
    let { enabled: ep } = V.GE.useConfig({ location: et.dr.QUEST_HOME_DESKTOP });
    i.useEffect(() => {
        n && ep && (0, y.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING);
    }, [n, ep]);
    let eg = i.useCallback(() => {
        (0, Y.navigateToQuestHome)({ fromContent: B.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
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
                        click_id: (0, o.Z)(),
                        is_targeted: !1,
                    },
                    (0, k.mH)(B.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                ),
            );
    }, []);
    return (0, r.jsx)(X.k.Provider, {
        value: { onAssetLoadComplete: q },
        children: (0, r.jsx)("div", {
            className: a()(ea.container, { [ea.withoutTopBorder]: !n }),
            children: m
                ? (0, r.jsx)(eh, {
                      banner: (0, r.jsx)(S.Z, {
                          title: el.intl.string(el.t.z8YP2A),
                          titleColor: "always-white",
                          button: (0, r.jsx)(p.Button, {
                              variant: "overlay-primary",
                              text: el.intl.string(el.t.GURBQl),
                              onClick: eg,
                          }),
                          className: ea.redirectNoticeBannerContainer,
                          children: (0, r.jsx)(em, { onLoadComplete: q }),
                      }),
                      header: (0, r.jsx)(P.a, {
                          selectedTabId: T,
                          handleTransition: x,
                          tabs: L,
                          icon: p.qDn,
                      }),
                      onScroll: D,
                      onSelectTab: x,
                      scrollerRef: ec,
                      selectedTab: T,
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
                                  onClick: eg,
                                  textVariant: "text-md/normal",
                                  variant: "primary",
                              }),
                          ],
                      }),
                  })
                : Q
                  ? (0, r.jsx)(eh, {
                        banner:
                            T !== U.e5.PREVIEW_TOOL &&
                            (0, r.jsxs)(S.Z, {
                                title: es,
                                description: eo,
                                button: (0, r.jsxs)(p.ButtonGroup, {
                                    children: [
                                        (0, r.jsx)(p.Button, {
                                            variant: "overlay-primary",
                                            text: el.intl.string(el.t["1Wm127"]),
                                            onClick: () =>
                                                (0, E.mK)({
                                                    tab: er.AW.ORBS,
                                                    analyticsLocations: [],
                                                    analyticsSource: h.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                }),
                                        }),
                                        (0, r.jsx)(p.Button, {
                                            variant: "overlay-secondary",
                                            text: el.intl.string(el.t["7kTAgJ"]),
                                            onClick: $,
                                        }),
                                    ],
                                }),
                                className: a()(ea.bannerContainer, ea.orbsContainer),
                                children: [
                                    (0, r.jsx)("div", { className: a()(ea.bannerGradient, ea.orbsGradient) }),
                                    (0, r.jsx)(ef, { onLoadComplete: q }),
                                ],
                            }),
                        header: (0, r.jsx)(P.a, {
                            selectedTabId: T,
                            handleTransition: x,
                            tabs: L,
                            icon: p.qDn,
                            children: (0, r.jsx)(w.V9, {
                                analyticsPage: en.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                cardAlignment: w.ek.END,
                                ctaText: el.intl.string(el.t["J+vlIR"]),
                                ctaOnClick: eu,
                            }),
                        }),
                        onScroll: D,
                        onSelectTab: x,
                        scrollerRef: ec,
                        selectedTab: T,
                    })
                  : (0, r.jsx)(eh, {
                        banner: (0, r.jsxs)(S.Z, {
                            title: es,
                            description: eo,
                            button: (0, r.jsx)(p.Button, {
                                variant: "overlay-primary",
                                text: el.intl.string(el.t.hvVgAZ),
                                onClick: $,
                                icon: p.Gr1,
                                iconPosition: "end",
                            }),
                            className: ea.bannerContainer,
                            children: [
                                (0, r.jsx)("div", { className: ea.bannerGradient }),
                                (0, r.jsx)(ef, { onLoadComplete: q }),
                            ],
                        }),
                        header: (0, r.jsxs)(j.ZP, {
                            variant: j._6.OVERLAY,
                            children: [
                                (0, r.jsx)("div", { className: ea.dragRegion }),
                                (0, r.jsx)(j.z6, { scrollPosition: G }),
                                (0, r.jsx)(j.aV, { icon: p.qDn }),
                            ],
                        }),
                        onScroll: D,
                        onSelectTab: x,
                        scrollerRef: ec,
                        selectedTab: T,
                        children: (0, r.jsx)("div", {
                            className: ea.tabs,
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
