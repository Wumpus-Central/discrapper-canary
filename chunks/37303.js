n.d(t, { Z: () => C }), n(47120);
var s = n(200651),
    i = n(192379),
    l = n(642128);
n(442837);
var a = n(686777),
    r = n(113434);
n(569984);
var o = n(497505),
    d = n(602667),
    u = n(87894),
    c = n(372113),
    m = n(206044),
    x = n(266843),
    h = n(46140),
    g = n(451938);
function C(e) {
    let { quest: t, location: n, initiallyExpanded: C, contentPosition: p } = e,
        [j, T] = i.useState(!1),
        E = i.useCallback(() => T(!0), []),
        v = i.useCallback(() => T(!1), []),
        f = (0, r.tP)(t),
        { containerRef: N, size: S, height: q } = (0, x.h)(),
        A = (0, a.q)({ location: h.dr.QUESTS_CARD }),
        {
            expansionSpring: _,
            isAnimating: R,
            isExpanded: b,
            toggleExpanded: L
        } = (0, x.O)({
            initiallyExpanded:
                !A ||
                C ||
                (0, u.iM)({
                    location: n,
                    quest: t
                })
        }),
        Z = null != q ? q : u.U0;
    return (0, s.jsx)(d.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: p,
        trackGuildAndChannelMetadata: n === o.jn.QUESTS_EMBED,
        children: (e) =>
            (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(l.animated.div, {
                    style: {
                        maxHeight:
                            n === o.jn.QUESTS_EMBED
                                ? void 0
                                : _.to({
                                      range: [0, 1],
                                      output: [u.DJ, Z]
                                  })
                    },
                    className: g.questsCard,
                    onFocus: E,
                    onMouseEnter: E,
                    onBlur: v,
                    onMouseLeave: v,
                    children: (0, s.jsxs)('div', {
                        ref: (t) => {
                            (e.current = t), (N.current = t);
                        },
                        children: [
                            (0, s.jsx)(m.Z, {
                                isFocused: j,
                                isQuestExpired: f,
                                location: n,
                                quest: t,
                                size: S,
                                expansionSpring: _,
                                isAnimating: R,
                                isExpanded: b,
                                isInConcurrentQuestExperiment: A,
                                contentPosition: p,
                                toggleExpanded: L
                            }),
                            (0, s.jsx)(c.Z, {
                                quest: t,
                                isQuestExpired: f,
                                location: n,
                                size: S,
                                isFocused: j,
                                isExpanded: b,
                                isAnimating: R,
                                contentPosition: p
                            })
                        ]
                    })
                })
            })
    });
}
