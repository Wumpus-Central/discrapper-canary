n.d(t, { Z: () => B }), n(784620), n(973216);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(137317),
    l = n(28664),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    p = n(410030),
    m = n(44315),
    g = n(617136),
    f = n(509212),
    h = n(272008),
    x = n(113434),
    _ = n(497505),
    b = n(111131),
    v = n(623249),
    j = n(477005),
    C = n(685613),
    y = n(110560),
    E = n(670638),
    O = n(251360),
    S = n(19148),
    T = n(46140),
    w = n(642145),
    P = n(981631),
    N = n(388032),
    A = n(518388);
function R(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: a, isDarkTheme: l, sourceQuestContent: c } = e,
        { ref: p, height: g = 0 } = (0, u.ZP)([o]),
        f = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        h = (0, x.z)(n),
        { type: _, hints: b } = s.useMemo(
            () =>
                f || h
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
            [o, f, h, a],
        ),
        j = 2 !== _,
        C = (0, d.q_F)({
            opacity: +!!j,
            height: j ? g : 0,
            config: w.Y,
        }),
        y = 0 === _ ? d.Mgn : d.d3s,
        E = (0, m.Lq)(P.Ilk.RED_345),
        O = 0 === _ ? E : l ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: C,
        children: (0, r.jsxs)("div", {
            ref: p,
            className: A.hints,
            children: [
                (0, r.jsxs)("div", {
                    className: A.hintsContainer,
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
function B(e) {
    var t, n, o, i, u;
    let {
            quest: m,
            isHovering: v,
            errorHints: w,
            warningHints: B,
            isVisibleInViewport: k,
            onCtxMenuClose: I,
            onCtxMenuOpen: q,
            onCtxMenuSelect: D,
            sourceQuestContent: L,
        } = e,
        V = (0, f.PB)(m),
        Q = (0, p.ZP)(),
        M = ((0, c.wj)(Q) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK,
        W = (0, x.tP)(m),
        Z = (null == (t = m.userStatus) ? void 0 : t.claimedAt) != null,
        U = (0, x.B6)(m.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        H = (null == (n = m.userStatus) ? void 0 : n.enrolledAt) != null,
        F = (null == (o = m.userStatus) ? void 0 : o.completedAt) != null,
        { onAssetLoadComplete: z } = s.useContext(O.k),
        X = s.useCallback(async () => {
            V &&
                ((0, f.zi)(m) || H
                    ? (0, y.openVideoQuestModal)({
                          quest: m,
                          questContent: _.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: L,
                          sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : (0, b.R)(T.dr.QUEST_HOME_DESKTOP)
                      ? await (0, y.enrollAndStartVideoQuestWithErrorHandling)(m, {
                            questContent: _.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: g.jZ.ACCEPT_QUEST,
                            sourceQuestContent: L,
                            sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })
                      : ((0, h.AH)(m.id, {
                            questContent: _.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: g.jZ.ACCEPT_QUEST,
                            sourceQuestContent: L,
                        }),
                        (0, y.openVideoQuestModal)({
                            quest: m,
                            questContent: _.jn.QUEST_HOME_DESKTOP,
                            sourceQuestContent: L,
                            sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })));
        }, [V, m, H, L]);
    return (0, r.jsxs)("div", {
        className: A.container,
        children: [
            (0, r.jsx)("div", {
                className: A.heroAssetWrapper,
                children: (0, r.jsx)(j.Z, {
                    quest: m,
                    isInteracting: v,
                    hideAssets: !k,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: A.heroAssetCont,
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(A.overlay, {
                    [A.darkThemeGradient]: M,
                    [A.lightThemeGradient]: !M,
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
                                    m.preview &&
                                        (0, r.jsx)("div", {
                                            className: A.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: A.eyebrowText,
                                                children: N.intl.string(N.t.SKNnqq),
                                            }),
                                        }),
                                    V &&
                                        (0, r.jsx)(l.u, {
                                            text: F
                                                ? N.intl.string(N.t.YsCuyM)
                                                : H
                                                  ? N.intl.string(N.t["74Kqra"])
                                                  : (0, f.zi)(m)
                                                    ? N.intl.string(N.t["I6JG4+"])
                                                    : N.intl.string(N.t.umdNio),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, r.jsx)(d.P3F, {
                                                className: A.utilButtonWrapper,
                                                "aria-label": N.intl.string(N.t.RscU7O),
                                                onClick: X,
                                                children: (0, r.jsx)(d.o1U, {
                                                    color: "currentColor",
                                                    className: A.utilButtonIcon,
                                                }),
                                            }),
                                        }),
                                    (0, r.jsx)(E.r, {
                                        onOpen: q,
                                        onClose: I,
                                        onSelect: D,
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
                                                        className: A.utilButtonWrapper,
                                                        "aria-label": N.intl.string(N.t.DEoVWV),
                                                        children: (0, r.jsx)(d.xhG, {
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
                            (0, r.jsx)(S.E, {
                                showPlaceholder: !k,
                                width: 100,
                                height: 30,
                                className: A.partnerBranding,
                                children: (0, r.jsx)(C.ZP, {
                                    className: A.partnerBranding,
                                    logotypeClassName: A.partnerLogotypes,
                                    quest: m,
                                    separatorSpacing: C.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: z,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: A.bottomRow,
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
                                    W || Z
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: "text-sm/medium",
                                              color: M ? "text-muted" : "always-white",
                                              children: N.intl.format(N.t["7D8r4O"], { expiryDate: U }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(R, {
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
