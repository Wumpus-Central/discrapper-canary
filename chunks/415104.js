n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(617136),
    l = n(113434),
    c = n(497505),
    d = n(918701),
    u = n(602667),
    p = n(341907),
    m = n(439826),
    x = n(43779),
    h = n(981631),
    g = n(835216);
function f(e) {
    let { quest: t, className: n, questContent: s, contentPosition: c, rowIndex: u, impressionRef: f } = e,
        [_, C] = o.useState(!1),
        [v, j] = o.useState([]),
        b = (0, l.qb)(t),
        T = o.useMemo(() => (0, d.q8)(t), [t]),
        E = (0, i._F)(),
        N = o.useCallback(() => {
            C(!0),
                E({
                    questId: t.id,
                    event: h.rMx.QUEST_HOVER,
                    properties: (0, i.mH)(s)
                }),
                T && (0, p.loadVideoQuestModal)();
        }, [E, t.id, s, T]),
        S = o.useCallback(() => {
            C(!1),
                E({
                    questId: t.id,
                    event: h.rMx.QUEST_HOVER_OFF,
                    properties: (0, i.mH)(s)
                });
        }, [E, t.id, s]);
    return (0, r.jsxs)('div', {
        id: 'quest-tile-'.concat(t.id),
        ref: (e) => {
            f.current = e;
        },
        className: a()(g.container, n),
        onMouseEnter: N,
        onMouseLeave: S,
        children: [
            (0, r.jsx)(m.Z, {
                quest: t,
                isHovering: _,
                errorHints: v,
                warningHints: b
            }),
            (0, r.jsx)(x.Z, {
                quest: t,
                questContent: s,
                isHovering: _,
                contentPosition: c,
                rowIndex: u,
                onReceiveErrorHints: j
            })
        ]
    });
}
function _(e) {
    return (0, r.jsx)(u.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
        children: (t) =>
            (0, r.jsx)(f, {
                ...e,
                impressionRef: t
            })
    });
}
