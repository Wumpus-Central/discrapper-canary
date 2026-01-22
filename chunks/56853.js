n.d(t, {
    A: () => D,
}),
    n(134528),
    n(947204);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(108531),
    o = n(417597),
    c = n(990078),
    d = n(582754),
    u = n(397927),
    m = n(765671),
    p = n(736653),
    h = n(496885),
    f = n(216456),
    x = n(859703),
    b = n(341915),
    g = n(890687),
    v = n(710969),
    j = n(792620),
    y = n(814793),
    _ = n(988436),
    A = n(918338),
    C = n(270045),
    S = n(57718),
    O = n(545986),
    E = n(516226),
    N = n(720875),
    T = n(419367),
    I = n(652215),
    w = n(985018),
    k = n(627669);

function P(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, a.jsx)("div", {
        className: r()(k.Io, {
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
    let { quest: n, errorHints: i, warningHints: r, isDarkTheme: o, sourceQuestContent: c } = e,
        { ref: d, height: p = 0 } = (0, m.Ay)([i]),
        h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        f = (0, g.Vn)(n),
        { type: x, hints: b } = l.useMemo(
            () =>
                h || f
                    ? {
                          type: 2,
                          hints: [],
                      }
                    : i.length > 0
                      ? {
                            type: 0,
                            hints: i.map((e) => e.message),
                        }
                      : r.length > 0
                        ? {
                              type: 1,
                              hints: r,
                          }
                        : {
                              type: 2,
                              hints: [],
                          },
            [i, h, f, r],
        ),
        v = 2 !== x,
        j = (0, u.zhh)({
            opacity: +!!v,
            height: v ? p : 0,
            config: T.N,
        }),
        y = 0 === x ? u.EpV : u.mir,
        A = u.LU0.unsafe_rawColors.RED_345.css,
        C = 0 === x ? A : o ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
    return (0, a.jsx)(s.animated.div, {
        style: j,
        children: (0, a.jsxs)("div", {
            ref: d,
            className: k.XZ,
            children: [
                (0, a.jsxs)("div", {
                    className: k.M5,
                    children: [
                        (0, a.jsx)(y, {
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
                0 === x &&
                    (0, a.jsx)(u.QWc, {
                        text: w.intl.string(w.t["yKJi+/"]),
                        onClick: () =>
                            (0, _.i)({
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
            quest: _,
            isHovering: T,
            errorHints: D,
            warningHints: M,
            isVisibleInViewport: L,
            onCtxMenuClose: U,
            onCtxMenuOpen: B,
            onCtxMenuSelect: G,
            sourceQuestContent: F,
        } = e,
        V = (0, j.IO)(_),
        H = (0, p.Ay)(),
        W = ((0, d.Mw)(H) ? I.NJ8.DARK : I.NJ8.LIGHT) === I.NJ8.DARK,
        K = (0, g.LS)(_),
        z = (null == (n = _.userStatus) ? void 0 : n.claimedAt) != null,
        q = (0, g.S5)(_.config.expiresAt, {
            month: "numeric",
            day: "numeric",
        }),
        Q = (null == (i = _.userStatus) ? void 0 : i.enrolledAt) != null,
        Y = (null == (s = _.userStatus) ? void 0 : s.completedAt) != null,
        { onAssetLoadComplete: J } = l.useContext(E.M),
        X = W ? "text-muted" : "always-white",
        $ = l.useCallback(() => {
            V &&
                (0, O.d5)({
                    quest: _,
                    questContent: b.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: F,
                    sourceQuestContentCTA: f.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [V, _, F]),
        Z = (0, o.bG)([x.A], () => x.A.getQuestHomeTakeoverConfig()),
        ee = l.useMemo(() => null != Z && (0, y.f0)(Z, _.id), [Z, _.id]);
    return (0, a.jsxs)("div", {
        className: k.kL,
        children: [
            (0, a.jsx)("div", {
                className: k.IC,
                children: (0, a.jsx)(A.A, {
                    quest: _,
                    isInteracting: T,
                    hideAssets: !L,
                    imageSize: {
                        width: 1320,
                        height: 370,
                    },
                    containerClassName: k.l1,
                }),
            }),
            (0, a.jsx)("div", {
                className: r()(k.Lw, {
                    [k.So]: H === I.NJ8.LIGHT,
                    [k.en]: H === I.NJ8.DARK,
                    [k.FN]: H === I.NJ8.DARKER,
                    [k.QQ]: H === I.NJ8.MIDNIGHT,
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
                                    (ee || _.preview) &&
                                        (0, a.jsxs)(u.BJc, {
                                            className: k.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ee &&
                                                    !(0, v.Ic)(_) &&
                                                    (0, a.jsx)(P, {
                                                        children: w.intl.string(w.t.Jt6u7B),
                                                    }),
                                                _.preview &&
                                                    (0, a.jsx)(P, {
                                                        variant: "brand",
                                                        children: w.intl.string(w.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    V &&
                                        (0, a.jsx)(c.m, {
                                            text: Y
                                                ? w.intl.string(w.t.YsCuyF)
                                                : Q
                                                  ? w.intl.string(w.t["74KqrR"])
                                                  : (0, v.Ic)(_)
                                                    ? w.intl.string(w.t.I6JG46)
                                                    : w.intl.string(w.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.DUT, {
                                                className: k.iI,
                                                "aria-label": w.intl.string(w.t.RscU7I),
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
                                        questContent: b.uF.QUEST_HOME_DESKTOP,
                                        quest: _,
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
                                                        "aria-label": w.intl.string(w.t.DEoVWZ),
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
                            (0, a.jsx)(N.A, {
                                showPlaceholder: !L,
                                width: 100,
                                height: 30,
                                className: k.Iu,
                                children: (0, a.jsx)(S.Ay, {
                                    className: k.Iu,
                                    logotypeClassName: k.ND,
                                    quest: _,
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
                                                children: w.intl.string(w.t.VAbKhK),
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
                                                    (t = null == (m = _.config.cosponsorMetadata) ? void 0 : m.name)
                                                        ? t
                                                        : _.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    K || z
                                        ? null
                                        : (0, a.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: X,
                                              children: w.intl.format(w.t["7D8r4F"], {
                                                  expiryDate: q,
                                              }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(R, {
                        quest: _,
                        errorHints: D,
                        warningHints: M,
                        isDarkTheme: W,
                        sourceQuestContent: F,
                    }),
                ],
            }),
        ],
    });
}
