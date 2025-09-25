n.d(t, { Z: () => D }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(6383),
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
        G = i.useRef(null),
        B = i.useMemo(() => h.r.build(S.config), [S.config]),
        Z = B.defaultRewardName,
        F = B.defaultRewardNameWithArticle,
        V = (null == (t = S.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: H, scrollHeight: Y } = (0, u.kE)(),
        W = (null != Y ? Y : 0) + P,
        K = Y !== R,
        { onAssetLoadComplete: z } = i.useContext(E.k),
        { expansionSpring: q } = (0, c.q_F)({
            expansionSpring: +!!D,
            config: N(A({}, v.Y), { clamp: !0 }),
        }),
        X = (null == (n = S.userStatus) ? void 0 : n.completedAt) != null,
        Q = (null == (a = S.userStatus) ? void 0 : a.claimedAt) != null,
        J = (0, _.xN)(S.config),
        $ = (0, _.LM)(S.config),
        { completedRatio: ee, completedRatioDisplay: et } = (0, p.I)(S),
        en = (0, p.Bd)(S, U, G),
        er = i.useMemo(
            () =>
                Q && J
                    ? I.intl.format(I.t["8Op4c3"], {
                          balanceHook: () =>
                              (0, r.jsxs)(x, {
                                  questId: S.id,
                                  children: [
                                      (0, r.jsx)(f.Z, {
                                          shouldUseThemeColor: !0,
                                          className: T.orbsBalanceIcon,
                                      }),
                                      $,
                                  ],
                              }),
                      })
                    : Q
                      ? (0, r.jsx)(x, {
                            questId: S.id,
                            children: Z,
                        })
                      : J
                        ? I.intl.format(I.t.ro1szc, {
                              balanceHook: () =>
                                  (0, r.jsxs)(x, {
                                      questId: S.id,
                                      children: [
                                          (0, r.jsx)(f.Z, {
                                              shouldUseThemeColor: !0,
                                              className: T.orbsBalanceIcon,
                                          }),
                                          $,
                                      ],
                                  }),
                          })
                        : I.intl.format(I.t["0IUT4e"], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(x, {
                                      questId: S.id,
                                      children: F,
                                  }),
                          }),
            [Z, Q, F, S.id, $, J],
        ),
        ei = i.useMemo(() => {
            if (null != en)
                return (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: T.description,
                    children: en,
                });
        }, [en]),
        ea = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: T.container,
        ref: G,
        children: [
            (0, r.jsxs)(s.animated.div, {
                style: {
                    maxHeight: q.to([0, 1], [R, W]),
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
                                !Q && X && (0, r.jsx)("div", { className: T.completionAnimation }),
                                V && !Q
                                    ? (0, r.jsxs)("div", {
                                          className: T.progressWrapper,
                                          children: [
                                              X &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: w,
                                                      className: T.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ea,
                                                  }),
                                              (0, r.jsx)(m.Z, {
                                                  quest: S,
                                                  size: 76,
                                                  percentComplete: ee,
                                                  percentCompleteText: D && !(0, _.zi)(S) ? et : void 0,
                                                  children: (0, r.jsx)("div", {
                                                      className: T.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(g.Z, {
                                                          quest: S,
                                                          questContent: C,
                                                          className: T.circularQuestRewardTileAsset,
                                                          location: O.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: D,
                                                          onLoadComplete: z,
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
                                          onLoadComplete: z,
                                          lazyLoad: !0,
                                          sourceQuestContent: U,
                                      }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        ref: H,
                        className: o()(T.textContainer, { [T.justifyCenter]: !K }),
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
                                children: er,
                            }),
                            ei,
                        ],
                    }),
                    K &&
                        (0, r.jsx)(s.animated.div, {
                            style: {
                                opacity: q.to([0, 1], [1, 0]),
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
