"use strict";
n.d(t, {
    Dl: () => I,
    Ig: () => f,
    Iq: () => o,
    YX: () => c,
    Ym: () => u,
    ev: () => y,
    fV: () => T,
    jS: () => l,
    m8: () => d,
    n6: () => S,
    r4: () => E,
    rE: () => h,
    rI: () => p,
    sy: () => _,
    uK: () => a,
});
var r = n(311907),
    i = n(945810),
    s = n(287809);
n(654487);
let a = (0, i.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = (0, i.mj)({
        name: "2026-02-fetch-quest-home-takeover-on-connection-open",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (0, i.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = (0, i.mj)({
        name: "2026-03-desktop-activity-quest-header",
        kind: "user",
        defaultConfig: { enabled: !1, showSkipButton: !1 },
        variations: { 1: { enabled: !0, showSkipButton: !0 }, 2: { enabled: !0, showSkipButton: !1 } },
    }),
    c = (0, i.mj)({
        name: "2026-02-app-store-bottom-sheet-overlay",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, i.mj)({
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
let f = (0, i.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    p = (0, i.mj)({
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
let m = (0, i.mj)({
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
    E = (0, i.mj)({
        name: "2025-03-quests-premium-rewards-holdout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function g(e) {
    let { location: t } = e,
        n = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        i = null != n && n.isStaff(),
        a = E.useConfig({ location: t });
    return !i && !1 === a.enabled;
}
let A = (0, i.mj)({
    name: "2026-04-quests-premium-orb-multiplier-marketing",
    kind: "user",
    defaultConfig: { enabled: !1, multiplier: 1 },
    variations: { 0: { enabled: !1, multiplier: 1 }, 1: { enabled: !0, multiplier: 1.2 } },
});
function I(e) {
    let t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        n = A.useConfig({ location: e }),
        i = g({ location: e });
    return {
        shouldShowBonusOrbsUX: n.enabled && !i && !t?.isPremiumWithFractionalPremiumOnly(),
        multiplier: n.multiplier,
    };
}
function T() {
    return m.definition.defaultConfig.variant;
}
(0, i.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let S = (0, i.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, i.mj)({
    name: "2026-04-mobile-quest-orb-reward-modal-cta-priority",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
}),
    (0, i.mj)({
        name: "2026-03-mobile-quest-home-red-dot-notification",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
let y = (0, i.mj)({
    name: "2026-04-quest-heartbeat-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
