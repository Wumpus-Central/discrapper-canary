n.d(t, { Z: () => s });
var r = n(818083),
    i = n(171393),
    a = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-05_align_chat_input',
    label: 'bottom-aligned chat input',
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: { alignChatInput: !1 },
    treatments: [
        {
            id: 1,
            label: 'bottom-aligned chat input',
            config: { alignChatInput: !0 }
        }
    ]
});
function s(e) {
    let t = (0, i.Z)('go_back_to_regular_input');
    return o.useExperiment(
        { location: e },
        {
            disable: t,
            autoTrackExposure: !0
        }
    ).alignChatInput;
}
