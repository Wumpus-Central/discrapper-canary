a.d(t, { AU: () => l, kC: () => c, kP: () => i, pr: () => h, zU: () => n });
var s = a(228366);
function l(e, t, a, l, i) {
    s.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: a, onStart: l, onEnd: i });
}
function i(e, t) {
    s.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
}
function c(e, t) {
    s.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
}
function h() {
    s.h.dispatch({ type: "STOP_SPEAKING" });
}
function n(e) {
    s.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
}
