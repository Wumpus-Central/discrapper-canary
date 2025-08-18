n.d(t, { Z: () => Q }), n(784620), n(973216);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(815061),
    l = n(780384),
    c = n(755721),
    d = n(481060),
    u = n(393238),
    p = n(410030),
    m = n(44315),
    f = n(617136),
    g = n(509212),
    x = n(272008),
    h = n(113434),
    b = n(497505),
    _ = n(974390),
    j = n(475595),
    v = n(18578),
    C = n(623249),
    y = n(685613),
    E = n(110560),
    O = n(670638),
    S = n(251360),
    T = n(19148),
    w = n(46140),
    P = n(642145),
    A = n(981631),
    N = n(388032),
    R = n(518388);
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
        { ref: f, height: g = 0 } = (0, u.ZP)([o]),
        x = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        b = (0, h.z)(n),
        { type: _, hints: j } = s.useMemo(
            () =>
                x || b
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
            [o, x, b, a],
        ),
        v = 2 !== _,
        y = (0, d.q_F)({
            opacity: +!!v,
            height: v ? g : 0,
            config: P.Y,
        }),
        E = 0 === _ ? d.Mgn : d.d3s,
        O = (0, m.Lq)(A.Ilk.RED_345),
        S = 0 === _ ? O : l ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: y,
        children: (0, r.jsxs)("div", {
            ref: f,
            className: R.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: R.hintsContainer,
                    children: [
                        (0, r.jsx)(E, {
                            size: "xs",
                            color: S,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: j.at(0),
                        }),
                    ],
                }),
                0 === _ &&
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
        a = s.useMemo(() => (0, j.fh)(t, j.eC.HERO_IMAGE), [t]),
        i = s.useMemo(() => (0, j.fh)(t, j.eC.HERO_VIDEO), [t]),
        l = (0, _.h)(t, w.dr.QUEST_HOME_DESKTOP),
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
            quest: u,
            isHovering: m,
            errorHints: _,
            warningHints: j,
            isVisibleInViewport: v,
            onCtxMenuClose: C,
            onCtxMenuOpen: w,
            onCtxMenuSelect: P,
            sourceQuestContent: Q,
        } = e,
        D = (0, g.PB)(u),
        V = (0, p.ZP)(),
        M = ((0, l.wj)(V) ? A.BRd.DARK : A.BRd.LIGHT) === A.BRd.DARK,
        L = (0, h.tP)(u),
        W = (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null,
        Z = (0, h.B6)(u.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        U = (null == (n = u.userStatus) ? void 0 : n.enrolledAt) != null,
        H = (null == (o = u.userStatus) ? void 0 : o.completedAt) != null,
        { onAssetLoadComplete: F } = s.useContext(S.k),
        z = s.useCallback(() => {
            D &&
                ((0, g.zi)(u) ||
                    U ||
                    (0, x.AH)(u.id, {
                        questContent: b.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: f.jZ.ACCEPT_QUEST,
                        sourceQuestContent: Q,
                    }),
                (0, E.openVideoQuestModal)({
                    quest: u,
                    questContent: b.jn.QUEST_HOME_DESKTOP,
                    sourceQuestContent: Q,
                    sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                }));
        }, [D, u, U, Q]);
    return (0, r.jsxs)("div", {
        className: R.container,
        children: [
            (0, r.jsx)("div", {
                className: R.heroAssetWrapper,
                children: (0, r.jsx)(I, {
                    quest: u,
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
                                    u.preview &&
                                        (0, r.jsx)("div", {
                                            className: R.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: R.eyebrowText,
                                                children: N.intl.string(N.t.SKNnqq),
                                            }),
                                        }),
                                    D &&
                                        (0, r.jsx)(d.ua7, {
                                            text: H
                                                ? N.intl.string(N.t.YsCuyM)
                                                : U
                                                  ? N.intl.string(N.t["74Kqra"])
                                                  : (0, g.zi)(u)
                                                    ? N.intl.string(N.t["I6JG4+"])
                                                    : N.intl.string(N.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    d.P3F,
                                                    k(B({}, e), {
                                                        className: R.utilButtonWrapper,
                                                        "aria-label": N.intl.string(N.t.RscU7O),
                                                        onClick: z,
                                                        children: (0, r.jsx)(d.o1U, {
                                                            color: "currentColor",
                                                            className: R.utilButtonIcon,
                                                        }),
                                                    }),
                                                ),
                                        }),
                                    (0, r.jsx)(O.r, {
                                        onOpen: w,
                                        onClose: C,
                                        onSelect: P,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: u,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: Q,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                d.P3F,
                                                k(B({}, e), {
                                                    className: R.utilButtonWrapper,
                                                    "aria-label": N.intl.string(N.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
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
                                    quest: u,
                                    separatorSpacing: y.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: F,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: R.bottomRow,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        color: M ? "text-muted" : "always-white",
                                        children: N.intl.format(N.t.buEvBw, {
                                            brandName:
                                                null != (c = null == (i = u.config.cosponsorMetadata) ? void 0 : i.name)
                                                    ? c
                                                    : u.config.messages.gamePublisher,
                                        }),
                                    }),
                                    L || W
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: "text-sm/medium",
                                              color: M ? "text-muted" : "always-white",
                                              children: N.intl.format(N.t["7D8r4O"], { expiryDate: Z }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(q, {
                        quest: u,
                        errorHints: _,
                        warningHints: j,
                        isDarkTheme: M,
                        sourceQuestContent: Q,
                    }),
                ],
            }),
        ],
    });
}
