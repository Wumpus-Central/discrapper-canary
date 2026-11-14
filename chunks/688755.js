var s = n(582128),
    i = n(18437),
    l = n(590202),
    r = n(792620),
    a = n(321538),
    o = n(652215);
n.d(
    t,
    {},
    {
        B: function (e) {
            let { quest: t, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: d } = e,
                x = (0, i.u0)(),
                m = s.useMemo(() => (0, r.vv)(t), [t]),
                E = s.useCallback(() => {
                    (x({
                        questId: t.id,
                        event: o.HAw.QUEST_HOVER,
                        properties: { content_id: n, content_name: (0, l.jO)(n), content_position: u, row_index: c },
                        sourceQuestContent: d,
                    }),
                        m && (0, a.l9)());
                }, [x, t.id, n, m, d, u, c]);
            return {
                handleHoverStart: E,
                handleHoverEnd: s.useCallback(() => {
                    x({
                        questId: t.id,
                        event: o.HAw.QUEST_HOVER_OFF,
                        properties: { content_id: n, content_name: (0, l.jO)(n), content_position: u, row_index: c },
                        sourceQuestContent: d,
                    });
                }, [x, t.id, n, d, u, c]),
                isEventWithinParent: s.useCallback((e) => e.currentTarget.contains(e.relatedTarget), []),
            };
        },
    },
);
