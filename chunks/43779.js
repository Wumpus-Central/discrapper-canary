n.d(t, { Z: () => T }), n(953529);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(666917),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(960919),
    m = n(313481),
    g = n(509212),
    f = n(373370),
    h = n(115179),
    x = n(472144),
    _ = n(644646),
    b = n(251360),
    j = n(19148),
    v = n(69439),
    C = n(324805),
    y = n(642145),
    E = n(388032),
    O = n(289157);
let S = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function T(e) {
    var t, n, o, T, P;
    let {
            quest: N,
            questContent: R,
            isHovering: A,
            contentPosition: B,
            rowIndex: k,
            isVisibleInViewport: I,
            onReceiveErrorHints: D,
            sourceQuestContent: q,
        } = e,
        L = s.useRef(null),
        Q = (0, h.w8)(N.config),
        V = (0, h.B3)(N.config),
        M = (null == (t = N.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: Z, scrollHeight: W } = (0, d.kE)(),
        H = 104 !== W,
        { onAssetLoadComplete: U } = s.useContext(b.k),
        { expansionSpring: F } = (0, c.q_F)({
            expansionSpring: +!!A,
            config:
                ((T = (function (e) {
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
                })({}, y.Y)),
                (P = P = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(P))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(P)).forEach(function (e) {
                          Object.defineProperty(T, e, Object.getOwnPropertyDescriptor(P, e));
                      }),
                T),
        }),
        z = (null == (n = N.userStatus) ? void 0 : n.completedAt) != null,
        G = (null == (o = N.userStatus) ? void 0 : o.claimedAt) != null,
        K = (0, h.xN)(N.config),
        Y = (0, h.LM)(N.config),
        { completedRatio: X, completedRatioDisplay: J } = (0, m.I)(N),
        $ = (0, f.Bd)(N, q, L),
        ee = s.useMemo(
            () =>
                G && K
                    ? E.intl.format(E.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, r.jsxs)(
                                  w,
                                  {
                                      questId: N.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: O.orbsBalanceIcon,
                                              customSize: 14,
                                          }),
                                          Y,
                                      ],
                                  },
                                  N.id,
                              ),
                      })
                    : G
                      ? (0, r.jsx)(w, {
                            questId: N.id,
                            children: Q,
                        })
                      : K
                        ? E.intl.format(E.t.ro1sze, {
                              balanceHook: () =>
                                  (0, r.jsxs)(
                                      w,
                                      {
                                          questId: N.id,
                                          children: [
                                              (0, r.jsx)(p.Z, {
                                                  shouldUseThemeColor: !0,
                                                  className: O.orbsBalanceIcon,
                                                  customSize: 14,
                                              }),
                                              Y,
                                          ],
                                      },
                                      N.id,
                                  ),
                          })
                        : E.intl.format(E.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(
                                      w,
                                      {
                                          questId: N.id,
                                          children: V,
                                      },
                                      N.id,
                                  ),
                          }),
            [Q, G, V, N.id, Y, K],
        ),
        et = s.useMemo(() => {
            if (null != $)
                return (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: O.description,
                    children: $,
                });
        }, [$]),
        en = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: O.container,
        ref: L,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: F.to([0, 1], [104, (null != W ? W : 0) + 12]),
                },
                className: O.rewardDescriptionContainer,
                children: [
                    (0, r.jsx)(j.E, {
                        showPlaceholder: !I,
                        width: 80,
                        height: 80,
                        children: (0, r.jsxs)("div", {
                            className: O.assetWrapper,
                            children: [
                                !G && z && (0, r.jsx)("div", { className: O.completionAnimation }),
                                M && !G
                                    ? (0, r.jsxs)("div", {
                                          className: O.progressWrapper,
                                          children: [
                                              z &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: S,
                                                      className: O.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !en,
                                                  }),
                                              (0, r.jsx)(x.Z, {
                                                  quest: N,
                                                  size: 76,
                                                  percentComplete: X,
                                                  percentCompleteText: A && !(0, g.zi)(N) ? J : void 0,
                                                  children: (0, r.jsx)("div", {
                                                      className: O.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(_.Z, {
                                                          quest: N,
                                                          questContent: R,
                                                          className: O.circularQuestRewardTileAsset,
                                                          location: C.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: A,
                                                          onLoadComplete: U,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: q,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(_.Z, {
                                          quest: N,
                                          autoplay: A,
                                          questContent: R,
                                          className: O.questRewardTileAsset,
                                          location: C.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: U,
                                          lazyLoad: !0,
                                          sourceQuestContent: q,
                                      }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        ref: Z,
                        className: a()(O.textContainer, { [O.justifyCenter]: !H }),
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: O.questName,
                                children: E.intl.format(E.t.EAYZAr, { questName: N.config.messages.questName }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: O.header,
                                children: ee,
                            }),
                            et,
                        ],
                    }),
                    H &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: F.to([0, 1], [1, 0]),
                            },
                            className: O.textOverflowBlur,
                        }),
                ],
            }),
            (0, r.jsx)(v.Z, {
                quest: N,
                questContent: R,
                contentPosition: B,
                rowIndex: k,
                onReceiveErrorHints: D,
                sourceQuestContent: q,
            }),
        ],
    });
}
let w = s.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: "text-md/semibold",
            color: "header-primary",
            tag: "span",
            className: O.header,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
