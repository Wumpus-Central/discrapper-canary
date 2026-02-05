"use strict";
n.d(t, { R: () => l });
var r = n(162605),
    i = n(403362),
    a = n(709710),
    s = n(601900),
    o = n(652215);
let l = {
    getActiveErrors: () =>
        r.A.getAllActiveStreamKeys()
            .map((e) =>
                r.A.getQuality(e) === o.bFR.BAD ? { type: a.iy.STREAM_BAD_NETWORK_QUALITY, ...(0, s.id)(e) } : null,
            )
            .filter(i.Vq),
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
