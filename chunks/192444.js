"use strict";
n.d(t, {
    n6: () => T,
    Ig: () => g,
    jS: () => h,
    Ym: () => f,
    zY: () => y,
    m8: () => E,
    A8: () => N,
    OO: () => p,
    Qj: () => L,
    ev: () => S,
    aD: () => v,
    uK: () => _,
    lk: () => I,
    jm: () => C,
    sy: () => m,
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
        name: "2026-03-desktop-activity-quest-header",
        kind: "user",
        defaultConfig: { enabled: !1, showSkipButton: !1 },
        variations: { 1: { enabled: !0, showSkipButton: !0 }, 2: { enabled: !0, showSkipButton: !1 } },
    }),
    p = (0, l.mj)({
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
var m =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
let g = (0, l.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    A = (0, l.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function I(e) {
    let { enabled: t } = A.useConfig({ location: e }),
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
let T = (0, l.mj)({
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
let S = (0, l.mj)({
    name: "2026-04-quest-heartbeat-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y =
    (((s = {})[(s.CONTROL = 0)] = "CONTROL"),
    (s[(s.NEW_LAYOUT_NO_SEARCH = 1)] = "NEW_LAYOUT_NO_SEARCH"),
    (s[(s.NEW_LAYOUT_WITH_SEARCH = 2)] = "NEW_LAYOUT_WITH_SEARCH"),
    s);
let N = (0, l.mj)({
        name: "2026-05-quest-home-new-layout",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    v = (0, l.mj)({
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
    C = (0, l.mj)({
        name: "2026-05-quest-home-remove-expired-quests",
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
let R = (0, l.mj)({
        name: "2026-06-remove-quest-home-hero",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    O = new Date("2026-06-20T10:00:00-07:00"),
    b = new Date("2026-06-23T10:00:00-07:00"),
    D = 5 * u.A.Millis.MINUTE;
function L() {
    let [e, t] = a.useState(() => new Date());
    a.useEffect(() => {
        let e = setInterval(() => t(new Date()), D);
        return () => clearInterval(e);
    }, []);
    let n = e >= O && e < b,
        { enabled: i } = R.useConfig({
            location: n ? "remove-quest-home-hero-eligible" : "remove-quest-home-hero-ineligible",
        });
    return !!n && i;
}
