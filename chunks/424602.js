n.d(t, {
    aZ: () => o,
    gu: () => i
});
var r = n(818083);
let i = '1211781489931452447',
    a = (0, r.B)({
        kind: 'guild',
        id: '2025-02_filter_wordle_from_voice_channel_launcher',
        label: 'Filter Wordle From Voice Channel Launcher',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Filter Wordle From Voice Channels',
                config: { enabled: !0 }
            }
        ]
    });
function o(e, t) {
    return void 0 !== e && (null == e ? void 0 : e.isGuildVoice()) && a.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
