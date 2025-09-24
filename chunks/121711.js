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
    S = n(374939),
    C = n(233374),
    T = n(611928),
    N = n(763433),
    P = n(283293),
    j = n(507808),
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
    V = n(36243),
    H = n(877109),
    F = n(110560),
    z = n(150560),
    W = n(672188),
    Y = n(558652),
    K = n(736683),
    q = n(879438),
    Q = n(251360),
    X = n(466962),
    J = n(452081),
    $ = n(46140),
    ee = n(981631),
    et = n(215023),
    en = n(186901),
    er = n(388032),
    ei = n(728963),
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
        children: (0, r.jsxs)(P.Z, {
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
                (0, r.jsx)(S.Z, {
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
let eh = function () {
    var e;
    let { enabled: t } = B.m8.useConfig({ location: $.dr.QUEST_HOME_DESKTOP }),
        n = (0, o.TH)(),
        l = (null == (e = (0, o.LX)(n.pathname, ee.Z5c.QUEST_HOME)) ? void 0 : e.isExact) === !0,
        s = t && l,
        f = (0, u.e7)([b.Z], () => b.Z.getState("quests")),
        { selectedTab: E, onSelectTab: Z, tabs: w } = (0, J.z)({ withClaimedQuestsTab: !s });
    i.useLayoutEffect(() => {
        s && E === k.e5.CLAIMED && G.Z.setState({ tab: k.e5.ALL });
    }, [s, E]);
    let { onScroll: L, scrollPosition: D } = (0, v.M)(),
        U = z.Z.getState().getUtmCurrentContext(),
        F = (0, M._)({ location: $.dr.QUEST_HOME_DESKTOP }) ? K.Z : K.j,
        W = (0, q.z)((e) => e.registerAssetLoad),
        el = i.useRef(U);
    i.useEffect(() => {
        el.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = el;
            (0, g.h)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: E,
                },
            });
        }, [E]);
    let { enabled: ea } = (0, x.WX)({ location: $.dr.QUEST_HOME_DESKTOP }),
        eo = i.useCallback(() => {
            if (ea) return void window.open(ee.EYA.PAID_TERMS_ORBS);
            window.open(R.Z.getArticleURL(ee.BhN.QUESTS_LEARN_MORE));
        }, [ea]);
    (0, O.Tt)({ location: er.intl.string(er.t.JALI2N) });
    let es = ea ? er.intl.format(er.t.BCBIlp, {}) : er.intl.format(er.t.lmMBf3, {}),
        ec = ea ? er.intl.format(er.t.U9FY0N, {}) : er.intl.string(er.t.oWCrBg),
        eu = i.useRef(null),
        ep = i.useCallback(() => {
            (0, j.Y)({
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
        t && (0, p.Y)(ee.Z5c.QUEST_HOME_V2);
    }, [t]),
        i.useEffect(() => {
            y.C.trigger();
        }, []);
    let eh = (0, V.T)({ location: $.dr.QUEST_PREVIEW_TOOL_2 });
    return (
        i.useEffect(() => {
            if (null != f || !eh) return;
            let e = new URLSearchParams(n.search),
                t = e.get(k.tR.TAB),
                r = e.get(k.tR.QUEST_ID);
            t === k.e5.PREVIEW_TOOL &&
                m.Z.openNativeAppModal("quests", ee.Etm.DEEP_LINK, {
                    type: en.jE.QUEST_PREVIEW_TOOL,
                    params: {
                        questId: r,
                        tab: t,
                    },
                });
        }, [n.search, f, eh]),
        (0, r.jsx)(Q.k.Provider, {
            value: { onAssetLoadComplete: W },
            children: (0, r.jsx)("div", {
                className: ei.container,
                children: s
                    ? (0, r.jsx)(ef, {
                          onSelectTab: Z,
                          onScroll: L,
                          onLoadComplete: W,
                          scrollerRef: eu,
                          selectedTabId: E,
                          tabs: w,
                      })
                    : ea
                      ? (0, r.jsx)(X.t.Provider, {
                            value: eu,
                            children: (0, r.jsxs)(P.Z, {
                                onScroll: L,
                                ref: eu,
                                children: [
                                    (0, r.jsx)(N.a, {
                                        selectedTabId: E,
                                        handleTransition: Z,
                                        tabs: w,
                                        icon: d.qDn,
                                        children: (0, r.jsx)(A.V9, {
                                            analyticsPage: ee.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                            cardAlignment: A.ek.END,
                                            ctaText: er.intl.string(er.t["J+vlIS"]),
                                            ctaOnClick: ep,
                                        }),
                                    }),
                                    E !== k.e5.PREVIEW_TOOL &&
                                        (0, r.jsxs)(I.Z, {
                                            title: es,
                                            description: ec,
                                            button: ea
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
                                                              onClick: eo,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(d.zxk, {
                                                      variant: "overlay-primary",
                                                      text: er.intl.string(er.t.hvVgAQ),
                                                      onClick: eo,
                                                      icon: d.Gr1,
                                                      iconPosition: "end",
                                                  }),
                                            className: a()(ei.bannerContainer, { [ei.orbsContainer]: ea }),
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: a()(ei.bannerGradient, { [ei.orbsGradient]: ea }),
                                                }),
                                                (0, r.jsx)(ed, { onLoadComplete: W }),
                                            ],
                                        }),
                                    (0, r.jsx)(S.Z, {
                                        children:
                                            E === k.e5.CLAIMED
                                                ? (0, r.jsx)(F, { onSelectTab: Z })
                                                : E === k.e5.PREVIEW_TOOL
                                                  ? (0, r.jsx)(H.Z, {})
                                                  : (0, r.jsx)(Y.Z, {}),
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
                                        (0, r.jsx)(T.z6, { scrollPosition: D }),
                                        (0, r.jsx)(T.aV, { icon: d.qDn }),
                                    ],
                                }),
                                (0, r.jsx)(X.t.Provider, {
                                    value: eu,
                                    children: (0, r.jsxs)(P.Z, {
                                        onScroll: L,
                                        ref: eu,
                                        children: [
                                            (0, r.jsxs)(I.Z, {
                                                title: es,
                                                description: ec,
                                                button: (0, r.jsx)(d.zxk, {
                                                    variant: "overlay-primary",
                                                    text: er.intl.string(er.t.hvVgAQ),
                                                    onClick: eo,
                                                    icon: d.Gr1,
                                                    iconPosition: "end",
                                                }),
                                                className: a()(ei.bannerContainer, { [ei.orbsContainer]: ea }),
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: a()(ei.bannerGradient, { [ei.orbsGradient]: ea }),
                                                    }),
                                                    (0, r.jsx)(ed, { onLoadComplete: W }),
                                                ],
                                            }),
                                            (0, r.jsxs)(S.Z, {
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: ei.tabs,
                                                        children: (0, r.jsx)(C.Z, {
                                                            tabs: w,
                                                            selectedTab: E,
                                                            onTabSelect: Z,
                                                        }),
                                                    }),
                                                    E === k.e5.CLAIMED
                                                        ? (0, r.jsx)(F, { onSelectTab: Z })
                                                        : E === k.e5.PREVIEW_TOOL
                                                          ? (0, r.jsx)(H.Z, {})
                                                          : (0, r.jsx)(Y.Z, {}),
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
