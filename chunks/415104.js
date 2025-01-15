n.d(t, {
    Z: function () {
        return h;
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
function g(e) {
    let { quest: t, className: n, questContent: s, contentPosition: c, rowIndex: d, impressionRef: g } = e,
        [h, f] = r.useState(!1),
        [v, C] = r.useState([]),
        j = (0, l.qb)(t),
        _ = (0, i._F)(),
        T = r.useCallback(() => {
            f(!0),
                _({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER,
                    properties: (0, i.mH)(s)
                });
        }, [_, t.id, s]),
        E = r.useCallback(() => {
            f(!1),
                _({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER_OFF,
                    properties: (0, i.mH)(s)
                });
        }, [_, t.id, s]);
    return (0, o.jsxs)('div', {
        id: 'quest-tile-'.concat(t.id),
        ref: (e) => {
            g.current = e;
        },
        className: a()(x.container, n),
        onMouseEnter: T,
        onMouseLeave: E,
        children: [
            (0, o.jsx)(u.Z, {
                quest: t,
                isHovering: h,
                errorHints: v,
                warningHints: j
            }),
            (0, o.jsx)(p.Z, {
                quest: t,
                questContent: s,
                isHovering: h,
                contentPosition: c,
                rowIndex: d,
                onReceiveErrorHints: C
            })
        ]
    });
}
function h(e) {
    return (0, o.jsx)(d.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
        children: (t) =>
            (0, o.jsx)(g, {
                ...e,
                impressionRef: t
            })
    });
}
