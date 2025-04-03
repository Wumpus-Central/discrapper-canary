n.d(t, { N: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2023-01_clear_all_message_requests',
    label: 'Safety Experience Reject All Message Requests',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i() {
    return r.useExperiment({ location: 'c10bec_1' }, { autoTrackExposure: !0 }).enabled;
}
