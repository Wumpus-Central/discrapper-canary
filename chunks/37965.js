n.d(t, {
    W: () => a,
    Z: () => i,
});
var r = n(73153);
function i(e, t, n, i) {
    r.h.dispatch({
        type: "VIDEO_STREAM_READY_TIMEOUT",
        videoStreamId: e,
        mediaContext: n,
        userId: t,
        streamKey: i,
    });
}
function a(e, t) {
    r.h.dispatch({
        type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT",
        mediaContext: e,
        userId: t,
    });
}
