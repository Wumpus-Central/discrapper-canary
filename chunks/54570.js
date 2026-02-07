i.d(t, { AU: () => a, kC: () => l, kP: () => r, pr: () => s, zU: () => o });
var n = i(73153);
function a(e, t, i, a, r) {
    n.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: i, onStart: a, onEnd: r });
}
function r(e, t) {
    n.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
}
function l(e, t) {
    n.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
}
function s() {
    n.h.dispatch({ type: "STOP_SPEAKING" });
}
function o(e) {
    n.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
}
