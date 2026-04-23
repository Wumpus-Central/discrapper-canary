n.d(t, { AU: () => l, kC: () => r, kP: () => a, pr: () => s, zU: () => o });
var i = n(73153);
function l(e, t, n, l, a) {
    i.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: n, onStart: l, onEnd: a });
}
function a(e, t) {
    i.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
}
function r(e, t) {
    i.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
}
function s() {
    i.h.dispatch({ type: "STOP_SPEAKING" });
}
function o(e) {
    i.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
}
