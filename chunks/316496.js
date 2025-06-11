n.d(t, { D: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_activity_sharing_popout_per_server',
    label: 'Activity Sharing Popout Per Server',
    defaultConfig: {
        isEnabled: !1,
        showActivitySharingIndicatorWhenSharing: !1,
        showUpdatedSettingsPage: !1,
        showLinkToSettings: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Popout not available when already sharing',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                showUpdatedSettingsPage: !0,
                showLinkToSettings: !0
            }
        },
        {
            id: 2,
            label: 'Popout always available',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !0,
                showUpdatedSettingsPage: !0,
                showLinkToSettings: !0
            }
        },
        {
            id: 3,
            label: 'Updated popout only',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                showUpdatedSettingsPage: !1,
                showLinkToSettings: !1
            }
        }
    ]
});
function r(e) {
    return i.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
