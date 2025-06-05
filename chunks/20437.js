n.d(t, {
    Q: () => r,
    S: () => l
});
var a = n(73800);
let r = a.createContext({
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
    return a.useContext(r);
}
