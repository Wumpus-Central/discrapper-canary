n.d(t, {
    Bo: () => a,
    Ct: () => s,
    LA: () => i,
    NB: () => o,
    cP: () => r
});
var l = n(570140);
function r(e, t, n, r, i) {
    l.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: r,
        onEnd: i
    });
}
function i(e, t) {
    l.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: t
    });
}
function a(e, t) {
    l.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: t
    });
}
function o() {
    l.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function s(e) {
    l.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
