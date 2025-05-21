n.d(t, { Z: () => x }), n(388685);
var r = n(255367),
    s = n(73800),
    i = n(366594);
n(442837);
var o = n(113434);
n(569984);
var a = n(497505),
    l = n(602667),
    c = n(87894),
    u = n(372113),
    d = n(206044),
    m = n(266843),
    p = n(463910);
function x(e) {
    let { quest: t, location: n, initiallyExpanded: x, contentPosition: g } = e,
        [h, f] = s.useState(!1),
        j = s.useCallback(() => f(!0), []),
        b = s.useCallback(() => f(!1), []),
        C = (0, o.tP)(t),
        { containerRef: v, size: y, height: T } = (0, m.h)(),
        {
            expansionSpring: O,
            isAnimating: E,
            isExpanded: N,
            toggleExpanded: q
        } = (0, m.O)({
            initiallyExpanded:
                x ||
                (0, c.iM)({
                    location: n,
                    quest: t
                })
        }),
        S = null != T ? T : c.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: g,
        trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
        children: (e) =>
            (0, r.jsx)(i.animated.div, {
                style: {
                    maxHeight:
                        n === a.jn.QUESTS_EMBED
                            ? void 0
                            : O.to({
                                  range: [0, 1],
                                  output: [c.DJ, S]
                              })
                },
                className: p.questsCard,
                onFocus: j,
                onMouseEnter: j,
                onBlur: b,
                onMouseLeave: b,
                children: (0, r.jsxs)('div', {
                    ref: (t) => {
                        (e.current = t), (v.current = t);
                    },
                    children: [
                        (0, r.jsx)(d.Z, {
                            isFocused: h,
                            isQuestExpired: C,
                            location: n,
                            quest: t,
                            size: y,
                            expansionSpring: O,
                            isAnimating: E,
                            isExpanded: N,
                            contentPosition: g,
                            toggleExpanded: q
                        }),
                        (0, r.jsx)(u.Z, {
                            quest: t,
                            isQuestExpired: C,
                            location: n,
                            size: y,
                            isFocused: h,
                            isExpanded: N,
                            isAnimating: E,
                            contentPosition: g
                        })
                    ]
                })
            })
    });
}
