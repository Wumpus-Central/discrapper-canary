n.d(t, { t: () => a });
var i = n(945810),
    r = n(79545);
let a = (0, i.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: { enabled: !1, enabledQuestStates: new Set() },
    variations: {
        1: { enabled: !0, enabledQuestStates: new Set([r.UA.UNENROLLED]) },
        2: { enabled: !0, enabledQuestStates: new Set([r.UA.UNENROLLED, r.UA.ENROLLED]) },
    },
});
