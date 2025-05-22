n.d(t, { Z: () => i });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_priority_vad',
    label: 'Priority PTT keybind in VAD mode',
    defaultConfig: {
        onPTTKeybind: !1,
        separateKeybind: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Priority PTT keybind affects VAD as well',
            config: {
                onPTTKeybind: !0,
                separateKeybind: !1
            }
        },
        {
            id: 2,
            label: 'Separate keybind for priority VAD',
            config: {
                onPTTKeybind: !1,
                separateKeybind: !0
            }
        }
    ]
});
