n.d(t, { Z: () => A }), n(784620), n(973216);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(205120),
    o = n(28664),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    m = n(410030),
    p = n(297700),
    h = n(22095),
    x = n(617136),
    f = n(49436),
    g = n(111131),
    b = n(968843),
    v = n(862657),
    j = n(254579),
    _ = n(623249),
    y = n(477005),
    C = n(698716),
    S = n(685613),
    E = n(110560),
    O = n(251360),
    T = n(19148),
    N = n(324805),
    P = n(642145),
    w = n(981631),
    I = n(388032),
    k = n(518388);
function R(e) {
    var t;
    let { quest: n, errorHints: i, warningHints: l, isDarkTheme: o, sourceQuestContent: c } = e,
        { ref: m, height: p = 0 } = (0, u.ZP)([i]),
        h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        x = (0, b.z)(n),
        { type: f, hints: g } = r.useMemo(
            () =>
                h || x
                    ? {
                          type: 2,
                          hints: [],
                      }
                    : i.length > 0
                      ? {
                            type: 0,
                            hints: i.map((e) => e.message),
                        }
                      : l.length > 0
                        ? {
                              type: 1,
                              hints: l,
                          }
                        : {
                              type: 2,
                              hints: [],
                          },
            [i, h, x, l],
        ),
        v = 2 !== f,
        j = (0, d.q_F)({
            opacity: +!!v,
            height: v ? p : 0,
            config: P.Y,
        }),
        y = 0 === f ? d.Mgn : d.d3s,
        C = d.TVs.unsafe_rawColors.RED_345.css,
        S = 0 === f ? C : o ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
    return (0, a.jsx)(s.animated.div, {
        style: j,
        children: (0, a.jsxs)("div", {
            ref: m,
            className: k.hints,
            children: [
                (0, a.jsxs)("div", {
                    className: k.hintsContainer,
                    children: [
                        (0, a.jsx)(y, {
                            size: "xs",
                            color: S,
                        }),
                        (0, a.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: o ? "text-muted" : "always-white",
                            children: g.at(0),
                        }),
                    ],
                }),
                0 === f &&
                    (0, a.jsx)(d.Avr, {
                        text: I.intl.string(I.t["yKJi+/"]),
                        onClick: () =>
                            (0, _.y)({
                                quest: n,
                                errorHints: i,
                                sourceQuestContent: c,
                            }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function A(e) {
    var t, n, i, s, u;
    let {
            quest: _,
            isHovering: P,
            errorHints: A,
            warningHints: D,
            isVisibleInViewport: Z,
            onCtxMenuClose: L,
            onCtxMenuOpen: M,
            onCtxMenuSelect: U,
            sourceQuestContent: B,
        } = e,
        F = (0, j.PB)(_),
        G = (0, m.ZP)(),
        V = ((0, c.wj)(G) ? w.BRd.DARK : w.BRd.LIGHT) === w.BRd.DARK,
        H = (0, b.tP)(_),
        W = (null == (t = _.userStatus) ? void 0 : t.claimedAt) != null,
        z = (0, b.B6)(_.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        K = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        q = (null == (i = _.userStatus) ? void 0 : i.completedAt) != null,
        { onAssetLoadComplete: Q } = r.useContext(O.k),
        Y = V ? "text-muted" : "always-white",
        X = r.useCallback(async () => {
            F &&
                ((0, v.zi)(_) || K
                    ? (0, E.openVideoQuestModal)({
                          quest: _,
                          questContent: f.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: B,
                          sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : (0, g.R)(N.dr.QUEST_HOME_DESKTOP)
                      ? await (0, E.enrollAndStartVideoQuestWithErrorHandling)(_, {
                            questContent: f.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: x.jZ.ACCEPT_QUEST,
                            sourceQuestContent: B,
                            sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })
                      : ((0, h.AH)(_.id, {
                            questContent: f.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: x.jZ.ACCEPT_QUEST,
                            sourceQuestContent: B,
                        }),
                        (0, E.openVideoQuestModal)({
                            quest: _,
                            questContent: f.jn.QUEST_HOME_DESKTOP,
                            sourceQuestContent: B,
                            sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })));
        }, [F, _, K, B]);
    return (0, a.jsxs)("div", {
        className: k.container,
        children: [
            (0, a.jsx)("div", {
                className: k.heroAssetWrapper,
                children: (0, a.jsx)(y.Z, {
                    quest: _,
                    isInteracting: P,
                    hideAssets: !Z,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: k.heroAssetCont,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(k.overlay, {
                    [k.lightThemeGradient]: G === w.BRd.LIGHT,
                    [k.darkThemeGradient]: G === w.BRd.DARK,
                    [k.darkerThemeGradient]: G === w.BRd.DARKER,
                    [k.midnightThemeGradient]: G === w.BRd.MIDNIGHT,
                }),
            }),
            (0, a.jsxs)("div", {
                className: k.positionContentOverBackground,
                children: [
                    (0, a.jsxs)("div", {
                        className: k.contents,
                        children: [
                            (0, a.jsxs)("div", {
                                className: k.topRow,
                                children: [
                                    _.preview &&
                                        (0, a.jsx)("div", {
                                            className: k.pill,
                                            children: (0, a.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                className: k.eyebrowText,
                                                children: I.intl.string(I.t.SKNnqq),
                                            }),
                                        }),
                                    F &&
                                        (0, a.jsx)(o.u, {
                                            text: q
                                                ? I.intl.string(I.t.YsCuyF)
                                                : K
                                                  ? I.intl.string(I.t["74KqrR"])
                                                  : (0, v.zi)(_)
                                                    ? I.intl.string(I.t.I6JG46)
                                                    : I.intl.string(I.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(d.P3F, {
                                                className: k.utilButtonWrapper,
                                                "aria-label": I.intl.string(I.t.RscU7I),
                                                onClick: X,
                                                children: (0, a.jsx)(d.o1U, {
                                                    color: "currentColor",
                                                    className: k.utilButtonIcon,
                                                }),
                                            }),
                                        }),
                                    (0, a.jsx)(C.i, {
                                        onOpen: M,
                                        onClose: L,
                                        onSelect: U,
                                        questContent: f.jn.QUEST_HOME_DESKTOP,
                                        quest: _,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: B,
                                        children: (e) => {
                                            var t, n;
                                            return (0, a.jsx)(
                                                d.P3F,
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            a = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (a = a.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            a.forEach(function (t) {
                                                                var a;
                                                                (a = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: a,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = a);
                                                            });
                                                    }
                                                    return e;
                                                })({}, e)),
                                                (n = n =
                                                    {
                                                        className: k.utilButtonWrapper,
                                                        "aria-label": I.intl.string(I.t.DEoVWZ),
                                                        children: (0, a.jsx)(d.xhG, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: k.utilButtonIcon,
                                                        }),
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var a = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, a);
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
                            (0, a.jsx)(T.E, {
                                showPlaceholder: !Z,
                                width: 100,
                                height: 30,
                                className: k.partnerBranding,
                                children: (0, a.jsx)(S.ZP, {
                                    className: k.partnerBranding,
                                    logotypeClassName: k.partnerLogotypes,
                                    quest: _,
                                    separatorSpacing: S.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Q,
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: k.bottomRow,
                                children: [
                                    (0, a.jsxs)("span", {
                                        className: k.promotedByRow,
                                        children: [
                                            (0, a.jsx)(d.Text, {
                                                variant: "text-sm/medium",
                                                color: Y,
                                                children: I.intl.string(I.t.VAbKhK),
                                            }),
                                            (0, a.jsx)(p.Z, {
                                                className: k.verifiedIcon,
                                                size: 16,
                                                color: d.TVs.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, a.jsx)(d.kSu, {
                                                    color: d.TVs.unsafe_rawColors.WHITE_500.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, a.jsx)(d.Text, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    null !=
                                                    (u = null == (s = _.config.cosponsorMetadata) ? void 0 : s.name)
                                                        ? u
                                                        : _.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    H || W
                                        ? null
                                        : (0, a.jsx)(d.Text, {
                                              variant: "text-sm/medium",
                                              color: Y,
                                              children: I.intl.format(I.t["7D8r4F"], { expiryDate: z }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(R, {
                        quest: _,
                        errorHints: A,
                        warningHints: D,
                        isDarkTheme: V,
                        sourceQuestContent: B,
                    }),
                ],
            }),
        ],
    });
}
