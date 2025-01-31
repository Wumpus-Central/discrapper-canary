n.d(t, { Z: () => g }), n(47120);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(617136),
    l = n(113434),
    c = n(497505),
    d = n(602667),
    u = n(439826),
    p = n(43779),
    m = n(981631),
    x = n(263740);
function h(e) {
    let { quest: t, className: n, questContent: a, contentPosition: c, rowIndex: d, impressionRef: h } = e,
        [g, f] = r.useState(!1),
        [v, _] = r.useState([]),
        C = (0, l.qb)(t),
        j = (0, i._F)(),
        b = r.useCallback(() => {
            f(!0),
                j({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER,
                    properties: (0, i.mH)(a)
                });
        }, [j, t.id, a]),
        T = r.useCallback(() => {
            f(!1),
                j({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER_OFF,
                    properties: (0, i.mH)(a)
                });
        }, [j, t.id, a]);
    return (0, s.jsxs)('div', {
        id: 'quest-tile-'.concat(t.id),
        ref: (e) => {
            h.current = e;
        },
        className: o()(x.container, n),
        onMouseEnter: b,
        onMouseLeave: T,
        children: [
            (0, s.jsx)(u.Z, {
                quest: t,
                isHovering: g,
                errorHints: v,
                warningHints: C
            }),
            (0, s.jsx)(p.Z, {
                quest: t,
                questContent: a,
                isHovering: g,
                contentPosition: c,
                rowIndex: d,
                onReceiveErrorHints: _
            })
        ]
    });
}
function g(e) {
    return (0, s.jsx)(d.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
        children: (t) =>
            (0, s.jsx)(h, {
                ...e,
                impressionRef: t
            })
    });
}
