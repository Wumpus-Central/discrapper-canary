C.d(e, { U: () => c });
var l = C(228366),
    a = C(597643),
    s = C(309698);
function c(t) {
    s.A.hasRequestedStatuses(t) ||
        (l.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: t }),
        a.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]));
}
