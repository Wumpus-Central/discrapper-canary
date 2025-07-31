(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(855659);
n(442837);
var i = n(113434);
n(569984);
var a = n(497505),
    l = n(602667),
    c = n(87894),
    u = n(372113),
    d = n(206044),
    m = n(266843),
    p = n(463910);
function h(e) {
    let { quest: t, location: n, initiallyExpanded: h, contentPosition: x, sourceQuestContent: g } = e,
        [j, C] = s.useState(!1),
        f = s.useCallback(() => C(!0), []),
        b = s.useCallback(() => C(!1), []),
        v = (0, i.tP)(t),
        { containerRef: y, size: O, height: N } = (0, m.h)(),
        {
            expansionSpring: E,
            isAnimating: T,
            isExpanded: q,
            toggleExpanded: S
        } = (0, m.O)({
            initiallyExpanded:
                h ||
                (0, c.iM)({
                    location: n,
                    quest: t
                })
        }),
        P = null != N ? N : c.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: x,
        trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
        sourceQuestContent: g,
        children: (e) =>
            (0, r.jsx)(o.animated.div, {
                style: {
                    maxHeight:
                        n === a.jn.QUESTS_EMBED
                            ? void 0
                            : E.to({
                                  range: [0, 1],
                                  output: [c.DJ, P]
                              })
                },
                className: p.questsCard,
                onFocus: f,
                onMouseEnter: f,
                onBlur: b,
                onMouseLeave: b,
                children: (0, r.jsxs)('div', {
                    ref: (t) => {
                        ((e.current = t), (y.current = t));
                    },
                    children: [
                        (0, r.jsx)(d.Z, {
                            isQuestExpired: v,
                            location: n,
                            quest: t,
                            size: O,
                            expansionSpring: E,
                            isAnimating: T,
                            isExpanded: q,
                            contentPosition: x,
                            toggleExpanded: S,
                            sourceQuestContent: g
                        }),
                        (0, r.jsx)(u.Z, {
                            quest: t,
                            isQuestExpired: v,
                            location: n,
                            size: O,
                            isFocused: j,
                            isExpanded: q,
                            isAnimating: T,
                            contentPosition: x,
                            sourceQuestContent: g
                        })
                    ]
                })
            })
    });
}
