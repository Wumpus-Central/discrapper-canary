n.d(t, { B: () => u });
var s = n(582128),
    i = n(18437),
    l = n(590202),
    a = n(792620),
    r = n(617986),
    o = n(652215);
function u(e) {
    let { quest: t, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: d } = e,
        x = (0, i.u0)(),
        m = s.useMemo(() => (0, a.vv)(t), [t]),
        C = s.useCallback(() => {
            (x({
                questId: t.id,
                event: o.HAw.QUEST_HOVER,
                properties: { content_id: n, content_name: (0, l.jO)(n), content_position: u, row_index: c },
                sourceQuestContent: d,
            }),
                m && (0, r.l9)());
        }, [x, t.id, n, m, d, u, c]),
        h = s.useCallback(() => {
            x({
                questId: t.id,
                event: o.HAw.QUEST_HOVER_OFF,
                properties: { content_id: n, content_name: (0, l.jO)(n), content_position: u, row_index: c },
                sourceQuestContent: d,
            });
        }, [x, t.id, n, d, u, c]);
    return {
        handleHoverStart: C,
        handleHoverEnd: h,
        isEventWithinParent: s.useCallback((e) => e.currentTarget.contains(e.relatedTarget), []),
    };
}
