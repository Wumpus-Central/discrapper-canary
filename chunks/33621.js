n.d(t, {
    t: () => l,
}),
    n(896048);
var r = n(945810),
    i = n(79545);
let l = (0, r.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        enabledQuestStates: new Set(),
    },
    variations: {
        1: {
            enabled: !0,
            enabledQuestStates: new Set([i.U.UNENROLLED]),
        },
        2: {
            enabled: !0,
            enabledQuestStates: new Set([i.U.UNENROLLED, i.U.ENROLLED]),
        },
    },
});
