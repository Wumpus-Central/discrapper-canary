n.d(t, {
    Q: () => o,
    Z: () => a
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-06_emoji_roadblock_nitro_rebrand_experiment',
    label: 'Emoji Roadblock Nitro Rebrand Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User sees control emoji roadblock',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'User sees nitro rebrand emoji roadblock',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t } = e;
    return o.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
