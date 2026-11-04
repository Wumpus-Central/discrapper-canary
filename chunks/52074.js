var a = e(73153),
    c = e(225123),
    p = e(309698);
e.d(
    t,
    {},
    {
        U: function (s) {
            p.A.hasRequestedStatuses(s) ||
                (a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: s }),
                c.A.getSocket().requestChannelInfo(s, ["status", "voice_start_time"]));
        },
    },
);
