var i = n(73153);
let r = new (n(626584).A)("TryLoad");
n.d(
    t,
    {},
    {
        ES: async function (e, t, n) {
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
        },
        Ek: function (e, t, n) {
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
        },
        kk: async function (e) {
            try {
                return await e();
            } catch (e) {
                return (r.log("database load failed.", e), null);
            }
        },
    },
);
