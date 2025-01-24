e.d(t, {
    v4: function () {
        return i;
    }
});
let r = (0, e(818083).B)({
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
function i(n) {
    let { location: t } = n,
        { enabled: e } = r.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return e;
}
