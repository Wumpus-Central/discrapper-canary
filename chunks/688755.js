s.d(e, { B: () => u });
var n = s(582128),
    i = s(18437),
    l = s(590202),
    a = s(792620),
    r = s(617986),
    o = s(652215);
function u(t) {
    let { quest: e, questContent: s, contentPosition: u, rowIndex: c, sourceQuestContent: d } = t,
        x = (0, i.u0)(),
        m = n.useMemo(() => (0, a.vv)(e), [e]),
        C = n.useCallback(() => {
            x({
                questId: e.id,
                event: o.HAw.QUEST_HOVER,
                properties: { content_id: s, content_name: (0, l.jO)(s), content_position: u, row_index: c },
                sourceQuestContent: d,
            }),
                m && (0, r.l9)();
        }, [x, e.id, s, m, d, u, c]),
        h = n.useCallback(() => {
            x({
                questId: e.id,
                event: o.HAw.QUEST_HOVER_OFF,
                properties: { content_id: s, content_name: (0, l.jO)(s), content_position: u, row_index: c },
                sourceQuestContent: d,
            });
        }, [x, e.id, s, d, u, c]);
    return {
        handleHoverStart: C,
        handleHoverEnd: h,
        isEventWithinParent: n.useCallback((t) => t.currentTarget.contains(t.relatedTarget), []),
    };
}
