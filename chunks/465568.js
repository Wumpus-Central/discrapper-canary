"use strict";
n.d(t, { D: () => o });
var r = n(652896),
    i = n(709710),
    a = n(601900),
    s = n(652215);
let o = {
    getActiveErrors: (e) => {
        let { activeStreams: t } = e;
        return t
            .filter((e) => e.state === s.XYD.FAILED && null == e.errorCode)
            .map((e) => ({ type: i.iy.STREAM_FAILED_TO_START, ...(0, a.id)((0, r._z)(e)) }));
    },
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
