"use strict";
n.d(t, { Iq: () => a, dF: () => o, jS: () => u, sn: () => i, uK: () => s, wK: () => l });
var r = n(945810);
let i = (0, r.mj)({
        name: "2025-11-quest-home-takeover-client-rollout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    s = (0, r.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    a = (0, r.mj)({
        name: "2026-02-fetch-quest-home-takeover-on-connection-open",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var o = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.NEXT_TO_PRIMARY_CTA = 1)] = "NEXT_TO_PRIMARY_CTA"),
        (e[(e.NEXT_TO_CONTEXT_MENU_CTA = 2)] = "NEXT_TO_CONTEXT_MENU_CTA"),
        e
    );
})({});
let l = (0, r.mj)({
        name: "2026-02-quest-card-learn-more-cta",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 2: { enabled: !0, variant: 1 }, 3: { enabled: !0, variant: 2 } },
    }),
    u = (0, r.mj)({
        name: "2026-02-new-video-quest-progress-bar-styling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
