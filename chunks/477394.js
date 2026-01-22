n.d(t, { a: () => i });
var r = n(600975);
let i = (0, n(945810).mj)({
    name: "2025-08-view-roblox-subgames-in-rich-presence",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        showPlayButton: !1,
        alternativeTitle: !1,
    },
    variations: {
        0: {
            enabled: !1,
            showPlayButton: !1,
            alternativeTitle: !1,
        },
        1: {
            enabled: !0,
            showPlayButton: !1,
            alternativeTitle: !1,
        },
        2: {
            enabled: !0,
            showPlayButton: !0,
            alternativeTitle: !1,
        },
        3: {
            enabled: !0,
            showPlayButton: !1,
            alternativeTitle: !0,
        },
        4: {
            enabled: !0,
            showPlayButton: !0,
            alternativeTitle: !0,
        },
    },
});
(0, r.C)({
    kind: "user",
    id: "2025-08_roblox_subgames_rollout",
    label: "Roblox subgames fetch rollout",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enables fetching roblox subgame application info",
            config: { enabled: !0 },
        },
    ],
});
