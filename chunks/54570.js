a.d(e, { AU: () => l, kC: () => h, kP: () => i, pr: () => n, zU: () => c });
var s = a(228366);
function l(t, e, a, l, i) {
    s.h.dispatch({ type: "SPEAK_TEXT", text: t, interrupt: e, maxLength: a, onStart: l, onEnd: i });
}
function i(t, e) {
    s.h.dispatch({ type: "SPEAK_MESSAGE", channel: t, message: e });
}
function h(t, e) {
    s.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: t, messageId: e });
}
function n() {
    s.h.dispatch({ type: "STOP_SPEAKING" });
}
function c(t) {
    s.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: t });
}
