n.d(t, { N: () => o, s: () => r });
var i = n(73153),
    l = n(91242),
    a = n(580954),
    s = n(843002);
function r(e) {
    i.h.dispatch({ type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: e });
}
function o(e) {
    for (let t of l.A.getFramesForSurface((0, s.e)(e))) (0, a.A)().leaveFrame(t.id);
    i.h.dispatch({ type: "VOICE_CHANNEL_APP_CLOSE", channelId: e });
}
