"use strict";
n.d(t, {
    Ig: () => f,
    Iq: () => a,
    TY: () => c,
    YX: () => u,
    Ym: () => l,
    fV: () => E,
    jS: () => o,
    m8: () => d,
    rE: () => h,
    rI: () => p,
    sn: () => i,
    sy: () => _,
    uK: () => s,
});
var r = n(945810);
n(654487);
let i = (0, r.mj)({
        name: "2025-11-quest-home-takeover-client-rollout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    s = (0, r.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    a = (0, r.mj)({
        name: "2026-02-fetch-quest-home-takeover-on-connection-open",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (0, r.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (0, r.mj)({
        name: "2026-03-desktop-activity-quest-header",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, r.mj)({
        name: "2026-02-app-store-bottom-sheet-overlay",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    c = (0, r.mj)({
        name: "2026-03-get-decision-generic-creative-rollout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, r.mj)({
        name: "2026-03-quest-reload-video-on-obscured",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var _ = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
        (e[(e.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
        e
    );
})({});
let f = (0, r.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    p = (0, r.mj)({
        name: "2026-03-get-decision-hero-ads",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var h = (function (e) {
    return (
        (e[(e.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES = 0)] = "RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES"),
        (e[(e.REMOVE_NON_VIDEO_QUESTS = 1)] = "REMOVE_NON_VIDEO_QUESTS"),
        (e[(e.RANK_BASED_ON_QUEST_TYPE = 2)] = "RANK_BASED_ON_QUEST_TYPE"),
        e
    );
})({});
let m = (0, r.mj)({
    name: "2026-03-mobile-quest-home-ranking-availability",
    kind: "user",
    defaultConfig: { enabled: !1, variant: null },
    variations: {
        0: { enabled: !1, variant: null },
        1: { enabled: !0, variant: 0 },
        2: { enabled: !0, variant: 1 },
        3: { enabled: !0, variant: 2 },
    },
});
function E() {
    return m.definition.defaultConfig.variant;
}
