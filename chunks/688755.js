var s = n(582128),
    i = n(18437),
    l = n(590202),
    a = n(792620),
    r = n(321538),
    o = n(652215);
n.d(
    t,
    {},
    {
        B: function (e) {
            let { quest: t, questContent: n, contentPosition: c, rowIndex: u, sourceQuestContent: d } = e,
                x = (0, i.u0)(),
                m = s.useMemo(() => (0, a.vv)(t), [t]),
                C = s.useCallback(() => {
                    (x({
                        questId: t.id,
                        event: o.HAw.QUEST_HOVER,
                        properties: { content_id: n, content_name: (0, l.jO)(n), content_position: c, row_index: u },
                        sourceQuestContent: d,
                    }),
                        m && (0, r.l9)());
                }, [x, t.id, n, m, d, c, u]);
            return {
                handleHoverStart: C,
                handleHoverEnd: s.useCallback(() => {
                    x({
                        questId: t.id,
                        event: o.HAw.QUEST_HOVER_OFF,
                        properties: { content_id: n, content_name: (0, l.jO)(n), content_position: c, row_index: u },
                        sourceQuestContent: d,
                    });
                }, [x, t.id, n, d, c, u]),
                isEventWithinParent: s.useCallback((e) => e.currentTarget.contains(e.relatedTarget), []),
            };
        },
    },
);
