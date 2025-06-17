n.d(t, {
    Bo: () => c,
    Ct: () => a,
    LA: () => i,
    NB: () => o,
    cP: () => l
});
var r = n(570140);
function l(e, t, n, l, i) {
    r.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: l,
        onEnd: i
    });
}
function i(e, t) {
    r.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: t
    });
}
function c(e, t) {
    r.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: t
    });
}
function o() {
    r.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function a(e) {
    r.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
