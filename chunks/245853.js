"use strict";
n.d(t, {
    Dl: () => m,
    Ig: () => f,
    Iq: () => l,
    Ym: () => c,
    ev: () => A,
    jS: () => u,
    m8: () => d,
    n6: () => g,
    r4: () => p,
    rI: () => h,
    sy: () => _,
    uK: () => o,
});
var i,
    r = n(17928),
    s = n(945810),
    a = n(287809);
n(190107);
let o = (0, s.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l = (0, s.mj)({
        name: "2026-02-fetch-quest-home-takeover-on-connection-open",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = (0, s.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    c = (0, s.mj)({
        name: "2026-03-desktop-activity-quest-header",
        kind: "user",
        defaultConfig: { enabled: !1, showSkipButton: !1 },
        variations: { 1: { enabled: !0, showSkipButton: !0 }, 2: { enabled: !0, showSkipButton: !1 } },
    }),
    d = (0, s.mj)({
        name: "2026-03-quest-reload-video-on-obscured",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var _ =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (i[(i.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    i);
let f = (0, s.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    h = (0, s.mj)({
        name: "2026-03-get-decision-hero-ads",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    p = (0, s.mj)({
        name: "2025-03-quests-premium-rewards-holdout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    E = (0, s.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1, multiplier: 1 },
        variations: { 0: { enabled: !1, multiplier: 1 }, 1: { enabled: !0, multiplier: 1.2 } },
    });
function m(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = E.useConfig({ location: e }),
        i = (function (e) {
            let { location: t } = e,
                n = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
                i = null != n && n.isStaff(),
                s = p.useConfig({ location: t });
            return !i && !1 === s.enabled;
        })({ location: e });
    return {
        shouldShowBonusOrbsUX: n.enabled && !i && !t?.isPremiumWithFractionalPremiumOnly(),
        multiplier: n.multiplier,
    };
}
(0, s.mj)({
    name: "2026-03-video-quest-player-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let g = (0, s.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
(0, s.mj)({
    name: "2026-04-mobile-quest-orb-reward-modal-cta-priority",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
}),
    (0, s.mj)({
        name: "2026-03-mobile-quest-home-red-dot-notification",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
let A = (0, s.mj)({
    name: "2026-04-quest-heartbeat-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
