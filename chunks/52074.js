e.d(t, { U: () => h });
var a = e(73153),
    c = e(595528),
    p = e(309698);
function h(s) {
    p.A.hasRequestedStatuses(s) ||
        (a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: s }),
        c.A.getSocket().requestChannelInfo(s, ["status", "voice_start_time"]));
}
