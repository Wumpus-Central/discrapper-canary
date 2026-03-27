n.d(t, { R: () => h });
var i = n(627968),
    a = n(64700),
    r = n(4208);
n(311907), n(859703);
var l = n(341915),
    s = n(890687),
    o = n(73473),
    d = n(288531),
    c = n(285433),
    u = n(394900),
    _ = n(433745),
    m = n(915689);
function h(e) {
    let { quest: t, location: n, initiallyExpanded: h, contentPosition: p, sourceQuestContent: g } = e,
        A = (0, s.LS)(t),
        { containerRef: x, size: f, height: C } = (0, u.L)(),
        {
            expansionSpring: I,
            isAnimating: E,
            isExpanded: b,
            toggleExpanded: v,
        } = (0, u.s)({ initiallyExpanded: h || (0, _.RA)({ location: n, quest: t }) }),
        [T, y] = a.useState(!1),
        S = () => y(!0),
        N = () => y(!1),
        j = C ?? _._B;
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: p,
        trackGuildAndChannelMetadata: n === l.uF.QUESTS_EMBED,
        sourceQuestContent: g,
        children: (e) =>
            (0, i.jsx)(r.animated.div, {
                style: { maxHeight: n === l.uF.QUESTS_EMBED ? void 0 : I.to({ range: [0, 1], output: [_.es, j] }) },
                className: m.i,
                onMouseEnter: S,
                onMouseLeave: N,
                onFocus: S,
                onBlur: N,
                children: (0, i.jsxs)("div", {
                    ref: (t) => {
                        (e.current = t), (x.current = t);
                    },
                    children: [
                        (0, i.jsx)(c.A, {
                            isQuestExpired: A,
                            location: n,
                            quest: t,
                            size: f,
                            expansionSpring: I,
                            isInteracting: T,
                            isAnimating: E,
                            isExpanded: b,
                            contentPosition: p,
                            toggleExpanded: v,
                            sourceQuestContent: g,
                        }),
                        (0, i.jsx)(d.A, {
                            quest: t,
                            isQuestExpired: A,
                            location: n,
                            size: f,
                            isFocused: T,
                            isExpanded: b,
                            isAnimating: E,
                            contentPosition: p,
                            sourceQuestContent: g,
                        }),
                    ],
                }),
            }),
    });
}
