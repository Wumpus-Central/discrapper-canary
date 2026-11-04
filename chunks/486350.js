var h = E(73153),
    i = E(820672);
E.d(
    t,
    {},
    {
        p: function (p) {
            (h.h.dispatch({ type: "STREAM_REQUEST_COOLDOWN_START", userId: p }),
                setTimeout(() => {
                    h.h.dispatch({ type: "STREAM_REQUEST_COOLDOWN_END", userId: p });
                }, i.e));
        },
        q: function (p) {
            h.h.dispatch({ type: "STREAM_REQUEST_REMINDER_DISMISS", messageId: p });
        },
    },
);
