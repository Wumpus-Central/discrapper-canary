r.d(n, {
    J2: function () {
        return s;
    },
    V2: function () {
        return l;
    },
    dX: function () {
        return o;
    },
    g2: function () {
        return u;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    id: '2024-11_soundmoji_sending',
    label: 'Send soundmojis',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        showSoundmojiInEmojiPicker: !1
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
function o(e) {
    let { location: n } = e;
    return s.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}
function l(e) {
    let { location: n } = e;
    return s.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
}
function u(e) {
    let { location: n } = e;
    return s.useExperiment({ location: n }, { autoTrackExposure: !1 }).showSoundmojiInEmojiPicker;
}
