n.d(t, {
    Q: () => a,
    S: () => l
});
var r = n(192379);
let a = r.createContext({
    videoPlayerRef: { current: null },
    applicationAudioEnabled: !0,
    setApplicationAudioEnabled: () => {},
    voiceAudioEnabled: !0,
    setVoiceAudioEnabled: () => {},
    cropData: {
        start: 0,
        end: 0
    },
    setCropData: () => {}
});
function l() {
    return r.useContext(a);
}
