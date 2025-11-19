_.d(e, { Pd: () => E });
var a = _(622916),
    r = _(617726),
    n = _(14588),
    o = _(255768);
function E(t) {
    function e(...t) {
        o.X && a.kg.info("[Offline]:", ...t);
    }
    return (_) => {
        let a,
            o = t(_);
        if (!_.createStore) throw Error("No `createStore` function was provided");
        let E = _.createStore(_),
            i = 5000;
        function c(t) {
            a && clearTimeout(a),
                "number" !=
                    typeof (a = setTimeout(async () => {
                        a = void 0;
                        let t = await E.shift();
                        t &&
                            (e("Attempting to send previously queued event"),
                            (t[0].sent_at = new Date().toISOString()),
                            l(t, !0).catch((t) => {
                                e("Failed to retry sending", t);
                            }));
                    }, t)) &&
                    a.unref &&
                    a.unref();
        }
        function s() {
            a || (c(i), (i = Math.min(2 * i, 3600000)));
        }
        async function l(t, a = !1) {
            if (!a && (0, r.R)(t, ["replay_event", "replay_recording"])) return await E.push(t), c(100), {};
            try {
                let e = await o.send(t),
                    _ = 100;
                if (e) {
                    if (e.headers && e.headers["retry-after"]) _ = (0, n.JY)(e.headers["retry-after"]);
                    else if (e.headers && e.headers["x-sentry-rate-limits"]) _ = 60000;
                    else if ((e.statusCode || 0) >= 400) return e;
                }
                return c(_), (i = 5000), e;
            } catch (n) {
                var I;
                if (await ((I = i), !(0, r.R)(t, ["client_report"]) && (!_.shouldStore || _.shouldStore(t, n, I))))
                    return a ? await E.unshift(t) : await E.push(t), s(), e("Error sending. Event queued.", n), {};
                throw n;
            }
        }
        return (
            _.flushAtStartup && s(),
            {
                send: l,
                flush: (t) => o.flush(t),
            }
        );
    };
}
