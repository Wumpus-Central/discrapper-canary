"use strict";
n.d(t, { ES: () => o, Ek: () => a, kk: () => s });
var i = n(228366);
let r = new (n(626584).A)("TryLoad");
async function s(e) {
    try {
        return await e();
    } catch (e) {
        return r.log("database load failed.", e), null;
    }
}
function a(e, t, n) {
    try {
        return t();
    } catch (t) {
        return (
            r.log(`${e}: exception thrown, resetting socket.`, t, t.stack),
            i.h.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: t,
                    action: `tryLoadOrResetCacheGateway (${e})`,
                    metricAction: `tryLoadOrResetCacheGateway (${n ?? e})`,
                },
            }),
            null
        );
    }
}
async function o(e, t, n) {
    try {
        return await t();
    } catch (t) {
        return (
            r.log(`${e}: exception thrown, resetting socket.`, t, t.stack),
            i.h.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: t,
                    action: `tryLoadOrResetCacheGatewayAsync (${e})`,
                    metricAction: `tryLoadOrResetCacheGatewayAsync (${n ?? e})`,
                },
            }),
            null
        );
    }
}
