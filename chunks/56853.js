n.d(t, {
    A: () => D,
}),
    n(134528),
    n(947204);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(353709),
    o = n(417597),
    c = n(990078),
    d = n(582754),
    u = n(397927),
    m = n(765671),
    p = n(736653),
    h = n(496885),
    x = n(859703),
    g = n(341915),
    f = n(890687),
    b = n(590202),
    v = n(710969),
    j = n(792620),
    _ = n(814793),
    y = n(988436),
    A = n(918338),
    C = n(270045),
    S = n(57718),
    O = n(545986),
    T = n(516226),
    E = n(720875),
    N = n(419367),
    w = n(652215),
    I = n(985018),
    k = n(627669);

function P(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, a.jsx)("div", {
        className: i()(k.Io, {
            [k.tV]: "brand" === n,
            "theme-light": "default" === n,
        }),
        children: (0, a.jsx)(u.Text, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: k.Xi,
            children: t,
        }),
    });
}

function R(e) {
    var t;
    let { quest: n, errorHints: r, warningHints: i, isDarkTheme: o, sourceQuestContent: c } = e,
        { ref: d, height: p = 0 } = (0, m.Ay)([r]),
        h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        x = (0, f.Vn)(n),
        { type: g, hints: b } = l.useMemo(
            () =>
                h || x
                    ? {
                          type: 2,
                          hints: [],
                      }
                    : r.length > 0
                      ? {
                            type: 0,
                            hints: r.map((e) => e.message),
                        }
                      : i.length > 0
                        ? {
                              type: 1,
                              hints: i,
                          }
                        : {
                              type: 2,
                              hints: [],
                          },
            [r, h, x, i],
        ),
        v = 2 !== g,
        j = (0, u.zhh)({
            opacity: +!!v,
            height: v ? p : 0,
            config: N.N,
        }),
        _ = 0 === g ? u.EpV : u.mir,
        A = u.LU0.unsafe_rawColors.RED_345.css,
        C = 0 === g ? A : o ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
    return (0, a.jsx)(s.animated.div, {
        style: j,
        children: (0, a.jsxs)("div", {
            ref: d,
            className: k.XZ,
            children: [
                (0, a.jsxs)("div", {
                    className: k.M5,
                    children: [
                        (0, a.jsx)(_, {
                            size: "xs",
                            color: C,
                        }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: o ? "text-muted" : "always-white",
                            children: b.at(0),
                        }),
                    ],
                }),
                0 === g &&
                    (0, a.jsx)(u.QWc, {
                        text: I.intl.string(I.t["yKJi+/"]),
                        onClick: () =>
                            (0, y.i)({
                                quest: n,
                                errorHints: r,
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
    var t, n, r, s, m;
    let {
            quest: y,
            isHovering: N,
            errorHints: D,
            warningHints: M,
            isVisibleInViewport: L,
            onCtxMenuClose: U,
            onCtxMenuOpen: B,
            onCtxMenuSelect: G,
            sourceQuestContent: F,
        } = e,
        V = (0, j.IO)(y),
        W = (0, p.Ay)(),
        H = ((0, d.Mw)(W) ? w.NJ8.DARK : w.NJ8.LIGHT) === w.NJ8.DARK,
        K = (0, f.LS)(y),
        z = (null == (n = y.userStatus) ? void 0 : n.claimedAt) != null,
        q = (0, f.S5)(y.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        Q = (null == (r = y.userStatus) ? void 0 : r.enrolledAt) != null,
        Y = (null == (s = y.userStatus) ? void 0 : s.completedAt) != null,
        { onAssetLoadComplete: J } = l.useContext(T.M),
        X = H ? "text-muted" : "always-white",
        $ = l.useCallback(() => {
            V &&
                (0, O.d5)({
                    quest: y,
                    questContent: g.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: F,
                    sourceQuestContentCTA: b.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [V, y, F]),
        Z = (0, o.bG)([x.A], () => x.A.getQuestHomeTakeoverConfig()),
        ee = l.useMemo(() => null != Z && (0, _.f0)(Z, y.id), [Z, y.id]);
    return (0, a.jsxs)("div", {
        className: k.kL,
        children: [
            (0, a.jsx)("div", {
                className: k.IC,
                children: (0, a.jsx)(A.A, {
                    quest: y,
                    isInteracting: N,
                    hideAssets: !L,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: k.l1,
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(k.Lw, {
                    [k.So]: W === w.NJ8.LIGHT,
                    [k.en]: W === w.NJ8.DARK,
                    [k.FN]: W === w.NJ8.DARKER,
                    [k.QQ]: W === w.NJ8.MIDNIGHT,
                }),
            }),
            (0, a.jsxs)("div", {
                className: k.nX,
                children: [
                    (0, a.jsxs)("div", {
                        className: k.PG,
                        children: [
                            (0, a.jsxs)("div", {
                                className: k.mY,
                                children: [
                                    (ee || y.preview) &&
                                        (0, a.jsxs)(u.BJc, {
                                            className: k.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ee &&
                                                    !(0, v.Ic)(y) &&
                                                    (0, a.jsx)(P, {
                                                        children: I.intl.string(I.t.Jt6u7B),
                                                    }),
                                                y.preview &&
                                                    (0, a.jsx)(P, {
                                                        variant: "brand",
                                                        children: I.intl.string(I.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    V &&
                                        (0, a.jsx)(c.m, {
                                            text: Y
                                                ? I.intl.string(I.t.YsCuyF)
                                                : Q
                                                  ? I.intl.string(I.t["74KqrR"])
                                                  : (0, v.Ic)(y)
                                                    ? I.intl.string(I.t.I6JG46)
                                                    : I.intl.string(I.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.DUT, {
                                                className: k.iI,
                                                "aria-label": I.intl.string(I.t.RscU7I),
                                                onClick: $,
                                                children: (0, a.jsx)(u.udU, {
                                                    color: "currentColor",
                                                    className: k.A9,
                                                }),
                                            }),
                                        }),
                                    (0, a.jsx)(C.C, {
                                        onOpen: B,
                                        onClose: U,
                                        onSelect: G,
                                        questContent: g.uF.QUEST_HOME_DESKTOP,
                                        quest: y,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: F,
                                        children: (e) => {
                                            var t, n;
                                            return (0, a.jsx)(
                                                u.DUT,
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
                                                        className: k.iI,
                                                        "aria-label": I.intl.string(I.t.DEoVWZ),
                                                        children: (0, a.jsx)(u.jNK, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: k.A9,
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
                            (0, a.jsx)(E.A, {
                                showPlaceholder: !L,
                                width: 100,
                                height: 30,
                                className: k.Iu,
                                children: (0, a.jsx)(S.Ay, {
                                    className: k.Iu,
                                    logotypeClassName: k.ND,
                                    quest: y,
                                    separatorSpacing: S.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: J,
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: k.E_,
                                children: [
                                    (0, a.jsxs)("span", {
                                        className: k.O,
                                        children: [
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: X,
                                                children: I.intl.string(I.t.VAbKhK),
                                            }),
                                            (0, a.jsx)(h.A, {
                                                className: k.w$,
                                                size: 16,
                                                color: u.LU0.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, a.jsx)(u.BNr, {
                                                    color: u.LU0.unsafe_rawColors.WHITE.css,
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
                                                    (t = null == (m = y.config.cosponsorMetadata) ? void 0 : m.name)
                                                        ? t
                                                        : y.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    K || z
                                        ? null
                                        : (0, a.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: X,
                                              children: I.intl.format(I.t["7D8r4F"], {
                                                  expiryDate: q,
                                              }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(R, {
                        quest: y,
                        errorHints: D,
                        warningHints: M,
                        isDarkTheme: H,
                        sourceQuestContent: F,
                    }),
                ],
            }),
        ],
    });
}
