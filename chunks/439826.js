n.d(t, { Z: () => U }), n(784620), n(973216);
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
    b = n(475595),
    y = n(18578),
    O = n(623249),
    v = n(685613),
    I = n(110560),
    T = n(670638),
    S = n(251360),
    A = n(19148),
    C = n(46140),
    N = n(642145),
    R = n(981631),
    P = n(388032),
    w = n(518388);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
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
        v = (0, c.q_F)({
            opacity: +!!y,
            height: y ? p : 0,
            config: N.Y,
        }),
        I = 0 === E ? c.Mgn : c.d3s,
        T = (0, f.Lq)(R.Ilk.RED_345),
        S = 0 === E ? T : l ? c.TVs.colors.TEXT_DEFAULT : c.TVs.colors.WHITE;
    return (0, r.jsx)(s.animated.div, {
        style: v,
        children: (0, r.jsxs)("div", {
            ref: _,
            className: w.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: w.hintsContainer,
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
                        text: P.intl.string(P.t["yKJi+/"]),
                        onClick: () =>
                            (0, O.y)({
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
function k(e) {
    let { quest: t, isHovering: n, showAssets: a } = e,
        o = i.useMemo(() => (0, b.fh)(t, b.eC.HERO_IMAGE), [t]),
        s = i.useMemo(() => (0, b.fh)(t, b.eC.HERO_VIDEO), [t]),
        l = (0, E.h)(t, C.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: c } = i.useContext(S.k),
        u = !l && n;
    return (0, r.jsx)("div", {
        className: w.heroAssetCont,
        children:
            a &&
            (0, r.jsx)(y.K, {
                imageAsset:
                    null != o
                        ? {
                              asset: o,
                              assetId: "QuestTileBanner",
                              alt: P.intl.string(P.t.jnijW1),
                              className: w.heroAsset,
                          }
                        : void 0,
                videoAsset:
                    null != s
                        ? {
                              asset: s,
                              assetId: "QuestTileBanner_heroAnimated",
                              className: w.heroAssetVideo,
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
function U(e) {
    var t, n, a, s, u;
    let {
            quest: f,
            isHovering: E,
            errorHints: b,
            warningHints: y,
            isVisibleInViewport: O,
            onCtxMenuClose: C,
            onCtxMenuOpen: N,
            onCtxMenuSelect: D,
            sourceQuestContent: L,
        } = e,
        U = (0, p.PB)(f),
        G = (0, d.ZP)(),
        B = ((0, l.wj)(G) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK,
        Z = (0, m.tP)(f),
        V = (null == (t = f.userStatus) ? void 0 : t.claimedAt) != null,
        F = (0, m.B6)(f.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        H = (null == (n = f.userStatus) ? void 0 : n.enrolledAt) != null,
        Y = (null == (a = f.userStatus) ? void 0 : a.completedAt) != null,
        { onAssetLoadComplete: W } = i.useContext(S.k),
        K = i.useCallback(() => {
            U &&
                ((0, p.zi)(f) ||
                    H ||
                    (0, h.AH)(f.id, {
                        questContent: g.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: _.jZ.ACCEPT_QUEST,
                        sourceQuestContent: L,
                    }),
                (0, I.openVideoQuestModal)({
                    quest: f,
                    questContent: g.jn.QUEST_HOME_DESKTOP,
                    sourceQuestContent: L,
                    sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                }));
        }, [U, f, H, L]);
    return (0, r.jsxs)("div", {
        className: w.container,
        children: [
            (0, r.jsx)("div", {
                className: w.heroAssetWrapper,
                children: (0, r.jsx)(k, {
                    quest: f,
                    isHovering: E,
                    showAssets: O,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(w.overlay, {
                    [w.darkThemeGradient]: B,
                    [w.lightThemeGradient]: !B,
                }),
            }),
            (0, r.jsxs)("div", {
                className: w.positionContentOverBackground,
                children: [
                    (0, r.jsxs)("div", {
                        className: w.contents,
                        children: [
                            (0, r.jsxs)("div", {
                                className: w.topRow,
                                children: [
                                    f.preview &&
                                        (0, r.jsx)("div", {
                                            className: w.pill,
                                            children: (0, r.jsx)(c.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: w.eyebrowText,
                                                children: P.intl.string(P.t.SKNnqq),
                                            }),
                                        }),
                                    U &&
                                        (0, r.jsx)(c.ua7, {
                                            text: Y
                                                ? P.intl.string(P.t.YsCuyM)
                                                : H
                                                  ? P.intl.string(P.t["74Kqra"])
                                                  : (0, p.zi)(f)
                                                    ? P.intl.string(P.t["I6JG4+"])
                                                    : P.intl.string(P.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    c.P3F,
                                                    j(x({}, e), {
                                                        className: w.utilButtonWrapper,
                                                        "aria-label": P.intl.string(P.t.RscU7O),
                                                        onClick: K,
                                                        children: (0, r.jsx)(c.o1U, {
                                                            color: "currentColor",
                                                            className: w.utilButtonIcon,
                                                        }),
                                                    }),
                                                ),
                                        }),
                                    (0, r.jsx)(T.r, {
                                        onOpen: N,
                                        onClose: C,
                                        onSelect: D,
                                        questContent: g.jn.QUEST_HOME_DESKTOP,
                                        quest: f,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: L,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.P3F,
                                                j(x({}, e), {
                                                    className: w.utilButtonWrapper,
                                                    "aria-label": P.intl.string(P.t.DEoVWV),
                                                    children: (0, r.jsx)(c.xhG, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: w.utilButtonIcon,
                                                    }),
                                                }),
                                            ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(A.E, {
                                showPlaceholder: !O,
                                width: 100,
                                height: 30,
                                className: w.partnerBranding,
                                children: (0, r.jsx)(v.ZP, {
                                    className: w.partnerBranding,
                                    logotypeClassName: w.partnerLogotypes,
                                    quest: f,
                                    separatorSpacing: v.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: W,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: w.bottomRow,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: B ? "text-muted" : "always-white",
                                        children: P.intl.format(P.t.buEvBw, {
                                            brandName:
                                                null != (u = null == (s = f.config.cosponsorMetadata) ? void 0 : s.name)
                                                    ? u
                                                    : f.config.messages.gamePublisher,
                                        }),
                                    }),
                                    Z || V
                                        ? null
                                        : (0, r.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              color: B ? "text-muted" : "always-white",
                                              children: P.intl.format(P.t["7D8r4O"], { expiryDate: F }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(M, {
                        quest: f,
                        errorHints: b,
                        warningHints: y,
                        isDarkTheme: B,
                        sourceQuestContent: L,
                    }),
                ],
            }),
        ],
    });
}
