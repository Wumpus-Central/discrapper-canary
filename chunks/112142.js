n.d(t, { t: () => r });
var i = n(945810),
    a = n(79545);
let r = (0, i.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: { enabled: !1, enabledQuestStates: new Set() },
    variations: {
        1: { enabled: !0, enabledQuestStates: new Set([a.UA.UNENROLLED]) },
        2: { enabled: !0, enabledQuestStates: new Set([a.UA.UNENROLLED, a.UA.ENROLLED]) },
        3: { enabled: !0, enabledQuestStates: new Set([a.UA.UNENROLLED, a.UA.ENROLLED, a.UA.INCOMPLETE]) },
    },
});
