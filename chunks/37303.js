n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    i = n(73800),
    s = n(524979);
n(442837);
var o = n(113434);
n(569984);
var a = n(497505),
    l = n(602667),
    c = n(87894),
    u = n(372113),
    d = n(206044),
    m = n(266843),
    x = n(463910);
function p(e) {
    let { quest: t, location: n, initiallyExpanded: p, contentPosition: h } = e,
        [g, j] = i.useState(!1),
        f = i.useCallback(() => j(!0), []),
        b = i.useCallback(() => j(!1), []),
        C = (0, o.tP)(t),
        { containerRef: v, size: y, height: N } = (0, m.h)(),
        {
            expansionSpring: O,
            isAnimating: T,
            isExpanded: E,
            toggleExpanded: q
        } = (0, m.O)({
            initiallyExpanded:
                p ||
                (0, c.iM)({
                    location: n,
                    quest: t
                })
        }),
        S = null != N ? N : c.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: h,
        trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
        children: (e) =>
            (0, r.jsx)(s.animated.div, {
                style: {
                    maxHeight:
                        n === a.jn.QUESTS_EMBED
                            ? void 0
                            : O.to({
                                  range: [0, 1],
                                  output: [c.DJ, S]
                              })
                },
                className: x.questsCard,
                onFocus: f,
                onMouseEnter: f,
                onBlur: b,
                onMouseLeave: b,
                children: (0, r.jsxs)('div', {
                    ref: (t) => {
                        (e.current = t), (v.current = t);
                    },
                    children: [
                        (0, r.jsx)(d.Z, {
                            isQuestExpired: C,
                            location: n,
                            quest: t,
                            size: y,
                            expansionSpring: O,
                            isAnimating: T,
                            isExpanded: E,
                            contentPosition: h,
                            toggleExpanded: q
                        }),
                        (0, r.jsx)(u.Z, {
                            quest: t,
                            isQuestExpired: C,
                            location: n,
                            size: y,
                            isFocused: g,
                            isExpanded: E,
                            isAnimating: T,
                            contentPosition: h
                        })
                    ]
                })
            })
    });
}
