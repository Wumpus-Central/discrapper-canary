n.d(t, {
    Bo: () => o,
    Ct: () => s,
    LA: () => a,
    NB: () => l,
    cP: () => i
});
var r = n(570140);
function i(e, t, n, i, a) {
    r.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: i,
        onEnd: a
    });
}
function a(e, t) {
    r.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: t
    });
}
function o(e, t) {
    r.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: t
    });
}
function l() {
    r.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function s(e) {
    r.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
