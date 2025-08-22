n.d(t, { Z: () => D }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
    l = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    f = n(960919),
    _ = n(509212),
    p = n(113434),
    h = n(566078),
    m = n(472144),
    g = n(644646),
    E = n(251360),
    b = n(19148),
    y = n(69439),
    O = n(46140),
    v = n(642145),
    I = n(388032),
    T = n(289157);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = 104,
    P = 12,
    w = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function D(e) {
    var t, n, a;
    let {
            quest: S,
            questContent: C,
            isHovering: D,
            contentPosition: L,
            rowIndex: j,
            isVisibleInViewport: M,
            onReceiveErrorHints: k,
            sourceQuestContent: U,
        } = e,
        G = i.useMemo(() => h.r.build(S.config), [S.config]),
        B = G.defaultRewardName,
        Z = G.defaultRewardNameWithArticle,
        V = (null == (t = S.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: F, scrollHeight: H } = (0, u.kE)(),
        Y = (null != H ? H : 0) + P,
        W = H !== R,
        { onAssetLoadComplete: K } = i.useContext(E.k),
        { expansionSpring: z } = (0, c.q_F)({
            expansionSpring: +!!D,
            config: N(A({}, v.Y), { clamp: !0 }),
        }),
        q = (null == (n = S.userStatus) ? void 0 : n.completedAt) != null,
        X = (null == (a = S.userStatus) ? void 0 : a.claimedAt) != null,
        Q = (0, _.xN)(S.config),
        J = (0, _.LM)(S.config),
        { completedRatio: $, completedRatioDisplay: ee } = (0, p.I)(S),
        et = (0, p.Bd)(S, U),
        en = i.useMemo(
            () =>
                X && Q
                    ? I.intl.format(I.t["8Op4c3"], {
                          balanceHook: () =>
                              (0, r.jsxs)(x, {
                                  questId: S.id,
                                  children: [
                                      (0, r.jsx)(f.Z, {
                                          shouldUseThemeColor: !0,
                                          className: T.orbsBalanceIcon,
                                      }),
                                      J,
                                  ],
                              }),
                      })
                    : X
                      ? (0, r.jsx)(x, {
                            questId: S.id,
                            children: B,
                        })
                      : Q
                        ? I.intl.format(I.t.ro1szc, {
                              balanceHook: () =>
                                  (0, r.jsxs)(x, {
                                      questId: S.id,
                                      children: [
                                          (0, r.jsx)(f.Z, {
                                              shouldUseThemeColor: !0,
                                              className: T.orbsBalanceIcon,
                                          }),
                                          J,
                                      ],
                                  }),
                          })
                        : I.intl.format(I.t["0IUT4e"], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(x, {
                                      questId: S.id,
                                      children: Z,
                                  }),
                          }),
            [B, X, Z, S.id, J, Q],
        ),
        er = i.useMemo(() => {
            if (null != et)
                return (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: T.description,
                    children: et,
                });
        }, [et]),
        ei = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: T.container,
        children: [
            (0, r.jsxs)(s.animated.div, {
                style: {
                    maxHeight: z.to([0, 1], [R, Y]),
                },
                className: T.rewardDescriptionContainer,
                children: [
                    (0, r.jsx)(b.E, {
                        showPlaceholder: !M,
                        width: 80,
                        height: 80,
                        children: (0, r.jsxs)("div", {
                            className: T.assetWrapper,
                            children: [
                                !X && q && (0, r.jsx)("div", { className: T.completionAnimation }),
                                V && !X
                                    ? (0, r.jsxs)("div", {
                                          className: T.progressWrapper,
                                          children: [
                                              q &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: w,
                                                      className: T.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ei,
                                                  }),
                                              (0, r.jsx)(m.Z, {
                                                  quest: S,
                                                  size: 76,
                                                  percentComplete: $,
                                                  percentCompleteText: D && !(0, _.zi)(S) ? ee : void 0,
                                                  children: (0, r.jsx)("div", {
                                                      className: T.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(g.Z, {
                                                          quest: S,
                                                          questContent: C,
                                                          className: T.circularQuestRewardTileAsset,
                                                          location: O.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: D,
                                                          onLoadComplete: K,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: U,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(g.Z, {
                                          quest: S,
                                          autoplay: D,
                                          questContent: C,
                                          className: T.questRewardTileAsset,
                                          location: O.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: K,
                                          lazyLoad: !0,
                                          sourceQuestContent: U,
                                      }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        ref: F,
                        className: o()(T.textContainer, { [T.justifyCenter]: !W }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: T.questName,
                                children: I.intl.format(I.t.EAYZAg, { questName: S.config.messages.questName }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: T.header,
                                children: en,
                            }),
                            er,
                        ],
                    }),
                    W &&
                        (0, r.jsx)(s.animated.div, {
                            style: {
                                opacity: z.to([0, 1], [1, 0]),
                            },
                            className: T.textOverflowBlur,
                        }),
                ],
            }),
            (0, r.jsx)(y.Z, {
                quest: S,
                questContent: C,
                contentPosition: L,
                rowIndex: j,
                onReceiveErrorHints: k,
                sourceQuestContent: U,
            }),
        ],
    });
}
let x = i.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: "text-md/semibold",
            color: "header-primary",
            tag: "span",
            className: T.header,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
