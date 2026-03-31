n.d(t, { M: () => m });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(341915),
    o = n(73473),
    d = n(327247),
    c = n(867461),
    u = n(217885),
    _ = n(720450);
function m(e) {
    let { quest: t, location: n, questContentPosition: r, sourceQuestContent: m } = e,
        [h, p] = a.useState(!1),
        g = () => p(!0),
        A = () => p(!1);
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: r,
        trackGuildAndChannelMetadata: n === s.uF.QUESTS_EMBED,
        sourceQuestContent: m,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: (t) => {
                    e.current = t;
                },
                className: l()(u.k, _.A),
                onMouseEnter: g,
                onMouseLeave: A,
                onFocus: g,
                onBlur: A,
                children: [
                    (0, i.jsx)(c.l, { quest: t, location: n, isInteracting: h, sourceQuestContent: m }),
                    (0, i.jsx)(d.x, {
                        quest: t,
                        location: n,
                        isInteracting: h,
                        contentPosition: r,
                        sourceQuestContent: m,
                    }),
                ],
            }),
    });
}
