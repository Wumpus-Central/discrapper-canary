n.d(t, { Z: () => a });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-02-voice_call_buttons_v2',
    label: 'Voice and Video buttons V2',
    defaultConfig: {
        squareButtons: !1,
        coloredIcons: !1
    },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: 'Grouped buttons with green active state',
            config: {
                squareButtons: !0,
                coloredIcons: !1
            }
        },
        {
            id: 2,
            label: 'Grouped buttons with green icons',
            config: {
                squareButtons: !0,
                coloredIcons: !0
            }
        }
    ]
});
function a(e) {
    return o.useExperiment(e, { autoTrackExposure: !1 });
}
