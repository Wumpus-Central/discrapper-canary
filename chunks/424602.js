n.d(t, {
    _f: () => s,
    aZ: () => d,
    aq: () => a,
    gu: () => c,
    nS: () => o,
    xN: () => l
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
        kind: 'user',
        id: '2024-07_open_platform_app_launcher',
        label: 'Open Platform App Launcher',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable the App Launcher changes for Open Platform',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (0, r.B)({
        kind: 'user',
        id: '2024-08_open_platform_app_launcher_holdout',
        label: 'Open Platform App Launcher Holdout',
        commonTriggerPoint: i.$P.VOICE_CALL,
        defaultConfig: { clickOnHomeActivityOpensAppDetail: !0 },
        treatments: [
            {
                id: 1,
                label: 'clicking activity in voice app launcher -> performs activity action',
                config: { clickOnHomeActivityOpensAppDetail: !1 }
            },
            {
                id: 2,
                label: 'clicking activity in voice app launcher -> opens activity detail page',
                config: { clickOnHomeActivityOpensAppDetail: !0 }
            }
        ]
    }),
    s = (0, r.B)({
        kind: 'user',
        id: '2024-09_user_app_install_education',
        label: 'User App Install Education Experiment',
        defaultConfig: {
            enabled: !1,
            showsTooltip: !1
        },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'show animation on app launcher icon + tooltip when a user app is authorized when in a channel instead of showing auth success modal',
                config: {
                    enabled: !0,
                    showsTooltip: !0
                }
            },
            {
                id: 2,
                label: 'show animation on app launcher icon when a user app is authorized when in a channel instead of showing auth success modal',
                config: {
                    enabled: !0,
                    showsTooltip: !1
                }
            }
        ]
    }),
    l = (0, r.B)({
        kind: 'user',
        id: '2024-10_weighted_sample_activity_shelf',
        label: 'Weighted Sample Activity Shelf',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: i.$P.VOICE_CALL,
        treatments: [
            {
                id: 1,
                label: 'Enable weighted sample for activity shelf',
                config: { enabled: !0 }
            }
        ]
    }),
    c = '1211781489931452447',
    u = (0, r.B)({
        kind: 'guild',
        id: '2025-02_filter_wordle_from_voice_channel_launcher',
        label: 'Filter Wordle From Voice Channel Launcher',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Filter Wordle From Voice Channels',
                config: { enabled: !0 }
            }
        ]
    });
function d(e, t) {
    return void 0 !== e && (null == e ? void 0 : e.isGuildVoice()) && u.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
