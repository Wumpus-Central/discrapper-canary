n.d(t, { W: () => l, Z: () => r });
var i = n(73153);
function r(e, t, n, r) {
    i.h.dispatch({ type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: e, mediaContext: n, userId: t, streamKey: r });
}
function l(e, t) {
    i.h.dispatch({ type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: e, userId: t });
}
