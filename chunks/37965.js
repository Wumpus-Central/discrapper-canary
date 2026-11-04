var i = n(73153);
n.d(
    t,
    {},
    {
        W: function (e, t) {
            i.h.dispatch({ type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: e, userId: t });
        },
        Z: function (e, t, n, r) {
            i.h.dispatch({
                type: "VIDEO_STREAM_READY_TIMEOUT",
                videoStreamId: e,
                mediaContext: n,
                userId: t,
                streamKey: r,
            });
        },
    },
);
