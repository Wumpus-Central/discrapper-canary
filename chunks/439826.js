n.d(t, { Z: () => G }), n(784620), n(973216);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
    l = n(780384),
    c = n(481060),
    u = n(393238),
    d = n(410030),
    f = n(44315),
    _ = n(617136),
    p = n(509212),
    h = n(272008),
    m = n(113434),
    g = n(497505),
    E = n(974390),
    b = n(111131),
    y = n(475595),
    O = n(18578),
    v = n(623249),
    I = n(685613),
    T = n(110560),
    S = n(670638),
    A = n(251360),
    C = n(19148),
    N = n(46140),
    R = n(642145),
    P = n(981631),
    w = n(388032),
    D = n(518388);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    var t;
    let { quest: n, errorHints: a, warningHints: o, isDarkTheme: l, sourceQuestContent: d } = e,
        { ref: _, height: p = 0 } = (0, u.ZP)([a]),
        h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        g = (0, m.z)(n),
        { type: E, hints: b } = i.useMemo(
            () =>
                h || g
                    ? {
                          type: 2,
                          hints: [],
                      }
                    : a.length > 0
                      ? {
                            type: 0,
                            hints: a.map((e) => e.message),
                        }
                      : o.length > 0
                        ? {
                              type: 1,
                              hints: o,
                          }
                        : {
                              type: 2,
                              hints: [],
                          },
            [a, h, g, o],
        ),
        y = 2 !== E,
        O = (0, c.q_F)({
            opacity: +!!y,
            height: y ? p : 0,
            config: R.Y,
        }),
        I = 0 === E ? c.Mgn : c.d3s,
        T = (0, f.Lq)(P.Ilk.RED_345),
        S = 0 === E ? T : l ? c.TVs.colors.TEXT_DEFAULT : c.TVs.colors.WHITE;
    return (0, r.jsx)(s.animated.div, {
        style: O,
        children: (0, r.jsxs)("div", {
            ref: _,
            className: D.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: D.hintsContainer,
                    children: [
                        (0, r.jsx)(I, {
                            size: "xs",
                            color: S,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: b.at(0),
                        }),
                    ],
                }),
                0 === E &&
                    (0, r.jsx)(c.Avr, {
                        text: w.intl.string(w.t["yKJi+/"]),
                        onClick: () =>
                            (0, v.y)({
                                quest: n,
                                errorHints: a,
                                sourceQuestContent: d,
                            }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function U(e) {
    let { quest: t, isHovering: n, showAssets: a } = e,
        o = i.useMemo(() => (0, y.fh)(t, y.eC.HERO_IMAGE), [t]),
        s = i.useMemo(() => (0, y.fh)(t, y.eC.HERO_VIDEO), [t]),
        l = (0, E.h)(t, N.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: c } = i.useContext(A.k),
        u = !l && n;
    return (0, r.jsx)("div", {
        className: D.heroAssetCont,
        children:
            a &&
            (0, r.jsx)(O.K, {
                imageAsset:
                    null != o
                        ? {
                              asset: o,
                              assetId: "QuestTileBanner",
                              alt: w.intl.string(w.t.jnijW1),
                              className: D.heroAsset,
                          }
                        : void 0,
                videoAsset:
                    null != s
                        ? {
                              asset: s,
                              assetId: "QuestTileBanner_heroAnimated",
                              className: D.heroAssetVideo,
                          }
                        : void 0,
                videoActive: u,
                imageDimensions: {
                    width: 1320,
                    height: 370,
                },
                onLoadComplete: c,
            }),
    });
}
function G(e) {
    var t, n, a, s, u;
    let {
            quest: f,
            isHovering: E,
            errorHints: y,
            warningHints: O,
            isVisibleInViewport: v,
            onCtxMenuClose: R,
            onCtxMenuOpen: x,
            onCtxMenuSelect: j,
            sourceQuestContent: G,
        } = e,
        B = (0, p.PB)(f),
        Z = (0, d.ZP)(),
        V = ((0, l.wj)(Z) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK,
        F = (0, m.tP)(f),
        H = (null == (t = f.userStatus) ? void 0 : t.claimedAt) != null,
        Y = (0, m.B6)(f.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        W = (null == (n = f.userStatus) ? void 0 : n.enrolledAt) != null,
        K = (null == (a = f.userStatus) ? void 0 : a.completedAt) != null,
        { onAssetLoadComplete: z } = i.useContext(A.k),
        q = i.useCallback(async () => {
            B &&
                ((0, p.zi)(f) || W
                    ? (0, T.openVideoQuestModal)({
                          quest: f,
                          questContent: g.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: G,
                          sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : (0, b.R)(N.dr.QUEST_HOME_DESKTOP)
                      ? await (0, T.enrollAndStartVideoQuestWithErrorHandling)(f, {
                            questContent: g.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: _.jZ.ACCEPT_QUEST,
                            sourceQuestContent: G,
                            sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })
                      : ((0, h.AH)(f.id, {
                            questContent: g.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: _.jZ.ACCEPT_QUEST,
                            sourceQuestContent: G,
                        }),
                        (0, T.openVideoQuestModal)({
                            quest: f,
                            questContent: g.jn.QUEST_HOME_DESKTOP,
                            sourceQuestContent: G,
                            sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })));
        }, [B, f, W, G]);
    return (0, r.jsxs)("div", {
        className: D.container,
        children: [
            (0, r.jsx)("div", {
                className: D.heroAssetWrapper,
                children: (0, r.jsx)(U, {
                    quest: f,
                    isHovering: E,
                    showAssets: v,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(D.overlay, {
                    [D.darkThemeGradient]: V,
                    [D.lightThemeGradient]: !V,
                }),
            }),
            (0, r.jsxs)("div", {
                className: D.positionContentOverBackground,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.contents,
                        children: [
                            (0, r.jsxs)("div", {
                                className: D.topRow,
                                children: [
                                    f.preview &&
                                        (0, r.jsx)("div", {
                                            className: D.pill,
                                            children: (0, r.jsx)(c.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: D.eyebrowText,
                                                children: w.intl.string(w.t.SKNnqq),
                                            }),
                                        }),
                                    B &&
                                        (0, r.jsx)(c.ua7, {
                                            text: K
                                                ? w.intl.string(w.t.YsCuyM)
                                                : W
                                                  ? w.intl.string(w.t["74Kqra"])
                                                  : (0, p.zi)(f)
                                                    ? w.intl.string(w.t["I6JG4+"])
                                                    : w.intl.string(w.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    c.P3F,
                                                    M(L({}, e), {
                                                        className: D.utilButtonWrapper,
                                                        "aria-label": w.intl.string(w.t.RscU7O),
                                                        onClick: q,
                                                        children: (0, r.jsx)(c.o1U, {
                                                            color: "currentColor",
                                                            className: D.utilButtonIcon,
                                                        }),
                                                    }),
                                                ),
                                        }),
                                    (0, r.jsx)(S.r, {
                                        onOpen: x,
                                        onClose: R,
                                        onSelect: j,
                                        questContent: g.jn.QUEST_HOME_DESKTOP,
                                        quest: f,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: G,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.P3F,
                                                M(L({}, e), {
                                                    className: D.utilButtonWrapper,
                                                    "aria-label": w.intl.string(w.t.DEoVWV),
                                                    children: (0, r.jsx)(c.xhG, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: D.utilButtonIcon,
                                                    }),
                                                }),
                                            ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.E, {
                                showPlaceholder: !v,
                                width: 100,
                                height: 30,
                                className: D.partnerBranding,
                                children: (0, r.jsx)(I.ZP, {
                                    className: D.partnerBranding,
                                    logotypeClassName: D.partnerLogotypes,
                                    quest: f,
                                    separatorSpacing: I.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: z,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: D.bottomRow,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: V ? "text-muted" : "always-white",
                                        children: w.intl.format(w.t.buEvBw, {
                                            brandName:
                                                null != (u = null == (s = f.config.cosponsorMetadata) ? void 0 : s.name)
                                                    ? u
                                                    : f.config.messages.gamePublisher,
                                        }),
                                    }),
                                    F || H
                                        ? null
                                        : (0, r.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              color: V ? "text-muted" : "always-white",
                                              children: w.intl.format(w.t["7D8r4O"], { expiryDate: Y }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(k, {
                        quest: f,
                        errorHints: y,
                        warningHints: O,
                        isDarkTheme: V,
                        sourceQuestContent: G,
                    }),
                ],
            }),
        ],
    });
}
