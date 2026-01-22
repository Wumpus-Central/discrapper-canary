n.d(t, {
    S: () => d,
});
var a = n(64700),
    l = n(731738),
    i = n(831062),
    r = n(216456),
    s = n(260364),
    o = n(341915),
    c = n(652215);

function d(e) {
    let {
        quest: t,
        hasAssetsError: n,
        isEligibleForQuests: d,
        isQuestBarVisible: u,
        isVisibilityAnimationAtRest: m,
        isLoadingAssets: p,
        currentQuestVisibleReason: h,
        shouldShowQuestBar: f,
        isQuestEnrollmentBlocked: x,
        impressionRef: b,
    } = e;
    a.useEffect(() => {
        if (n) {
            var e;
            (0, r.av)({
                questId: t.id,
                event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    content_id: o.uF.QUEST_BAR,
                    content_name: (0, r.jO)(o.uF.QUEST_BAR),
                    reason: "asset_loading_error",
                    impression_id: null == (e = b.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: o.uF.QUEST_BAR_V2,
            }),
                i.A.increment({
                    name: l.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: ["quest_id:".concat(t.id), "reason:asset_loading_error"],
                });
        }
    }, [n, b, t.id]),
        a.useEffect(() => {
            if (!d) {
                var e;
                (0, r.av)({
                    questId: t.id,
                    event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: o.uF.QUEST_BAR,
                        content_name: (0, r.jO)(o.uF.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = b.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: o.uF.QUEST_BAR_V2,
                });
            }
        }, [d, b, t.id]),
        a.useEffect(() => {
            if (!u && m && !p) {
                var e;
                (0, r.av)({
                    questId: t.id,
                    event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: o.uF.QUEST_BAR,
                        content_name: (0, r.jO)(o.uF.QUEST_BAR),
                        reason: h,
                        impression_id: null == (e = b.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: o.uF.QUEST_BAR_V2,
                });
            }
        }, [u, m, p, t.id, h, b]),
        a.useEffect(() => {
            (!f || x) && s.A.clearTracking(), u && m && !p && !n && d && s.A.stopTracking(t.id);
        }, [f, x, u, m, p, n, d, t.id]);
}
