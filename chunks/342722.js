r.d(t, { q: () => E });
var n = r(891497),
    a = r(690889),
    i = r(896877),
    o = r(959036),
    _ = r(98076),
    s = r(43696),
    c = r(4757);
function E(e, t, r = (0, n.x)(e.bufferSize || 64)) {
    let u = {};
    return {
        send: function (n) {
            let E = [];
            if (
                ((0, a.gv)(n, (t, r) => {
                    let n = (0, a.mL)(r);
                    if ((0, i.Q)(u, n)) {
                        let a = l(t, r);
                        e.recordDroppedEvent("ratelimit_backoff", n, a);
                    } else E.push(t);
                }),
                0 === E.length)
            )
                return (0, o.WD)({});
            let d = (0, a.Jd)(n[0], E),
                I = (t) => {
                    (0, a.gv)(d, (r, n) => {
                        let i = l(r, n);
                        e.recordDroppedEvent(t, (0, a.mL)(n), i);
                    });
                };
            return r
                .add(() =>
                    t({ body: (0, a.V$)(d) }).then(
                        (e) => (
                            void 0 !== e.statusCode &&
                                (e.statusCode < 200 || e.statusCode >= 300) &&
                                c.X &&
                                _.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                            (u = (0, i.WG)(u, e)),
                            e
                        ),
                        (e) => {
                            throw (I("network_error"), e);
                        },
                    ),
                )
                .then(
                    (e) => e,
                    (e) => {
                        if (e instanceof s.b)
                            return (
                                c.X && _.kg.error("Skipped sending event because buffer is full."),
                                I("queue_overflow"),
                                (0, o.WD)({})
                            );
                        throw e;
                    },
                );
        },
        flush: (e) => r.drain(e),
    };
}
function l(e, t) {
    if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0;
}
