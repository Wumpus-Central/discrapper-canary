n.d(t, { Z: () => S }), n(953529);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(815061),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(960919),
    m = n(509212),
    f = n(113434),
    g = n(566078),
    x = n(472144),
    h = n(644646),
    b = n(251360),
    _ = n(19148),
    j = n(69439),
    v = n(46140),
    C = n(642145),
    y = n(388032),
    E = n(289157);
let O = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function S(e) {
    var t, n, o, S, w;
    let {
            quest: P,
            questContent: A,
            isHovering: N,
            contentPosition: R,
            rowIndex: B,
            isVisibleInViewport: k,
            onReceiveErrorHints: q,
            sourceQuestContent: I,
        } = e,
        Q = s.useMemo(() => g.r.build(P.config), [P.config]),
        D = Q.defaultRewardName,
        V = Q.defaultRewardNameWithArticle,
        M = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: L, scrollHeight: W } = (0, d.kE)(),
        Z = 104 !== W,
        { onAssetLoadComplete: U } = s.useContext(b.k),
        { expansionSpring: H } = (0, c.q_F)({
            expansionSpring: +!!N,
            config:
                ((S = (function (e) {
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
                })({}, C.Y)),
                (w = w = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(w))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(w)).forEach(function (e) {
                          Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(w, e));
                      }),
                S),
        }),
        F = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        z = (null == (o = P.userStatus) ? void 0 : o.claimedAt) != null,
        X = (0, m.xN)(P.config),
        K = (0, m.LM)(P.config),
        { completedRatio: Y, completedRatioDisplay: G } = (0, f.I)(P),
        J = (0, f.Bd)(P, I),
        $ = s.useMemo(
            () =>
                z && X
                    ? y.intl.format(y.t["8Op4c3"], {
                          balanceHook: () =>
                              (0, r.jsxs)(T, {
                                  questId: P.id,
                                  children: [
                                      (0, r.jsx)(p.Z, {
                                          shouldUseThemeColor: !0,
                                          className: E.orbsBalanceIcon,
                                      }),
                                      K,
                                  ],
                              }),
                      })
                    : z
                      ? (0, r.jsx)(T, {
                            questId: P.id,
                            children: D,
                        })
                      : X
                        ? y.intl.format(y.t.ro1szc, {
                              balanceHook: () =>
                                  (0, r.jsxs)(T, {
                                      questId: P.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: E.orbsBalanceIcon,
                                          }),
                                          K,
                                      ],
                                  }),
                          })
                        : y.intl.format(y.t["0IUT4e"], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(T, {
                                      questId: P.id,
                                      children: V,
                                  }),
                          }),
            [D, z, V, P.id, K, X],
        ),
        ee = s.useMemo(() => {
            if (null != J)
                return (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: E.description,
                    children: J,
                });
        }, [J]),
        et = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: E.container,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: H.to([0, 1], [104, (null != W ? W : 0) + 12]),
                },
                className: E.rewardDescriptionContainer,
                children: [
                    (0, r.jsx)(_.E, {
                        showPlaceholder: !k,
                        width: 80,
                        height: 80,
                        children: (0, r.jsxs)("div", {
                            className: E.assetWrapper,
                            children: [
                                !z && F && (0, r.jsx)("div", { className: E.completionAnimation }),
                                M && !z
                                    ? (0, r.jsxs)("div", {
                                          className: E.progressWrapper,
                                          children: [
                                              F &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: O,
                                                      className: E.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !et,
                                                  }),
                                              (0, r.jsx)(x.Z, {
                                                  quest: P,
                                                  size: 76,
                                                  percentComplete: Y,
                                                  percentCompleteText: N && !(0, m.zi)(P) ? G : void 0,
                                                  children: (0, r.jsx)("div", {
                                                      className: E.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(h.Z, {
                                                          quest: P,
                                                          questContent: A,
                                                          className: E.circularQuestRewardTileAsset,
                                                          location: v.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: N,
                                                          onLoadComplete: U,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: I,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(h.Z, {
                                          quest: P,
                                          autoplay: N,
                                          questContent: A,
                                          className: E.questRewardTileAsset,
                                          location: v.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: U,
                                          lazyLoad: !0,
                                          sourceQuestContent: I,
                                      }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        ref: L,
                        className: a()(E.textContainer, { [E.justifyCenter]: !Z }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: E.questName,
                                children: y.intl.format(y.t.EAYZAg, { questName: P.config.messages.questName }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: E.header,
                                children: $,
                            }),
                            ee,
                        ],
                    }),
                    Z &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: H.to([0, 1], [1, 0]),
                            },
                            className: E.textOverflowBlur,
                        }),
                ],
            }),
            (0, r.jsx)(j.Z, {
                quest: P,
                questContent: A,
                contentPosition: R,
                rowIndex: B,
                onReceiveErrorHints: q,
                sourceQuestContent: I,
            }),
        ],
    });
}
let T = s.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: "text-md/semibold",
            color: "header-primary",
            tag: "span",
            className: E.header,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
