n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(695469);
n(442837);
var i = n(113434);
n(569984);
var a = n(497505),
    l = n(602667),
    c = n(87894),
    u = n(372113),
    d = n(206044),
    m = n(266843),
    x = n(463910);
function p(e) {
    let { quest: t, location: n, initiallyExpanded: p, contentPosition: h, sourceQuestContent: g } = e,
        [j, f] = s.useState(!1),
        C = s.useCallback(() => f(!0), []),
        b = s.useCallback(() => f(!1), []),
        v = (0, i.tP)(t),
        { containerRef: y, size: N, height: O } = (0, m.h)(),
        {
            expansionSpring: T,
            isAnimating: E,
            isExpanded: q,
            toggleExpanded: S
        } = (0, m.O)({
            initiallyExpanded:
                p ||
                (0, c.iM)({
                    location: n,
                    quest: t
                })
        }),
        P = null != O ? O : c.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: h,
        trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
        sourceQuestContent: g,
        children: (e) =>
            (0, r.jsx)(o.animated.div, {
                style: {
                    maxHeight:
                        n === a.jn.QUESTS_EMBED
                            ? void 0
                            : T.to({
                                  range: [0, 1],
                                  output: [c.DJ, P]
                              })
                },
                className: x.questsCard,
                onFocus: C,
                onMouseEnter: C,
                onBlur: b,
                onMouseLeave: b,
                children: (0, r.jsxs)('div', {
                    ref: (t) => {
                        (e.current = t), (y.current = t);
                    },
                    children: [
                        (0, r.jsx)(d.Z, {
                            isQuestExpired: v,
                            location: n,
                            quest: t,
                            size: N,
                            expansionSpring: T,
                            isAnimating: E,
                            isExpanded: q,
                            contentPosition: h,
                            toggleExpanded: S,
                            sourceQuestContent: g
                        }),
                        (0, r.jsx)(u.Z, {
                            quest: t,
                            isQuestExpired: v,
                            location: n,
                            size: N,
                            isFocused: j,
                            isExpanded: q,
                            isAnimating: E,
                            contentPosition: h,
                            sourceQuestContent: g
                        })
                    ]
                })
            })
    });
}
