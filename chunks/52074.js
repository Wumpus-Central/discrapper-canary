n.d(t, { U: () => i });
var r = n(228366),
    a = n(366853);
function i(e) {
    r.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: e }),
        a.A.getSocket().requestChannelInfo(e, ["status", "voice_start_time"]);
}
