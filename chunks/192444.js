"use strict";
n.d(t, {
    n6: () => S,
    Ig: () => A,
    jS: () => f,
    Ym: () => p,
    zY: () => C,
    Mk: () => P,
    A8: () => N,
    m8: () => m,
    d: () => M,
    OO: () => E,
    Qj: () => w,
    ev: () => y,
    aD: () => v,
    uK: () => h,
    lk: () => T,
    jm: () => R,
    sy: () => g,
});
var i,
    r,
    s,
    a,
    o = n(64700),
    l =
        (((i = {})[(i.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        i),
    u = n(945810),
    c = n(927813),
    d = n(646917),
    _ = n(576761);
n(190107);
let h = (0, u.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    f = (0, u.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    p = (0, u.mj)({
        name: "2026-03-desktop-activity-quest-header",
        kind: "user",
        defaultConfig: { enabled: !1, showSkipButton: !1 },
        variations: { 1: { enabled: !0, showSkipButton: !0 }, 2: { enabled: !0, showSkipButton: !1 } },
    }),
    E = (0, u.mj)({
        name: "2026-05-app-store-overlay-feature-gate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    m = (0, u.mj)({
        name: "2026-03-quest-reload-video-on-obscured",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var g =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
let A = (0, u.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    I = (0, u.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function T(e) {
    let { enabled: t } = I.useConfig({ location: e }),
        n = (0, d.z)();
    return {
        shouldShowBonusOrbsUX: n !== _.MA.INELIGIBLE && n !== _.MA.CREPE && t,
        multiplier: l.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
(0, u.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let S = (0, u.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, u.mj)({
    name: "2026-04-mobile-quest-orb-reward-modal-cta-priority",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
}),
    (0, u.mj)({
        name: "2026-03-mobile-quest-home-red-dot-notification",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
let y = (0, u.mj)({
    name: "2026-04-quest-heartbeat-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C =
    (((s = {})[(s.CONTROL = 0)] = "CONTROL"),
    (s[(s.NEW_LAYOUT_NO_SEARCH = 1)] = "NEW_LAYOUT_NO_SEARCH"),
    (s[(s.NEW_LAYOUT_WITH_SEARCH = 2)] = "NEW_LAYOUT_WITH_SEARCH"),
    s);
let N = (0, u.mj)({
        name: "2026-05-quest-home-new-layout",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    v = (0, u.mj)({
        name: "2026-05-quest-home-tile-redesign",
        kind: "user",
        defaultConfig: { useNewLayoutWithSearch: !1, useNewTile: !1, useLargeFeaturedTiles: !1, ctaOnHover: !1 },
        variations: {
            0: { useNewLayoutWithSearch: !1, useNewTile: !1, useLargeFeaturedTiles: !1, ctaOnHover: !1 },
            1: { useNewLayoutWithSearch: !0, useNewTile: !1, useLargeFeaturedTiles: !1, ctaOnHover: !1 },
            2: { useNewLayoutWithSearch: !0, useNewTile: !0, useLargeFeaturedTiles: !0, ctaOnHover: !0 },
            3: { useNewLayoutWithSearch: !0, useNewTile: !0, useLargeFeaturedTiles: !1, ctaOnHover: !0 },
            4: { useNewLayoutWithSearch: !0, useNewTile: !0, useLargeFeaturedTiles: !0, ctaOnHover: !1 },
        },
    }),
    R = (0, u.mj)({
        name: "2026-05-quest-home-remove-expired-quests",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
(0, u.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let O = (0, u.mj)({
        name: "2026-06-remove-quest-home-hero",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    b = new Date("2026-06-20T10:00:00-07:00"),
    D = new Date("2026-06-23T10:00:00-07:00"),
    L = 5 * c.A.Millis.MINUTE;
function w() {
    let [e, t] = o.useState(() => new Date());
    o.useEffect(() => {
        let e = setInterval(() => t(new Date()), L);
        return () => clearInterval(e);
    }, []);
    let n = e >= b && e < D,
        { enabled: i } = O.useConfig({
            location: n ? "remove-quest-home-hero-eligible" : "remove-quest-home-hero-ineligible",
        });
    return !!n && i;
}
var M =
    (((a = {})[(a.CONTROL = 0)] = "CONTROL"),
    (a[(a.LARGE_MASK_MARGIN = 1)] = "LARGE_MASK_MARGIN"),
    (a[(a.REMOVE_QUEST_TITLE_SUFFIX = 2)] = "REMOVE_QUEST_TITLE_SUFFIX"),
    (a[(a.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 3)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
    a);
let P = (0, u.mj)({
    name: "2026-06-quest-home-layout-visual-tweaks",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: {
        0: { enabled: !1, variant: 0 },
        1: { enabled: !0, variant: 1 },
        2: { enabled: !0, variant: 2 },
        3: { enabled: !0, variant: 3 },
    },
});
