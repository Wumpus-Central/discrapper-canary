n.d(t, {
    Z: () => r,
    u: () => a
});
let s = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_email_change_reasoning_buttons_free_text_response',
    label: 'Email Change Reasoning Buttons Free Text Response',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Display a text area when the user selects "Something else"',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    return !!s.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
let r = s;
