var h = t(73153);
t.d(
    s,
    {},
    {
        A: {
            startTyping(p) {
                h.h.dispatch({ type: "TYPING_START_LOCAL", channelId: p });
            },
            stopTyping(p) {
                h.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: p });
            },
        },
    },
);
