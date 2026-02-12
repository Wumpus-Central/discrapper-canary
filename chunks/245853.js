"use strict";
n.d(t, { $4: () => l, LO: () => a, XM: () => i, qd: () => s, uK: () => o });
var r = n(945810);
let i = (0, r.mj)({
    name: "2025-11-quest-home-takeover-client-rollout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var a = (function (e) {
    return (
        (e[(e.LISTEN_FOR_ERROR_ONLY = 0)] = "LISTEN_FOR_ERROR_ONLY"),
        (e[(e.LISTEN_AND_RETRY_LOADING = 1)] = "LISTEN_AND_RETRY_LOADING"),
        e
    );
})({});
let s = (0, r.mj)({
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
