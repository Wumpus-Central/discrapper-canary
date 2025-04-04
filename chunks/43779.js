n.d(t, { Z: () => w }), n(266796);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(642128),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(918701),
    f = n(467628),
    g = n(566078),
    x = n(472144),
    h = n(644646),
    b = n(65443),
    j = n(69439),
    v = n(46140),
    y = n(642145),
    _ = n(388032),
    C = n(882067);
let O = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function w(e) {
    var t, n, s, w, S;
    let { quest: P, questContent: E, isHovering: N, contentPosition: T, rowIndex: A, onReceiveErrorHints: R } = e,
        B = (0, f.j)({ location: v.dr.QUESTS_BAR_MOBILE }),
        k = o.useMemo(() => g.r.build(P.config), [P.config]),
        q = k.defaultReward.messages.name,
        D = k.defaultReward.messages.nameWithArticle,
        I = B ? q : D,
        W = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: M, scrollHeight: L } = (0, d.Z)(),
        Z = 104 !== L,
        { expansionSpring: V } = (0, c.q_F)({
            expansionSpring: +!!N,
            config:
                ((w = (function (e) {
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
                (S = S = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(S))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(S)).forEach(function (e) {
                          Object.defineProperty(w, e, Object.getOwnPropertyDescriptor(S, e));
                      }),
                w)
        }),
        Q = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        U = (null == (s = P.userStatus) ? void 0 : s.claimedAt) != null,
        { completedRatio: H, completedRatioDisplay: F } = (0, p.I)(P),
        z = (0, p.Bd)(P),
        X = o.useCallback(
            (e) =>
                (0, r.jsx)(
                    c.Text,
                    {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        tag: 'span',
                        className: C.header,
                        children: e
                    },
                    ''.concat(P.id, '_reward')
                ),
            [P.id]
        ),
        K = o.useMemo(() => (U ? X(q) : _.NW.format(_.t['0IUT4e'], { rewardWithArticleHook: () => X(I) })), [q, U, X, I]),
        Y = o.useMemo(() => {
            if (null != z)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: C.description,
                    children: z
                });
        }, [z]),
        G = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: C.container,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: V.to([0, 1], [104, (null != L ? L : 0) + 12])
                },
                className: C.rewardDescriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: C.assetWrapper,
                        children: [
                            !U && Q && (0, r.jsx)('div', { className: C.completionAnimation }),
                            W && !U
                                ? (0, r.jsxs)('div', {
                                      className: C.progressWrapper,
                                      children: [
                                          Q &&
                                              (0, r.jsx)(c.Fmz, {
                                                  importData: O,
                                                  className: C.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !G
                                              }),
                                          (0, r.jsx)(x.Z, {
                                              quest: P,
                                              size: 76,
                                              percentComplete: H,
                                              percentCompleteText: N && !(0, m.zi)(P) ? F : void 0,
                                              children: (0, r.jsx)('div', {
                                                  className: C.circularRewardTileWrapper,
                                                  children: (0, r.jsx)(h.Z, {
                                                      quest: P,
                                                      questContent: E,
                                                      className: C.circularQuestRewardTileAsset,
                                                      location: v.dr.QUEST_HOME_DESKTOP,
                                                      autoplay: N
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(h.Z, {
                                      quest: P,
                                      autoplay: N,
                                      questContent: E,
                                      className: C.questRewardTileAsset,
                                      location: v.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        ref: M,
                        className: a()(C.textContainer, { [C.justifyCenter]: !Z }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: C.questName,
                                children: _.NW.format(_.t.EAYZAg, { questName: P.config.messages.questName })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: a()(C.header, { [C.headerWithoutMargin]: B }),
                                children: K
                            }),
                            B &&
                                (0, r.jsx)(b.Z, {
                                    quest: P,
                                    textColor: 'text-muted'
                                }),
                            Y
                        ]
                    }),
                    Z &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: V.to([0, 1], [1, 0])
                            },
                            className: C.textOverflowBlur
                        })
                ]
            }),
            (0, r.jsx)(j.Z, {
                quest: P,
                location: E,
                contentPosition: T,
                rowIndex: A,
                onReceiveErrorHints: R
            })
        ]
    });
}
