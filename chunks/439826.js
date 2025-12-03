n.d(t, { Z: () => B }), n(784620), n(973216);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(205120),
    l = n(28664),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    p = n(410030),
    m = n(22095),
    g = n(617136),
    f = n(49436),
    h = n(111131),
    x = n(968843),
    _ = n(862657),
    b = n(254579),
    j = n(623249),
    v = n(477005),
    C = n(698716),
    y = n(685613),
    E = n(110560),
    O = n(251360),
    S = n(19148),
    T = n(324805),
    w = n(642145),
    P = n(981631),
    N = n(388032),
    R = n(518388);
function A(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: a, isDarkTheme: l, sourceQuestContent: c } = e,
        { ref: p, height: m = 0 } = (0, u.ZP)([o]),
        g = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        f = (0, x.z)(n),
        { type: h, hints: _ } = s.useMemo(
            () =>
                g || f
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
            [o, g, f, a],
        ),
        b = 2 !== h,
        v = (0, d.q_F)({
            opacity: +!!b,
            height: b ? m : 0,
            config: w.Y,
        }),
        C = 0 === h ? d.Mgn : d.d3s,
        y = d.TVs.unsafe_rawColors.RED_345.css,
        E = 0 === h ? y : l ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: v,
        children: (0, r.jsxs)("div", {
            ref: p,
            className: R.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: R.hintsContainer,
                    children: [
                        (0, r.jsx)(C, {
                            size: "xs",
                            color: E,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: _.at(0),
                        }),
                    ],
                }),
                0 === h &&
                    (0, r.jsx)(d.Avr, {
                        text: N.intl.string(N.t["yKJi+/"]),
                        onClick: () =>
                            (0, j.y)({
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
function B(e) {
    var t, n, o, i, u;
    let {
            quest: j,
            isHovering: w,
            errorHints: B,
            warningHints: k,
            isVisibleInViewport: I,
            onCtxMenuClose: D,
            onCtxMenuOpen: q,
            onCtxMenuSelect: L,
            sourceQuestContent: Q,
        } = e,
        V = (0, b.PB)(j),
        M = (0, p.ZP)(),
        Z = ((0, c.wj)(M) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK,
        W = (0, x.tP)(j),
        H = (null == (t = j.userStatus) ? void 0 : t.claimedAt) != null,
        U = (0, x.B6)(j.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        F = (null == (n = j.userStatus) ? void 0 : n.enrolledAt) != null,
        z = (null == (o = j.userStatus) ? void 0 : o.completedAt) != null,
        { onAssetLoadComplete: G } = s.useContext(O.k),
        K = s.useCallback(async () => {
            V &&
                ((0, _.zi)(j) || F
                    ? (0, E.openVideoQuestModal)({
                          quest: j,
                          questContent: f.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: Q,
                          sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : (0, h.R)(T.dr.QUEST_HOME_DESKTOP)
                      ? await (0, E.enrollAndStartVideoQuestWithErrorHandling)(j, {
                            questContent: f.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: g.jZ.ACCEPT_QUEST,
                            sourceQuestContent: Q,
                            sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })
                      : ((0, m.AH)(j.id, {
                            questContent: f.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: g.jZ.ACCEPT_QUEST,
                            sourceQuestContent: Q,
                        }),
                        (0, E.openVideoQuestModal)({
                            quest: j,
                            questContent: f.jn.QUEST_HOME_DESKTOP,
                            sourceQuestContent: Q,
                            sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })));
        }, [V, j, F, Q]);
    return (0, r.jsxs)("div", {
        className: R.container,
        children: [
            (0, r.jsx)("div", {
                className: R.heroAssetWrapper,
                children: (0, r.jsx)(v.Z, {
                    quest: j,
                    isInteracting: w,
                    hideAssets: !I,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: R.heroAssetCont,
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(R.overlay, {
                    [R.lightThemeGradient]: M === P.BRd.LIGHT,
                    [R.darkThemeGradient]: M === P.BRd.DARK,
                    [R.darkerThemeGradient]: M === P.BRd.DARKER,
                    [R.midnightThemeGradient]: M === P.BRd.MIDNIGHT,
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
                                    j.preview &&
                                        (0, r.jsx)("div", {
                                            className: R.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: R.eyebrowText,
                                                children: N.intl.string(N.t.SKNnqq),
                                            }),
                                        }),
                                    V &&
                                        (0, r.jsx)(l.u, {
                                            text: z
                                                ? N.intl.string(N.t.YsCuyF)
                                                : F
                                                  ? N.intl.string(N.t["74KqrR"])
                                                  : (0, _.zi)(j)
                                                    ? N.intl.string(N.t.I6JG46)
                                                    : N.intl.string(N.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, r.jsx)(d.P3F, {
                                                className: R.utilButtonWrapper,
                                                "aria-label": N.intl.string(N.t.RscU7I),
                                                onClick: K,
                                                children: (0, r.jsx)(d.o1U, {
                                                    color: "currentColor",
                                                    className: R.utilButtonIcon,
                                                }),
                                            }),
                                        }),
                                    (0, r.jsx)(C.i, {
                                        onOpen: q,
                                        onClose: D,
                                        onSelect: L,
                                        questContent: f.jn.QUEST_HOME_DESKTOP,
                                        quest: j,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: Q,
                                        children: (e) => {
                                            var t, n;
                                            return (0, r.jsx)(
                                                d.P3F,
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
                                                        className: R.utilButtonWrapper,
                                                        "aria-label": N.intl.string(N.t.DEoVWZ),
                                                        children: (0, r.jsx)(d.xhG, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: R.utilButtonIcon,
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
                            (0, r.jsx)(S.E, {
                                showPlaceholder: !I,
                                width: 100,
                                height: 30,
                                className: R.partnerBranding,
                                children: (0, r.jsx)(y.ZP, {
                                    className: R.partnerBranding,
                                    logotypeClassName: R.partnerLogotypes,
                                    quest: j,
                                    separatorSpacing: y.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: G,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: R.bottomRow,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        color: Z ? "text-muted" : "always-white",
                                        children: N.intl.format(N.t.buEvBw, {
                                            brandName:
                                                null != (u = null == (i = j.config.cosponsorMetadata) ? void 0 : i.name)
                                                    ? u
                                                    : j.config.messages.gamePublisher,
                                        }),
                                    }),
                                    W || H
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: "text-sm/medium",
                                              color: Z ? "text-muted" : "always-white",
                                              children: N.intl.format(N.t["7D8r4F"], { expiryDate: U }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(A, {
                        quest: j,
                        errorHints: B,
                        warningHints: k,
                        isDarkTheme: Z,
                        sourceQuestContent: Q,
                    }),
                ],
            }),
        ],
    });
}
