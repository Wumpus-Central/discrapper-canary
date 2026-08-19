n.d(e, { B: () => u });
var s = n(582128),
    i = n(18437),
    l = n(590202),
    a = n(792620),
    r = n(617986),
    o = n(652215);
function u(t) {
    let { quest: e, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: d } = t,
        x = (0, i.u0)(),
        m = s.useMemo(() => (0, a.vv)(e), [e]),
        C = s.useCallback(() => {
            x({
                questId: e.id,
                event: o.HAw.QUEST_HOVER,
                properties: { content_id: n, content_name: (0, l.jO)(n), content_position: u, row_index: c },
                sourceQuestContent: d,
            }),
                m && (0, r.l9)();
        }, [x, e.id, n, m, d, u, c]),
        h = s.useCallback(() => {
            x({
                questId: e.id,
                event: o.HAw.QUEST_HOVER_OFF,
                properties: { content_id: n, content_name: (0, l.jO)(n), content_position: u, row_index: c },
                sourceQuestContent: d,
            });
        }, [x, e.id, n, d, u, c]);
    return {
        handleHoverStart: C,
        handleHoverEnd: h,
        isEventWithinParent: s.useCallback((t) => t.currentTarget.contains(t.relatedTarget), []),
    };
}
