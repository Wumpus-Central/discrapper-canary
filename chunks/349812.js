a.d(e, { Pd: () => i });
var r = a(622916),
    _ = a(617726),
    n = a(14588),
    o = a(255768);
function i(t) {
    function e(...t) {
        o.X && r.kg.info('[Offline]:', ...t);
    }
    return (a) => {
        let r,
            o = t(a);
        if (!a.createStore) throw Error('No `createStore` function was provided');
        let i = a.createStore(a),
            c = 5000;
        function E(t) {
            (r && clearTimeout(r),
                'number' !=
                    typeof (r = setTimeout(async () => {
                        r = void 0;
                        let t = await i.shift();
                        t &&
                            (e('Attempting to send previously queued event'),
                            (t[0].sent_at = new Date().toISOString()),
                            l(t, !0).catch((t) => {
                                e('Failed to retry sending', t);
                            }));
                    }, t)) &&
                    r.unref &&
                    r.unref());
        }
        function s() {
            r || (E(c), (c = Math.min(2 * c, 3600000)));
        }
        async function l(t, r = !1) {
            if (!r && (0, _.R)(t, ['replay_event', 'replay_recording'])) return (await i.push(t), E(100), {});
            try {
                let e = await o.send(t),
                    a = 100;
                if (e) {
                    if (e.headers && e.headers['retry-after']) a = (0, n.JY)(e.headers['retry-after']);
                    else if (e.headers && e.headers['x-sentry-rate-limits']) a = 60000;
                    else if ((e.statusCode || 0) >= 400) return e;
                }
                return (E(a), (c = 5000), e);
            } catch (n) {
                var u;
                if (await ((u = c), !(0, _.R)(t, ['client_report']) && (!a.shouldStore || a.shouldStore(t, n, u)))) return (r ? await i.unshift(t) : await i.push(t), s(), e('Error sending. Event queued.', n), {});
                throw n;
            }
        }
        return (
            a.flushAtStartup && s(),
            {
                send: l,
                flush: (t) => o.flush(t)
            }
        );
    };
}
