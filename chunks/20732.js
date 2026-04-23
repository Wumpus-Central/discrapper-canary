n.d(t, { S: () => u });
var i = n(64700),
    s = n(731738),
    l = n(831062),
    a = n(260364),
    r = n(341915),
    o = n(561844),
    d = n(590202),
    c = n(652215);
function u(e) {
    let {
        quest: t,
        hasAssetsError: n,
        isEligibleForQuests: u,
        isQuestBarVisible: p,
        isVisibilityAnimationAtRest: h,
        isLoadingAssets: m,
        currentQuestVisibleReason: _,
        shouldShowQuestBar: A,
        isQuestEnrollmentBlocked: f,
        impressionRef: g,
    } = e;
    i.useEffect(() => {
        n &&
            ((0, o.av)({
                questId: t.id,
                event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    content_id: r.uF.QUEST_BAR,
                    content_name: (0, d.jO)(r.uF.QUEST_BAR),
                    reason: "asset_loading_error",
                    impression_id: g.current?.getId(),
                },
                sourceQuestContent: r.uF.QUEST_BAR_V2,
            }),
            l.A.increment({
                name: s.K.QUEST_CONTENT_RENDERING_FAILURE,
                tags: [`quest_id:${t.id}`, `quest_content:${(0, d.jO)(r.uF.QUEST_BAR)}`, "reason:asset_loading_error"],
            }));
    }, [n, g, t.id]),
        i.useEffect(() => {
            u ||
                (0, o.av)({
                    questId: t.id,
                    event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: r.uF.QUEST_BAR,
                        content_name: (0, d.jO)(r.uF.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: g.current?.getId(),
                    },
                    sourceQuestContent: r.uF.QUEST_BAR_V2,
                });
        }, [u, g, t.id]),
        i.useEffect(() => {
            p ||
                !h ||
                m ||
                (0, o.av)({
                    questId: t.id,
                    event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: r.uF.QUEST_BAR,
                        content_name: (0, d.jO)(r.uF.QUEST_BAR),
                        reason: _,
                        impression_id: g.current?.getId(),
                    },
                    sourceQuestContent: r.uF.QUEST_BAR_V2,
                });
        }, [p, h, m, t.id, _, g]),
        i.useEffect(() => {
            (!A || f) && a.A.clearTracking(), p && h && !m && !n && u && a.A.stopTracking(t.id);
        }, [A, f, p, h, m, n, u, t.id]);
}
