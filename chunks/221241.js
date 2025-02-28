n.d(t, {
    L: () => o,
    Z: () => a
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-02_voice_call_buttons_v2',
    label: 'Voice and Video buttons V2',
    defaultConfig: {
        squareButtonsEnabled: !1,
        coloredIconsEnabled: !1,
        simplifiedSettingsEnabled: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Grouped buttons with green active state',
            config: {
                squareButtonsEnabled: !0,
                coloredIconsEnabled: !1,
                simplifiedSettingsEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Grouped green buttons with simplified settings',
            config: {
                squareButtonsEnabled: !0,
                coloredIconsEnabled: !1,
                simplifiedSettingsEnabled: !0
            }
        },
        {
            id: 3,
            label: 'Grouped tinted buttons',
            config: {
                squareButtonsEnabled: !0,
                coloredIconsEnabled: !0,
                simplifiedSettingsEnabled: !1
            }
        },
        {
            id: 4,
            label: 'Grouped tinted buttons with simplified settings',
            config: {
                squareButtonsEnabled: !0,
                coloredIconsEnabled: !0,
                simplifiedSettingsEnabled: !0
            }
        }
    ]
});
function a(e) {
    return o.useExperiment(e, { autoTrackExposure: !1 });
}
