"use strict";
n.d(t, { A: () => d, u: () => o });
var i = n(17928),
    r = n(280450),
    a = n(487329),
    s = n(161518),
    l = n(731854);
function o(e, t) {
    return (0, i.bG)([s.A, r.default], () => {
        for (let n of r.default.getId() === t
            ? [
                  ...(e === l.x.STREAM ? s.A.getActiveErrorsOfType(a.iy.SCREENSHARE_OS_ERROR) : []),
                  ...s.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT),
                  ...s.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM),
              ]
            : [
                  ...s.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT),
                  ...s.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM),
              ])
            if (n.mediaContext === e && n.userId === t) return n;
    });
}
function d(e, t) {
    return o(e, t)?.type;
}
