n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(617136),
    l = n(113434),
    c = n(497505),
    d = n(602667),
    u = n(439826),
    p = n(43779),
    m = n(981631),
    x = n(263740);
function f(e) {
    let { quest: t, className: n, questContent: s, contentPosition: f, rowIndex: g } = e,
        [h, C] = r.useState(!1),
        [v, j] = r.useState([]),
        _ = (0, l.qb)(t),
        b = r.useCallback(() => {
            C(!0),
                (0, i.dA)({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER,
                    properties: (0, i.mH)(s)
                });
        }, [C, s, t.id]),
        N = r.useCallback(() => {
            C(!1),
                (0, i.dA)({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER_OFF,
                    properties: (0, i.mH)(s)
                });
        }, [C, s, t.id]);
    return (0, o.jsx)(d.A, {
        questOrQuests: t,
        questContent: s,
        questContentPosition: f,
        questContentRowIndex: g,
        trackGuildAndChannelMetadata: s === c.jn.QUESTS_EMBED,
        children: (e) =>
            (0, o.jsxs)('div', {
                id: 'quest-tile-'.concat(t.id),
                ref: (t) => {
                    e.current = t;
                },
                className: a()(x.container, n),
                onMouseEnter: b,
                onMouseLeave: N,
                children: [
                    (0, o.jsx)(u.Z, {
                        quest: t,
                        isHovering: h,
                        errorHints: v,
                        warningHints: _
                    }),
                    (0, o.jsx)(p.Z, {
                        quest: t,
                        questContent: s,
                        isHovering: h,
                        contentPosition: f,
                        rowIndex: g,
                        onReceiveErrorHints: j
                    })
                ]
            })
    });
}
