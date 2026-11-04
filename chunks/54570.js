var s = e(73153);
e.d(
    t,
    {},
    {
        AU: function (a, t, e, l, i) {
            s.h.dispatch({ type: "SPEAK_TEXT", text: a, interrupt: t, maxLength: e, onStart: l, onEnd: i });
        },
        kC: function (a, t) {
            s.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: a, messageId: t });
        },
        kP: function (a, t) {
            s.h.dispatch({ type: "SPEAK_MESSAGE", channel: a, message: t });
        },
        pr: function () {
            s.h.dispatch({ type: "STOP_SPEAKING" });
        },
        zU: function (a) {
            s.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: a });
        },
    },
);
