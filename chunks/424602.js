n.d(t, {
    PM: () => u,
    _f: () => a,
    aZ: () => c,
    aq: () => o,
    gu: () => s
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
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
    a = (0, r.B)({
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
    s = '1211781489931452447',
    l = (0, r.B)({
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
function c(e, t) {
    return void 0 !== e && (null == e ? void 0 : e.isGuildVoice()) && l.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
let u = (0, r.B)({
    kind: 'user',
    id: '2025-03_app_launcher_pep_button_label',
    label: 'Change PEP Button Label To Play',
    defaultConfig: {
        enabled: !1,
        altLayout: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Change PEP Button Label To Play',
            config: {
                enabled: !0,
                altLayout: !1
            }
        },
        {
            id: 2,
            label: 'Change PEP Button Label To Play With Alt Layout',
            config: {
                enabled: !0,
                altLayout: !0
            }
        }
    ]
});
