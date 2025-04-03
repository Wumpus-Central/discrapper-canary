n.d(t, { P: () => o });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-08-30_open-in-popout',
    label: 'Open Channel in Popout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    return i.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
