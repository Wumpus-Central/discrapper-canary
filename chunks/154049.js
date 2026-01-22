n.d(t, {
    ES: () => o,
    Ek: () => s,
    kk: () => a,
});
var r = n(73153);
let i = new (n(626584).A)("TryLoad");
async function a(e) {
    try {
        return await e();
    } catch (e) {
        return i.log("database load failed.", e), null;
    }
}

function s(e, t, n) {
    try {
        return t();
    } catch (t) {
        return (
            i.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack),
            r.h.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: t,
                    action: "tryLoadOrResetCacheGateway (".concat(e, ")"),
                    metricAction: "tryLoadOrResetCacheGateway (".concat(null != n ? n : e, ")"),
                    clearCache: !0,
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
            i.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack),
            r.h.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: t,
                    action: "tryLoadOrResetCacheGatewayAsync (".concat(e, ")"),
                    metricAction: "tryLoadOrResetCacheGatewayAsync (".concat(null != n ? n : e, ")"),
                    clearCache: !0,
                },
            }),
            null
        );
    }
}
