n.d(t, { Z: () => G }), n(784620), n(973216);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(803948),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(393238),
    f = n(410030),
    _ = n(44315),
    p = n(617136),
    h = n(509212),
    m = n(272008),
    g = n(113434),
    E = n(497505),
    b = n(974390),
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
    let { quest: n, errorHints: a, warningHints: o, isDarkTheme: l, sourceQuestContent: f } = e,
        { ref: p, height: h = 0 } = (0, d.ZP)([a]),
        m = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        E = (0, g.z)(n),
        { type: b, hints: y } = i.useMemo(
            () =>
                m || E
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
            [a, m, E, o],
        ),
        O = 2 !== b,
        I = (0, u.q_F)({
            opacity: +!!O,
            height: O ? h : 0,
            config: R.Y,
        }),
        T = 0 === b ? u.Mgn : u.d3s,
        S = (0, _.Lq)(P.Ilk.RED_345),
        A = 0 === b ? S : l ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
    return (0, r.jsx)(s.animated.div, {
        style: I,
        children: (0, r.jsxs)("div", {
            ref: p,
            className: D.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: D.hintsContainer,
                    children: [
                        (0, r.jsx)(T, {
                            size: "xs",
                            color: A,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: y.at(0),
                        }),
                    ],
                }),
                0 === b &&
                    (0, r.jsx)(c.zx, {
                        onClick: () =>
                            (0, v.y)({
                                questId: n.id,
                                errorHints: a,
                                sourceQuestContent: f,
                            }),
                        size: c.Ph.MIN,
                        look: c.iL.LINK,
                        color: c.Tt.CUSTOM,
                        style: { color: (0, _.Lq)(P.Ilk.BLUE_345) },
                        children: "See Details",
                    }),
            ],
        }),
    });
}
function U(e) {
    let { quest: t, isHovering: n, showAssets: a } = e,
        o = i.useMemo(() => (0, y.fh)(t, y.eC.HERO_IMAGE), [t]),
        s = i.useMemo(() => (0, y.fh)(t, y.eC.HERO_VIDEO), [t]),
        l = (0, b.h)(t, N.dr.QUEST_HOME_DESKTOP),
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
    var t, n, a, s, c;
    let {
            quest: d,
            isHovering: _,
            errorHints: b,
            warningHints: y,
            isVisibleInViewport: O,
            onCtxMenuClose: v,
            onCtxMenuOpen: N,
            onCtxMenuSelect: R,
            sourceQuestContent: x,
        } = e,
        j = (0, h.PB)(d),
        G = (0, f.ZP)(),
        B = ((0, l.wj)(G) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK,
        Z = (0, g.tP)(d),
        V = (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null,
        F = (0, g.B6)(d.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        H = (null == (n = d.userStatus) ? void 0 : n.enrolledAt) != null,
        Y = (null == (a = d.userStatus) ? void 0 : a.completedAt) != null,
        { onAssetLoadComplete: W } = i.useContext(A.k),
        K = i.useCallback(() => {
            j &&
                ((0, h.zi)(d) ||
                    H ||
                    (0, m.AH)(d.id, {
                        questContent: E.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: p.jZ.ACCEPT_QUEST,
                        sourceQuestContent: x,
                    }),
                (0, T.openVideoQuestModal)({
                    quest: d,
                    questContent: E.jn.QUEST_HOME_DESKTOP,
                    sourceQuestContent: x,
                    sourceQuestContentCTA: p.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                }));
        }, [j, d, H, x]);
    return (0, r.jsxs)("div", {
        className: D.container,
        children: [
            (0, r.jsx)("div", {
                className: D.heroAssetWrapper,
                children: (0, r.jsx)(U, {
                    quest: d,
                    isHovering: _,
                    showAssets: O,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(D.overlay, {
                    [D.darkThemeGradient]: B,
                    [D.lightThemeGradient]: !B,
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
                                    d.preview &&
                                        (0, r.jsx)("div", {
                                            className: D.pill,
                                            children: (0, r.jsx)(u.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: D.eyebrowText,
                                                children: w.intl.string(w.t.SKNnqq),
                                            }),
                                        }),
                                    j &&
                                        (0, r.jsx)(u.ua7, {
                                            text: Y
                                                ? w.intl.string(w.t.YsCuyM)
                                                : H
                                                  ? w.intl.string(w.t["74Kqra"])
                                                  : (0, h.zi)(d)
                                                    ? w.intl.string(w.t["I6JG4+"])
                                                    : w.intl.string(w.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    u.P3F,
                                                    M(L({}, e), {
                                                        className: D.utilButtonWrapper,
                                                        "aria-label": w.intl.string(w.t.RscU7O),
                                                        onClick: K,
                                                        children: (0, r.jsx)(u.o1U, {
                                                            color: "currentColor",
                                                            className: D.utilButtonIcon,
                                                        }),
                                                    }),
                                                ),
                                        }),
                                    (0, r.jsx)(S.r, {
                                        onOpen: N,
                                        onClose: v,
                                        onSelect: R,
                                        questContent: E.jn.QUEST_HOME_DESKTOP,
                                        quest: d,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: x,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.P3F,
                                                M(L({}, e), {
                                                    className: D.utilButtonWrapper,
                                                    "aria-label": w.intl.string(w.t.DEoVWV),
                                                    children: (0, r.jsx)(u.xhG, {
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
                                showPlaceholder: !O,
                                width: 100,
                                height: 30,
                                className: D.partnerBranding,
                                children: (0, r.jsx)(I.ZP, {
                                    className: D.partnerBranding,
                                    logotypeClassName: D.partnerLogotypes,
                                    quest: d,
                                    separatorSpacing: I.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: W,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: D.bottomRow,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: B ? "text-muted" : "always-white",
                                        children: w.intl.format(w.t.buEvBw, {
                                            brandName:
                                                null != (c = null == (s = d.config.cosponsorMetadata) ? void 0 : s.name)
                                                    ? c
                                                    : d.config.messages.gamePublisher,
                                        }),
                                    }),
                                    Z || V
                                        ? null
                                        : (0, r.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: B ? "text-muted" : "always-white",
                                              children: w.intl.format(w.t["7D8r4O"], { expiryDate: F }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(k, {
                        quest: d,
                        errorHints: b,
                        warningHints: y,
                        isDarkTheme: B,
                        sourceQuestContent: x,
                    }),
                ],
            }),
        ],
    });
}
