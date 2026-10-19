n.d(t, {
    lk: () => I,
    NN: () => S,
    n6: () => T,
    OO: () => f,
    Ig: () => _,
    aD: () => p,
    Se: () => E,
    uK: () => d,
    Ay: () => P,
    Ds: () => g,
    LV: () => N,
    Mk: () => O,
    sy: () => A,
    d: () => m,
});
var r,
    u,
    i,
    o,
    l =
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
let E = (0, s.mj)({
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
let _ = (0, s.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    C = (0, s.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function I(e) {
    let { enabled: t } = C.useConfig({ location: e }),
        n = (0, a.z)();
    return {
        shouldShowBonusOrbsUX: n !== c.MA.INELIGIBLE && n !== c.MA.XBOX_GAME_PASS && t,
        multiplier: l.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
let T = (0, s.mj)({
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
var m =
    588245 != n.j
        ? (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
          (i[(i.NEW_LAYOUT_WITH_SEARCH = 1)] = "NEW_LAYOUT_WITH_SEARCH"),
          (i[(i.LARGE_MASK_MARGIN = 2)] = "LARGE_MASK_MARGIN"),
          (i[(i.REMOVE_QUEST_TITLE_SUFFIX = 3)] = "REMOVE_QUEST_TITLE_SUFFIX"),
          (i[(i.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 4)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
          i)
        : null;
let O = (0, s.mj)({
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
    (((o = {})[(o.DEFAULT = 0)] = "DEFAULT"),
    (o[(o.ALL_TIERS = 1)] = "ALL_TIERS"),
    (o[(o.TIER_1_VISUALS = 2)] = "TIER_1_VISUALS"),
    (o[(o.TIER_2_VISUALS = 3)] = "TIER_2_VISUALS"),
    (o[(o.TIER_3_VISUALS = 4)] = "TIER_3_VISUALS"),
    o);
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
let P = (0, s.mj)({
    name: "2026-10-clickable-hero-banner",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
