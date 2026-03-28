n.d(t, { R: () => m });
var i = n(627968),
    a = n(64700),
    r = n(382222);
n(311907), n(859703);
var l = n(341915),
    s = n(890687),
    o = n(73473),
    d = n(288531),
    c = n(285433),
    u = n(394900);
n(433745);
var _ = n(915689);
function m(e) {
    let { quest: t, location: n, contentPosition: m, sourceQuestContent: h } = e,
        p = (0, s.LS)(t),
        { containerRef: g, size: A, height: x } = (0, u.L)(),
        { expansionSpring: f, isAnimating: C, isExpanded: I, toggleExpanded: E } = (0, u.s)({ initiallyExpanded: !0 }),
        [b, v] = a.useState(!1),
        T = () => v(!0),
        y = () => v(!1),
        S = x ?? 1e3;
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: m,
        trackGuildAndChannelMetadata: n === l.uF.QUESTS_EMBED,
        sourceQuestContent: h,
        children: (e) =>
            (0, i.jsx)(r.animated.div, {
                style: { maxHeight: n === l.uF.QUESTS_EMBED ? void 0 : f.to({ range: [0, 1], output: [100, S] }) },
                className: _.i,
                onMouseEnter: T,
                onMouseLeave: y,
                onFocus: T,
                onBlur: y,
                children: (0, i.jsxs)("div", {
                    ref: (t) => {
                        (e.current = t), (g.current = t);
                    },
                    children: [
                        (0, i.jsx)(c.A, {
                            isQuestExpired: p,
                            location: n,
                            quest: t,
                            size: A,
                            expansionSpring: f,
                            isInteracting: b,
                            isAnimating: C,
                            isExpanded: I,
                            contentPosition: m,
                            toggleExpanded: E,
                            sourceQuestContent: h,
                        }),
                        (0, i.jsx)(d.A, {
                            quest: t,
                            isQuestExpired: p,
                            location: n,
                            size: A,
                            isFocused: b,
                            isExpanded: I,
                            isAnimating: C,
                            contentPosition: m,
                            sourceQuestContent: h,
                        }),
                    ],
                }),
            }),
    });
}
