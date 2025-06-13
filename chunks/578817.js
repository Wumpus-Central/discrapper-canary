n.d(t, { a: () => s });
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-06_jump_to_voice_settings',
    label: 'Jump to Voice Settings',
    defaultConfig: { jumpToVoice: !1 },
    commonTriggerPoint: r.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: 'Jump to voice settings while in call',
            config: { jumpToVoice: !0 }
        }
    ]
});
