n.d(t, { Z: () => v }), n(47120);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(617136),
    l = n(113434),
    c = n(497505),
    d = n(918701),
    u = n(602667),
    p = n(341907),
    m = n(439826),
    x = n(43779),
    h = n(981631),
    g = n(672191);
function f(e) {
    let { quest: t, className: n, questContent: a, contentPosition: c, rowIndex: u, impressionRef: f } = e,
        [v, _] = r.useState(!1),
        [C, j] = r.useState([]),
        b = (0, l.qb)(t),
        T = r.useMemo(() => (0, d.q8)(t), [t]),
        E = (0, i._F)(),
        S = r.useCallback(() => {
            _(!0),
                E({
                    questId: t.id,
                    event: h.rMx.QUEST_HOVER,
                    properties: (0, i.mH)(a)
                }),
                T && (0, p.loadVideoQuestModal)();
        }, [E, t.id, a, T]),
        N = r.useCallback(() => {
            _(!1),
                E({
                    questId: t.id,
                    event: h.rMx.QUEST_HOVER_OFF,
                    properties: (0, i.mH)(a)
                });
        }, [E, t.id, a]);
    return (0, s.jsxs)('div', {
        id: 'quest-tile-'.concat(t.id),
        ref: (e) => {
            f.current = e;
        },
        className: o()(g.container, n),
        onMouseEnter: S,
        onMouseLeave: N,
        children: [
            (0, s.jsx)(m.Z, {
                quest: t,
                isHovering: v,
                errorHints: C,
                warningHints: b
            }),
            (0, s.jsx)(x.Z, {
                quest: t,
                questContent: a,
                isHovering: v,
                contentPosition: c,
                rowIndex: u,
                onReceiveErrorHints: j
            })
        ]
    });
}
function v(e) {
    return (0, s.jsx)(u.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
        children: (t) =>
            (0, s.jsx)(f, {
                ...e,
                impressionRef: t
            })
    });
}
