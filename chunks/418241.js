i.d(e, { N: () => s, s: () => a });
var n = i(73153),
    p = i(91242),
    r = i(457827),
    c = i(843002);
function a(t) {
    n.h.dispatch({ type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: t });
}
function s(t) {
    for (let e of p.A.getFramesForSurface((0, c.e)(t))) (0, r.r)(e.id);
    n.h.dispatch({ type: "VOICE_CHANNEL_APP_CLOSE", channelId: t });
}
