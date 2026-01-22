n.d(t, {
    V: () => i,
    w: () => a,
});
var r = n(600975),
    l = n(688151);
let i = (0, r.C)({
    kind: "user",
    id: "2024-09_browsechannelbuttonoptin",
    label: "Don't show guild Browse Channels when all channels are already visible",
    defaultConfig: {
        alwaysShowDirectory: !0,
    },
    commonTriggerPoint: l.$G.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Hide Browse Channels when all channels are visible",
            config: {
                alwaysShowDirectory: !1,
            },
        },
    ],
});

function a(e) {
    let { alwaysShowDirectory: t } = i.useExperiment({
        location: "useShowBrowseChannelsExperiment",
    });
    return t || !e;
}
