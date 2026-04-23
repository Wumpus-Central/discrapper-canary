n.d(t, { AU: () => i, kC: () => a, kP: () => s, pr: () => r, zU: () => o });
var l = n(228366);
function i(e, t, n, i, s) {
    l.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: n, onStart: i, onEnd: s });
}
function s(e, t) {
    l.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
}
function a(e, t) {
    l.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
}
function r() {
    l.h.dispatch({ type: "STOP_SPEAKING" });
}
function o(e) {
    l.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
}
