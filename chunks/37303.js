n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    s = n(192379),
    i = n(642128);
n(442837);
var o = n(686777),
    l = n(113434);
n(569984);
var a = n(497505),
    c = n(602667),
    u = n(87894),
    d = n(372113),
    m = n(206044),
    p = n(266843),
    x = n(46140),
    g = n(357920);
function h(e) {
    let { quest: t, location: n, initiallyExpanded: h, contentPosition: f } = e,
        [j, v] = s.useState(!1),
        b = s.useCallback(() => v(!0), []),
        C = s.useCallback(() => v(!1), []),
        N = (0, l.tP)(t),
        { containerRef: E, size: T, height: y } = (0, p.h)(),
        S = (0, o.q)({ location: x.dr.QUESTS_CARD }),
        {
            expansionSpring: O,
            isAnimating: q,
            isExpanded: P,
            toggleExpanded: w
        } = (0, p.O)({
            initiallyExpanded:
                !S ||
                h ||
                (0, u.iM)({
                    location: n,
                    quest: t
                })
        }),
        A = null != y ? y : u.U0;
    return (0, r.jsx)(c.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: f,
        trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
        children: (e) =>
            (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(i.animated.div, {
                    style: {
                        maxHeight:
                            n === a.jn.QUESTS_EMBED
                                ? void 0
                                : O.to({
                                      range: [0, 1],
                                      output: [u.DJ, A]
                                  })
                    },
                    className: g.questsCard,
                    onFocus: b,
                    onMouseEnter: b,
                    onBlur: C,
                    onMouseLeave: C,
                    children: (0, r.jsxs)('div', {
                        ref: (t) => {
                            (e.current = t), (E.current = t);
                        },
                        children: [
                            (0, r.jsx)(m.Z, {
                                isFocused: j,
                                isQuestExpired: N,
                                location: n,
                                quest: t,
                                size: T,
                                expansionSpring: O,
                                isAnimating: q,
                                isExpanded: P,
                                isInConcurrentQuestExperiment: S,
                                contentPosition: f,
                                toggleExpanded: w
                            }),
                            (0, r.jsx)(d.Z, {
                                quest: t,
                                isQuestExpired: N,
                                location: n,
                                size: T,
                                isFocused: j,
                                isExpanded: P,
                                isAnimating: q,
                                contentPosition: f
                            })
                        ]
                    })
                })
            })
    });
}
