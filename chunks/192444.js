"use strict";
n.d(t, {
    Bm: () => S,
    m8: () => E,
    n6: () => p,
    Ig: () => h,
    OO: () => _,
    jS: () => u,
    aD: () => T,
    uK: () => c,
    lk: () => f,
    Mk: () => g,
    d: () => m,
    sy: () => A,
});
var i,
    r,
    a,
    s =
        (((i = {})[(i.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        i),
    l = n(945810),
    o = n(646917),
    d = n(576761);
let c = (0, l.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, l.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    _ = (0, l.mj)({
        name: "2026-05-app-store-overlay-feature-gate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    E = (0, l.mj)({
        name: "2026-03-quest-reload-video-on-obscured",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var A =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
let h = (0, l.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    I = (0, l.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function f(e) {
    let { enabled: t } = I.useConfig({ location: e }),
        n = (0, o.z)();
    return {
        shouldShowBonusOrbsUX: n !== d.MA.INELIGIBLE && n !== d.MA.CREPE && t,
        multiplier: s.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
(0, l.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let p = (0, l.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, l.mj)({
    name: "2026-03-mobile-quest-home-red-dot-notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let T = (0, l.mj)({
    name: "2026-05-quest-home-tile-redesign",
    kind: "user",
    defaultConfig: {
        useNewLayoutWithSearch: !1,
        useNewTile: !1,
        useLargeFeaturedTiles: !1,
        ctaOnHover: !1,
        clickableTile: !1,
    },
    variations: {
        0: { useNewLayoutWithSearch: !1, useNewTile: !1, useLargeFeaturedTiles: !1, ctaOnHover: !1, clickableTile: !1 },
        1: { useNewLayoutWithSearch: !0, useNewTile: !1, useLargeFeaturedTiles: !1, ctaOnHover: !1, clickableTile: !1 },
        2: { useNewLayoutWithSearch: !0, useNewTile: !0, useLargeFeaturedTiles: !0, ctaOnHover: !0, clickableTile: !1 },
        3: { useNewLayoutWithSearch: !0, useNewTile: !0, useLargeFeaturedTiles: !1, ctaOnHover: !0, clickableTile: !1 },
        4: { useNewLayoutWithSearch: !0, useNewTile: !0, useLargeFeaturedTiles: !0, ctaOnHover: !1, clickableTile: !1 },
        5: { useNewLayoutWithSearch: !0, useNewTile: !0, useLargeFeaturedTiles: !0, ctaOnHover: !0, clickableTile: !0 },
    },
});
(0, l.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var m =
    (((a = {})[(a.CONTROL = 0)] = "CONTROL"),
    (a[(a.NEW_LAYOUT_WITH_SEARCH = 1)] = "NEW_LAYOUT_WITH_SEARCH"),
    (a[(a.LARGE_MASK_MARGIN = 2)] = "LARGE_MASK_MARGIN"),
    (a[(a.REMOVE_QUEST_TITLE_SUFFIX = 3)] = "REMOVE_QUEST_TITLE_SUFFIX"),
    (a[(a.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 4)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
    a);
let g = (0, l.mj)({
        name: "2026-06-quest-home-layout-visual-tweaks",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: {
            0: { enabled: !1, variant: 0 },
            1: { enabled: !0, variant: 1 },
            2: { enabled: !0, variant: 2 },
            3: { enabled: !0, variant: 3 },
            4: { enabled: !0, variant: 4 },
        },
    }),
    S = (0, l.mj)({
        name: "2026-07-quest-bar-secondary-cta",
        kind: "user",
        defaultConfig: { enabled: !1, showPlayInstantlyLabel: !1 },
        variations: {
            0: { enabled: !1, showPlayInstantlyLabel: !1 },
            1: { enabled: !0, showPlayInstantlyLabel: !1 },
            2: { enabled: !0, showPlayInstantlyLabel: !0 },
        },
    });
