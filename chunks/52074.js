n.d(t, { U: () => l });
var a = n(228366),
    i = n(366853);
function l(e) {
    a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: e }),
        i.A.getSocket().requestChannelInfo(e, ["status", "voice_start_time"]);
}
