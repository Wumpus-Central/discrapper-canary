n.d(t, {
    L5: () => a,
    LO: () => s,
    RJ: () => u,
    XM: () => o,
    qd: () => l,
    uK: () => c,
});
var r = n(945810);
let i = (0, r.mj)({
        name: "2025-11-quest-home-suggested-sort-rotation",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            variant: null,
        },
        variations: {
            0: {
                enabled: !1,
                variant: null,
            },
            1: {
                enabled: !0,
                variant: 0,
            },
            2: {
                enabled: !0,
                variant: 1,
            },
        },
    }),
    a = (e) => {
        let { enabled: t, variant: n } = i.getConfig({
            location: e,
        });
        return 0 === n
            ? {
                  enabled: t,
                  minutes: 20,
              }
            : 1 === n
              ? {
                    enabled: t,
                    minutes: 75,
                }
              : {
                    enabled: t,
                    minutes: 0,
                };
    },
    o = (0, r.mj)({
        name: "2025-11-quest-home-takeover-client-rollout",
        kind: "user",
        defaultConfig: {
            enabled: !1,
        },
        variations: {
            1: {
                enabled: !0,
            },
        },
    });
var s = (function (e) {
    return (
        (e[(e.LISTEN_FOR_ERROR_ONLY = 0)] = "LISTEN_FOR_ERROR_ONLY"),
        (e[(e.LISTEN_AND_RETRY_LOADING = 1)] = "LISTEN_AND_RETRY_LOADING"),
        e
    );
})({});
let l = (0, r.mj)({
        name: "2025-11-quest-bar-listen-for-source-error",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            variant: null,
        },
        variations: {
            0: {
                enabled: !1,
                variant: null,
            },
            1: {
                enabled: !0,
                variant: 0,
            },
            2: {
                enabled: !0,
                variant: 1,
            },
        },
    }),
    c = (0, r.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: {
            enabled: !1,
        },
        variations: {
            1: {
                enabled: !0,
            },
        },
    }),
    u = (0, r.mj)({
        name: "2026-01-business-profile-linking",
        kind: "user",
        defaultConfig: {
            enabled: !1,
        },
        variations: {
            0: {
                enabled: !1,
            },
            1: {
                enabled: !0,
            },
        },
    });
