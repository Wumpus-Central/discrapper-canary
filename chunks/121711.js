n.d(t, { Z: () => eh }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(843611),
    s = n(772848),
    c = n(990547),
    u = n(442837),
    d = n(481060),
    p = n(150063),
    f = n(607070),
    h = n(100527),
    g = n(213609),
    m = n(625128),
    b = n(362762),
    _ = n(335131),
    O = n(252618),
    E = n(70097),
    y = n(632285),
    v = n(979233),
    I = n(17845),
    C = n(374939),
    S = n(233374),
    T = n(611928),
    N = n(763433),
    j = n(283293),
    P = n(507808),
    x = n(825102),
    A = n(775451),
    Z = n(451478),
    w = n(626135),
    L = n(526167),
    R = n(63063),
    D = n(617136),
    k = n(113434),
    M = n(833435),
    U = n(497505),
    G = n(220068),
    B = n(937797),
    H = n(36243),
    V = n(877109),
    F = n(110560),
    z = n(150560),
    W = n(672188),
    q = n(558652),
    Y = n(736683),
    K = n(879438),
    Q = n(251360),
    X = n(466962),
    J = n(452081),
    $ = n(46140),
    ee = n(981631),
    et = n(215023),
    en = n(186901),
    er = n(388032),
    ei = n(838997),
    el = n(13299),
    ea = n(890631),
    eo = n(164792),
    es = n(524777),
    ec = n(913713),
    eu = n(431115);
function ed(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, x.WX)({ location: $.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        o = (0, u.e7)([Z.Z], () => Z.Z.isFocused()),
        { ref: s, inViewport: c } = (0, W.a)(),
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
        let e = (0, L.rO)();
        return (0, r.jsx)(E.Z, {
            ref: (e) => {
                (d.current = e), (s.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(ei.bannerAsset, ei.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? ea.Z : eo.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: el.ZP,
        className: a()(ei.bannerAsset, ei.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
function ep(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: es.ZP,
                className: a()(ei.bannerAsset, ei.redirectNoticeBannerAsset),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: eu.ZP,
                className: a()(ei.bannerAsset, ei.redirectNoticeBannerAsset),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: ec.ZP,
                className: a()(ei.bannerAsset, ei.redirectNoticeBannerAsset),
                alt: "",
            }),
        ],
    });
}
function ef(e) {
    let { onLoadComplete: t, onScroll: n, onSelectTab: l, selectedTabId: a, scrollerRef: o, tabs: c } = e,
        u = i.useCallback(() => {
            (0, F.navigateToQuestHome)({ fromContent: U.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                w.default.track(
                    ee.rMx.QUEST_CONTENT_CLICKED,
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
                            cta_name: D.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
                            is_targeted: !1,
                        },
                        (0, D.mH)(U.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                    ),
                );
        }, []);
    return (0, r.jsx)(X.t.Provider, {
        value: o,
        children: (0, r.jsxs)(j.Z, {
            onScroll: n,
            ref: o,
            children: [
                (0, r.jsx)(N.a, {
                    selectedTabId: a,
                    handleTransition: l,
                    tabs: c,
                    icon: d.qDn,
                }),
                (0, r.jsx)(I.Z, {
                    title: er.intl.string(er.t.z8YP2N),
                    titleColor: "always-white",
                    button: (0, r.jsx)(d.zxk, {
                        variant: "overlay-primary",
                        text: er.intl.string(er.t.GURBQk),
                        onClick: u,
                    }),
                    className: ei.redirectNoticeBannerContainer,
                    children: (0, r.jsx)(ep, { onLoadComplete: t }),
                }),
                (0, r.jsx)(C.Z, {
                    children: (0, r.jsxs)("div", {
                        className: ei.redirectNoticeContainer,
                        children: [
                            (0, r.jsx)(d.X6q, {
                                variant: "heading-xl/semibold",
                                children: er.intl.string(er.t.z8YP2N),
                            }),
                            (0, r.jsx)(d.Text, {
                                color: "text-secondary",
                                variant: "text-md/normal",
                                children: er.intl.string(er.t["HdKh6+"]),
                            }),
                            (0, r.jsx)(d.Avr, {
                                text: er.intl.string(er.t["1CdL8f"]),
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
let eh = function (e) {
    var t;
    let { withTopBorder: n } = e,
        { enabled: l } = B.m8.useConfig({ location: $.dr.QUEST_HOME_DESKTOP }),
        s = (0, o.TH)(),
        f = (null == (t = (0, o.LX)(s.pathname, ee.Z5c.QUEST_HOME)) ? void 0 : t.isExact) === !0,
        E = l && f,
        Z = (0, u.e7)([b.Z], () => b.Z.getState("quests")),
        { selectedTab: w, onSelectTab: L, tabs: D } = (0, J.z)({ withClaimedQuestsTab: !E });
    i.useLayoutEffect(() => {
        E && w === k.e5.CLAIMED && G.Z.setState({ tab: k.e5.ALL });
    }, [E, w]);
    let { onScroll: U, scrollPosition: F } = (0, v.M)(),
        W = z.Z.getState().getUtmCurrentContext(),
        el = (0, M._)({ location: $.dr.QUEST_HOME_DESKTOP }) ? Y.Z : Y.j,
        ea = (0, K.z)((e) => e.registerAssetLoad),
        eo = i.useRef(W);
    i.useEffect(() => {
        eo.current = W;
    }),
        i.useEffect(() => {
            let { current: e } = eo;
            (0, g.h)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: w,
                },
            });
        }, [w]);
    let { enabled: es } = (0, x.WX)({ location: $.dr.QUEST_HOME_DESKTOP }),
        ec = i.useCallback(() => {
            if (es) return void window.open(ee.EYA.PAID_TERMS_ORBS);
            window.open(R.Z.getArticleURL(ee.BhN.QUESTS_LEARN_MORE));
        }, [es]);
    (0, O.Tt)({ location: er.intl.string(er.t.JALI2N) });
    let eu = es ? er.intl.format(er.t.BCBIlp, {}) : er.intl.format(er.t.lmMBf3, {}),
        ep = es ? er.intl.format(er.t.U9FY0N, {}) : er.intl.string(er.t.oWCrBg),
        eh = i.useRef(null),
        eg = i.useCallback(() => {
            (0, P.Y)({
                pageType: ee.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ee.jXE.ORBS_BALANCE_MENU,
                ctaObject: ee.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, _.mK)({
                    openInLayer: !1,
                    tab: et.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: h.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    i.useEffect(() => {
        l && (0, p.Y)(ee.Z5c.QUEST_HOME_V2);
    }, [l]),
        i.useEffect(() => {
            y.C.trigger();
        }, []);
    let em = (0, H.T)({ location: $.dr.QUEST_PREVIEW_TOOL_2 });
    return (
        i.useEffect(() => {
            if (null != Z || !em) return;
            let e = new URLSearchParams(s.search),
                t = e.get(k.tR.TAB),
                n = e.get(k.tR.QUEST_ID);
            t === k.e5.PREVIEW_TOOL &&
                m.Z.openNativeAppModal("quests", ee.Etm.DEEP_LINK, {
                    type: en.jE.QUEST_PREVIEW_TOOL,
                    params: {
                        questId: n,
                        tab: t,
                    },
                });
        }, [s.search, Z, em]),
        (0, r.jsx)(Q.k.Provider, {
            value: { onAssetLoadComplete: ea },
            children: (0, r.jsx)("div", {
                className: a()(ei.container, { [ei.withoutTopBorder]: !n }),
                children: E
                    ? (0, r.jsx)(ef, {
                          onSelectTab: L,
                          onScroll: U,
                          onLoadComplete: ea,
                          scrollerRef: eh,
                          selectedTabId: w,
                          tabs: D,
                      })
                    : es
                      ? (0, r.jsx)(X.t.Provider, {
                            value: eh,
                            children: (0, r.jsxs)(j.Z, {
                                onScroll: U,
                                ref: eh,
                                children: [
                                    (0, r.jsx)(N.a, {
                                        selectedTabId: w,
                                        handleTransition: L,
                                        tabs: D,
                                        icon: d.qDn,
                                        children: (0, r.jsx)(A.V9, {
                                            analyticsPage: ee.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                            cardAlignment: A.ek.END,
                                            ctaText: er.intl.string(er.t["J+vlIS"]),
                                            ctaOnClick: eg,
                                        }),
                                    }),
                                    w !== k.e5.PREVIEW_TOOL &&
                                        (0, r.jsxs)(I.Z, {
                                            title: eu,
                                            description: ep,
                                            button: es
                                                ? (0, r.jsxs)(d.hE2, {
                                                      children: [
                                                          (0, r.jsx)(d.zxk, {
                                                              variant: "overlay-primary",
                                                              text: er.intl.string(er.t["1Wm129"]),
                                                              onClick: () =>
                                                                  (0, _.mK)({
                                                                      openInLayer: !1,
                                                                      tab: et.AW.ORBS,
                                                                      analyticsLocations: [],
                                                                      analyticsSource: h.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                                  }),
                                                          }),
                                                          (0, r.jsx)(d.zxk, {
                                                              variant: "overlay-secondary",
                                                              text: er.intl.string(er.t["7kTAgI"]),
                                                              onClick: ec,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(d.zxk, {
                                                      variant: "overlay-primary",
                                                      text: er.intl.string(er.t.hvVgAQ),
                                                      onClick: ec,
                                                      icon: d.Gr1,
                                                      iconPosition: "end",
                                                  }),
                                            className: a()(ei.bannerContainer, { [ei.orbsContainer]: es }),
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: a()(ei.bannerGradient, { [ei.orbsGradient]: es }),
                                                }),
                                                (0, r.jsx)(ed, { onLoadComplete: ea }),
                                            ],
                                        }),
                                    (0, r.jsx)(C.Z, {
                                        children:
                                            w === k.e5.CLAIMED
                                                ? (0, r.jsx)(el, { onSelectTab: L })
                                                : w === k.e5.PREVIEW_TOOL
                                                  ? (0, r.jsx)(V.Z, {})
                                                  : (0, r.jsx)(q.Z, {}),
                                    }),
                                ],
                            }),
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(T.ZP, {
                                    variant: T._6.OVERLAY,
                                    children: [
                                        (0, r.jsx)("div", { className: ei.dragRegion }),
                                        (0, r.jsx)(T.z6, { scrollPosition: F }),
                                        (0, r.jsx)(T.aV, { icon: d.qDn }),
                                    ],
                                }),
                                (0, r.jsx)(X.t.Provider, {
                                    value: eh,
                                    children: (0, r.jsxs)(j.Z, {
                                        onScroll: U,
                                        ref: eh,
                                        children: [
                                            (0, r.jsxs)(I.Z, {
                                                title: eu,
                                                description: ep,
                                                button: (0, r.jsx)(d.zxk, {
                                                    variant: "overlay-primary",
                                                    text: er.intl.string(er.t.hvVgAQ),
                                                    onClick: ec,
                                                    icon: d.Gr1,
                                                    iconPosition: "end",
                                                }),
                                                className: a()(ei.bannerContainer, { [ei.orbsContainer]: es }),
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: a()(ei.bannerGradient, { [ei.orbsGradient]: es }),
                                                    }),
                                                    (0, r.jsx)(ed, { onLoadComplete: ea }),
                                                ],
                                            }),
                                            (0, r.jsxs)(C.Z, {
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: ei.tabs,
                                                        children: (0, r.jsx)(S.Z, {
                                                            tabs: D,
                                                            selectedTab: w,
                                                            onTabSelect: L,
                                                        }),
                                                    }),
                                                    w === k.e5.CLAIMED
                                                        ? (0, r.jsx)(el, { onSelectTab: L })
                                                        : w === k.e5.PREVIEW_TOOL
                                                          ? (0, r.jsx)(V.Z, {})
                                                          : (0, r.jsx)(q.Z, {}),
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
