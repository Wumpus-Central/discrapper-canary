n.d(t, {
    R: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(92674);
n(311907), n(859703);
var a = n(341915),
    s = n(890687),
    o = n(73473),
    c = n(288531),
    u = n(285433),
    d = n(394900),
    p = n(433745),
    m = n(868684);

function f(e) {
    let { quest: t, location: n, initiallyExpanded: f, contentPosition: g, sourceQuestContent: _ } = e,
        h = (0, s.LS)(t),
        { containerRef: b, size: y, height: A } = (0, d.L)(),
        {
            expansionSpring: v,
            isAnimating: O,
            isExpanded: x,
            toggleExpanded: E,
        } = (0, d.s)({
            initiallyExpanded:
                f ||
                (0, p.RA)({
                    location: n,
                    quest: t,
                }),
        }),
        [j, C] = i.useState(!1),
        I = () => C(!0),
        S = () => C(!1),
        T = null != A ? A : p._B;
    return (0, r.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: g,
        trackGuildAndChannelMetadata: n === a.uF.QUESTS_EMBED,
        sourceQuestContent: _,
        children: (e) =>
            (0, r.jsx)(l.animated.div, {
                style: {
                    maxHeight:
                        n === a.uF.QUESTS_EMBED
                            ? void 0
                            : v.to({
                                  range: [0, 1],
                                  output: [p.es, T],
                              }),
                },
                className: m.i,
                onMouseEnter: I,
                onMouseLeave: S,
                onFocus: I,
                onBlur: S,
                children: (0, r.jsxs)("div", {
                    ref: (t) => {
                        (e.current = t), (b.current = t);
                    },
                    children: [
                        (0, r.jsx)(u.A, {
                            isQuestExpired: h,
                            location: n,
                            quest: t,
                            size: y,
                            expansionSpring: v,
                            isInteracting: j,
                            isAnimating: O,
                            isExpanded: x,
                            contentPosition: g,
                            toggleExpanded: E,
                            sourceQuestContent: _,
                        }),
                        (0, r.jsx)(c.A, {
                            quest: t,
                            isQuestExpired: h,
                            location: n,
                            size: y,
                            isFocused: j,
                            isExpanded: x,
                            isAnimating: O,
                            contentPosition: g,
                            sourceQuestContent: _,
                        }),
                    ],
                }),
            }),
    });
}
