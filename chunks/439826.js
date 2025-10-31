n.d(t, { Z: () => B }), n(784620), n(973216);
var r = n(951288),
    s = n(647438),
    a = n(120356),
    o = n.n(a),
    i = n(13941),
    l = n(28664),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    p = n(410030),
    m = n(44315),
    g = n(22095),
    f = n(617136),
    h = n(509212),
    x = n(113434),
    _ = n(497505),
    b = n(111131),
    j = n(623249),
    v = n(477005),
    C = n(685613),
    y = n(110560),
    E = n(670638),
    O = n(251360),
    S = n(19148),
    T = n(46140),
    w = n(642145),
    P = n(981631),
    N = n(388032),
    R = n(518388);
function A(e) {
    var t;
    let { quest: n, errorHints: a, warningHints: o, isDarkTheme: l, sourceQuestContent: c } = e,
        { ref: p, height: g = 0 } = (0, u.ZP)([a]),
        f = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        h = (0, x.z)(n),
        { type: _, hints: b } = s.useMemo(
            () =>
                f || h
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
            [a, f, h, o],
        ),
        v = 2 !== _,
        C = (0, d.q_F)({
            opacity: +!!v,
            height: v ? g : 0,
            config: w.Y,
        }),
        y = 0 === _ ? d.Mgn : d.d3s,
        E = (0, m.Lq)(P.Ilk.RED_345),
        O = 0 === _ ? E : l ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: C,
        children: (0, r.jsxs)("div", {
            ref: p,
            className: R.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: R.hintsContainer,
                    children: [
                        (0, r.jsx)(y, {
                            size: "xs",
                            color: O,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: b.at(0),
                        }),
                    ],
                }),
                0 === _ &&
                    (0, r.jsx)(d.Avr, {
                        text: N.intl.string(N.t["yKJi+/"]),
                        onClick: () =>
                            (0, j.y)({
                                quest: n,
                                errorHints: a,
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
    var t, n, a, i, u;
    let {
            quest: m,
            isHovering: j,
            errorHints: w,
            warningHints: B,
            isVisibleInViewport: k,
            onCtxMenuClose: I,
            onCtxMenuOpen: D,
            onCtxMenuSelect: q,
            sourceQuestContent: L,
        } = e,
        Q = (0, h.PB)(m),
        V = (0, p.ZP)(),
        M = ((0, c.wj)(V) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK,
        Z = (0, x.tP)(m),
        W = (null == (t = m.userStatus) ? void 0 : t.claimedAt) != null,
        H = (0, x.B6)(m.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        U = (null == (n = m.userStatus) ? void 0 : n.enrolledAt) != null,
        F = (null == (a = m.userStatus) ? void 0 : a.completedAt) != null,
        { onAssetLoadComplete: z } = s.useContext(O.k),
        K = s.useCallback(async () => {
            Q &&
                ((0, h.zi)(m) || U
                    ? (0, y.openVideoQuestModal)({
                          quest: m,
                          questContent: _.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: L,
                          sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : (0, b.R)(T.dr.QUEST_HOME_DESKTOP)
                      ? await (0, y.enrollAndStartVideoQuestWithErrorHandling)(m, {
                            questContent: _.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: f.jZ.ACCEPT_QUEST,
                            sourceQuestContent: L,
                            sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })
                      : ((0, g.AH)(m.id, {
                            questContent: _.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: f.jZ.ACCEPT_QUEST,
                            sourceQuestContent: L,
                        }),
                        (0, y.openVideoQuestModal)({
                            quest: m,
                            questContent: _.jn.QUEST_HOME_DESKTOP,
                            sourceQuestContent: L,
                            sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })));
        }, [Q, m, U, L]);
    return (0, r.jsxs)("div", {
        className: R.container,
        children: [
            (0, r.jsx)("div", {
                className: R.heroAssetWrapper,
                children: (0, r.jsx)(v.Z, {
                    quest: m,
                    isInteracting: j,
                    hideAssets: !k,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: R.heroAssetCont,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(R.overlay, {
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
                                    m.preview &&
                                        (0, r.jsx)("div", {
                                            className: R.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: R.eyebrowText,
                                                children: N.intl.string(N.t.SKNnqq),
                                            }),
                                        }),
                                    Q &&
                                        (0, r.jsx)(l.u, {
                                            text: F
                                                ? N.intl.string(N.t.YsCuyF)
                                                : U
                                                  ? N.intl.string(N.t["74KqrR"])
                                                  : (0, h.zi)(m)
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
                                    (0, r.jsx)(E.r, {
                                        onOpen: D,
                                        onClose: I,
                                        onSelect: q,
                                        questContent: _.jn.QUEST_HOME_DESKTOP,
                                        quest: m,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: L,
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
                                showPlaceholder: !k,
                                width: 100,
                                height: 30,
                                className: R.partnerBranding,
                                children: (0, r.jsx)(C.ZP, {
                                    className: R.partnerBranding,
                                    logotypeClassName: R.partnerLogotypes,
                                    quest: m,
                                    separatorSpacing: C.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: z,
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
                                                null != (u = null == (i = m.config.cosponsorMetadata) ? void 0 : i.name)
                                                    ? u
                                                    : m.config.messages.gamePublisher,
                                        }),
                                    }),
                                    Z || W
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: "text-sm/medium",
                                              color: M ? "text-muted" : "always-white",
                                              children: N.intl.format(N.t["7D8r4F"], { expiryDate: H }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(A, {
                        quest: m,
                        errorHints: w,
                        warningHints: B,
                        isDarkTheme: M,
                        sourceQuestContent: L,
                    }),
                ],
            }),
        ],
    });
}
