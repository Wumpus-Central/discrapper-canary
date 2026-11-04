n.d(t, { o: () => c });
var r = n(326447),
    i = n(847745),
    o = n(33735),
    a = n(272469),
    s = n(835869),
    l = n(157444);
function c(
    e,
    t,
    n = (function (e) {
        let t = [];
        function n(e) {
            return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
        }
        return {
            $: t,
            add: function (r) {
                if (!(void 0 === e || t.length < e))
                    return (0, s.xg)(new o.U("Not adding Promise because buffer limit was reached."));
                let i = r();
                return (
                    -1 === t.indexOf(i) && t.push(i), i.then(() => n(i)).then(null, () => n(i).then(null, () => {})), i
                );
            },
            drain: function (e) {
                return new s.T2((n, r) => {
                    let i = t.length;
                    if (!i) return n(!0);
                    let o = setTimeout(() => {
                        e && e > 0 && n(!1);
                    }, e);
                    t.forEach((e) => {
                        (0, s.XW)(e).then(() => {
                            --i || (clearTimeout(o), n(!0));
                        }, r);
                    });
                });
            },
        };
    })(e.bufferSize || 64),
) {
    let d = {};
    return {
        send: function (c) {
            let p = [];
            if (
                ((0, i.yH)(c, (t, n) => {
                    let r = (0, i.zk)(n);
                    if ((0, l.Jz)(d, r)) {
                        let i = u(t, n);
                        e.recordDroppedEvent("ratelimit_backoff", r, i);
                    } else p.push(t);
                }),
                0 === p.length)
            )
                return (0, s.XW)({});
            let h = (0, i.h4)(c[0], p),
                f = (t) => {
                    (0, i.yH)(h, (n, r) => {
                        let o = u(n, r);
                        e.recordDroppedEvent(t, (0, i.zk)(r), o);
                    });
                };
            return n
                .add(() =>
                    t({ body: (0, i.bN)(h) }).then(
                        (e) => (
                            void 0 !== e.statusCode &&
                                (e.statusCode < 200 || e.statusCode >= 300) &&
                                r.T &&
                                a.vF.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                            (d = (0, l.wq)(d, e)),
                            e
                        ),
                        (e) => {
                            throw (f("network_error"), e);
                        },
                    ),
                )
                .then(
                    (e) => e,
                    (e) => {
                        if (e instanceof o.U)
                            return (
                                r.T && a.vF.error("Skipped sending event because buffer is full."),
                                f("queue_overflow"),
                                (0, s.XW)({})
                            );
                        throw e;
                    },
                );
        },
        flush: (e) => n.drain(e),
    };
}
function u(e, t) {
    if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0;
}
