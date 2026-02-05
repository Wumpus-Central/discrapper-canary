"use strict";
n.d(t, { y: () => s });
var r = n(652896),
    i = n(709710),
    a = n(601900);
let s = {
    getActiveErrors: (e) => {
        let { activeStreams: t } = e;
        return t
            .filter((e) => null != e.errorCode)
            .map((e) => ({
                type: i.iy.SCREENSHARE_OS_ERROR,
                errorMessage: e.errorCode.toString(),
                ...(0, a.id)((0, r._z)(e)),
            }));
    },
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
