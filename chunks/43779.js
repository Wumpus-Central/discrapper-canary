n.d(t, { Z: () => S });
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(918701),
    x = n(467628),
    h = n(566078),
    g = n(472144),
    f = n(644646),
    v = n(65443),
    _ = n(69439),
    C = n(46140),
    j = n(642145),
    b = n(388032),
    T = n(902904);
let E = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function S(e) {
    var t, n, a;
    let { quest: S, questContent: N, isHovering: y, contentPosition: w, rowIndex: A, onReceiveErrorHints: B } = e,
        R = (0, x.j)({ location: C.dr.QUESTS_BAR_MOBILE }),
        P = r.useMemo(() => h.r.build(S.config), [S.config]),
        k = P.defaultReward.messages.name,
        q = P.defaultReward.messages.nameWithArticle,
        I = R ? k : q,
        O = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: M, scrollHeight: D } = (0, d.Z)(),
        L = 104 !== D,
        { expansionSpring: Z } = (0, c.q_F)({
            expansionSpring: y ? 1 : 0,
            config: {
                ...j.Y,
                clamp: !0
            }
        }),
        W = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        V = (null === (a = S.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
        { completedRatio: Q, completedRatioDisplay: U } = (0, p.I)(S),
        H = (0, p.Bd)(S),
        z = (0, m.xN)(S.config),
        F = (0, m.LM)(S.config),
        X = r.useCallback(
            (e) =>
                (0, s.jsx)(
                    c.Text,
                    {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        tag: 'span',
                        className: T.header,
                        children: e
                    },
                    ''.concat(S.id, '_reward')
                ),
            [S.id]
        ),
        K = r.useMemo(() => (V ? X(k) : b.intl.format(b.t['0IUT4e'], { rewardWithArticleHook: () => X(I) })), [k, V, X, I]),
        Y = r.useMemo(() => {
            if (null != H)
                return (0, s.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: o()(T.description),
                    children: H
                });
        }, [H]),
        G = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, s.jsxs)('div', {
        className: o()(T.container),
        children: [
            (0, s.jsxs)(i.animated.div, {
                style: {
                    maxHeight: Z.to([0, 1], [104, (null != D ? D : 0) + 12])
                },
                className: o()(T.rewardDescriptionContainer),
                children: [
                    (0, s.jsxs)('div', {
                        className: T.assetWrapper,
                        children: [
                            !V && W && (0, s.jsx)('div', { className: T.completionAnimation }),
                            O && !V
                                ? (0, s.jsxs)('div', {
                                      className: T.progressWrapper,
                                      children: [
                                          W &&
                                              (0, s.jsx)(c.Fmz, {
                                                  importData: E,
                                                  className: T.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !G
                                              }),
                                          (0, s.jsx)(g.Z, {
                                              quest: S,
                                              size: 76,
                                              percentComplete: Q,
                                              percentCompleteText: y ? U : void 0,
                                              children: (0, s.jsx)('div', {
                                                  className: T.circularRewardTileWrapper,
                                                  children: (0, s.jsx)(f.Z, {
                                                      quest: S,
                                                      questContent: N,
                                                      className: T.circularQuestRewardTileAsset,
                                                      location: C.dr.QUEST_HOME_DESKTOP,
                                                      autoplay: y
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, s.jsxs)('div', {
                                      className: T.questRewardTileContainer,
                                      children: [
                                          z &&
                                              (0, s.jsxs)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-xs/bold',
                                                  className: T.questOrbQuantity,
                                                  children: ['+', F]
                                              }),
                                          (0, s.jsx)(f.Z, {
                                              quest: S,
                                              autoplay: y,
                                              questContent: N,
                                              className: T.questRewardTileAsset,
                                              location: C.dr.QUEST_HOME_DESKTOP
                                          })
                                      ]
                                  })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        ref: M,
                        className: o()(T.textContainer, { [T.justifyCenter]: !L }),
                        children: [
                            (0, s.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: T.questName,
                                children: b.intl.format(b.t.EAYZAg, { questName: S.config.messages.questName })
                            }),
                            (0, s.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: o()(T.header, { [T.headerWithoutMargin]: R }),
                                children: K
                            }),
                            R &&
                                (0, s.jsx)(v.Z, {
                                    quest: S,
                                    textColor: 'text-muted'
                                }),
                            Y
                        ]
                    }),
                    L &&
                        (0, s.jsx)(i.animated.div, {
                            style: {
                                opacity: Z.to([0, 1], [1, 0])
                            },
                            className: T.textOverflowBlur
                        })
                ]
            }),
            (0, s.jsx)(_.Z, {
                quest: S,
                location: N,
                contentPosition: w,
                rowIndex: A,
                onReceiveErrorHints: B
            })
        ]
    });
}
