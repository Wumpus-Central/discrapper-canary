n.d(t, { X: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(878342);
n(442837);
var o = n(113434);
n(569984);
var s = n(497505),
    l = n(602667),
    c = n(975335),
    u = n(352223),
    d = n(654684),
    f = n(724684),
    _ = n(471159);
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
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let { quest: t, location: n, initiallyExpanded: p, contentPosition: h, sourceQuestContent: m } = e,
        g = (0, o.tP)(t),
        { containerRef: E, size: b, height: y } = (0, d.h)(),
        {
            expansionSpring: O,
            isAnimating: v,
            isExpanded: I,
            toggleExpanded: T,
        } = (0, d.O)({
            initiallyExpanded:
                p ||
                (0, f.iM)({
                    location: n,
                    quest: t,
                }),
        }),
        [S, A] = i.useState(!1),
        C = () => A(!0),
        N = () => A(!1),
        R = null != y ? y : f.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: h,
        trackGuildAndChannelMetadata: n === s.jn.QUESTS_EMBED,
        sourceQuestContent: m,
        children: (e) =>
            (0, r.jsx)(a.animated.div, {
                style: {
                    maxHeight:
                        n === s.jn.QUESTS_EMBED
                            ? void 0
                            : O.to({
                                  range: [0, 1],
                                  output: [f.DJ, R],
                              }),
                },
                className: _.questsCard,
                onMouseEnter: C,
                onMouseLeave: N,
                onFocus: C,
                onBlur: N,
                children: (0, r.jsxs)("div", {
                    ref: (t) => {
                        (e.current = t), (E.current = t);
                    },
                    children: [
                        (0, r.jsx)(u.Z, {
                            isQuestExpired: g,
                            location: n,
                            quest: t,
                            size: b,
                            expansionSpring: O,
                            isInteracting: S,
                            isAnimating: v,
                            isExpanded: I,
                            contentPosition: h,
                            toggleExpanded: T,
                            sourceQuestContent: m,
                        }),
                        (0, r.jsx)(c.Z, {
                            quest: t,
                            isQuestExpired: g,
                            location: n,
                            size: b,
                            isFocused: S,
                            isExpanded: I,
                            isAnimating: v,
                            contentPosition: h,
                            sourceQuestContent: m,
                        }),
                    ],
                }),
            }),
    });
}
