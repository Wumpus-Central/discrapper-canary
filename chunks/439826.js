n.d(t, { Z: () => k }), n(784620), n(973216);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(205120),
    l = n(28664),
    c = n(780384),
    u = n(481060),
    d = n(393238),
    p = n(410030),
    m = n(297700),
    f = n(22095),
    g = n(617136),
    x = n(49436),
    h = n(111131),
    _ = n(968843),
    b = n(862657),
    j = n(254579),
    v = n(623249),
    C = n(477005),
    y = n(698716),
    E = n(685613),
    O = n(110560),
    S = n(251360),
    T = n(19148),
    w = n(324805),
    P = n(642145),
    N = n(981631),
    R = n(388032),
    A = n(518388);
function B(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: a, isDarkTheme: l, sourceQuestContent: c } = e,
        { ref: p, height: m = 0 } = (0, d.ZP)([o]),
        f = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        g = (0, _.z)(n),
        { type: x, hints: h } = s.useMemo(
            () =>
                f || g
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
            [o, f, g, a],
        ),
        b = 2 !== x,
        j = (0, u.q_F)({
            opacity: +!!b,
            height: b ? m : 0,
            config: P.Y,
        }),
        C = 0 === x ? u.Mgn : u.d3s,
        y = u.TVs.unsafe_rawColors.RED_345.css,
        E = 0 === x ? y : l ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: j,
        children: (0, r.jsxs)("div", {
            ref: p,
            className: A.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: A.hintsContainer,
                    children: [
                        (0, r.jsx)(C, {
                            size: "xs",
                            color: E,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === x &&
                    (0, r.jsx)(u.Avr, {
                        text: R.intl.string(R.t["yKJi+/"]),
                        onClick: () =>
                            (0, v.y)({
                                quest: n,
                                errorHints: o,
                                sourceQuestContent: c,
                            }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function k(e) {
    var t, n, o, i, d;
    let {
            quest: v,
            isHovering: P,
            errorHints: k,
            warningHints: I,
            isVisibleInViewport: D,
            onCtxMenuClose: q,
            onCtxMenuOpen: Q,
            onCtxMenuSelect: L,
            sourceQuestContent: V,
        } = e,
        M = (0, j.PB)(v),
        W = (0, p.ZP)(),
        Z = ((0, c.wj)(W) ? N.BRd.DARK : N.BRd.LIGHT) === N.BRd.DARK,
        U = (0, _.tP)(v),
        H = (null == (t = v.userStatus) ? void 0 : t.claimedAt) != null,
        z = (0, _.B6)(v.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        G = (null == (n = v.userStatus) ? void 0 : n.enrolledAt) != null,
        F = (null == (o = v.userStatus) ? void 0 : o.completedAt) != null,
        { onAssetLoadComplete: K } = s.useContext(S.k),
        X = Z ? "text-muted" : "always-white",
        Y = s.useCallback(async () => {
            M &&
                ((0, b.zi)(v) || G
                    ? (0, O.openVideoQuestModal)({
                          quest: v,
                          questContent: x.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: V,
                          sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : (0, h.R)(w.dr.QUEST_HOME_DESKTOP)
                      ? await (0, O.enrollAndStartVideoQuestWithErrorHandling)(v, {
                            questContent: x.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: g.jZ.ACCEPT_QUEST,
                            sourceQuestContent: V,
                            sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })
                      : ((0, f.AH)(v.id, {
                            questContent: x.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: g.jZ.ACCEPT_QUEST,
                            sourceQuestContent: V,
                        }),
                        (0, O.openVideoQuestModal)({
                            quest: v,
                            questContent: x.jn.QUEST_HOME_DESKTOP,
                            sourceQuestContent: V,
                            sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })));
        }, [M, v, G, V]);
    return (0, r.jsxs)("div", {
        className: A.container,
        children: [
            (0, r.jsx)("div", {
                className: A.heroAssetWrapper,
                children: (0, r.jsx)(C.Z, {
                    quest: v,
                    isInteracting: P,
                    hideAssets: !D,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: A.heroAssetCont,
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(A.overlay, {
                    [A.lightThemeGradient]: W === N.BRd.LIGHT,
                    [A.darkThemeGradient]: W === N.BRd.DARK,
                    [A.darkerThemeGradient]: W === N.BRd.DARKER,
                    [A.midnightThemeGradient]: W === N.BRd.MIDNIGHT,
                }),
            }),
            (0, r.jsxs)("div", {
                className: A.positionContentOverBackground,
                children: [
                    (0, r.jsxs)("div", {
                        className: A.contents,
                        children: [
                            (0, r.jsxs)("div", {
                                className: A.topRow,
                                children: [
                                    v.preview &&
                                        (0, r.jsx)("div", {
                                            className: A.pill,
                                            children: (0, r.jsx)(u.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: A.eyebrowText,
                                                children: R.intl.string(R.t.SKNnqq),
                                            }),
                                        }),
                                    M &&
                                        (0, r.jsx)(l.u, {
                                            text: F
                                                ? R.intl.string(R.t.YsCuyF)
                                                : G
                                                  ? R.intl.string(R.t["74KqrR"])
                                                  : (0, b.zi)(v)
                                                    ? R.intl.string(R.t.I6JG46)
                                                    : R.intl.string(R.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, r.jsx)(u.P3F, {
                                                className: A.utilButtonWrapper,
                                                "aria-label": R.intl.string(R.t.RscU7I),
                                                onClick: Y,
                                                children: (0, r.jsx)(u.o1U, {
                                                    color: "currentColor",
                                                    className: A.utilButtonIcon,
                                                }),
                                            }),
                                        }),
                                    (0, r.jsx)(y.i, {
                                        onOpen: Q,
                                        onClose: q,
                                        onSelect: L,
                                        questContent: x.jn.QUEST_HOME_DESKTOP,
                                        quest: v,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: V,
                                        children: (e) => {
                                            var t, n;
                                            return (0, r.jsx)(
                                                u.P3F,
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
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
                                                })({}, e)),
                                                (n = n =
                                                    {
                                                        className: A.utilButtonWrapper,
                                                        "aria-label": R.intl.string(R.t.DEoVWZ),
                                                        children: (0, r.jsx)(u.xhG, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: A.utilButtonIcon,
                                                        }),
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(n)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              t,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(n, e),
                                                          );
                                                      }),
                                                t),
                                            );
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(T.E, {
                                showPlaceholder: !D,
                                width: 100,
                                height: 30,
                                className: A.partnerBranding,
                                children: (0, r.jsx)(E.ZP, {
                                    className: A.partnerBranding,
                                    logotypeClassName: A.partnerLogotypes,
                                    quest: v,
                                    separatorSpacing: E.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: K,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: A.bottomRow,
                                children: [
                                    (0, r.jsxs)("span", {
                                        className: A.promotedByRow,
                                        children: [
                                            (0, r.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: X,
                                                children: R.intl.string(R.t.VAbKhK),
                                            }),
                                            (0, r.jsx)(m.Z, {
                                                className: A.verifiedIcon,
                                                size: 16,
                                                color: u.TVs.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, r.jsx)(u.kSu, {
                                                    color: u.TVs.unsafe_rawColors.WHITE_500.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    null !=
                                                    (d = null == (i = v.config.cosponsorMetadata) ? void 0 : i.name)
                                                        ? d
                                                        : v.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    U || H
                                        ? null
                                        : (0, r.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: X,
                                              children: R.intl.format(R.t["7D8r4F"], { expiryDate: z }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(B, {
                        quest: v,
                        errorHints: k,
                        warningHints: I,
                        isDarkTheme: Z,
                        sourceQuestContent: V,
                    }),
                ],
            }),
        ],
    });
}
