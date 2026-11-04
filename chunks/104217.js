var i = e(73153);
e.d(
    n,
    {},
    {
        A: {
            disableFalsePositiveButton: function (t, n) {
                i.h.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId: n, channelId: t });
            },
        },
    },
);
