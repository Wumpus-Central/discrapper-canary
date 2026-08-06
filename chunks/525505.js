n.d(t, { A: () => c, u: () => o });
var i = n(17928),
    r = n(280450),
    l = n(487329),
    s = n(161518),
    a = n(731854);
function o(e, t) {
    return (0, i.bG)([s.A, r.default], () => {
        for (let n of r.default.getId() === t
            ? [
                  ...(e === a.x.STREAM ? s.A.getActiveErrorsOfType(l.iy.SCREENSHARE_OS_ERROR) : []),
                  ...s.A.getActiveErrorsOfType(l.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT),
                  ...s.A.getActiveErrorsOfType(l.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM),
              ]
            : [
                  ...s.A.getActiveErrorsOfType(l.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT),
                  ...s.A.getActiveErrorsOfType(l.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM),
              ])
            if (n.mediaContext === e && n.userId === t) return n;
    });
}
function c(e, t) {
    return o(e, t)?.type;
}
