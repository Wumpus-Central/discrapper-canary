"use strict";
s.d(t, { AU: () => i, kC: () => a, kP: () => r, pr: () => l, zU: () => c });
var n = s(73153);
function i(e, t, s, i, r) {
    n.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: s, onStart: i, onEnd: r });
}
function r(e, t) {
    n.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
}
function a(e, t) {
    n.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
}
function l() {
    n.h.dispatch({ type: "STOP_SPEAKING" });
}
function c(e) {
    n.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
}
