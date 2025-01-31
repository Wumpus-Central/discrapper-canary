n.d(t, {
    Bo: () => r,
    Ct: () => o,
    LA: () => a,
    NB: () => s,
    cP: () => l
});
var i = n(570140);
function l(e, t, n, l, a) {
    i.Z.dispatch({
        type: 'SPEAK_TEXT',
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: l,
        onEnd: a
    });
}
function a(e, t) {
    i.Z.dispatch({
        type: 'SPEAK_MESSAGE',
        channel: e,
        message: t
    });
}
function r(e, t) {
    i.Z.dispatch({
        type: 'SPEAKING_MESSAGE',
        channelId: e,
        messageId: t
    });
}
function s() {
    i.Z.dispatch({ type: 'STOP_SPEAKING' });
}
function o(e) {
    i.Z.dispatch({
        type: 'SET_TTS_SPEECH_RATE',
        speechRate: e
    });
}
