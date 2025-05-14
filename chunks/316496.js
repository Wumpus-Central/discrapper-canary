n.d(t, { D: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_activity_sharing_popout_per_server',
    label: 'Activity Sharing Popout Per Server',
    defaultConfig: {
        isEnabled: !1,
        showActivitySharingIndicatorWhenSharing: !1,
        autoOpenPopout: !1,
        settingsPageEnabled: !1,
        perServerControlsEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Manually opened RTC popout only when not sharing',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                autoOpenPopout: !1,
                settingsPageEnabled: !1,
                perServerControlsEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Manually opened RTC popout only when not sharing with settings page',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                autoOpenPopout: !1,
                settingsPageEnabled: !0,
                perServerControlsEnabled: !1
            }
        },
        {
            id: 3,
            label: 'Manually opened RTC popout with settings page',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !0,
                autoOpenPopout: !1,
                settingsPageEnabled: !0,
                perServerControlsEnabled: !1
            }
        },
        {
            id: 4,
            label: 'Auto-open RTC popout when not sharing with settings page',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                autoOpenPopout: !0,
                settingsPageEnabled: !0,
                perServerControlsEnabled: !1
            }
        },
        {
            id: 5,
            label: 'Auto-open RTC popout when not sharing with settings page and per server controls',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                autoOpenPopout: !0,
                settingsPageEnabled: !0,
                perServerControlsEnabled: !0
            }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
