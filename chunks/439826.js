n.d(t, { Z: () => D }), n(784620), n(973216);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(620792),
    o = n(399606),
    c = n(28664),
    d = n(780384),
    u = n(481060),
    m = n(393238),
    p = n(410030),
    f = n(297700),
    h = n(617136),
    x = n(616022),
    b = n(49436),
    g = n(968843),
    v = n(862657),
    j = n(254579),
    C = n(283689),
    y = n(623249),
    _ = n(477005),
    S = n(698716),
    E = n(685613),
    T = n(110560),
    O = n(251360),
    N = n(19148),
    P = n(642145),
    w = n(981631),
    I = n(388032),
    k = n(598589);
function R(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, a.jsx)("div", {
        className: l()(k.pill, {
            [k.pillBrand]: "brand" === n,
            "theme-light": "default" === n,
        }),
        children: (0, a.jsx)(u.Text, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: k.eyebrowText,
            children: t,
        }),
    });
}
function A(e) {
    var t;
    let { quest: n, errorHints: i, warningHints: l, isDarkTheme: o, sourceQuestContent: c } = e,
        { ref: d, height: p = 0 } = (0, m.ZP)([i]),
        f = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        h = (0, g.z)(n),
        { type: x, hints: b } = r.useMemo(
            () =>
                f || h
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
            [i, f, h, l],
        ),
        v = 2 !== x,
        j = (0, u.q_F)({
            opacity: +!!v,
            height: v ? p : 0,
            config: P.Y,
        }),
        C = 0 === x ? u.Mgn : u.d3s,
        _ = u.TVs.unsafe_rawColors.RED_345.css,
        S = 0 === x ? _ : o ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
    return (0, a.jsx)(s.animated.div, {
        style: j,
        children: (0, a.jsxs)("div", {
            ref: d,
            className: k.hints,
            children: [
                (0, a.jsxs)("div", {
                    className: k.hintsContainer,
                    children: [
                        (0, a.jsx)(C, {
                            size: "xs",
                            color: S,
                        }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: o ? "text-muted" : "always-white",
                            children: b.at(0),
                        }),
                    ],
                }),
                0 === x &&
                    (0, a.jsx)(u.Avr, {
                        text: I.intl.string(I.t["yKJi+/"]),
                        onClick: () =>
                            (0, y.y)({
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
function D(e) {
    var t, n, i, s, m;
    let {
            quest: y,
            isHovering: P,
            errorHints: D,
            warningHints: Z,
            isVisibleInViewport: L,
            onCtxMenuClose: M,
            onCtxMenuOpen: U,
            onCtxMenuSelect: B,
            sourceQuestContent: F,
        } = e,
        G = (0, j.PB)(y),
        V = (0, p.ZP)(),
        z = ((0, d.wj)(V) ? w.BRd.DARK : w.BRd.LIGHT) === w.BRd.DARK,
        W = (0, g.tP)(y),
        H = (null == (t = y.userStatus) ? void 0 : t.claimedAt) != null,
        q = (0, g.B6)(y.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        K = (null == (n = y.userStatus) ? void 0 : n.enrolledAt) != null,
        Y = (null == (i = y.userStatus) ? void 0 : i.completedAt) != null,
        { onAssetLoadComplete: Q } = r.useContext(O.k),
        X = z ? "text-muted" : "always-white",
        J = r.useCallback(async () => {
            G &&
                ((0, v.zi)(y) || K
                    ? (0, T.openVideoQuestModal)({
                          quest: y,
                          questContent: b.jn.QUEST_HOME_DESKTOP,
                          sourceQuestContent: F,
                          sourceQuestContentCTA: h.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      })
                    : await (0, T.enrollAndStartVideoQuestWithErrorHandling)(y, {
                          questContent: b.jn.QUEST_HOME_DESKTOP,
                          questContentCTA: h.jZ.ACCEPT_QUEST,
                          sourceQuestContent: F,
                          sourceQuestContentCTA: h.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                      }));
        }, [G, y, K, F]),
        $ = (0, o.e7)([x.Z], () => x.Z.getQuestHomeTakeoverConfig()),
        ee = r.useMemo(() => null != $ && (0, C.P9)($, y.id), [$, y.id]);
    return (0, a.jsxs)("div", {
        className: k.container,
        children: [
            (0, a.jsx)("div", {
                className: k.heroAssetWrapper,
                children: (0, a.jsx)(_.Z, {
                    quest: y,
                    isInteracting: P,
                    hideAssets: !L,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: k.heroAssetCont,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(k.overlay, {
                    [k.lightThemeGradient]: V === w.BRd.LIGHT,
                    [k.darkThemeGradient]: V === w.BRd.DARK,
                    [k.darkerThemeGradient]: V === w.BRd.DARKER,
                    [k.midnightThemeGradient]: V === w.BRd.MIDNIGHT,
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
                                    (ee || y.preview) &&
                                        (0, a.jsxs)(u.Kqy, {
                                            className: k.pills,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ee &&
                                                    !(0, v.zi)(y) &&
                                                    (0, a.jsx)(R, { children: I.intl.string(I.t.Jt6u7B) }),
                                                y.preview &&
                                                    (0, a.jsx)(R, {
                                                        variant: "brand",
                                                        children: I.intl.string(I.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    G &&
                                        (0, a.jsx)(c.u, {
                                            text: Y
                                                ? I.intl.string(I.t.YsCuyF)
                                                : K
                                                  ? I.intl.string(I.t["74KqrR"])
                                                  : (0, v.zi)(y)
                                                    ? I.intl.string(I.t.I6JG46)
                                                    : I.intl.string(I.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.P3F, {
                                                className: k.utilButtonWrapper,
                                                "aria-label": I.intl.string(I.t.RscU7I),
                                                onClick: J,
                                                children: (0, a.jsx)(u.o1U, {
                                                    color: "currentColor",
                                                    className: k.utilButtonIcon,
                                                }),
                                            }),
                                        }),
                                    (0, a.jsx)(S.i, {
                                        onOpen: U,
                                        onClose: M,
                                        onSelect: B,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: y,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: F,
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
                                                        className: k.utilButtonWrapper,
                                                        "aria-label": I.intl.string(I.t.DEoVWZ),
                                                        children: (0, a.jsx)(u.xhG, {
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
                            (0, a.jsx)(N.E, {
                                showPlaceholder: !L,
                                width: 100,
                                height: 30,
                                className: k.partnerBranding,
                                children: (0, a.jsx)(E.ZP, {
                                    className: k.partnerBranding,
                                    logotypeClassName: k.partnerLogotypes,
                                    quest: y,
                                    separatorSpacing: E.US.MEDIUM,
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
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: X,
                                                children: I.intl.string(I.t.VAbKhK),
                                            }),
                                            (0, a.jsx)(f.Z, {
                                                className: k.verifiedIcon,
                                                size: 16,
                                                color: u.TVs.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, a.jsx)(u.kSu, {
                                                    color: u.TVs.unsafe_rawColors.WHITE.css,
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
                                                    (m = null == (s = y.config.cosponsorMetadata) ? void 0 : s.name)
                                                        ? m
                                                        : y.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    W || H
                                        ? null
                                        : (0, a.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: X,
                                              children: I.intl.format(I.t["7D8r4F"], { expiryDate: q }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(A, {
                        quest: y,
                        errorHints: D,
                        warningHints: Z,
                        isDarkTheme: z,
                        sourceQuestContent: F,
                    }),
                ],
            }),
        ],
    });
}
