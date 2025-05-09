n.d(t, { Z: () => P }), n(953529);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(683305),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(960919),
    m = n(113434),
    f = n(918701),
    g = n(467628),
    x = n(566078),
    h = n(472144),
    b = n(644646),
    j = n(251360),
    v = n(65443),
    _ = n(69439),
    y = n(46140),
    C = n(642145),
    O = n(388032),
    w = n(882067);
let S = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function P(e) {
    var t, n, s, P, T;
    let { quest: N, questContent: A, isHovering: R, contentPosition: B, rowIndex: k, onReceiveErrorHints: q } = e,
        I = (0, g.j)({ location: y.dr.QUESTS_BAR_MOBILE }),
        D = o.useMemo(() => x.r.build(N.config), [N.config]),
        M = D.defaultReward.messages.name,
        L = D.defaultReward.messages.nameWithArticle,
        Z = I ? M : L,
        W = (null == (t = N.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: V, scrollHeight: Q } = (0, d.kE)(),
        U = 104 !== Q,
        { onAssetLoadComplete: H } = o.useContext(j.k),
        { expansionSpring: z } = (0, c.q_F)({
            expansionSpring: +!!R,
            config:
                ((P = (function (e) {
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
                })({}, C.Y)),
                (T = T = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(T))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(T)).forEach(function (e) {
                          Object.defineProperty(P, e, Object.getOwnPropertyDescriptor(T, e));
                      }),
                P)
        }),
        F = (null == (n = N.userStatus) ? void 0 : n.completedAt) != null,
        X = (null == (s = N.userStatus) ? void 0 : s.claimedAt) != null,
        K = (0, f.xN)(N.config),
        Y = (0, f.LM)(N.config),
        { completedRatio: G, completedRatioDisplay: J } = (0, m.I)(N),
        $ = (0, m.Bd)(N),
        ee = o.useMemo(
            () =>
                X && K
                    ? O.intl.format(O.t['8Op4c3'], {
                          balanceHook: () =>
                              (0, r.jsxs)(E, {
                                  questId: N.id,
                                  children: [
                                      (0, r.jsx)(p.Z, {
                                          shouldUseThemeColor: !0,
                                          className: w.orbsBalanceIcon
                                      }),
                                      Y
                                  ]
                              })
                      })
                    : X
                      ? (0, r.jsx)(E, {
                            questId: N.id,
                            children: M
                        })
                      : K
                        ? O.intl.format(O.t.ro1szc, {
                              balanceHook: () =>
                                  (0, r.jsxs)(E, {
                                      questId: N.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: w.orbsBalanceIcon
                                          }),
                                          Y
                                      ]
                                  })
                          })
                        : O.intl.format(O.t['0IUT4e'], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(E, {
                                      questId: N.id,
                                      children: Z
                                  })
                          }),
            [M, X, Z, N.id, Y, K]
        ),
        et = o.useMemo(() => {
            if (null != $)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: w.description,
                    children: $
                });
        }, [$]),
        en = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: w.container,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: z.to([0, 1], [104, (null != Q ? Q : 0) + 12])
                },
                className: w.rewardDescriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: w.assetWrapper,
                        children: [
                            !X && F && (0, r.jsx)('div', { className: w.completionAnimation }),
                            W && !X
                                ? (0, r.jsxs)('div', {
                                      className: w.progressWrapper,
                                      children: [
                                          F &&
                                              (0, r.jsx)(c.Fmz, {
                                                  importData: S,
                                                  className: w.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !en
                                              }),
                                          (0, r.jsx)(h.Z, {
                                              quest: N,
                                              size: 76,
                                              percentComplete: G,
                                              percentCompleteText: R && !(0, f.zi)(N) ? J : void 0,
                                              children: (0, r.jsx)('div', {
                                                  className: w.circularRewardTileWrapper,
                                                  children: (0, r.jsx)(b.Z, {
                                                      quest: N,
                                                      questContent: A,
                                                      className: w.circularQuestRewardTileAsset,
                                                      location: y.dr.QUEST_HOME_DESKTOP,
                                                      autoplay: R,
                                                      onLoadComplete: H
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(b.Z, {
                                      quest: N,
                                      autoplay: R,
                                      questContent: A,
                                      className: w.questRewardTileAsset,
                                      location: y.dr.QUEST_HOME_DESKTOP,
                                      onLoadComplete: H
                                  })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        ref: V,
                        className: a()(w.textContainer, { [w.justifyCenter]: !U }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: w.questName,
                                children: O.intl.format(O.t.EAYZAg, { questName: N.config.messages.questName })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: a()(w.header, { [w.headerWithoutMargin]: I }),
                                children: ee
                            }),
                            I &&
                                (0, r.jsx)(v.Z, {
                                    quest: N,
                                    textColor: 'text-muted'
                                }),
                            et
                        ]
                    }),
                    U &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: z.to([0, 1], [1, 0])
                            },
                            className: w.textOverflowBlur
                        })
                ]
            }),
            (0, r.jsx)(_.Z, {
                quest: N,
                location: A,
                contentPosition: B,
                rowIndex: k,
                onReceiveErrorHints: q
            })
        ]
    });
}
let E = o.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: 'text-md/semibold',
            color: 'text-normal',
            tag: 'span',
            className: w.header,
            children: n
        },
        ''.concat(t, '_reward')
    );
});
