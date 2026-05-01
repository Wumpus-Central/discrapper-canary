a.d(e, { U: () => c });
var l = a(228366),
    s = a(446458);
function c(t) {
    l.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: t }),
        s.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
}
