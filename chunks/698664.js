n.d(t, { Pd: () => _ });
var r = n(98076),
    i = n(690889),
    a = n(896877),
    o = n(4757);
function _(e) {
    function t(...e) {
        o.X && r.kg.info("[Offline]:", ...e);
    }
    return (n) => {
        let r,
            o = e(n);
        if (!n.createStore) throw Error("No `createStore` function was provided");
        let _ = n.createStore(n),
            s = 5000;
        function c(e) {
            r && clearTimeout(r),
                "number" !=
                    typeof (r = setTimeout(async () => {
                        r = void 0;
                        let e = await _.shift();
                        e &&
                            (t("Attempting to send previously queued event"),
                            (e[0].sent_at = new Date().toISOString()),
                            l(e, !0).catch((e) => {
                                t("Failed to retry sending", e);
                            }));
                    }, e)) &&
                    r.unref &&
                    r.unref();
        }
        function E() {
            r || (c(s), (s = Math.min(2 * s, 3600000)));
        }
        async function l(e, r = !1) {
            if (!r && (0, i.R)(e, ["replay_event", "replay_recording"])) return await _.push(e), c(100), {};
            try {
                let t = await o.send(e),
                    n = 100;
                if (t) {
                    if (t.headers && t.headers["retry-after"]) n = (0, a.JY)(t.headers["retry-after"]);
                    else if (t.headers && t.headers["x-sentry-rate-limits"]) n = 60000;
                    else if ((t.statusCode || 0) >= 400) return t;
                }
                return c(n), (s = 5000), t;
            } catch (a) {
                var u;
                if (await ((u = s), !(0, i.R)(e, ["client_report"]) && (!n.shouldStore || n.shouldStore(e, a, u))))
                    return r ? await _.unshift(e) : await _.push(e), E(), t("Error sending. Event queued.", a), {};
                throw a;
            }
        }
        return (
            n.flushAtStartup && E(),
            {
                send: l,
                flush: (e) => o.flush(e),
            }
        );
    };
}
