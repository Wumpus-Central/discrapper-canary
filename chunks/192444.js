"use strict";
n.d(t, {
    Bm: () => D,
    m8: () => h,
    n6: () => m,
    Ig: () => f,
    OO: () => A,
    jS: () => E,
    aD: () => g,
    Qj: () => R,
    uK: () => _,
    lk: () => T,
    Mk: () => y,
    d: () => L,
    sy: () => I,
});
var i,
    r,
    a,
    s = n(582128),
    l =
        (((i = {})[(i.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        i),
    o = n(945810),
    d = n(927813),
    c = n(646917),
    u = n(576761);
let _ = (0, o.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    E = (0, o.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    A = (0, o.mj)({
        name: "2026-05-app-store-overlay-feature-gate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    h = (0, o.mj)({
        name: "2026-03-quest-reload-video-on-obscured",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var I =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
let f = (0, o.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    p = (0, o.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function T(e) {
    let { enabled: t } = p.useConfig({ location: e }),
        n = (0, c.z)();
    return {
        shouldShowBonusOrbsUX: n !== u.MA.INELIGIBLE && n !== u.MA.CREPE && t,
        multiplier: l.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
(0, o.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let m = (0, o.mj)({
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
let g = (0, o.mj)({
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
(0, o.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let S = (0, o.mj)({
        name: "2026-06-remove-quest-home-hero",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    N = new Date("2026-08-01T10:00:00-07:00"),
    C = new Date("2026-08-07T10:00:00-07:00"),
    O = 5 * d.A.Millis.MINUTE;
function R() {
    let [e, t] = s.useState(() => new Date());
    s.useEffect(() => {
        let e = setInterval(() => t(new Date()), O);
        return () => clearInterval(e);
    }, []);
    let n = e >= N && e < C,
        { enabled: i } = S.useConfig({
            location: n ? "remove-quest-home-hero-eligible" : "remove-quest-home-hero-ineligible",
        });
    return !!n && i;
}
var L =
    (((a = {})[(a.CONTROL = 0)] = "CONTROL"),
    (a[(a.NEW_LAYOUT_WITH_SEARCH = 1)] = "NEW_LAYOUT_WITH_SEARCH"),
    (a[(a.LARGE_MASK_MARGIN = 2)] = "LARGE_MASK_MARGIN"),
    (a[(a.REMOVE_QUEST_TITLE_SUFFIX = 3)] = "REMOVE_QUEST_TITLE_SUFFIX"),
    (a[(a.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 4)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
    a);
let y = (0, o.mj)({
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
    D = (0, o.mj)({
        name: "2026-07-quest-bar-secondary-cta",
        kind: "user",
        defaultConfig: { enabled: !1, showPlayInstantlyLabel: !1 },
        variations: {
            0: { enabled: !1, showPlayInstantlyLabel: !1 },
            1: { enabled: !0, showPlayInstantlyLabel: !1 },
            2: { enabled: !0, showPlayInstantlyLabel: !0 },
        },
    });
