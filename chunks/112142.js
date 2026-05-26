n.d(e, { t: () => a });
var s = n(945810),
    i = n(79545);
let a = (0, s.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: { enabled: !1, enabledQuestStates: new Set() },
    variations: {
        1: { enabled: !0, enabledQuestStates: new Set([i.UA.UNENROLLED]) },
        2: { enabled: !0, enabledQuestStates: new Set([i.UA.UNENROLLED, i.UA.ENROLLED]) },
        3: { enabled: !0, enabledQuestStates: new Set([i.UA.UNENROLLED, i.UA.ENROLLED, i.UA.INCOMPLETE]) },
        4: {
            enabled: !0,
            enabledQuestStates: new Set([i.UA.UNENROLLED, i.UA.ENROLLED, i.UA.INCOMPLETE, i.UA.COMPLETED]),
        },
        5: {
            enabled: !0,
            enabledQuestStates: new Set([
                i.UA.UNENROLLED,
                i.UA.ENROLLED,
                i.UA.INCOMPLETE,
                i.UA.COMPLETED,
                i.UA.CLAIMED,
            ]),
        },
        6: {
            enabled: !0,
            enabledQuestStates: new Set([
                i.UA.UNENROLLED,
                i.UA.ENROLLED,
                i.UA.INCOMPLETE,
                i.UA.COMPLETED,
                i.UA.CLAIMED,
                i.UA.EXPIRED,
            ]),
        },
        7: {
            enabled: !0,
            enabledQuestStates: new Set([
                i.UA.UNENROLLED,
                i.UA.ENROLLED,
                i.UA.INCOMPLETE,
                i.UA.COMPLETED,
                i.UA.CLAIMED,
                i.UA.EXPIRED,
                i.UA.EXPIRED_CLAIMABLE,
            ]),
        },
    },
});
