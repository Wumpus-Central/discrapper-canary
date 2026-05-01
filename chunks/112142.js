"use strict";
n.d(t, { t: () => s });
var i = n(945810),
    r = n(79545);
let s = (0, i.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: { enabled: !1, enabledQuestStates: new Set() },
    variations: {
        1: { enabled: !0, enabledQuestStates: new Set([r.UA.UNENROLLED]) },
        2: { enabled: !0, enabledQuestStates: new Set([r.UA.UNENROLLED, r.UA.ENROLLED]) },
        3: { enabled: !0, enabledQuestStates: new Set([r.UA.UNENROLLED, r.UA.ENROLLED, r.UA.INCOMPLETE]) },
        4: {
            enabled: !0,
            enabledQuestStates: new Set([r.UA.UNENROLLED, r.UA.ENROLLED, r.UA.INCOMPLETE, r.UA.COMPLETED]),
        },
        5: {
            enabled: !0,
            enabledQuestStates: new Set([
                r.UA.UNENROLLED,
                r.UA.ENROLLED,
                r.UA.INCOMPLETE,
                r.UA.COMPLETED,
                r.UA.CLAIMED,
            ]),
        },
        6: {
            enabled: !0,
            enabledQuestStates: new Set([
                r.UA.UNENROLLED,
                r.UA.ENROLLED,
                r.UA.INCOMPLETE,
                r.UA.COMPLETED,
                r.UA.CLAIMED,
                r.UA.EXPIRED,
            ]),
        },
        7: {
            enabled: !0,
            enabledQuestStates: new Set([
                r.UA.UNENROLLED,
                r.UA.ENROLLED,
                r.UA.INCOMPLETE,
                r.UA.COMPLETED,
                r.UA.CLAIMED,
                r.UA.EXPIRED,
                r.UA.EXPIRED_CLAIMABLE,
            ]),
        },
    },
});
