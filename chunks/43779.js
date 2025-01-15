n.d(t, {
    Z: function () {
        return T;
    }
});
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(476183),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(566078),
    x = n(472144),
    g = n(644646),
    h = n(69439),
    f = n(46140),
    v = n(642145),
    C = n(388032),
    j = n(902904);
let _ = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function T(e) {
    var t, n, s;
    let { quest: T, questContent: E, isHovering: S, contentPosition: b, rowIndex: N, onReceiveErrorHints: B } = e,
        y = m.r.build(T.config),
        A = y.defaultReward.messages.name,
        w = y.defaultReward.messages.nameWithArticle,
        R = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: I, scrollHeight: P } = (0, d.Z)(),
        k = 104 !== P,
        { expansionSpring: O } = (0, c.useSpring)({
            expansionSpring: S ? 1 : 0,
            config: {
                ...v.Y,
                clamp: !0
            }
        }),
        q = (null === (n = T.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        M = (null === (s = T.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
        { completedRatio: L, completedRatioDisplay: D } = (0, p.I)(T),
        Z = (0, p.Bd)(T),
        V = r.useCallback(
            (e) =>
                (0, o.jsx)(
                    c.Text,
                    {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        tag: 'span',
                        className: j.header,
                        children: e
                    },
                    ''.concat(T.id, '_reward')
                ),
            [T.id]
        ),
        W = r.useMemo(() => (M ? V(A) : C.intl.format(C.t['0IUT4e'], { rewardWithArticleHook: () => V(w) })), [A, w, M, V]),
        H = r.useMemo(() => {
            if (null != Z)
                return (0, o.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: a()(j.description),
                    children: Z
                });
        }, [Z]),
        Q = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, o.jsxs)('div', {
        className: a()(j.container),
        children: [
            (0, o.jsxs)(i.animated.div, {
                style: {
                    maxHeight: O.to([0, 1], [104, (null != P ? P : 0) + 12])
                },
                className: a()(j.rewardDescriptionContainer),
                children: [
                    (0, o.jsxs)('div', {
                        className: j.assetWrapper,
                        children: [
                            !M && q && (0, o.jsx)('div', { className: j.completionAnimation }),
                            R && !M
                                ? (0, o.jsxs)('div', {
                                      className: j.progressWrapper,
                                      children: [
                                          q &&
                                              (0, o.jsx)(c.LottieAnimation, {
                                                  importData: _,
                                                  className: j.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !Q
                                              }),
                                          (0, o.jsx)(x.Z, {
                                              quest: T,
                                              size: 76,
                                              percentComplete: L,
                                              percentCompleteText: S ? D : void 0,
                                              children: (0, o.jsx)('div', {
                                                  className: j.circularRewardTileWrapper,
                                                  children: (0, o.jsx)(g.Z, {
                                                      quest: T,
                                                      questContent: E,
                                                      className: j.circularQuestRewardTileAsset,
                                                      location: f.dr.QUEST_HOME_DESKTOP
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, o.jsx)(g.Z, {
                                      quest: T,
                                      autoplay: S,
                                      questContent: E,
                                      className: j.questRewardTileAsset,
                                      location: f.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        ref: I,
                        className: a()(j.textContainer, { [j.justifyCenter]: !k }),
                        children: [
                            (0, o.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: j.questName,
                                children: C.intl.format(C.t.EAYZAg, { questName: T.config.messages.questName })
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: j.header,
                                children: W
                            }),
                            H
                        ]
                    }),
                    k &&
                        (0, o.jsx)(i.animated.div, {
                            style: {
                                opacity: O.to([0, 1], [1, 0])
                            },
                            className: j.textOverflowBlur
                        })
                ]
            }),
            (0, o.jsx)(h.Z, {
                quest: T,
                location: E,
                contentPosition: b,
                rowIndex: N,
                onReceiveErrorHints: B
            })
        ]
    });
}
