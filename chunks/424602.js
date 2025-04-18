n.d(t, {
    PM: () => c,
    _f: () => a,
    aZ: () => l,
    gu: () => o
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
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
    o = '1211781489931452447',
    s = (0, r.B)({
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
function l(e, t) {
    return void 0 !== e && (null == e ? void 0 : e.isGuildVoice()) && s.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
let c = (0, r.B)({
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
