n.d(t, {
    Z: function () {
        return g;
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
    let { quest: t, className: n, questContent: s, contentPosition: c, rowIndex: d, impressionRef: f } = e,
        [g, h] = r.useState(!1),
        [C, v] = r.useState([]),
        j = (0, l.qb)(t),
        _ = (0, i._F)(),
        b = r.useCallback(() => {
            h(!0),
                _({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER,
                    properties: (0, i.mH)(s)
                });
        }, [_, t.id, s]),
        E = r.useCallback(() => {
            h(!1),
                _({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER_OFF,
                    properties: (0, i.mH)(s)
                });
        }, [_, t.id, s]);
    return (0, o.jsxs)('div', {
        id: 'quest-tile-'.concat(t.id),
        ref: (e) => {
            f.current = e;
        },
        className: a()(x.container, n),
        onMouseEnter: b,
        onMouseLeave: E,
        children: [
            (0, o.jsx)(u.Z, {
                quest: t,
                isHovering: g,
                errorHints: C,
                warningHints: j
            }),
            (0, o.jsx)(p.Z, {
                quest: t,
                questContent: s,
                isHovering: g,
                contentPosition: c,
                rowIndex: d,
                onReceiveErrorHints: v
            })
        ]
    });
}
function g(e) {
    return (0, o.jsx)(d.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
        children: (t) =>
            (0, o.jsx)(f, {
                ...e,
                impressionRef: t
            })
    });
}
