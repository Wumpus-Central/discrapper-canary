"use strict";
n.d(t, { S: () => o });
var r = n(652896),
    i = n(487329),
    s = n(601900),
    a = n(652215);
let o = {
    getActiveErrors: (e) => {
        let { activeStreams: t } = e;
        return t
            .filter((e) => e.state === a.XYD.RECONNECTING)
            .map((e) => ({ type: i.iy.STREAM_RECONNECTING, ...(0, s.id)((0, r._z)(e)) }));
    },
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
