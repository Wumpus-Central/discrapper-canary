l.d(e, { U: () => s });
var a = l(228366),
    C = l(597643),
    i = l(309698);
function s(t) {
    i.A.hasRequestedStatuses(t) ||
        (a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: t }),
        C.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]));
}
