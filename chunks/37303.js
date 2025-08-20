n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    o = n(647438),
    s = n(803948);
n(442837);
var i = n(113434);
n(569984);
var a = n(497505),
    l = n(602667),
    u = n(87894),
    c = n(372113),
    d = n(206044),
    m = n(266843),
    p = n(556260);
function h(e) {
    let { quest: t, location: n, initiallyExpanded: h, contentPosition: g, sourceQuestContent: x } = e,
        [C, j] = o.useState(!1),
        f = o.useCallback(() => j(!0), []),
        b = o.useCallback(() => j(!1), []),
        y = (0, i.tP)(t),
        { containerRef: v, size: O, height: E } = (0, m.h)(),
        {
            expansionSpring: q,
            isAnimating: N,
            isExpanded: S,
            toggleExpanded: T,
        } = (0, m.O)({
            initiallyExpanded:
                h ||
                (0, u.iM)({
                    location: n,
                    quest: t,
                }),
        }),
        P = null != E ? E : u.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: g,
        trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
        sourceQuestContent: x,
        children: (e) =>
            (0, r.jsx)(s.animated.div, {
                style: {
                    maxHeight:
                        n === a.jn.QUESTS_EMBED
                            ? void 0
                            : q.to({
                                  range: [0, 1],
                                  output: [u.DJ, P],
                              }),
                },
                className: p.questsCard,
                onFocus: f,
                onMouseEnter: f,
                onBlur: b,
                onMouseLeave: b,
                children: (0, r.jsxs)("div", {
                    ref: (t) => {
                        (e.current = t), (v.current = t);
                    },
                    children: [
                        (0, r.jsx)(d.Z, {
                            isQuestExpired: y,
                            location: n,
                            quest: t,
                            size: O,
                            expansionSpring: q,
                            isAnimating: N,
                            isExpanded: S,
                            contentPosition: g,
                            toggleExpanded: T,
                            sourceQuestContent: x,
                        }),
                        (0, r.jsx)(c.Z, {
                            quest: t,
                            isQuestExpired: y,
                            location: n,
                            size: O,
                            isFocused: C,
                            isExpanded: S,
                            isAnimating: N,
                            contentPosition: g,
                            sourceQuestContent: x,
                        }),
                    ],
                }),
            }),
    });
}
