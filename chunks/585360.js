n.d(t, {
    k: () => s,
    m: () => a,
});
var r = n(818083),
    i = n(984134),
    o = n(987338);
let a = (0, r.B)({
    kind: "user",
    id: "2025-06_golive_tile_resolution_gating",
    label: "GoLive Tile Resolution Gating",
    defaultConfig: {
        enabled: !1,
        adjustResolution: !1,
    },
    commonTriggerPoint: o.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Non-Nitro control",
            config: {
                enabled: !1,
                adjustResolution: !1,
            },
        },
        {
            id: 1,
            label: "Tile size based wants enabled only for non-nitro users",
            config: {
                enabled: !0,
                adjustResolution: !0,
            },
        },
        {
            id: 2,
            label: "Nitro control",
            config: {
                enabled: !1,
                adjustResolution: !1,
            },
        },
        {
            id: 3,
            label: "Tile size based wants enabled only for Nitro subscribers",
            config: {
                enabled: !0,
                adjustResolution: !0,
            },
        },
        {
            id: 4,
            label: "Tile size based bitrate adjustments for non-nitro users",
            config: {
                enabled: !0,
                adjustResolution: !1,
            },
        },
        {
            id: 5,
            label: "Tile size based bitrate adjustments for Nitro users",
            config: {
                enabled: !0,
                adjustResolution: !1,
            },
        },
    ],
});
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
