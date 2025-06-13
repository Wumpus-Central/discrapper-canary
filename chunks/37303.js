n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    s = n(73800),
    i = n(524979);
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
function g(e) {
    let { quest: t, location: n, initiallyExpanded: g, contentPosition: p } = e,
        [h, j] = s.useState(!1),
        f = s.useCallback(() => j(!0), []),
        b = s.useCallback(() => j(!1), []),
        C = (0, o.tP)(t),
        { containerRef: v, size: y, height: O } = (0, m.h)(),
        {
            expansionSpring: T,
            isAnimating: N,
            isExpanded: E,
            toggleExpanded: q
        } = (0, m.O)({
            initiallyExpanded:
                g ||
                (0, c.iM)({
                    location: n,
                    quest: t
                })
        }),
        S = null != O ? O : c.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: p,
        trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
        children: (e) =>
            (0, r.jsx)(i.animated.div, {
                style: {
                    maxHeight:
                        n === a.jn.QUESTS_EMBED
                            ? void 0
                            : T.to({
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
                            expansionSpring: T,
                            isAnimating: N,
                            isExpanded: E,
                            contentPosition: p,
                            toggleExpanded: q
                        }),
                        (0, r.jsx)(u.Z, {
                            quest: t,
                            isQuestExpired: C,
                            location: n,
                            size: y,
                            isFocused: h,
                            isExpanded: E,
                            isAnimating: N,
                            contentPosition: p
                        })
                    ]
                })
            })
    });
}
