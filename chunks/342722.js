n.d(t, { q: () => E });
var r = n(891497),
    i = n(690889),
    a = n(896877),
    o = n(959036),
    _ = n(98076),
    s = n(43696),
    c = n(4757);
function E(e, t, n = (0, r.x)(e.bufferSize || 64)) {
    let u = {};
    return {
        send: function (r) {
            let E = [];
            if (
                ((0, i.gv)(r, (t, n) => {
                    let r = (0, i.mL)(n);
                    if ((0, a.Q)(u, r)) {
                        let i = l(t, n);
                        e.recordDroppedEvent("ratelimit_backoff", r, i);
                    } else E.push(t);
                }),
                0 === E.length)
            )
                return (0, o.WD)({});
            let d = (0, i.Jd)(r[0], E),
                p = (t) => {
                    (0, i.gv)(d, (n, r) => {
                        let a = l(n, r);
                        e.recordDroppedEvent(t, (0, i.mL)(r), a);
                    });
                };
            return n
                .add(() =>
                    t({ body: (0, i.V$)(d) }).then(
                        (e) => (
                            void 0 !== e.statusCode &&
                                (e.statusCode < 200 || e.statusCode >= 300) &&
                                c.X &&
                                _.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                            (u = (0, a.WG)(u, e)),
                            e
                        ),
                        (e) => {
                            throw (p("network_error"), e);
                        },
                    ),
                )
                .then(
                    (e) => e,
                    (e) => {
                        if (e instanceof s.b)
                            return (
                                c.X && _.kg.error("Skipped sending event because buffer is full."),
                                p("queue_overflow"),
                                (0, o.WD)({})
                            );
                        throw e;
                    },
                );
        },
        flush: (e) => n.drain(e),
    };
}
function l(e, t) {
    if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0;
}
