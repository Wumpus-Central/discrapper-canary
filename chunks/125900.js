n.d(t, {
    J2: () => o,
    V2: () => s,
    dX: () => a,
    g2: () => l
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    id: '2024-11_soundmoji_sending',
    label: 'Send soundmojis',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        showSoundmojiInEmojiPicker: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled w/o emoji section',
            config: {
                enabled: !0,
                showSoundmojiInEmojiPicker: !1
            }
        },
        {
            id: 2,
            label: 'Enabled w/ emoji section',
            config: {
                enabled: !0,
                showSoundmojiInEmojiPicker: !0
            }
        }
    ]
});
function a(e) {
    let { location: t } = e;
    return o.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function s(e) {
    let { location: t } = e;
    return o.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function l(e) {
    let { location: t } = e;
    return o.useExperiment({ location: t }, { autoTrackExposure: !1 }).showSoundmojiInEmojiPicker;
}
