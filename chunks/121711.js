n.d(t, { Z: () => es });
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
    O = n(979233),
    E = n(17845),
    y = n(374939),
    v = n(233374),
    I = n(611928),
    C = n(763433),
    S = n(283293),
    T = n(507808),
    N = n(825102),
    j = n(775451),
    P = n(451478),
    x = n(626135),
    A = n(526167),
    Z = n(63063),
    w = n(617136),
    L = n(113434),
    R = n(833435),
    D = n(497505),
    k = n(220068),
    M = n(937797),
    U = n(110560),
    G = n(150560),
    B = n(672188),
    V = n(558652),
    H = n(736683),
    F = n(879438),
    z = n(251360),
    W = n(466962),
    Y = n(452081),
    K = n(46140),
    q = n(981631),
    Q = n(215023),
    X = n(388032),
    J = n(728963),
    $ = n(770354),
    ee = n(982050),
    et = n(179306),
    en = n(588),
    er = n(445620),
    ei = n(120550);
function el(e) {
    let { onLoadComplete: t } = e,
        { enabled: n } = (0, N.WX)({ location: K.dr.QUEST_HOME_DESKTOP }),
        l = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        o = (0, u.e7)([P.Z], () => P.Z.isFocused()),
        { ref: s, inViewport: c } = (0, B.a)(),
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
        let e = (0, A.rO)();
        return (0, r.jsx)(_.Z, {
            ref: (e) => {
                (d.current = e), (s.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(J.bannerAsset, J.orbsBannerAsset),
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e ? ee.Z : et.Z,
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: $.ZP,
        className: a()(J.bannerAsset, J.oversizedImg),
        alt: "",
        onLoad: t,
    });
}
function ea(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: en.ZP,
                className: a()(J.bannerAsset, J.redirectNoticeBannerAsset),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: ei.ZP,
                className: a()(J.bannerAsset, J.redirectNoticeBannerAsset),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: er.ZP,
                className: a()(J.bannerAsset, J.redirectNoticeBannerAsset),
                alt: "",
            }),
        ],
    });
}
function eo(e) {
    let { onLoadComplete: t, onScroll: n, onSelectTab: l, selectedTabId: a, scrollerRef: o, tabs: c } = e,
        u = i.useCallback(() => {
            (0, U.navigateToQuestHome)({ fromContent: D.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                x.default.track(
                    q.rMx.QUEST_CONTENT_CLICKED,
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
                            cta_name: w.jZ.VIEW_QUESTS,
                            click_id: (0, s.Z)(),
                            is_targeted: !1,
                        },
                        (0, w.mH)(D.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                    ),
                );
        }, []);
    return (0, r.jsx)(W.t.Provider, {
        value: o,
        children: (0, r.jsxs)(S.Z, {
            onScroll: n,
            ref: o,
            children: [
                (0, r.jsx)(C.a, {
                    selectedTabId: a,
                    handleTransition: l,
                    tabs: c,
                    icon: d.qDn,
                }),
                (0, r.jsx)(E.Z, {
                    title: X.intl.string(X.t.z8YP2N),
                    titleColor: "always-white",
                    button: (0, r.jsx)(d.zxk, {
                        variant: "overlay-primary",
                        text: X.intl.string(X.t.GURBQk),
                        onClick: u,
                    }),
                    className: J.redirectNoticeBannerContainer,
                    children: (0, r.jsx)(ea, { onLoadComplete: t }),
                }),
                (0, r.jsx)(y.Z, {
                    children: (0, r.jsxs)("div", {
                        className: J.redirectNoticeContainer,
                        children: [
                            (0, r.jsx)(d.X6q, {
                                variant: "heading-xl/semibold",
                                children: X.intl.string(X.t.z8YP2N),
                            }),
                            (0, r.jsx)(d.Text, {
                                color: "text-secondary",
                                variant: "text-md/normal",
                                children: X.intl.string(X.t["HdKh6+"]),
                            }),
                            (0, r.jsx)(d.Avr, {
                                text: X.intl.string(X.t["1CdL8f"]),
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
let es = function () {
    var e;
    let { enabled: t } = M.m8.useConfig({ location: K.dr.QUEST_HOME_DESKTOP }),
        n = (0, o.TH)(),
        l = (null == (e = (0, o.LX)(n.pathname, q.Z5c.QUEST_HOME)) ? void 0 : e.isExact) === !0,
        s = t && l,
        { selectedTab: u, onSelectTab: f, tabs: _ } = (0, Y.z)({ withClaimedQuestsTab: !s });
    i.useLayoutEffect(() => {
        s && u === L.e5.CLAIMED && k.Z.setState({ tab: L.e5.ALL });
    }, [s, u]);
    let { onScroll: P, scrollPosition: x } = (0, O.M)(),
        A = G.Z.getState().getUtmCurrentContext(),
        w = (0, R._)({ location: K.dr.QUEST_HOME_DESKTOP }) ? H.Z : H.j,
        D = (0, F.z)((e) => e.registerAssetLoad),
        U = i.useRef(A);
    i.useEffect(() => {
        U.current = A;
    }),
        i.useEffect(() => {
            let { current: e } = U;
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
    let { enabled: B } = (0, N.WX)({ location: K.dr.QUEST_HOME_DESKTOP }),
        $ = i.useCallback(() => {
            if (B) return void window.open(q.EYA.PAID_TERMS_ORBS);
            window.open(Z.Z.getArticleURL(q.BhN.QUESTS_LEARN_MORE));
        }, [B]);
    (0, b.Tt)({ location: X.intl.string(X.t.JALI2N) });
    let ee = B ? X.intl.format(X.t.BCBIlp, {}) : X.intl.format(X.t.lmMBf3, {}),
        et = B ? X.intl.format(X.t.U9FY0N, {}) : X.intl.string(X.t.oWCrBg),
        en = i.useRef(null),
        er = i.useCallback(() => {
            (0, T.Y)({
                pageType: q.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: q.jXE.ORBS_BALANCE_MENU,
                ctaObject: q.qAy.CTA_TO_ORBS_SHOP,
            }),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: Q.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: h.Z.ORBS_BALANCE_MENU,
                });
        }, []);
    return (
        i.useEffect(() => {
            t && (0, p.Y)(q.Z5c.QUEST_HOME_V2);
        }, [t]),
        (0, r.jsx)(z.k.Provider, {
            value: { onAssetLoadComplete: D },
            children: (0, r.jsx)("div", {
                className: J.container,
                children: s
                    ? (0, r.jsx)(eo, {
                          onSelectTab: f,
                          onScroll: P,
                          onLoadComplete: D,
                          scrollerRef: en,
                          selectedTabId: u,
                          tabs: _,
                      })
                    : B
                      ? (0, r.jsx)(W.t.Provider, {
                            value: en,
                            children: (0, r.jsxs)(S.Z, {
                                onScroll: P,
                                ref: en,
                                children: [
                                    (0, r.jsx)(C.a, {
                                        selectedTabId: u,
                                        handleTransition: f,
                                        tabs: _,
                                        icon: d.qDn,
                                        children: (0, r.jsx)(j.V9, {
                                            analyticsPage: q.ZY5.GLOBAL_DISCOVERY_QUESTS,
                                            cardAlignment: j.ek.END,
                                            ctaText: X.intl.string(X.t["J+vlIS"]),
                                            ctaOnClick: er,
                                        }),
                                    }),
                                    (0, r.jsxs)(E.Z, {
                                        title: ee,
                                        description: et,
                                        button: B
                                            ? (0, r.jsxs)(d.hE2, {
                                                  children: [
                                                      (0, r.jsx)(d.zxk, {
                                                          variant: "overlay-primary",
                                                          text: X.intl.string(X.t["1Wm129"]),
                                                          onClick: () =>
                                                              (0, m.mK)({
                                                                  openInLayer: !1,
                                                                  tab: Q.AW.ORBS,
                                                                  analyticsLocations: [],
                                                                  analyticsSource: h.Z.INTRO_TO_ORBS_QUEST_BANNER,
                                                              }),
                                                      }),
                                                      (0, r.jsx)(d.zxk, {
                                                          variant: "overlay-secondary",
                                                          text: X.intl.string(X.t["7kTAgI"]),
                                                          onClick: $,
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(d.zxk, {
                                                  variant: "overlay-primary",
                                                  text: X.intl.string(X.t.hvVgAQ),
                                                  onClick: $,
                                                  icon: d.Gr1,
                                                  iconPosition: "end",
                                              }),
                                        className: a()(J.bannerContainer, { [J.orbsContainer]: B }),
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: a()(J.bannerGradient, { [J.orbsGradient]: B }),
                                            }),
                                            (0, r.jsx)(el, { onLoadComplete: D }),
                                        ],
                                    }),
                                    (0, r.jsx)(y.Z, {
                                        children:
                                            u === L.e5.CLAIMED
                                                ? (0, r.jsx)(w, { onSelectTab: f })
                                                : (0, r.jsx)(V.Z, {}),
                                    }),
                                ],
                            }),
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(I.ZP, {
                                    variant: I._6.OVERLAY,
                                    children: [
                                        (0, r.jsx)("div", { className: J.dragRegion }),
                                        (0, r.jsx)(I.z6, { scrollPosition: x }),
                                        (0, r.jsx)(I.aV, { icon: d.qDn }),
                                    ],
                                }),
                                (0, r.jsx)(W.t.Provider, {
                                    value: en,
                                    children: (0, r.jsxs)(S.Z, {
                                        onScroll: P,
                                        ref: en,
                                        children: [
                                            (0, r.jsxs)(E.Z, {
                                                title: ee,
                                                description: et,
                                                button: (0, r.jsx)(d.zxk, {
                                                    variant: "overlay-primary",
                                                    text: X.intl.string(X.t.hvVgAQ),
                                                    onClick: $,
                                                    icon: d.Gr1,
                                                    iconPosition: "end",
                                                }),
                                                className: a()(J.bannerContainer, { [J.orbsContainer]: B }),
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: a()(J.bannerGradient, { [J.orbsGradient]: B }),
                                                    }),
                                                    (0, r.jsx)(el, { onLoadComplete: D }),
                                                ],
                                            }),
                                            (0, r.jsxs)(y.Z, {
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: J.tabs,
                                                        children: (0, r.jsx)(v.Z, {
                                                            tabs: _,
                                                            selectedTab: u,
                                                            onTabSelect: f,
                                                        }),
                                                    }),
                                                    u === L.e5.CLAIMED
                                                        ? (0, r.jsx)(w, { onSelectTab: f })
                                                        : (0, r.jsx)(V.Z, {}),
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
