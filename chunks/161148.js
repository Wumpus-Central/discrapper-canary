"use strict";
n.d(t, { H: () => a });
var r = n(961350),
    i = n(803301),
    s = n(487329);
let a = {
    getActiveErrors: () =>
        Object.values(i.A.getTimedoutVideos())
            .filter((e) => {
                let { userId: t, videoStreamId: n } = e;
                return r.default.getId() === t && null != n;
            })
            .map((e) => ({ type: s.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT, ...e })),
    makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
};
