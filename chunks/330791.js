n.d(t, {
    bb: () => r,
    lN: () => o
});
var i = n(818083),
    l = n(987338);
let r = (0, i.B)({
    kind: 'user',
    id: '2024-09_browsechannelbuttonoptin',
    label: "Don't show guild Browse Channels when all channels are already visible",
    defaultConfig: { alwaysShowDirectory: !0 },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Hide Browse Channels when all channels are visible',
            config: { alwaysShowDirectory: !1 }
        }
    ]
});
function o(e) {
    let { alwaysShowDirectory: t } = r.useExperiment({ location: 'useShowBrowseChannelsExperiment' });
    return t || !e;
}
