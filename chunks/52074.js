var a = n(73153),
    i = n(225123),
    l = n(309698);
n.d(
    e,
    {},
    {
        U: function (t) {
            l.A.hasRequestedStatuses(t) ||
                (a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: t }),
                i.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]));
        },
    },
);
