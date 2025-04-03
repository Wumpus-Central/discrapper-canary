n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(642128);
n(442837);
var i = n(686777),
    a = n(113434);
n(569984);
var l = n(497505),
    c = n(602667),
    u = n(87894),
    d = n(372113),
    m = n(206044),
    p = n(266843),
    x = n(46140),
    g = n(463910);
function h(e) {
    let { quest: t, location: n, initiallyExpanded: h, contentPosition: f } = e,
        [j, b] = s.useState(!1),
        C = s.useCallback(() => b(!0), []),
        N = s.useCallback(() => b(!1), []),
        v = (0, a.tP)(t),
        { containerRef: y, size: O, height: T } = (0, p.h)(),
        E = (0, i.q)({ location: x.dr.QUESTS_CARD }),
        {
            expansionSpring: q,
            isAnimating: S,
            isExpanded: P,
            toggleExpanded: w
        } = (0, p.O)({
            initiallyExpanded:
                !E ||
                h ||
                (0, u.iM)({
                    location: n,
                    quest: t
                })
        }),
        R = null != T ? T : u.U0;
    return (0, r.jsx)(c.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: f,
        trackGuildAndChannelMetadata: n === l.jn.QUESTS_EMBED,
        children: (e) =>
            (0, r.jsx)(o.animated.div, {
                style: {
                    maxHeight:
                        n === l.jn.QUESTS_EMBED
                            ? void 0
                            : q.to({
                                  range: [0, 1],
                                  output: [u.DJ, R]
                              })
                },
                className: g.questsCard,
                onFocus: C,
                onMouseEnter: C,
                onBlur: N,
                onMouseLeave: N,
                children: (0, r.jsxs)('div', {
                    ref: (t) => {
                        (e.current = t), (y.current = t);
                    },
                    children: [
                        (0, r.jsx)(m.Z, {
                            isFocused: j,
                            isQuestExpired: v,
                            location: n,
                            quest: t,
                            size: O,
                            expansionSpring: q,
                            isAnimating: S,
                            isExpanded: P,
                            isInConcurrentQuestExperiment: E,
                            contentPosition: f,
                            toggleExpanded: w
                        }),
                        (0, r.jsx)(d.Z, {
                            quest: t,
                            isQuestExpired: v,
                            location: n,
                            size: O,
                            isFocused: j,
                            isExpanded: P,
                            isAnimating: S,
                            contentPosition: f
                        })
                    ]
                })
            })
    });
}
