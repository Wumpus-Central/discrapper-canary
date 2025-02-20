t.d(s, {
    Z: () => a,
    u: () => r
});
let n = (0, t(818083).B)({
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
function r(e) {
    return !!n.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
let a = n;
