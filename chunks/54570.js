t.d(a, { AU: () => l, kC: () => h, kP: () => i, pr: () => n, zU: () => c });
var s = t(73153);
function l(e, a, t, l, i) {
    s.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: a, maxLength: t, onStart: l, onEnd: i });
}
function i(e, a) {
    s.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: a });
}
function h(e, a) {
    s.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: a });
}
function n() {
    s.h.dispatch({ type: "STOP_SPEAKING" });
}
function c(e) {
    s.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
}
