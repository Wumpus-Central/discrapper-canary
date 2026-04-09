n.d(t, { M: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(341915),
    o = n(73473),
    d = n(327247),
    c = n(867461),
    u = n(917332),
    m = n(78409);
function _(e) {
    let { quest: t, location: n, questContentPosition: s, sourceQuestContent: _ } = e,
        [h, p] = l.useState(!1),
        g = () => p(!0),
        A = () => p(!1);
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: s,
        trackGuildAndChannelMetadata: n === a.uF.QUESTS_EMBED,
        sourceQuestContent: _,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: (t) => {
                    e.current = t;
                },
                className: r()(u.k, m.A),
                onMouseEnter: g,
                onMouseLeave: A,
                onFocus: g,
                onBlur: A,
                children: [
                    (0, i.jsx)(c.l, { quest: t, location: n, isInteracting: h, sourceQuestContent: _ }),
                    (0, i.jsx)(d.x, {
                        quest: t,
                        location: n,
                        isInteracting: h,
                        contentPosition: s,
                        sourceQuestContent: _,
                    }),
                ],
            }),
    });
}
