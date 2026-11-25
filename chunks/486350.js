var l = n(73153),
    i = n(820672);
n.d(
    t,
    {},
    {
        p: function (e) {
            (l.h.dispatch({ type: "STREAM_REQUEST_COOLDOWN_START", userId: e }),
                setTimeout(() => {
                    l.h.dispatch({ type: "STREAM_REQUEST_COOLDOWN_END", userId: e });
                }, i.e));
        },
        q: function (e) {
            l.h.dispatch({ type: "STREAM_REQUEST_REMINDER_DISMISS", messageId: e });
        },
    },
);
