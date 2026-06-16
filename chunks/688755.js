s.d(e, { B: () => c });
var n = s(64700),
    i = s(18437),
    a = s(590202),
    l = s(792620),
    r = s(617986),
    o = s(652215);
function c(t) {
    let { quest: e, questContent: s, contentPosition: c, rowIndex: u, sourceQuestContent: d } = t,
        x = (0, i.u0)(),
        m = n.useMemo(() => (0, l.vv)(e), [e]),
        h = n.useCallback(() => {
            x({
                questId: e.id,
                event: o.HAw.QUEST_HOVER,
                properties: { content_id: s, content_name: (0, a.jO)(s), content_position: c, row_index: u },
                sourceQuestContent: d,
            }),
                m && (0, r.l9)();
        }, [x, e.id, s, m, d, c, u]),
        C = n.useCallback(() => {
            x({
                questId: e.id,
                event: o.HAw.QUEST_HOVER_OFF,
                properties: { content_id: s, content_name: (0, a.jO)(s), content_position: c, row_index: u },
                sourceQuestContent: d,
            });
        }, [x, e.id, s, d, c, u]);
    return {
        handleHoverStart: h,
        handleHoverEnd: C,
        isEventWithinParent: n.useCallback((t) => t.currentTarget.contains(t.relatedTarget), []),
    };
}
