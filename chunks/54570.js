"use strict";
n.d(t, { AU: () => r, kC: () => a, kP: () => s, pr: () => o, zU: () => l });
var i = n(228366);
function r(e, t, n, r, s) {
    i.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: n, onStart: r, onEnd: s });
}
function s(e, t) {
    i.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
}
function a(e, t) {
    i.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
}
function o() {
    i.h.dispatch({ type: "STOP_SPEAKING" });
}
function l(e) {
    i.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
}
