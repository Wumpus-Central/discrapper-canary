n.d(t, {
    Bm: () => _,
    n6: () => T,
    OO: () => c,
    Ig: () => E,
    aD: () => p,
    Se: () => C,
    uK: () => d,
    lk: () => A,
    Mk: () => h,
    sy: () => f,
    d: () => I,
});
var i,
    r,
    s,
    o =
        (((i = {})[(i.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        i),
    a = n(945810),
    l = n(646917),
    u = n(576761);
let d = (0, a.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    c = (0, a.mj)({
        name: "2026-05-app-store-overlay-feature-gate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
(0, a.mj)({
    name: "2026-07-custom-app-store-overlay",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
}),
    (0, a.mj)({
        name: "2026-08-bounties-ctr-experiment-1",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: {
            0: { enabled: !1, variant: 0 },
            1: { enabled: !0, variant: 1 },
            2: { enabled: !0, variant: 2 },
            3: { enabled: !0, variant: 3 },
        },
    });
let C = (0, a.mj)({
    name: "2026-07-ios-attribution",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
let E = (0, a.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    m = (0, a.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function A(e) {
    let { enabled: t } = m.useConfig({ location: e }),
        n = (0, l.z)();
    return {
        shouldShowBonusOrbsUX: n !== u.MA.INELIGIBLE && n !== u.MA.CREPE && t,
        multiplier: o.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
let T = (0, a.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, a.mj)({
    name: "2026-03-mobile-quest-home-red-dot-notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let p = (0, a.mj)({
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
});
(0, a.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I =
    588245 != n.j
        ? (((s = {})[(s.CONTROL = 0)] = "CONTROL"),
          (s[(s.NEW_LAYOUT_WITH_SEARCH = 1)] = "NEW_LAYOUT_WITH_SEARCH"),
          (s[(s.LARGE_MASK_MARGIN = 2)] = "LARGE_MASK_MARGIN"),
          (s[(s.REMOVE_QUEST_TITLE_SUFFIX = 3)] = "REMOVE_QUEST_TITLE_SUFFIX"),
          (s[(s.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 4)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
          s)
        : null;
let h = (0, a.mj)({
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
    _ = (0, a.mj)({
        name: "2026-07-quest-bar-secondary-cta",
        kind: "user",
        defaultConfig: { enabled: !1, showPlayInstantlyLabel: !1 },
        variations: {
            0: { enabled: !1, showPlayInstantlyLabel: !1 },
            1: { enabled: !0, showPlayInstantlyLabel: !1 },
            2: { enabled: !0, showPlayInstantlyLabel: !0 },
        },
    });
