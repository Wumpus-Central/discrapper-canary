n.d(t, {
    bb: () => l,
    lN: () => o
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2024-09_browsechannelbuttonoptin',
    label: "Don't show guild Browse Channels when all channels are already visible",
    defaultConfig: { alwaysShowDirectory: !0 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Hide Browse Channels when all channels are visible',
            config: { alwaysShowDirectory: !1 }
        }
    ]
});
function o(e) {
    let { alwaysShowDirectory: t } = l.useExperiment({ location: 'useShowBrowseChannelsExperiment' });
    return t || !e;
}
