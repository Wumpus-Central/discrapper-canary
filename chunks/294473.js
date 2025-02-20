n.d(t, { Z: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-02_audio_short_circuit',
    label: 'Audio processing short circuiting',
    defaultConfig: {
        muteBeforeProcessing: !1,
        pttBeforeProcessing: !1,
        skipEncode: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Mute before processing',
            config: {
                muteBeforeProcessing: !0,
                pttBeforeProcessing: !1,
                skipEncode: !1
            }
        },
        {
            id: 2,
            label: 'PTT before processing',
            config: {
                muteBeforeProcessing: !1,
                pttBeforeProcessing: !0,
                skipEncode: !1
            }
        },
        {
            id: 3,
            label: 'Mute + PTT before processing',
            config: {
                muteBeforeProcessing: !0,
                pttBeforeProcessing: !0,
                skipEncode: !1
            }
        },
        {
            id: 4,
            label: 'Skip encode',
            config: {
                muteBeforeProcessing: !1,
                pttBeforeProcessing: !1,
                skipEncode: !0
            }
        },
        {
            id: 5,
            label: 'Mute before processing, skip encode',
            config: {
                muteBeforeProcessing: !0,
                pttBeforeProcessing: !1,
                skipEncode: !0
            }
        },
        {
            id: 6,
            label: 'PTT before processing, skip encode',
            config: {
                muteBeforeProcessing: !1,
                pttBeforeProcessing: !0,
                skipEncode: !0
            }
        },
        {
            id: 7,
            label: 'Mute + PTT before processing, skip encode',
            config: {
                muteBeforeProcessing: !0,
                pttBeforeProcessing: !0,
                skipEncode: !0
            }
        }
    ]
});
