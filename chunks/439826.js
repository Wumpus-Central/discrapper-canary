n.d(t, { Z: () => Q }), n(784620), n(973216);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(717976),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(393238),
    p = n(410030),
    m = n(44315),
    g = n(617136),
    f = n(509212),
    x = n(272008),
    h = n(113434),
    j = n(497505),
    b = n(974390),
    _ = n(475595),
    v = n(18578),
    C = n(623249),
    y = n(685613),
    O = n(110560),
    E = n(670638),
    S = n(251360),
    T = n(19148),
    w = n(46140),
    P = n(642145),
    A = n(981631),
    N = n(388032),
    R = n(547975);
function B(e) {
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
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: a, isDarkTheme: l, sourceQuestContent: p } = e,
        { ref: g, height: f = 0 } = (0, d.ZP)([o]),
        x = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        j = (0, h.z)(n),
        { type: b, hints: _ } = s.useMemo(
            () =>
                x || j
                    ? {
                          type: 2,
                          hints: [],
                      }
                    : o.length > 0
                      ? {
                            type: 0,
                            hints: o.map((e) => e.message),
                        }
                      : a.length > 0
                        ? {
                              type: 1,
                              hints: a,
                          }
                        : {
                              type: 2,
                              hints: [],
                          },
            [o, x, j, a],
        ),
        v = 2 !== b,
        y = (0, u.q_F)({
            opacity: +!!v,
            height: v ? f : 0,
            config: P.Y,
        }),
        O = 0 === b ? u.Mgn : u.d3s,
        E = (0, m.Lq)(A.Ilk.RED_345),
        S = 0 === b ? E : l ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: y,
        children: (0, r.jsxs)("div", {
            ref: g,
            className: R.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: R.hintsContainer,
                    children: [
                        (0, r.jsx)(O, {
                            size: "xs",
                            color: S,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: _.at(0),
                        }),
                    ],
                }),
                0 === b &&
                    (0, r.jsx)(c.zx, {
                        onClick: () =>
                            (0, C.y)({
                                questId: n.id,
                                errorHints: o,
                                sourceQuestContent: p,
                            }),
                        size: c.Ph.MIN,
                        look: c.iL.LINK,
                        color: c.Tt.CUSTOM,
                        style: { color: (0, m.Lq)(A.Ilk.BLUE_345) },
                        children: "See Details",
                    }),
            ],
        }),
    });
}
function I(e) {
    let { quest: t, isHovering: n, showAssets: o } = e,
        a = s.useMemo(() => (0, _.fh)(t, _.eC.HERO_IMAGE), [t]),
        i = s.useMemo(() => (0, _.fh)(t, _.eC.HERO_VIDEO), [t]),
        l = (0, b.h)(t, w.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: c } = s.useContext(S.k);
    return (0, r.jsx)("div", {
        className: R.heroAssetCont,
        children:
            o &&
            (0, r.jsx)(v.K, {
                imageAsset:
                    null != a
                        ? {
                              asset: a,
                              assetId: "QuestTileBanner",
                              alt: N.intl.string(N.t.jnijW1),
                              className: R.heroAsset,
                          }
                        : void 0,
                videoAsset:
                    null != i
                        ? {
                              asset: i,
                              assetId: "QuestTileBanner_heroAnimated",
                              className: R.heroAssetVideo,
                          }
                        : void 0,
                videoActive: !l && n,
                imageDimensions: {
                    width: 1320,
                    height: 370,
                },
                onLoadComplete: c,
            }),
    });
}
function Q(e) {
    var t, n, o, i, c;
    let {
            quest: d,
            isHovering: m,
            errorHints: b,
            warningHints: _,
            isVisibleInViewport: v,
            onCtxMenuClose: C,
            onCtxMenuOpen: w,
            onCtxMenuSelect: P,
            sourceQuestContent: Q,
        } = e,
        D = (0, f.PB)(d),
        V = (0, p.ZP)(),
        M = ((0, l.wj)(V) ? A.BRd.DARK : A.BRd.LIGHT) === A.BRd.DARK,
        L = (0, h.tP)(d),
        Z = (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null,
        W = (0, h.B6)(d.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        U = (null == (n = d.userStatus) ? void 0 : n.enrolledAt) != null,
        H = (null == (o = d.userStatus) ? void 0 : o.completedAt) != null,
        { onAssetLoadComplete: F } = s.useContext(S.k),
        z = s.useCallback(() => {
            D &&
                ((0, f.zi)(d) ||
                    U ||
                    (0, x.AH)(d.id, {
                        questContent: j.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: g.jZ.ACCEPT_QUEST,
                        sourceQuestContent: Q,
                    }),
                (0, O.openVideoQuestModal)({
                    quest: d,
                    questContent: j.jn.QUEST_HOME_DESKTOP,
                    sourceQuestContent: Q,
                    sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                }));
        }, [D, d, U, Q]);
    return (0, r.jsxs)("div", {
        className: R.container,
        children: [
            (0, r.jsx)("div", {
                className: R.heroAssetWrapper,
                children: (0, r.jsx)(I, {
                    quest: d,
                    isHovering: m,
                    showAssets: v,
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(R.overlay, {
                    [R.darkThemeGradient]: M,
                    [R.lightThemeGradient]: !M,
                }),
            }),
            (0, r.jsxs)("div", {
                className: R.positionContentOverBackground,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.contents,
                        children: [
                            (0, r.jsxs)("div", {
                                className: R.topRow,
                                children: [
                                    d.preview &&
                                        (0, r.jsx)("div", {
                                            className: R.pill,
                                            children: (0, r.jsx)(u.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: R.eyebrowText,
                                                children: N.intl.string(N.t.SKNnqq),
                                            }),
                                        }),
                                    D &&
                                        (0, r.jsx)(u.ua7, {
                                            text: H
                                                ? N.intl.string(N.t.YsCuyM)
                                                : U
                                                  ? N.intl.string(N.t["74Kqra"])
                                                  : (0, f.zi)(d)
                                                    ? N.intl.string(N.t["I6JG4+"])
                                                    : N.intl.string(N.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    u.P3F,
                                                    k(B({}, e), {
                                                        className: R.utilButtonWrapper,
                                                        "aria-label": N.intl.string(N.t.RscU7O),
                                                        onClick: z,
                                                        children: (0, r.jsx)(u.o1U, {
                                                            color: "currentColor",
                                                            className: R.utilButtonIcon,
                                                        }),
                                                    }),
                                                ),
                                        }),
                                    (0, r.jsx)(E.r, {
                                        onOpen: w,
                                        onClose: C,
                                        onSelect: P,
                                        questContent: j.jn.QUEST_HOME_DESKTOP,
                                        quest: d,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: Q,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.P3F,
                                                k(B({}, e), {
                                                    className: R.utilButtonWrapper,
                                                    "aria-label": N.intl.string(N.t.DEoVWV),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: R.utilButtonIcon,
                                                    }),
                                                }),
                                            ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(T.E, {
                                showPlaceholder: !v,
                                width: 100,
                                height: 30,
                                className: R.partnerBranding,
                                children: (0, r.jsx)(y.ZP, {
                                    className: R.partnerBranding,
                                    logotypeClassName: R.partnerLogotypes,
                                    quest: d,
                                    separatorSpacing: y.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: F,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: R.bottomRow,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: M ? "text-muted" : "always-white",
                                        children: N.intl.format(N.t.buEvBw, {
                                            brandName:
                                                null != (c = null == (i = d.config.cosponsorMetadata) ? void 0 : i.name)
                                                    ? c
                                                    : d.config.messages.gamePublisher,
                                        }),
                                    }),
                                    L || Z
                                        ? null
                                        : (0, r.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: M ? "text-muted" : "always-white",
                                              children: N.intl.format(N.t["7D8r4O"], { expiryDate: W }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(q, {
                        quest: d,
                        errorHints: b,
                        warningHints: _,
                        isDarkTheme: M,
                        sourceQuestContent: Q,
                    }),
                ],
            }),
        ],
    });
}
