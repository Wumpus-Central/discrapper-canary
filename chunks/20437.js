a.d(t, {
    Q: () => l,
    S: () => i
});
var n = a(192379);
let l = n.createContext({
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
function i() {
    return n.useContext(l);
}
