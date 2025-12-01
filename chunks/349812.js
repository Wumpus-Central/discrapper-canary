r.d(t, { Pd: () => _ });
var n = r(622916),
    a = r(617726),
    i = r(14588),
    o = r(255768);
function _(e) {
    function t(...e) {
        o.X && n.kg.info("[Offline]:", ...e);
    }
    return (r) => {
        let n,
            o = e(r);
        if (!r.createStore) throw Error("No `createStore` function was provided");
        let _ = r.createStore(r),
            s = 5000;
        function c(e) {
            n && clearTimeout(n),
                "number" !=
                    typeof (n = setTimeout(async () => {
                        n = void 0;
                        let e = await _.shift();
                        e &&
                            (t("Attempting to send previously queued event"),
                            (e[0].sent_at = new Date().toISOString()),
                            l(e, !0).catch((e) => {
                                t("Failed to retry sending", e);
                            }));
                    }, e)) &&
                    n.unref &&
                    n.unref();
        }
        function E() {
            n || (c(s), (s = Math.min(2 * s, 3600000)));
        }
        async function l(e, n = !1) {
            if (!n && (0, a.R)(e, ["replay_event", "replay_recording"])) return await _.push(e), c(100), {};
            try {
                let t = await o.send(e),
                    r = 100;
                if (t) {
                    if (t.headers && t.headers["retry-after"]) r = (0, i.JY)(t.headers["retry-after"]);
                    else if (t.headers && t.headers["x-sentry-rate-limits"]) r = 60000;
                    else if ((t.statusCode || 0) >= 400) return t;
                }
                return c(r), (s = 5000), t;
            } catch (i) {
                var u;
                if (await ((u = s), !(0, a.R)(e, ["client_report"]) && (!r.shouldStore || r.shouldStore(e, i, u))))
                    return n ? await _.unshift(e) : await _.push(e), E(), t("Error sending. Event queued.", i), {};
                throw i;
            }
        }
        return (
            r.flushAtStartup && E(),
            {
                send: l,
                flush: (e) => o.flush(e),
            }
        );
    };
}
