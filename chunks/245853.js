"use strict";
n.d(t, {
    Dl: () => T,
    Ig: () => h,
    Iq: () => u,
    YX: () => _,
    Ym: () => d,
    ev: () => N,
    fV: () => S,
    jS: () => c,
    m8: () => f,
    n6: () => y,
    r4: () => A,
    rE: () => m,
    rI: () => E,
    sy: () => p,
    uK: () => l,
});
var r,
    i,
    s = n(311907),
    a = n(945810),
    o = n(287809);
n(654487);
let l = (0, a.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, a.mj)({
        name: "2026-02-fetch-quest-home-takeover-on-connection-open",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    c = (0, a.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = (0, a.mj)({
        name: "2026-03-desktop-activity-quest-header",
        kind: "user",
        defaultConfig: { enabled: !1, showSkipButton: !1 },
        variations: { 1: { enabled: !0, showSkipButton: !0 }, 2: { enabled: !0, showSkipButton: !1 } },
    }),
    _ = (0, a.mj)({
        name: "2026-02-app-store-bottom-sheet-overlay",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    f = (0, a.mj)({
        name: "2026-03-quest-reload-video-on-obscured",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var p =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
let h = (0, a.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    E = (0, a.mj)({
        name: "2026-03-get-decision-hero-ads",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var m =
    (((i = {})[(i.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES = 0)] = "RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES"),
    (i[(i.REMOVE_NON_VIDEO_QUESTS = 1)] = "REMOVE_NON_VIDEO_QUESTS"),
    (i[(i.RANK_BASED_ON_QUEST_TYPE = 2)] = "RANK_BASED_ON_QUEST_TYPE"),
    i);
let g = (0, a.mj)({
        name: "2026-03-mobile-quest-home-ranking-availability",
        kind: "user",
        defaultConfig: { enabled: !1, variant: null },
        variations: {
            0: { enabled: !1, variant: null },
            1: { enabled: !0, variant: 0 },
            2: { enabled: !0, variant: 1 },
            3: { enabled: !0, variant: 2 },
        },
    }),
    A = (0, a.mj)({
        name: "2025-03-quests-premium-rewards-holdout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    I = (0, a.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1, multiplier: 1 },
        variations: { 0: { enabled: !1, multiplier: 1 }, 1: { enabled: !0, multiplier: 1.2 } },
    });
function T(e) {
    let t = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        n = I.useConfig({ location: e }),
        r = (function (e) {
            let { location: t } = e,
                n = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
                r = null != n && n.isStaff(),
                i = A.useConfig({ location: t });
            return !r && !1 === i.enabled;
        })({ location: e });
    return {
        shouldShowBonusOrbsUX: n.enabled && !r && !t?.isPremiumWithFractionalPremiumOnly(),
        multiplier: n.multiplier,
    };
}
function S() {
    return g.definition.defaultConfig.variant;
}
(0, a.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let y = (0, a.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, a.mj)({
    name: "2026-04-mobile-quest-orb-reward-modal-cta-priority",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
}),
    (0, a.mj)({
        name: "2026-03-mobile-quest-home-red-dot-notification",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
let N = (0, a.mj)({
    name: "2026-04-quest-heartbeat-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
