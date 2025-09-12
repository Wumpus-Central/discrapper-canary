n.d(t, { Z: () => ec });
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
    m = n(335131),
    b = n(252618),
    _ = n(70097),
    O = n(632285),
    E = n(979233),
    y = n(17845),
    v = n(374939),
    I = n(233374),
    C = n(611928),
    S = n(763433),
    T = n(283293),
    N = n(507808),
    P = n(825102),
    j = n(775451),
    x = n(451478),
    A = n(626135),
    Z = n(526167),
    w = n(63063),
    L = n(617136),
    R = n(113434),
    D = n(833435),
    k = n(497505),
    M = n(220068),
    U = n(937797),
    G = n(110560),
    B = n(150560),
    V = n(672188),
    H = n(558652),
    F = n(736683),
    z = n(879438),
    W = n(251360),
    Y = n(466962),
    K = n(452081),
    q = n(46140),
    Q = n(981631),
    X = n(215023),
    J = n(388032),
    $ = n(728963),
    ee = n(770354),
    et = n(982050),
    en = n(179306),
    er = n(588),
    ei = n(445620),
    el = n(120550);
function ea(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, P.WX)({ location: q.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        o = (0, u.e7)([x.Z], () => x.Z.isFocused()),
        { ref: s, inViewport: c } = (0, V.a)(),
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
        let e = (0, Z.rO)();
        return (0, r.jsx)(_.Z, {
            ref: (e) => {
                (d.current = e), (s.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()($.bannerAsset, $.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? et.Z : en.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: ee.ZP,
        className: a()($.bannerAsset, $.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
function eo(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: er.ZP,
                className: a()($.bannerAsset, $.redirectNoticeBannerAsset),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: el.ZP,
                className: a()($.bannerAsset, $.redirectNoticeBannerAsset),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: ei.ZP,
                className: a()($.bannerAsset, $.redirectNoticeBannerAsset),
                alt: "",
            }),
        ],
    });
}
function es(e) {
    let { onLoadComplete: t, onScroll: n, onSelectTab: l, selectedTabId: a, scrollerRef: o, tabs: c } = e,
        u = i.useCallback(() => {
            (0, G.navigateToQuestHome)({ fromContent: k.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                A.default.track(
                    Q.rMx.QUEST_CONTENT_CLICKED,
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
                            cta_name: L.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
                            is_targeted: !1,
                        },
                        (0, L.mH)(k.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                    ),
                );
        }, []);
    return (0, r.jsx)(Y.t.Provider, {
        value: o,
        children: (0, r.jsxs)(T.Z, {
            onScroll: n,
            ref: o,
            children: [
                (0, r.jsx)(S.a, {
                    selectedTabId: a,
                    handleTransition: l,
                    tabs: c,
                    icon: d.qDn,
                }),
                (0, r.jsx)(y.Z, {
                    title: J.intl.string(J.t.z8YP2N),
                    titleColor: "always-white",
                    button: (0, r.jsx)(d.zxk, {
                        variant: "overlay-primary",
                        text: J.intl.string(J.t.GURBQk),
                        onClick: u,
                    }),
                    className: $.redirectNoticeBannerContainer,
                    children: (0, r.jsx)(eo, { onLoadComplete: t }),
                }),
                (0, r.jsx)(v.Z, {
                    children: (0, r.jsxs)("div", {
                        className: $.redirectNoticeContainer,
                        children: [
                            (0, r.jsx)(d.X6q, {
                                variant: "heading-xl/semibold",
                                children: J.intl.string(J.t.z8YP2N),
                            }),
                            (0, r.jsx)(d.Text, {
                                color: "text-secondary",
                                variant: "text-md/normal",
                                children: J.intl.string(J.t["HdKh6+"]),
                            }),
                            (0, r.jsx)(d.Avr, {
                                text: J.intl.string(J.t["1CdL8f"]),
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
let ec = function () {
    var e;
    let { enabled: t } = U.m8.useConfig({ location: q.dr.QUEST_HOME_DESKTOP }),
        n = (0, o.TH)(),
        l = (null == (e = (0, o.LX)(n.pathname, Q.Z5c.QUEST_HOME)) ? void 0 : e.isExact) === !0,
        s = t && l,
        { selectedTab: u, onSelectTab: f, tabs: _ } = (0, K.z)({ withClaimedQuestsTab: !s });
    i.useLayoutEffect(() => {
        s && u === R.e5.CLAIMED && M.Z.setState({ tab: R.e5.ALL });
    }, [s, u]);
    let { onScroll: x, scrollPosition: A } = (0, E.M)(),
        Z = B.Z.getState().getUtmCurrentContext(),
        L = (0, D._)({ location: q.dr.QUEST_HOME_DESKTOP }) ? F.Z : F.j,
        k = (0, z.z)((e) => e.registerAssetLoad),
        G = i.useRef(Z);
    i.useEffect(() => {
        G.current = Z;
    }),
        i.useEffect(() => {
            let { current: e } = G;
            (0, g.h)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: u,
                },
            });
        }, [u]);
    let { enabled: V } = (0, P.WX)({ location: q.dr.QUEST_HOME_DESKTOP }),
        ee = i.useCallback(() => {
            if (V) return void window.open(Q.EYA.PAID_TERMS_ORBS);
            window.open(w.Z.getArticleURL(Q.BhN.QUESTS_LEARN_MORE));
        }, [V]);
    (0, b.Tt)({ location: J.intl.string(J.t.JALI2N) });
    let et = V ? J.intl.format(J.t.BCBIlp, {}) : J.intl.format(J.t.lmMBf3, {}),
        en = V ? J.intl.format(J.t.U9FY0N, {}) : J.intl.string(J.t.oWCrBg),
        er = i.useRef(null),
        ei = i.useCallback(() => {
            (0, N.Y)({
                pageType: Q.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: Q.jXE.ORBS_BALANCE_MENU,
                ctaObject: Q.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: X.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: h.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    return (
        i.useEffect(() => {
            t && (0, p.Y)(Q.Z5c.QUEST_HOME_V2);
        }, [t]),
        i.useEffect(() => {
            O.C.trigger();
        }, []),
        (0, r.jsx)(W.k.Provider, {
            value: { onAssetLoadComplete: k },
            children: (0, r.jsx)("div", {
                className: $.container,
                children: s
                    ? (0, r.jsx)(es, {
                          onSelectTab: f,
                          onScroll: x,
                          onLoadComplete: k,
                          scrollerRef: er,
                          selectedTabId: u,
                          tabs: _,
                      })
                    : V
                      ? (0, r.jsx)(Y.t.Provider, {
                            value: er,
                            children: (0, r.jsxs)(T.Z, {
                                onScroll: x,
                                ref: er,
                                children: [
                                    (0, r.jsx)(S.a, {
                                        selectedTabId: u,
                                        handleTransition: f,
                                        tabs: _,
                                        icon: d.qDn,
                                        children: (0, r.jsx)(j.V9, {
                                            analyticsPage: Q.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                            cardAlignment: j.ek.END,
                                            ctaText: J.intl.string(J.t["J+vlIS"]),
                                            ctaOnClick: ei,
                                        }),
                                    }),
                                    (0, r.jsxs)(y.Z, {
                                        title: et,
                                        description: en,
                                        button: V
                                            ? (0, r.jsxs)(d.hE2, {
                                                  children: [
                                                      (0, r.jsx)(d.zxk, {
                                                          variant: "overlay-primary",
                                                          text: J.intl.string(J.t["1Wm129"]),
                                                          onClick: () =>
                                                              (0, m.mK)({
                                                                  openInLayer: !1,
                                                                  tab: X.AW.ORBS,
                                                                  analyticsLocations: [],
                                                                  analyticsSource: h.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                              }),
                                                      }),
                                                      (0, r.jsx)(d.zxk, {
                                                          variant: "overlay-secondary",
                                                          text: J.intl.string(J.t["7kTAgI"]),
                                                          onClick: ee,
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(d.zxk, {
                                                  variant: "overlay-primary",
                                                  text: J.intl.string(J.t.hvVgAQ),
                                                  onClick: ee,
                                                  icon: d.Gr1,
                                                  iconPosition: "end",
                                              }),
                                        className: a()($.bannerContainer, { [$.orbsContainer]: V }),
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: a()($.bannerGradient, { [$.orbsGradient]: V }),
                                            }),
                                            (0, r.jsx)(ea, { onLoadComplete: k }),
                                        ],
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        children:
                                            u === R.e5.CLAIMED
                                                ? (0, r.jsx)(L, { onSelectTab: f })
                                                : (0, r.jsx)(H.Z, {}),
                                    }),
                                ],
                            }),
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(C.ZP, {
                                    variant: C._6.OVERLAY,
                                    children: [
                                        (0, r.jsx)("div", { className: $.dragRegion }),
                                        (0, r.jsx)(C.z6, { scrollPosition: A }),
                                        (0, r.jsx)(C.aV, { icon: d.qDn }),
                                    ],
                                }),
                                (0, r.jsx)(Y.t.Provider, {
                                    value: er,
                                    children: (0, r.jsxs)(T.Z, {
                                        onScroll: x,
                                        ref: er,
                                        children: [
                                            (0, r.jsxs)(y.Z, {
                                                title: et,
                                                description: en,
                                                button: (0, r.jsx)(d.zxk, {
                                                    variant: "overlay-primary",
                                                    text: J.intl.string(J.t.hvVgAQ),
                                                    onClick: ee,
                                                    icon: d.Gr1,
                                                    iconPosition: "end",
                                                }),
                                                className: a()($.bannerContainer, { [$.orbsContainer]: V }),
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: a()($.bannerGradient, { [$.orbsGradient]: V }),
                                                    }),
                                                    (0, r.jsx)(ea, { onLoadComplete: k }),
                                                ],
                                            }),
                                            (0, r.jsxs)(v.Z, {
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: $.tabs,
                                                        children: (0, r.jsx)(I.Z, {
                                                            tabs: _,
                                                            selectedTab: u,
                                                            onTabSelect: f,
                                                        }),
                                                    }),
                                                    u === R.e5.CLAIMED
                                                        ? (0, r.jsx)(L, { onSelectTab: f })
                                                        : (0, r.jsx)(H.Z, {}),
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
