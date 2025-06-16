n.d(t, {
    Bo: () => a,
    Ct: () => o,
    LA: () => l,
    NB: () => s,
    cP: () => i
});
var r = n(570140);
function i(e, t, n, i, l) {
    r.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: i,
        onEnd: l
    });
}
function l(e, t) {
    r.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: t
    });
}
function a(e, t) {
    r.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: t
    });
}
function s() {
    r.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function o(e) {
    r.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
