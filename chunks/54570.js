var n = s(73153);
s.d(
    t,
    {},
    {
        AU: function (e, t, s, a, i) {
            n.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: s, onStart: a, onEnd: i });
        },
        kC: function (e, t) {
            n.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
        },
        kP: function (e, t) {
            n.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
        },
        pr: function () {
            n.h.dispatch({ type: "STOP_SPEAKING" });
        },
        zU: function (e) {
            n.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
        },
    },
);
