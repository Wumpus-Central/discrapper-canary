n.d(t, {
    lk: () => I,
    NN: () => S,
    n6: () => C,
    OO: () => f,
    Ig: () => T,
    aD: () => p,
    Se: () => A,
    uK: () => d,
    Ay: () => v,
    Ds: () => g,
    LV: () => N,
    Mk: () => m,
    sy: () => E,
    d: () => O,
});
var r,
    u,
    l,
    i,
    o =
        (((r = {})[(r.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        r),
    s = n(945810),
    a = n(646917),
    c = n(576761);
let d = (0, s.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    f = (0, s.mj)({
        name: "2026-05-app-store-overlay-feature-gate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
(0, s.mj)({
    name: "2026-07-custom-app-store-overlay",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let A = (0, s.mj)({
    name: "2026-07-ios-attribution",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E =
    (((u = {})[(u.DEFAULT = 0)] = "DEFAULT"),
    (u[(u.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (u[(u.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    u);
let T = (0, s.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    _ = (0, s.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function I(e) {
    let { enabled: t } = _.useConfig({ location: e }),
        n = (0, a.z)();
    return {
        shouldShowBonusOrbsUX: n !== c.MA.INELIGIBLE && n !== c.MA.XBOX_GAME_PASS && t,
        multiplier: o.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
let C = (0, s.mj)({
        name: "2026-04-composed-quest-player",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    p = (0, s.mj)({
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
(0, s.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let S = (0, s.mj)({
    name: "2026-09-mobile-quest-home-sort-priority",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var O =
    588245 != n.j
        ? (((l = {})[(l.CONTROL = 0)] = "CONTROL"),
          (l[(l.NEW_LAYOUT_WITH_SEARCH = 1)] = "NEW_LAYOUT_WITH_SEARCH"),
          (l[(l.LARGE_MASK_MARGIN = 2)] = "LARGE_MASK_MARGIN"),
          (l[(l.REMOVE_QUEST_TITLE_SUFFIX = 3)] = "REMOVE_QUEST_TITLE_SUFFIX"),
          (l[(l.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 4)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
          l)
        : null;
let m = (0, s.mj)({
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
(0, s.mj)({
    name: "2026-09-quest-mobile-bar-secondary-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var g =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.ALL_TIERS = 1)] = "ALL_TIERS"),
    (i[(i.TIER_1_VISUALS = 2)] = "TIER_1_VISUALS"),
    (i[(i.TIER_2_VISUALS = 3)] = "TIER_2_VISUALS"),
    (i[(i.TIER_3_VISUALS = 4)] = "TIER_3_VISUALS"),
    i);
let N = (0, s.mj)({
    name: "2026-09-new-orb-reward-visuals",
    kind: "user",
    defaultConfig: { variant: 0 },
    variations: { 0: { variant: 0 }, 1: { variant: 1 }, 2: { variant: 3 }, 3: { variant: 4 }, 4: { variant: 2 } },
});
(0, s.mj)({
    name: "2026-09-mobile-quest-reward-button-to-secondary-button",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let v = (0, s.mj)({
    name: "2026-10-clickable-hero-banner",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
