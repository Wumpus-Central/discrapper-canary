"use strict";
n.d(t, { A: () => d, u: () => l });
var i = n(17928),
    r = n(495544),
    s = n(487329),
    a = n(161518),
    o = n(731854);
function l(e, t) {
    return (0, i.bG)([a.A, r.default], () => {
        for (let n of r.default.getId() === t
            ? [
                  ...(e === o.x.STREAM ? a.A.getActiveErrorsOfType(s.iy.SCREENSHARE_OS_ERROR) : []),
                  ...a.A.getActiveErrorsOfType(s.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT),
                  ...a.A.getActiveErrorsOfType(s.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM),
              ]
            : [
                  ...a.A.getActiveErrorsOfType(s.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT),
                  ...a.A.getActiveErrorsOfType(s.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM),
              ])
            if (n.mediaContext === e && n.userId === t) return n;
    });
}
function d(e, t) {
    return l(e, t)?.type;
}
