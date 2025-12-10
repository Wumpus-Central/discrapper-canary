n.d(t, { Z: () => M }), n(784620), n(973216);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(467721),
    o = n(399606),
    c = n(28664),
    d = n(780384),
    u = n(481060),
    m = n(393238),
    p = n(410030),
    h = n(297700),
    x = n(22095),
    f = n(617136),
    g = n(616022),
    b = n(49436),
    v = n(111131),
    j = n(968843),
    _ = n(862657),
    y = n(254579),
    C = n(283689),
    S = n(623249),
    E = n(477005),
    O = n(698716),
    T = n(685613),
    N = n(110560),
    P = n(251360),
    w = n(19148),
    I = n(324805),
    k = n(642145),
    R = n(981631),
    A = n(388032),
    D = n(518388);
function Z(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, a.jsx)("div", {
        className: l()(D.pill, {
            [D.pillBrand]: "brand" === n,
            "theme-light": "default" === n,
        }),
        children: (0, a.jsx)(u.Text, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: D.eyebrowText,
            children: t,
        }),
    });
}
function L(e) {
    var t;
    let { quest: n, errorHints: i, warningHints: l, isDarkTheme: o, sourceQuestContent: c } = e,
        { ref: d, height: p = 0 } = (0, m.ZP)([i]),
        h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        x = (0, j.z)(n),
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
        b = 2 !== f,
        v = (0, u.q_F)({
            opacity: +!!b,
            height: b ? p : 0,
            config: k.Y,
        }),
        _ = 0 === f ? u.Mgn : u.d3s,
        y = u.TVs.unsafe_rawColors.RED_345.css,
        C = 0 === f ? y : o ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
    return (0, a.jsx)(s.animated.div, {
        style: v,
        children: (0, a.jsxs)("div", {
            ref: d,
            className: D.hints,
            children: [
                (0, a.jsxs)("div", {
                    className: D.hintsContainer,
                    children: [
                        (0, a.jsx)(_, {
                            size: "xs",
                            color: C,
                        }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: o ? "text-muted" : "always-white",
                            children: g.at(0),
                        }),
                    ],
                }),
                0 === f &&
                    (0, a.jsx)(u.Avr, {
                        text: A.intl.string(A.t["yKJi+/"]),
                        onClick: () =>
                            (0, S.y)({
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
function M(e) {
    var t, n, i, s, m;
    let {
            quest: S,
            isHovering: k,
            errorHints: M,
            warningHints: U,
            isVisibleInViewport: B,
            onCtxMenuClose: F,
            onCtxMenuOpen: G,
            onCtxMenuSelect: V,
            sourceQuestContent: H,
        } = e,
        W = (0, y.PB)(S),
        z = (0, p.ZP)(),
        q = ((0, d.wj)(z) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK,
        K = (0, j.tP)(S),
        Q = (null == (t = S.userStatus) ? void 0 : t.claimedAt) != null,
        Y = (0, j.B6)(S.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        X = (null == (n = S.userStatus) ? void 0 : n.enrolledAt) != null,
        J = (null == (i = S.userStatus) ? void 0 : i.completedAt) != null,
        { onAssetLoadComplete: $ } = r.useContext(P.k),
        ee = q ? "text-muted" : "always-white",
        et = r.useCallback(async () => {
            W &&
                ((0, _.zi)(S) || X
                    ? (0, N.openVideoQuestModal)({
                          quest: S,
                          questContent: b.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: H,
                          sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : (0, v.R)(I.dr.QUEST_HOME_DESKTOP)
                      ? await (0, N.enrollAndStartVideoQuestWithErrorHandling)(S, {
                            questContent: b.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: f.jZ.ACCEPT_QUEST,
                            sourceQuestContent: H,
                            sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })
                      : ((0, x.AH)(S.id, {
                            questContent: b.jn.QUEST_HOME_DESKTOP,
                            questContentCTA: f.jZ.ACCEPT_QUEST,
                            sourceQuestContent: H,
                        }),
                        (0, N.openVideoQuestModal)({
                            quest: S,
                            questContent: b.jn.QUEST_HOME_DESKTOP,
                            sourceQuestContent: H,
                            sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                        })));
        }, [W, S, X, H]),
        en = (0, o.e7)([g.Z], () => g.Z.getQuestHomeTakeoverConfig()),
        ea = r.useMemo(() => null != en && (0, C.P9)(en, S.id), [en, S.id]);
    return (0, a.jsxs)("div", {
        className: D.container,
        children: [
            (0, a.jsx)("div", {
                className: D.heroAssetWrapper,
                children: (0, a.jsx)(E.Z, {
                    quest: S,
                    isInteracting: k,
                    hideAssets: !B,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: D.heroAssetCont,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(D.overlay, {
                    [D.lightThemeGradient]: z === R.BRd.LIGHT,
                    [D.darkThemeGradient]: z === R.BRd.DARK,
                    [D.darkerThemeGradient]: z === R.BRd.DARKER,
                    [D.midnightThemeGradient]: z === R.BRd.MIDNIGHT,
                }),
            }),
            (0, a.jsxs)("div", {
                className: D.positionContentOverBackground,
                children: [
                    (0, a.jsxs)("div", {
                        className: D.contents,
                        children: [
                            (0, a.jsxs)("div", {
                                className: D.topRow,
                                children: [
                                    (ea || S.preview) &&
                                        (0, a.jsxs)(u.Kqy, {
                                            className: D.pills,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ea &&
                                                    !(0, _.zi)(S) &&
                                                    (0, a.jsx)(Z, { children: A.intl.string(A.t.Jt6u7B) }),
                                                S.preview &&
                                                    (0, a.jsx)(Z, {
                                                        variant: "brand",
                                                        children: A.intl.string(A.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    W &&
                                        (0, a.jsx)(c.u, {
                                            text: J
                                                ? A.intl.string(A.t.YsCuyF)
                                                : X
                                                  ? A.intl.string(A.t["74KqrR"])
                                                  : (0, _.zi)(S)
                                                    ? A.intl.string(A.t.I6JG46)
                                                    : A.intl.string(A.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.P3F, {
                                                className: D.utilButtonWrapper,
                                                "aria-label": A.intl.string(A.t.RscU7I),
                                                onClick: et,
                                                children: (0, a.jsx)(u.o1U, {
                                                    color: "currentColor",
                                                    className: D.utilButtonIcon,
                                                }),
                                            }),
                                        }),
                                    (0, a.jsx)(O.i, {
                                        onOpen: G,
                                        onClose: F,
                                        onSelect: V,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: S,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: H,
                                        children: (e) => {
                                            var t, n;
                                            return (0, a.jsx)(
                                                u.P3F,
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
                                                        className: D.utilButtonWrapper,
                                                        "aria-label": A.intl.string(A.t.DEoVWZ),
                                                        children: (0, a.jsx)(u.xhG, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: D.utilButtonIcon,
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
                            (0, a.jsx)(w.E, {
                                showPlaceholder: !B,
                                width: 100,
                                height: 30,
                                className: D.partnerBranding,
                                children: (0, a.jsx)(T.ZP, {
                                    className: D.partnerBranding,
                                    logotypeClassName: D.partnerLogotypes,
                                    quest: S,
                                    separatorSpacing: T.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: $,
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: D.bottomRow,
                                children: [
                                    (0, a.jsxs)("span", {
                                        className: D.promotedByRow,
                                        children: [
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: ee,
                                                children: A.intl.string(A.t.VAbKhK),
                                            }),
                                            (0, a.jsx)(h.Z, {
                                                className: D.verifiedIcon,
                                                size: 16,
                                                color: u.TVs.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, a.jsx)(u.kSu, {
                                                    color: u.TVs.unsafe_rawColors.WHITE_500.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    null !=
                                                    (m = null == (s = S.config.cosponsorMetadata) ? void 0 : s.name)
                                                        ? m
                                                        : S.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    K || Q
                                        ? null
                                        : (0, a.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: ee,
                                              children: A.intl.format(A.t["7D8r4F"], { expiryDate: Y }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(L, {
                        quest: S,
                        errorHints: M,
                        warningHints: U,
                        isDarkTheme: q,
                        sourceQuestContent: H,
                    }),
                ],
            }),
        ],
    });
}
