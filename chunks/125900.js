n.d(t, {
    J2: () => a,
    V2: () => o,
    dX: () => s,
    g2: () => l
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    id: '2024-11_soundmoji_sending',
    label: 'Send soundmojis',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        showSoundmojiInEmojiPicker: !1
    },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
function s(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function o(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function l(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !1 }).showSoundmojiInEmojiPicker;
}
