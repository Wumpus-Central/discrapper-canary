n.d(t, { W: () => u, s: () => d });
var i = n(691540),
    l = n(857250),
    a = n(97483),
    s = n(228366),
    r = n(308528),
    o = n(389036),
    c = n(375708);
function d(e) {
    s.h.dispatch({ type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: e });
}
async function u(e, t) {
    try {
        await r.A.updateChannel(e, { application_id: t }, "Voice Channel App Picker");
    } catch {
        (0, i.P0)((0, l.o)(c.intl.string(o.default.lcgR82), a.Ck.FAILURE));
    }
    s.h.dispatch({ type: "VOICE_CHANNEL_APP_SURFACE_SHOW", channelId: e, applicationId: t });
}
