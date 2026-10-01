e.d(s, { U: () => i });
var a = e(228366),
    c = e(597643),
    h = e(309698);
function i(t) {
    h.A.hasRequestedStatuses(t) ||
        (a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: t }),
        c.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]));
}
