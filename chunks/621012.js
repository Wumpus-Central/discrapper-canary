r.d(n, {
    m: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-10_tile_resolution_gating',
    label: 'Tile Resolution Gating',
    defaultConfig: { enabledSingle: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Tile size based wants enabled only for 1:1 videos (rollout)',
            config: { enabledSingle: !0 }
        },
        {
            id: 2,
            label: 'Tile size based wants enabled only for 1:1 videos (new stats slice to compare against control)',
            config: { enabledSingle: !0 }
        }
    ]
});
