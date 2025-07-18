n.d(t, {
    Bo: () => c,
    Ct: () => o,
    LA: () => i,
    NB: () => a,
    cP: () => r
});
var s = n(570140);
function r(e, t, n, r, i) {
    s.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: r,
        onEnd: i
    });
}
function i(e, t) {
    s.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: t
    });
}
function c(e, t) {
    s.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: t
    });
}
function a() {
    s.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function o(e) {
    s.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
