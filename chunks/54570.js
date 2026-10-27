e.d(t, { AU: () => l, kC: () => n, kP: () => i, pr: () => c, zU: () => h });
var s = e(73153);
function l(a, t, e, l, i) {
    s.h.dispatch({ type: "SPEAK_TEXT", text: a, interrupt: t, maxLength: e, onStart: l, onEnd: i });
}
function i(a, t) {
    s.h.dispatch({ type: "SPEAK_MESSAGE", channel: a, message: t });
}
function n(a, t) {
    s.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: a, messageId: t });
}
function c() {
    s.h.dispatch({ type: "STOP_SPEAKING" });
}
function h(a) {
    s.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: a });
}
