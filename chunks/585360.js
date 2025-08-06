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
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: o.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Non-Nitro control",
            config: { enabled: !1 },
        },
        {
            id: 1,
            label: "Tile size based wants enabled only for non-nitro users",
            config: { enabled: !0 },
        },
        {
            id: 2,
            label: "Nitro control",
            config: { enabled: !1 },
        },
        {
            id: 3,
            label: "Tile size based wants enabled only for Nitro subscribers",
            config: { enabled: !0 },
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
