"use strict";
n.d(t, { y: () => u });
var r = n(652896),
    i = n(723702),
    s = n(487329),
    a = n(601900);
let o = BigInt(-3821);
function l(e) {
    return (0, i.isMac)() && e === o ? `${e} - your Mac may be low on disk space` : e.toString();
}
let u = {
    getActiveErrors: (e) => {
        let { activeStreams: t } = e;
        return t
            .filter((e) => null != e.errorCode)
            .map((e) => ({
                type: s.iy.SCREENSHARE_OS_ERROR,
                errorMessage: l(e.errorCode),
                ...(0, a.id)((0, r._z)(e)),
            }));
    },
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
