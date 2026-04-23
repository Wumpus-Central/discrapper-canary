n.d(t, { U: () => a });
var r = n(73153),
    i = n(142120);
function a(e) {
    r.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: e }),
        i.A.getSocket().requestChannelInfo(e, ["status", "voice_start_time"]);
}
