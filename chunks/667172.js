n.d(t, { v4: () => l });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-01_inappropriate_conversations_new_defaults',
    label: 'Inappropriate Conversation Warning Default On',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Inappropriate Conversation Warnings On',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { location: t } = e,
        { enabled: n } = i.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return n;
}
