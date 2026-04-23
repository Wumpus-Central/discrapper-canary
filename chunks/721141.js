"use strict";
n.d(t, { y: () => l });
var r = n(652896),
    i = n(723702),
    s = n(487329),
    a = n(601900);
let o = BigInt(-3821),
    l = {
        getActiveErrors: (e) => {
            let { activeStreams: t } = e;
            return t
                .filter((e) => null != e.errorCode)
                .map((e) => {
                    var t;
                    return {
                        type: s.iy.SCREENSHARE_OS_ERROR,
                        errorMessage:
                            ((t = e.errorCode),
                            (0, i.isMac)() && t === o ? `${t} - your Mac may be low on disk space` : t.toString()),
                        ...(0, a.id)((0, r._z)(e)),
                    };
                });
        },
        makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
    };
