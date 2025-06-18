n.d(t, {
    Bo: () => l,
    Ct: () => s,
    LA: () => c,
    NB: () => o,
    cP: () => i
});
var r = n(570140);
function i(e, t, n, i, c) {
    r.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: i,
        onEnd: c
    });
}
function c(e, t) {
    r.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: t
    });
}
function l(e, t) {
    r.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: t
    });
}
function o() {
    r.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function s(e) {
    r.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
