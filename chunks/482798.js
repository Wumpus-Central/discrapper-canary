n.d(t, { C: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_friends_popout',
    label: 'Friends Popout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t } = e;
    return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
}
