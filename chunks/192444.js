"use strict";
n.d(t, {
    m8: () => E,
    n6: () => I,
    Ig: () => m,
    OO: () => f,
    jS: () => h,
    ev: () => T,
    aD: () => S,
    MV: () => N,
    uK: () => _,
    lk: () => A,
    Qj: () => v,
    Mk: () => L,
    d: () => b,
    sy: () => p,
});
var i,
    r,
    s,
    a = n(64700),
    o =
        (((i = {})[(i.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        i),
    l = n(945810),
    u = n(927813),
    c = n(646917),
    d = n(576761);
n(190107);
let _ = (0, l.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    h = (0, l.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    f = (0, l.mj)({
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
var p =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
let m = (0, l.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    g = (0, l.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function A(e) {
    let { enabled: t } = g.useConfig({ location: e }),
        n = (0, c.z)();
    return {
        shouldShowBonusOrbsUX: n !== d.MA.INELIGIBLE && n !== d.MA.CREPE && t,
        multiplier: o.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
(0, l.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let I = (0, l.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, l.mj)({
    name: "2026-04-mobile-quest-orb-reward-modal-cta-priority",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
}),
    (0, l.mj)({
        name: "2026-03-mobile-quest-home-red-dot-notification",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
let T = (0, l.mj)({
        name: "2026-04-quest-heartbeat-executable-fingerprint",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    S = (0, l.mj)({
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
    N = (0, l.mj)({
        name: "2026-05-quest-tile-cta-refactor",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
(0, l.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let C = (0, l.mj)({
        name: "2026-06-remove-quest-home-hero",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    y = new Date("2026-06-20T10:00:00-07:00"),
    O = new Date("2026-06-23T10:00:00-07:00"),
    R = 5 * u.A.Millis.MINUTE;
function v() {
    let [e, t] = a.useState(() => new Date());
    a.useEffect(() => {
        let e = setInterval(() => t(new Date()), R);
        return () => clearInterval(e);
    }, []);
    let n = e >= y && e < O,
        { enabled: i } = C.useConfig({
            location: n ? "remove-quest-home-hero-eligible" : "remove-quest-home-hero-ineligible",
        });
    return !!n && i;
}
var b =
    (((s = {})[(s.CONTROL = 0)] = "CONTROL"),
    (s[(s.LARGE_MASK_MARGIN = 1)] = "LARGE_MASK_MARGIN"),
    (s[(s.REMOVE_QUEST_TITLE_SUFFIX = 2)] = "REMOVE_QUEST_TITLE_SUFFIX"),
    (s[(s.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 3)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
    s);
let L = (0, l.mj)({
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
