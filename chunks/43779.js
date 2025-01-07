n.d(t, {
    Z: function () {
        return b;
    }
});
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(666912),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(566078),
    x = n(472144),
    f = n(644646),
    g = n(69439),
    h = n(46140),
    C = n(642145),
    v = n(388032),
    j = n(902904);
let _ = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function b(e) {
    var t, n, s;
    let { quest: b, questContent: N, isHovering: E, contentPosition: B, rowIndex: T, onReceiveErrorHints: S } = e,
        y = m.r.build(b.config),
        A = y.defaultReward.messages.name,
        R = y.defaultReward.messages.nameWithArticle,
        w = (null === (t = b.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: I, scrollHeight: k } = (0, d.Z)(),
        q = 104 !== k,
        { expansionSpring: P } = (0, c.useSpring)({
            expansionSpring: E ? 1 : 0,
            config: {
                ...C.Y,
                clamp: !0
            }
        }),
        M = (null === (n = b.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        O = (null === (s = b.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
        { completedRatio: L, completedRatioDisplay: W } = (0, p.I)(b),
        Z = (0, p.Bd)(b),
        Q = r.useCallback(
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
                    ''.concat(b.id, '_reward')
                ),
            [b.id]
        ),
        D = r.useMemo(() => (O ? Q(A) : v.intl.format(v.t['0IUT4e'], { rewardWithArticleHook: () => Q(R) })), [A, R, O, Q]),
        H = r.useMemo(() => {
            if (null != Z)
                return (0, o.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: a()(j.description),
                    children: Z
                });
        }, [Z]),
        V = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, o.jsxs)('div', {
        className: a()(j.container),
        children: [
            (0, o.jsxs)(i.animated.div, {
                style: {
                    maxHeight: P.to([0, 1], [104, (null != k ? k : 0) + 12])
                },
                className: a()(j.rewardDescriptionContainer),
                children: [
                    (0, o.jsxs)('div', {
                        className: j.assetWrapper,
                        children: [
                            !O && M && (0, o.jsx)('div', { className: j.completionAnimation }),
                            w && !O
                                ? (0, o.jsxs)('div', {
                                      className: j.progressWrapper,
                                      children: [
                                          M &&
                                              (0, o.jsx)(c.LottieAnimation, {
                                                  importData: _,
                                                  className: j.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !V
                                              }),
                                          (0, o.jsx)(x.Z, {
                                              quest: b,
                                              size: 76,
                                              percentComplete: L,
                                              percentCompleteText: E ? W : void 0,
                                              children: (0, o.jsx)('div', {
                                                  className: j.circularRewardTileWrapper,
                                                  children: (0, o.jsx)(f.Z, {
                                                      quest: b,
                                                      questContent: N,
                                                      className: j.circularQuestRewardTileAsset,
                                                      location: h.dr.QUEST_HOME_DESKTOP
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, o.jsx)(f.Z, {
                                      quest: b,
                                      autoplay: E,
                                      questContent: N,
                                      className: j.questRewardTileAsset,
                                      location: h.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        ref: I,
                        className: a()(j.textContainer, { [j.justifyCenter]: !q }),
                        children: [
                            (0, o.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: j.questName,
                                children: v.intl.format(v.t.EAYZAg, { questName: b.config.messages.questName })
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: j.header,
                                children: D
                            }),
                            H
                        ]
                    }),
                    q &&
                        (0, o.jsx)(i.animated.div, {
                            style: {
                                opacity: P.to([0, 1], [1, 0])
                            },
                            className: j.textOverflowBlur
                        })
                ]
            }),
            (0, o.jsx)(g.Z, {
                quest: b,
                location: N,
                contentPosition: B,
                rowIndex: T,
                onReceiveErrorHints: S
            })
        ]
    });
}
