n.d(t, { X: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(666917);
n(442837);
var o = n(313481);
n(616022);
var s = n(49436),
    l = n(602667),
    c = n(883333),
    u = n(150588),
    d = n(21730),
    f = n(231919),
    p = n(523137);
function _(e, t, n) {
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    let { quest: t, location: n, initiallyExpanded: _, contentPosition: m, sourceQuestContent: h } = e,
        g = (0, o.tP)(t),
        { containerRef: E, size: b, height: y } = (0, d.h)(),
        {
            expansionSpring: O,
            isAnimating: v,
            isExpanded: S,
            toggleExpanded: I,
        } = (0, d.O)({
            initiallyExpanded:
                _ ||
                (0, f.iM)({
                    location: n,
                    quest: t,
                }),
        }),
        [T, A] = i.useState(!1),
        C = () => A(!0),
        N = () => A(!1),
        P = null != y ? y : f.U0;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: m,
        trackGuildAndChannelMetadata: n === s.jn.QUESTS_EMBED,
        sourceQuestContent: h,
        children: (e) =>
            (0, r.jsx)(a.animated.div, {
                style: {
                    maxHeight:
                        n === s.jn.QUESTS_EMBED
                            ? void 0
                            : O.to({
                                  range: [0, 1],
                                  output: [f.DJ, P],
                              }),
                },
                className: p.questsCard,
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
                            isInteracting: T,
                            isAnimating: v,
                            isExpanded: S,
                            contentPosition: m,
                            toggleExpanded: I,
                            sourceQuestContent: h,
                        }),
                        (0, r.jsx)(c.Z, {
                            quest: t,
                            isQuestExpired: g,
                            location: n,
                            size: b,
                            isFocused: T,
                            isExpanded: S,
                            isAnimating: v,
                            contentPosition: m,
                            sourceQuestContent: h,
                        }),
                    ],
                }),
            }),
    });
}
