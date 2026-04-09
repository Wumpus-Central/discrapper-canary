n.d(t, { t: () => s });
var i = n(945810),
    l = n(79545);
let s = (0, i.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: { enabled: !1, enabledQuestStates: new Set() },
    variations: {
        1: { enabled: !0, enabledQuestStates: new Set([l.UA.UNENROLLED]) },
        2: { enabled: !0, enabledQuestStates: new Set([l.UA.UNENROLLED, l.UA.ENROLLED]) },
        3: { enabled: !0, enabledQuestStates: new Set([l.UA.UNENROLLED, l.UA.ENROLLED, l.UA.INCOMPLETE]) },
        4: {
            enabled: !0,
            enabledQuestStates: new Set([l.UA.UNENROLLED, l.UA.ENROLLED, l.UA.INCOMPLETE, l.UA.COMPLETED]),
        },
        5: {
            enabled: !0,
            enabledQuestStates: new Set([
                l.UA.UNENROLLED,
                l.UA.ENROLLED,
                l.UA.INCOMPLETE,
                l.UA.COMPLETED,
                l.UA.CLAIMED,
            ]),
        },
        6: {
            enabled: !0,
            enabledQuestStates: new Set([
                l.UA.UNENROLLED,
                l.UA.ENROLLED,
                l.UA.INCOMPLETE,
                l.UA.COMPLETED,
                l.UA.CLAIMED,
                l.UA.EXPIRED,
            ]),
        },
        7: {
            enabled: !0,
            enabledQuestStates: new Set([
                l.UA.UNENROLLED,
                l.UA.ENROLLED,
                l.UA.INCOMPLETE,
                l.UA.COMPLETED,
                l.UA.CLAIMED,
                l.UA.EXPIRED,
                l.UA.EXPIRED_CLAIMABLE,
            ]),
        },
    },
});
