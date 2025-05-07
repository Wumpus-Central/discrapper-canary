n.d(t, { Z: () => S }), n(953529);
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
    j = n(65443),
    v = n(69439),
    _ = n(46140),
    y = n(642145),
    C = n(388032),
    O = n(882067);
let w = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function S(e) {
    var t, n, s, S, E;
    let { quest: T, questContent: N, isHovering: A, contentPosition: R, rowIndex: B, onReceiveErrorHints: k } = e,
        q = (0, g.j)({ location: _.dr.QUESTS_BAR_MOBILE }),
        I = o.useMemo(() => x.r.build(T.config), [T.config]),
        D = I.defaultReward.messages.name,
        M = I.defaultReward.messages.nameWithArticle,
        L = q ? D : M,
        Z = (null == (t = T.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: W, scrollHeight: V } = (0, d.kE)(),
        Q = 104 !== V,
        { expansionSpring: U } = (0, c.q_F)({
            expansionSpring: +!!A,
            config:
                ((S = (function (e) {
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
                })({}, y.Y)),
                (E = E = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(E))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(E)).forEach(function (e) {
                          Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(E, e));
                      }),
                S)
        }),
        H = (null == (n = T.userStatus) ? void 0 : n.completedAt) != null,
        z = (null == (s = T.userStatus) ? void 0 : s.claimedAt) != null,
        F = (0, f.xN)(T.config),
        X = (0, f.LM)(T.config),
        { completedRatio: K, completedRatioDisplay: Y } = (0, m.I)(T),
        G = (0, m.Bd)(T),
        J = o.useMemo(
            () =>
                z && F
                    ? C.intl.format(C.t['8Op4c3'], {
                          balanceHook: () =>
                              (0, r.jsxs)(P, {
                                  questId: T.id,
                                  children: [
                                      (0, r.jsx)(p.Z, {
                                          shouldUseThemeColor: !0,
                                          className: O.orbsBalanceIcon
                                      }),
                                      X
                                  ]
                              })
                      })
                    : z
                      ? (0, r.jsx)(P, {
                            questId: T.id,
                            children: D
                        })
                      : F
                        ? C.intl.format(C.t.ro1szc, {
                              balanceHook: () =>
                                  (0, r.jsxs)(P, {
                                      questId: T.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: O.orbsBalanceIcon
                                          }),
                                          X
                                      ]
                                  })
                          })
                        : C.intl.format(C.t['0IUT4e'], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(P, {
                                      questId: T.id,
                                      children: L
                                  })
                          }),
            [D, z, L, T.id, X, F]
        ),
        $ = o.useMemo(() => {
            if (null != G)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: O.description,
                    children: G
                });
        }, [G]),
        ee = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: O.container,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: U.to([0, 1], [104, (null != V ? V : 0) + 12])
                },
                className: O.rewardDescriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: O.assetWrapper,
                        children: [
                            !z && H && (0, r.jsx)('div', { className: O.completionAnimation }),
                            Z && !z
                                ? (0, r.jsxs)('div', {
                                      className: O.progressWrapper,
                                      children: [
                                          H &&
                                              (0, r.jsx)(c.Fmz, {
                                                  importData: w,
                                                  className: O.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !ee
                                              }),
                                          (0, r.jsx)(h.Z, {
                                              quest: T,
                                              size: 76,
                                              percentComplete: K,
                                              percentCompleteText: A && !(0, f.zi)(T) ? Y : void 0,
                                              children: (0, r.jsx)('div', {
                                                  className: O.circularRewardTileWrapper,
                                                  children: (0, r.jsx)(b.Z, {
                                                      quest: T,
                                                      questContent: N,
                                                      className: O.circularQuestRewardTileAsset,
                                                      location: _.dr.QUEST_HOME_DESKTOP,
                                                      autoplay: A
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(b.Z, {
                                      quest: T,
                                      autoplay: A,
                                      questContent: N,
                                      className: O.questRewardTileAsset,
                                      location: _.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        ref: W,
                        className: a()(O.textContainer, { [O.justifyCenter]: !Q }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: O.questName,
                                children: C.intl.format(C.t.EAYZAg, { questName: T.config.messages.questName })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: a()(O.header, { [O.headerWithoutMargin]: q }),
                                children: J
                            }),
                            q &&
                                (0, r.jsx)(j.Z, {
                                    quest: T,
                                    textColor: 'text-muted'
                                }),
                            $
                        ]
                    }),
                    Q &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: U.to([0, 1], [1, 0])
                            },
                            className: O.textOverflowBlur
                        })
                ]
            }),
            (0, r.jsx)(v.Z, {
                quest: T,
                location: N,
                contentPosition: R,
                rowIndex: B,
                onReceiveErrorHints: k
            })
        ]
    });
}
let P = o.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: 'text-md/semibold',
            color: 'text-normal',
            tag: 'span',
            className: O.header,
            children: n
        },
        ''.concat(t, '_reward')
    );
});
