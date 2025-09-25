n.d(t, { Z: () => M }), n(784620), n(973216);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(6383),
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
    E = n(111131),
    b = n(623249),
    y = n(477005),
    O = n(685613),
    v = n(110560),
    I = n(670638),
    T = n(251360),
    S = n(19148),
    A = n(46140),
    C = n(642145),
    N = n(981631),
    R = n(388032),
    P = n(518388);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    var t;
    let { quest: n, errorHints: a, warningHints: o, isDarkTheme: l, sourceQuestContent: d } = e,
        { ref: _, height: p = 0 } = (0, u.ZP)([a]),
        h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        g = (0, m.z)(n),
        { type: E, hints: y } = i.useMemo(
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
        O = 2 !== E,
        v = (0, c.q_F)({
            opacity: +!!O,
            height: O ? p : 0,
            config: C.Y,
        }),
        I = 0 === E ? c.Mgn : c.d3s,
        T = (0, f.Lq)(N.Ilk.RED_345),
        S = 0 === E ? T : l ? c.TVs.colors.TEXT_DEFAULT : c.TVs.colors.WHITE;
    return (0, r.jsx)(s.animated.div, {
        style: v,
        children: (0, r.jsxs)("div", {
            ref: _,
            className: P.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: P.hintsContainer,
                    children: [
                        (0, r.jsx)(I, {
                            size: "xs",
                            color: S,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: y.at(0),
                        }),
                    ],
                }),
                0 === E &&
                    (0, r.jsx)(c.Avr, {
                        text: R.intl.string(R.t["yKJi+/"]),
                        onClick: () =>
                            (0, b.y)({
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
function M(e) {
    var t, n, a, s, u;
    let {
            quest: f,
            isHovering: b,
            errorHints: C,
            warningHints: w,
            isVisibleInViewport: x,
            onCtxMenuClose: M,
            onCtxMenuOpen: k,
            onCtxMenuSelect: U,
            sourceQuestContent: G,
        } = e,
        B = (0, p.PB)(f),
        Z = (0, d.ZP)(),
        F = ((0, l.wj)(Z) ? N.BRd.DARK : N.BRd.LIGHT) === N.BRd.DARK,
        V = (0, m.tP)(f),
        H = (null == (t = f.userStatus) ? void 0 : t.claimedAt) != null,
        Y = (0, m.B6)(f.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        W = (null == (n = f.userStatus) ? void 0 : n.enrolledAt) != null,
        K = (null == (a = f.userStatus) ? void 0 : a.completedAt) != null,
        { onAssetLoadComplete: z } = i.useContext(T.k),
        q = i.useCallback(async () => {
            B &&
                ((0, p.zi)(f) || W
                    ? (0, v.openVideoQuestModal)({
                          quest: f,
                          questContent: g.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: G,
                          sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : (0, E.R)(A.dr.QUEST_HOME_DESKTOP)
                      ? await (0, v.enrollAndStartVideoQuestWithErrorHandling)(f, {
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
                        (0, v.openVideoQuestModal)({
                            quest: f,
                            questContent: g.jn.QUEST_HOME_DESKTOP,
                            sourceQuestContent: G,
                            sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })));
        }, [B, f, W, G]);
    return (0, r.jsxs)("div", {
        className: P.container,
        children: [
            (0, r.jsx)("div", {
                className: P.heroAssetWrapper,
                children: (0, r.jsx)(y.Z, {
                    quest: f,
                    isInteracting: b,
                    hideAssets: !x,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: P.heroAssetCont,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(P.overlay, {
                    [P.darkThemeGradient]: F,
                    [P.lightThemeGradient]: !F,
                }),
            }),
            (0, r.jsxs)("div", {
                className: P.positionContentOverBackground,
                children: [
                    (0, r.jsxs)("div", {
                        className: P.contents,
                        children: [
                            (0, r.jsxs)("div", {
                                className: P.topRow,
                                children: [
                                    f.preview &&
                                        (0, r.jsx)("div", {
                                            className: P.pill,
                                            children: (0, r.jsx)(c.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: P.eyebrowText,
                                                children: R.intl.string(R.t.SKNnqq),
                                            }),
                                        }),
                                    B &&
                                        (0, r.jsx)(c.ua7, {
                                            text: K
                                                ? R.intl.string(R.t.YsCuyM)
                                                : W
                                                  ? R.intl.string(R.t["74Kqra"])
                                                  : (0, p.zi)(f)
                                                    ? R.intl.string(R.t["I6JG4+"])
                                                    : R.intl.string(R.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    c.P3F,
                                                    L(D({}, e), {
                                                        className: P.utilButtonWrapper,
                                                        "aria-label": R.intl.string(R.t.RscU7O),
                                                        onClick: q,
                                                        children: (0, r.jsx)(c.o1U, {
                                                            color: "currentColor",
                                                            className: P.utilButtonIcon,
                                                        }),
                                                    }),
                                                ),
                                        }),
                                    (0, r.jsx)(I.r, {
                                        onOpen: k,
                                        onClose: M,
                                        onSelect: U,
                                        questContent: g.jn.QUEST_HOME_DESKTOP,
                                        quest: f,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: G,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.P3F,
                                                L(D({}, e), {
                                                    className: P.utilButtonWrapper,
                                                    "aria-label": R.intl.string(R.t.DEoVWV),
                                                    children: (0, r.jsx)(c.xhG, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: P.utilButtonIcon,
                                                    }),
                                                }),
                                            ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.E, {
                                showPlaceholder: !x,
                                width: 100,
                                height: 30,
                                className: P.partnerBranding,
                                children: (0, r.jsx)(O.ZP, {
                                    className: P.partnerBranding,
                                    logotypeClassName: P.partnerLogotypes,
                                    quest: f,
                                    separatorSpacing: O.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: z,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: P.bottomRow,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: F ? "text-muted" : "always-white",
                                        children: R.intl.format(R.t.buEvBw, {
                                            brandName:
                                                null != (u = null == (s = f.config.cosponsorMetadata) ? void 0 : s.name)
                                                    ? u
                                                    : f.config.messages.gamePublisher,
                                        }),
                                    }),
                                    V || H
                                        ? null
                                        : (0, r.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              color: F ? "text-muted" : "always-white",
                                              children: R.intl.format(R.t["7D8r4O"], { expiryDate: Y }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(j, {
                        quest: f,
                        errorHints: C,
                        warningHints: w,
                        isDarkTheme: F,
                        sourceQuestContent: G,
                    }),
                ],
            }),
        ],
    });
}
