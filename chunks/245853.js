n.d(t, {
    Dl: () => f,
    Ig: () => A,
    Iq: () => o,
    YX: () => c,
    Ym: () => d,
    ev: () => m,
    fV: () => C,
    jS: () => E,
    m8: () => u,
    n6: () => p,
    r4: () => O,
    rE: () => S,
    rI: () => T,
    sy: () => I,
    uK: () => l,
});
var i,
    r,
    a = n(17928),
    s = n(945810),
    _ = n(287809);
n(654487);
let l = (0, s.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = (0, s.mj)({
        name: "2026-02-fetch-quest-home-takeover-on-connection-open",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    E = (0, s.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = (0, s.mj)({
        name: "2026-03-desktop-activity-quest-header",
        kind: "user",
        defaultConfig: { enabled: !1, showSkipButton: !1 },
        variations: { 1: { enabled: !0, showSkipButton: !0 }, 2: { enabled: !0, showSkipButton: !1 } },
    }),
    c = (0, s.mj)({
        name: "2026-02-app-store-bottom-sheet-overlay",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, s.mj)({
        name: "2026-03-quest-reload-video-on-obscured",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var I =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (i[(i.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    i);
let A = (0, s.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    T = (0, s.mj)({
        name: "2026-03-get-decision-hero-ads",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var S =
    (((r = {})[(r.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES = 0)] = "RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES"),
    (r[(r.REMOVE_NON_VIDEO_QUESTS = 1)] = "REMOVE_NON_VIDEO_QUESTS"),
    (r[(r.RANK_BASED_ON_QUEST_TYPE = 2)] = "RANK_BASED_ON_QUEST_TYPE"),
    r);
let N = (0, s.mj)({
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
    O = (0, s.mj)({
        name: "2025-03-quests-premium-rewards-holdout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    R = (0, s.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1, multiplier: 1 },
        variations: { 0: { enabled: !1, multiplier: 1 }, 1: { enabled: !0, multiplier: 1.2 } },
    });
function f(e) {
    let t = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
        n = R.useConfig({ location: e }),
        i = (function (e) {
            let { location: t } = e,
                n = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
                i = null != n && n.isStaff(),
                r = O.useConfig({ location: t });
            return !i && !1 === r.enabled;
        })({ location: e });
    return {
        shouldShowBonusOrbsUX: n.enabled && !i && !t?.isPremiumWithFractionalPremiumOnly(),
        multiplier: n.multiplier,
    };
}
function C() {
    return N.definition.defaultConfig.variant;
}
(0, s.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let p = (0, s.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, s.mj)({
    name: "2026-04-mobile-quest-orb-reward-modal-cta-priority",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
}),
    (0, s.mj)({
        name: "2026-03-mobile-quest-home-red-dot-notification",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
let m = (0, s.mj)({
    name: "2026-04-quest-heartbeat-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
