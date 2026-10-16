a.d(t, { AU: () => l, kC: () => n, kP: () => i, pr: () => h, zU: () => c });
var s = a(73153);
function l(e, t, a, l, i) {
    s.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: a, onStart: l, onEnd: i });
}
function i(e, t) {
    s.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
}
function n(e, t) {
    s.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
}
function h() {
    s.h.dispatch({ type: "STOP_SPEAKING" });
}
function c(e) {
    s.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
}
