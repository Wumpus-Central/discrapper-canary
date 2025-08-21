n.d(t, {
    k: () => s,
    m: () => o,
});
var r = n(818083),
    i = n(984134),
    a = n(987338);
let o = (0, r.B)({
    kind: "user",
    id: "2025-06_golive_tile_resolution_gating",
    label: "GoLive Tile Resolution Gating",
    defaultConfig: {
        enabled: !1,
        scaleOffBitrateFloor: !1,
        adjustMaxBitrateFloor: !1,
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Non-Nitro: Control",
            config: {
                enabled: !1,
                scaleOffBitrateFloor: !1,
                adjustMaxBitrateFloor: !1,
            },
        },
        {
            id: 1,
            label: "Non-Nitro: Adjust bitrate naively",
            config: {
                enabled: !0,
                scaleOffBitrateFloor: !1,
                adjustMaxBitrateFloor: !1,
            },
        },
        {
            id: 2,
            label: "Non-Nitro: Scale with global bitrate floor",
            config: {
                enabled: !0,
                scaleOffBitrateFloor: !0,
                adjustMaxBitrateFloor: !1,
            },
        },
        {
            id: 3,
            label: "Non-Nitro: Use a resolution/fps derived floor for the max bitrate setting",
            config: {
                enabled: !0,
                scaleOffBitrateFloor: !1,
                adjustMaxBitrateFloor: !0,
            },
        },
        {
            id: 4,
            label: "Non-Nitro: Use a max bitrate floor and scale with global bitrate floor",
            config: {
                enabled: !0,
                scaleOffBitrateFloor: !0,
                adjustMaxBitrateFloor: !0,
            },
        },
        {
            id: 5,
            label: "Nitro: Control",
            config: {
                enabled: !1,
                scaleOffBitrateFloor: !1,
                adjustMaxBitrateFloor: !1,
            },
        },
        {
            id: 6,
            label: "Nitro: Adjust bitrate naively",
            config: {
                enabled: !0,
                scaleOffBitrateFloor: !1,
                adjustMaxBitrateFloor: !1,
            },
        },
        {
            id: 7,
            label: "Nitro: Scale with global bitrate floor",
            config: {
                enabled: !0,
                scaleOffBitrateFloor: !0,
                adjustMaxBitrateFloor: !1,
            },
        },
        {
            id: 8,
            label: "Nitro: Use a resolution/fps derived floor for the max bitrate setting",
            config: {
                enabled: !0,
                scaleOffBitrateFloor: !1,
                adjustMaxBitrateFloor: !0,
            },
        },
        {
            id: 9,
            label: "Nitro: Use a max bitrate floor and scale with global bitrate floor",
            config: {
                enabled: !0,
                scaleOffBitrateFloor: !0,
                adjustMaxBitrateFloor: !0,
            },
        },
    ],
});
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
