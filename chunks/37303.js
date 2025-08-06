n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(126663);
n(442837);
var a = n(113434);
n(569984);
var s = n(497505),
    l = n(602667),
    c = n(87894),
    u = n(372113),
    d = n(206044),
    f = n(266843),
    _ = n(463910);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let { quest: t, location: n, initiallyExpanded: p, contentPosition: h, sourceQuestContent: m } = e,
        [g, E] = i.useState(!1),
        b = i.useCallback(() => E(!0), []),
        y = i.useCallback(() => E(!1), []),
        O = (0, a.tP)(t),
        { containerRef: v, size: I, height: T } = (0, f.h)(),
        {
            expansionSpring: S,
            isAnimating: A,
            isExpanded: N,
            toggleExpanded: C,
        } = (0, f.O)({
            initiallyExpanded:
                p ||
                (0, c.iM)({
                    location: n,
                    quest: t,
                }),
        }),
        R = null != T ? T : c.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: h,
        trackGuildAndChannelMetadata: n === s.jn.QUESTS_EMBED,
        sourceQuestContent: m,
        children: (e) =>
            (0, r.jsx)(o.animated.div, {
                style: {
                    maxHeight:
                        n === s.jn.QUESTS_EMBED
                            ? void 0
                            : S.to({
                                  range: [0, 1],
                                  output: [c.DJ, R],
                              }),
                },
                className: _.questsCard,
                onFocus: b,
                onMouseEnter: b,
                onBlur: y,
                onMouseLeave: y,
                children: (0, r.jsxs)("div", {
                    ref: (t) => {
                        (e.current = t), (v.current = t);
                    },
                    children: [
                        (0, r.jsx)(d.Z, {
                            isQuestExpired: O,
                            location: n,
                            quest: t,
                            size: I,
                            expansionSpring: S,
                            isAnimating: A,
                            isExpanded: N,
                            contentPosition: h,
                            toggleExpanded: C,
                            sourceQuestContent: m,
                        }),
                        (0, r.jsx)(u.Z, {
                            quest: t,
                            isQuestExpired: O,
                            location: n,
                            size: I,
                            isFocused: g,
                            isExpanded: N,
                            isAnimating: A,
                            contentPosition: h,
                            sourceQuestContent: m,
                        }),
                    ],
                }),
            }),
    });
}
