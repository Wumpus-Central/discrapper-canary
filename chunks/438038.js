n.d(t, { R: () => h });
var i = n(627968),
    l = n(64700),
    a = n(563495);
n(311907), n(859703);
var r = n(341915),
    s = n(890687),
    o = n(73473),
    d = n(288531),
    c = n(285433),
    u = n(394900),
    m = n(433745),
    _ = n(868684);
function h(e) {
    let { quest: t, location: n, initiallyExpanded: h, contentPosition: p, sourceQuestContent: g } = e,
        A = (0, s.LS)(t),
        { containerRef: f, size: x, height: E } = (0, u.L)(),
        {
            expansionSpring: C,
            isAnimating: I,
            isExpanded: T,
            toggleExpanded: v,
        } = (0, u.s)({ initiallyExpanded: h || (0, m.RA)({ location: n, quest: t }) }),
        [N, S] = l.useState(!1),
        b = () => S(!0),
        y = () => S(!1),
        j = E ?? m._B;
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: p,
        trackGuildAndChannelMetadata: n === r.uF.QUESTS_EMBED,
        sourceQuestContent: g,
        children: (e) =>
            (0, i.jsx)(a.animated.div, {
                style: { maxHeight: n === r.uF.QUESTS_EMBED ? void 0 : C.to({ range: [0, 1], output: [m.es, j] }) },
                className: _.i,
                onMouseEnter: b,
                onMouseLeave: y,
                onFocus: b,
                onBlur: y,
                children: (0, i.jsxs)("div", {
                    ref: (t) => {
                        (e.current = t), (f.current = t);
                    },
                    children: [
                        (0, i.jsx)(c.A, {
                            isQuestExpired: A,
                            location: n,
                            quest: t,
                            size: x,
                            expansionSpring: C,
                            isInteracting: N,
                            isAnimating: I,
                            isExpanded: T,
                            contentPosition: p,
                            toggleExpanded: v,
                            sourceQuestContent: g,
                        }),
                        (0, i.jsx)(d.A, {
                            quest: t,
                            isQuestExpired: A,
                            location: n,
                            size: x,
                            isFocused: N,
                            isExpanded: T,
                            isAnimating: I,
                            contentPosition: p,
                            sourceQuestContent: g,
                        }),
                    ],
                }),
            }),
    });
}
