n.d(t, { $: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-02_hide_member_list_activities',
    label: 'Hide member list activities',
    defaultConfig: { hideActivities: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled (hide activities)',
            config: { hideActivities: !0 }
        }
    ]
});
function i(e) {
    return r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }).hideActivities;
}
