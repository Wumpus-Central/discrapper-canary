e.d(s, { U: () => i });
var a = e(228366),
    c = e(454219);
function i(t) {
    a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: t }),
        c.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
}
