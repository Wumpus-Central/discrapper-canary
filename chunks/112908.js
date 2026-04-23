"use strict";
n.d(t, { R: () => l });
var r = n(162605),
    i = n(403362),
    s = n(487329),
    a = n(601900),
    o = n(652215);
let l = {
    getActiveErrors: () =>
        r.A.getAllActiveStreamKeys()
            .map((e) =>
                r.A.getQuality(e) === o.bFR.BAD ? { type: s.iy.STREAM_BAD_NETWORK_QUALITY, ...(0, a.id)(e) } : null,
            )
            .filter(i.Vq),
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
