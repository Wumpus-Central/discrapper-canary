"use strict";
n.d(t, { a: () => a });
var r = n(311907),
    i = n(734057),
    s = n(309010);
function a() {
    return (
        null != (0, r.bG)([i.A, s.A], () => i.A.getChannel(s.A.getChannelId())) &&
        !!(function () {
            try {
                return CSS.supports("selector(:has(*))");
            } catch (e) {
                return !1;
            }
        })()
    );
}
