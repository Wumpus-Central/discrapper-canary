"use strict";
n.d(t, {
    n6: () => I,
    Iq: () => d,
    jS: () => _,
    Ig: () => m,
    Ym: () => h,
    zY: () => S,
    m8: () => p,
    A8: () => y,
    OO: () => f,
    ev: () => T,
    aD: () => N,
    uK: () => c,
    lk: () => A,
    jm: () => v,
    sy: () => E,
});
var i,
    r,
    s,
    a =
        (((i = {})[(i.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        i),
    o = n(945810),
    l = n(646917),
    u = n(576761);
n(190107);
let c = (0, o.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, o.mj)({
        name: "2026-02-fetch-quest-home-takeover-on-connection-open",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    _ = (0, o.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    h = (0, o.mj)({
        name: "2026-03-desktop-activity-quest-header",
        kind: "user",
        defaultConfig: { enabled: !1, showSkipButton: !1 },
        variations: { 1: { enabled: !0, showSkipButton: !0 }, 2: { enabled: !0, showSkipButton: !1 } },
    }),
    f = (0, o.mj)({
        name: "2026-05-app-store-overlay-feature-gate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    p = (0, o.mj)({
        name: "2026-03-quest-reload-video-on-obscured",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var E =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
let m = (0, o.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    g = (0, o.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function A(e) {
    let { enabled: t } = g.useConfig({ location: e }),
        n = (0, l.z)();
    return {
        shouldShowBonusOrbsUX: n !== u.MA.INELIGIBLE && n !== u.MA.CREPE && t,
        multiplier: a.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
(0, o.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let I = (0, o.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, o.mj)({
    name: "2026-04-mobile-quest-orb-reward-modal-cta-priority",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
}),
    (0, o.mj)({
        name: "2026-03-mobile-quest-home-red-dot-notification",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
let T = (0, o.mj)({
    name: "2026-04-quest-heartbeat-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S =
    (((s = {})[(s.CONTROL = 0)] = "CONTROL"),
    (s[(s.NEW_LAYOUT_NO_SEARCH = 1)] = "NEW_LAYOUT_NO_SEARCH"),
    (s[(s.NEW_LAYOUT_WITH_SEARCH = 2)] = "NEW_LAYOUT_WITH_SEARCH"),
    s);
let y = (0, o.mj)({
        name: "2026-05-quest-home-new-layout",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    N = (0, o.mj)({
        name: "2026-05-quest-home-tile-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    v = (0, o.mj)({
        name: "2026-05-quest-home-remove-expired-quests",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
(0, o.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
