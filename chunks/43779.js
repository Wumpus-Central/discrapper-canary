n.d(t, { Z: () => T }), n(953529);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(695469),
    l = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    p = n(960919),
    m = n(113434),
    f = n(918701),
    g = n(467628),
    x = n(566078),
    h = n(472144),
    b = n(644646),
    j = n(251360),
    _ = n(19148),
    v = n(65443),
    y = n(69439),
    C = n(46140),
    O = n(642145),
    S = n(388032),
    E = n(882067);
let w = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function T(e) {
    var t, n, o, T, N;
    let { quest: A, questContent: R, isHovering: k, contentPosition: B, rowIndex: q, isVisibleInViewport: I, onReceiveErrorHints: D, sourceQuestContent: Q } = e,
        L = (0, g.j)({ location: C.dr.QUESTS_BAR_MOBILE }),
        V = s.useMemo(() => x.r.build(A.config), [A.config]),
        M = V.defaultRewardName,
        W = V.defaultRewardNameWithArticle,
        Z = L ? M : W,
        U = (null == (t = A.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: H, scrollHeight: z } = (0, u.kE)(),
        F = 104 !== z,
        { onAssetLoadComplete: X } = s.useContext(j.k),
        { expansionSpring: K } = (0, c.q_F)({
            expansionSpring: +!!k,
            config:
                ((T = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, O.Y)),
                (N = N = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(N))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(N)).forEach(function (e) {
                          Object.defineProperty(T, e, Object.getOwnPropertyDescriptor(N, e));
                      }),
                T)
        }),
        Y = (null == (n = A.userStatus) ? void 0 : n.completedAt) != null,
        G = (null == (o = A.userStatus) ? void 0 : o.claimedAt) != null,
        J = (0, f.xN)(A.config),
        $ = (0, f.LM)(A.config),
        { completedRatio: ee, completedRatioDisplay: et } = (0, m.I)(A),
        en = (0, m.Bd)(A, Q),
        er = s.useMemo(
            () =>
                G && J
                    ? S.intl.format(S.t['8Op4c3'], {
                          balanceHook: () =>
                              (0, r.jsxs)(P, {
                                  questId: A.id,
                                  children: [
                                      (0, r.jsx)(p.Z, {
                                          shouldUseThemeColor: !0,
                                          className: E.orbsBalanceIcon
                                      }),
                                      $
                                  ]
                              })
                      })
                    : G
                      ? (0, r.jsx)(P, {
                            questId: A.id,
                            children: M
                        })
                      : J
                        ? S.intl.format(S.t.ro1szc, {
                              balanceHook: () =>
                                  (0, r.jsxs)(P, {
                                      questId: A.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: E.orbsBalanceIcon
                                          }),
                                          $
                                      ]
                                  })
                          })
                        : S.intl.format(S.t['0IUT4e'], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(P, {
                                      questId: A.id,
                                      children: Z
                                  })
                          }),
            [M, G, Z, A.id, $, J]
        ),
        es = s.useMemo(() => {
            if (null != en)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: E.description,
                    children: en
                });
        }, [en]),
        eo = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: E.container,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: K.to([0, 1], [104, (null != z ? z : 0) + 12])
                },
                className: E.rewardDescriptionContainer,
                children: [
                    (0, r.jsx)(_.E, {
                        showPlaceholder: !I,
                        width: 80,
                        height: 80,
                        children: (0, r.jsxs)('div', {
                            className: E.assetWrapper,
                            children: [
                                !G && Y && (0, r.jsx)('div', { className: E.completionAnimation }),
                                U && !G
                                    ? (0, r.jsxs)('div', {
                                          className: E.progressWrapper,
                                          children: [
                                              Y &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: w,
                                                      className: E.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !eo
                                                  }),
                                              (0, r.jsx)(h.Z, {
                                                  quest: A,
                                                  size: 76,
                                                  percentComplete: ee,
                                                  percentCompleteText: k && !(0, f.zi)(A) ? et : void 0,
                                                  children: (0, r.jsx)('div', {
                                                      className: E.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(b.Z, {
                                                          quest: A,
                                                          questContent: R,
                                                          className: E.circularQuestRewardTileAsset,
                                                          location: C.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: k,
                                                          onLoadComplete: X,
                                                          sourceQuestContent: Q
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(b.Z, {
                                          quest: A,
                                          autoplay: k,
                                          questContent: R,
                                          className: E.questRewardTileAsset,
                                          location: C.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: X,
                                          sourceQuestContent: Q
                                      })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        ref: H,
                        className: a()(E.textContainer, { [E.justifyCenter]: !F }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: E.questName,
                                children: S.intl.format(S.t.EAYZAg, { questName: A.config.messages.questName })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: a()(E.header, { [E.headerWithoutMargin]: L }),
                                children: er
                            }),
                            L &&
                                (0, r.jsx)(v.Z, {
                                    quest: A,
                                    textColor: 'text-muted'
                                }),
                            es
                        ]
                    }),
                    F &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: K.to([0, 1], [1, 0])
                            },
                            className: E.textOverflowBlur
                        })
                ]
            }),
            (0, r.jsx)(y.Z, {
                quest: A,
                questContent: R,
                contentPosition: B,
                rowIndex: q,
                onReceiveErrorHints: D,
                sourceQuestContent: Q
            })
        ]
    });
}
let P = s.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: 'text-md/semibold',
            color: 'text-default',
            tag: 'span',
            className: E.header,
            children: n
        },
        ''.concat(t, '_reward')
    );
});
