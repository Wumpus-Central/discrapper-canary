n.d(t, {
    AU: () => i,
    kC: () => s,
    kP: () => a,
    pr: () => o,
    zU: () => l,
});
var r = n(73153);

function i(e, t, n, i, a) {
    r.h.dispatch({
        type: "SPEAK_TEXT",
        text: e,
        interrupt: t,
        maxLength: n,
        onStart: i,
        onEnd: a,
    });
}

function a(e, t) {
    r.h.dispatch({
        type: "SPEAK_MESSAGE",
        channel: e,
        message: t,
    });
}

function s(e, t) {
    r.h.dispatch({
        type: "SPEAKING_MESSAGE",
        channelId: e,
        messageId: t,
    });
}

function o() {
    r.h.dispatch({
        type: "STOP_SPEAKING",
    });
}

function l(e) {
    r.h.dispatch({
        type: "SET_TTS_SPEECH_RATE",
        speechRate: e,
    });
}
