t.d(n, {
    S: function () {
        return i;
    }
});
let l = (0, t(818083).B)({
    kind: 'user',
    id: '2025-01_updated_activity_privacy_controls',
    label: 'Enables the rtc popout and updated settings page',
    defaultConfig: {
        rtcPopoutEnabled: !1,
        updatedSettingsPageEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'RTC Popout',
            config: {
                rtcPopoutEnabled: !0,
                updatedSettingsPageEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Updated Settings Page',
            config: {
                rtcPopoutEnabled: !1,
                updatedSettingsPageEnabled: !0
            }
        },
        {
            id: 3,
            label: 'Both Popout and Settings Page',
            config: {
                rtcPopoutEnabled: !0,
                updatedSettingsPageEnabled: !0
            }
        }
    ]
});
function i(e) {
    return l.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
