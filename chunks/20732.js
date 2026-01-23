n.d(t, {
    S: () => u,
});
var a = n(64700),
    l = n(731738),
    r = n(831062),
    i = n(260364),
    s = n(341915),
    o = n(561844),
    c = n(590202),
    d = n(652215);

function u(e) {
    let {
        quest: t,
        hasAssetsError: n,
        isEligibleForQuests: u,
        isQuestBarVisible: m,
        isVisibilityAnimationAtRest: p,
        isLoadingAssets: h,
        currentQuestVisibleReason: x,
        shouldShowQuestBar: g,
        isQuestEnrollmentBlocked: f,
        impressionRef: b,
    } = e;
    a.useEffect(() => {
        if (n) {
            var e;
            (0, o.av)({
                questId: t.id,
                event: d.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    content_id: s.uF.QUEST_BAR,
                    content_name: (0, c.jO)(s.uF.QUEST_BAR),
                    reason: "asset_loading_error",
                    impression_id: null == (e = b.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: s.uF.QUEST_BAR_V2,
            }),
                r.A.increment({
                    name: l.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: ["quest_id:".concat(t.id), "reason:asset_loading_error"],
                });
        }
    }, [n, b, t.id]),
        a.useEffect(() => {
            if (!u) {
                var e;
                (0, o.av)({
                    questId: t.id,
                    event: d.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: s.uF.QUEST_BAR,
                        content_name: (0, c.jO)(s.uF.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = b.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: s.uF.QUEST_BAR_V2,
                });
            }
        }, [u, b, t.id]),
        a.useEffect(() => {
            if (!m && p && !h) {
                var e;
                (0, o.av)({
                    questId: t.id,
                    event: d.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: s.uF.QUEST_BAR,
                        content_name: (0, c.jO)(s.uF.QUEST_BAR),
                        reason: x,
                        impression_id: null == (e = b.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: s.uF.QUEST_BAR_V2,
                });
            }
        }, [m, p, h, t.id, x, b]),
        a.useEffect(() => {
            (!g || f) && i.A.clearTracking(), m && p && !h && !n && u && i.A.stopTracking(t.id);
        }, [g, f, m, p, h, n, u, t.id]);
}
