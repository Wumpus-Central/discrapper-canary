n.d(t, { Z: () => s });
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2025-02-voice_call_buttons_v2',
    label: 'Voice and Video buttons V2',
    defaultConfig: {
        squareButtons: !1,
        coloredIcons: !1
    },
    commonTriggerPoint: r.$P.VOICE_CALL,
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
function s(e) {
    return a.useExperiment(e, { autoTrackExposure: !1 });
}
