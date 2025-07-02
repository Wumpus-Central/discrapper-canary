n.d(t, {
    k: () => s,
    m: () => o
});
var r = n(818083),
    i = n(984134),
    a = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-06_golive_tile_resolution_gating',
    label: 'GoLive Tile Resolution Gating',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Non-Nitro control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Tile size based wants enabled only for non-nitro users',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'Nitro control',
            config: { enabled: !1 }
        },
        {
            id: 3,
            label: 'Tile size based wants enabled only for Nitro subscribers',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
