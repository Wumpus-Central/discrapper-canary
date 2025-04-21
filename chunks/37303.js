n.d(t, { Z: () => h }), n(388685);
var r = n(200651),
    s = n(192379),
    i = n(200100);
n(442837);
var o = n(686777),
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
        v = s.useCallback(() => b(!1), []),
        y = (0, a.tP)(t),
        { containerRef: O, size: T, height: E } = (0, p.h)(),
        N = (0, o.q)({ location: x.dr.QUESTS_CARD }),
        {
            expansionSpring: q,
            isAnimating: S,
            isExpanded: P,
            toggleExpanded: w
        } = (0, p.O)({
            initiallyExpanded:
                !N ||
                h ||
                (0, u.iM)({
                    location: n,
                    quest: t
                })
        }),
        R = null != E ? E : u.U0;
    return (0, r.jsx)(c.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: f,
        trackGuildAndChannelMetadata: n === l.jn.QUESTS_EMBED,
        children: (e) =>
            (0, r.jsx)(i.animated.div, {
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
                onBlur: v,
                onMouseLeave: v,
                children: (0, r.jsxs)('div', {
                    ref: (t) => {
                        (e.current = t), (O.current = t);
                    },
                    children: [
                        (0, r.jsx)(m.Z, {
                            isFocused: j,
                            isQuestExpired: y,
                            location: n,
                            quest: t,
                            size: T,
                            expansionSpring: q,
                            isAnimating: S,
                            isExpanded: P,
                            isInConcurrentQuestExperiment: N,
                            contentPosition: f,
                            toggleExpanded: w
                        }),
                        (0, r.jsx)(d.Z, {
                            quest: t,
                            isQuestExpired: y,
                            location: n,
                            size: T,
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
