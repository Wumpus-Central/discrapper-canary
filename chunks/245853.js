"use strict";
n.d(t, { Iq: () => l, LO: () => s, dF: () => u, qd: () => a, sn: () => i, uK: () => o, wK: () => c });
var r = n(945810);
let i = (0, r.mj)({
    name: "2025-11-quest-home-takeover-client-rollout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var s = (function (e) {
    return (
        (e[(e.LISTEN_FOR_ERROR_ONLY = 0)] = "LISTEN_FOR_ERROR_ONLY"),
        (e[(e.LISTEN_AND_RETRY_LOADING = 1)] = "LISTEN_AND_RETRY_LOADING"),
        e
    );
})({});
let a = (0, r.mj)({
        name: "2025-11-quest-bar-listen-for-source-error",
        kind: "user",
        defaultConfig: { enabled: !1, variant: null },
        variations: {
            0: { enabled: !1, variant: null },
            1: { enabled: !0, variant: 0 },
            2: { enabled: !0, variant: 1 },
        },
    }),
    o = (0, r.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l = (0, r.mj)({
        name: "2026-02-fetch-quest-home-takeover-on-connection-open",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var u = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.NEXT_TO_PRIMARY_CTA = 1)] = "NEXT_TO_PRIMARY_CTA"),
        (e[(e.NEXT_TO_CONTEXT_MENU_CTA = 2)] = "NEXT_TO_CONTEXT_MENU_CTA"),
        e
    );
})({});
let c = (0, r.mj)({
    name: "2026-02-quest-card-learn-more-cta",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 2: { enabled: !0, variant: 1 }, 3: { enabled: !0, variant: 2 } },
});
