n.d(t, {
    NN: () => T,
    n6: () => p,
    OO: () => c,
    Ig: () => E,
    aD: () => I,
    Se: () => f,
    uK: () => d,
    lk: () => C,
    LV: () => O,
    Mk: () => S,
    sy: () => A,
    d: () => m,
});
var r,
    u,
    l,
    i =
        (((r = {})[(r.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        r),
    o = n(945810),
    s = n(646917),
    a = n(576761);
let d = (0, o.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    c = (0, o.mj)({
        name: "2026-05-app-store-overlay-feature-gate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
(0, o.mj)({
    name: "2026-07-custom-app-store-overlay",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let f = (0, o.mj)({
    name: "2026-07-ios-attribution",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var A =
    (((u = {})[(u.DEFAULT = 0)] = "DEFAULT"),
    (u[(u.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (u[(u.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    u);
let E = (0, o.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    _ = (0, o.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function C(e) {
    let { enabled: t } = _.useConfig({ location: e }),
        n = (0, s.z)();
    return {
        shouldShowBonusOrbsUX: n !== a.MA.INELIGIBLE && n !== a.MA.XBOX_GAME_PASS && t,
        multiplier: i.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
let p = (0, o.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, o.mj)({
    name: "2026-03-mobile-quest-home-red-dot-notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let I = (0, o.mj)({
    name: "2026-05-quest-home-tile-redesign",
    kind: "user",
    defaultConfig: { useNewLayoutWithSearch: !1, useNewTile: !1, useNewFeaturedTiles: !1, ctaOnHover: !1 },
    variations: {
        0: { useNewLayoutWithSearch: !1, useNewTile: !1, useNewFeaturedTiles: !1, ctaOnHover: !1 },
        1: { useNewLayoutWithSearch: !0, useNewTile: !1, useNewFeaturedTiles: !1, ctaOnHover: !1 },
        2: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !0, ctaOnHover: !0 },
        3: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !1, ctaOnHover: !0 },
        4: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !0, ctaOnHover: !1 },
    },
});
(0, o.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let T = (0, o.mj)({
    name: "2026-09-mobile-quest-home-sort-priority",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var m =
    588245 != n.j
        ? (((l = {})[(l.CONTROL = 0)] = "CONTROL"),
          (l[(l.NEW_LAYOUT_WITH_SEARCH = 1)] = "NEW_LAYOUT_WITH_SEARCH"),
          (l[(l.LARGE_MASK_MARGIN = 2)] = "LARGE_MASK_MARGIN"),
          (l[(l.REMOVE_QUEST_TITLE_SUFFIX = 3)] = "REMOVE_QUEST_TITLE_SUFFIX"),
          (l[(l.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 4)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
          l)
        : null;
let S = (0, o.mj)({
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
});
(0, o.mj)({
    name: "2026-09-quest-mobile-bar-secondary-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let O = (0, o.mj)({
    name: "2026-09-new-orb-reward-visuals",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(0, o.mj)({
    name: "2026-09-mobile-quest-reward-button-to-secondary-button",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
