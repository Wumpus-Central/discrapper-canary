a.d(e, { Pd: () => i });
var r = a(622916),
    n = a(617726),
    o = a(14588),
    _ = a(255768);
function i(t) {
    function e(...t) {
        _.X && r.kg.info('[Offline]:', ...t);
    }
    return (a) => {
        let r;
        let _ = t(a);
        if (!a.createStore) throw Error('No `createStore` function was provided');
        let i = a.createStore(a),
            c = 5000;
        function s(t) {
            r && clearTimeout(r),
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
                    r.unref();
        }
        function E() {
            !r && (s(c), (c = Math.min(2 * c, 3600000)));
        }
        async function l(t, r = !1) {
            if (!r && (0, n.R)(t, ['replay_event', 'replay_recording'])) return await i.push(t), s(100), {};
            try {
                let e = await _.send(t),
                    a = 100;
                if (e) {
                    if (e.headers && e.headers['retry-after']) a = (0, o.JY)(e.headers['retry-after']);
                    else if (e.headers && e.headers['x-sentry-rate-limits']) a = 60000;
                    else if ((e.statusCode || 0) >= 400) return e;
                }
                return s(a), (c = 5000), e;
            } catch (o) {
                var u;
                if (await ((u = c), !(0, n.R)(t, ['client_report']) && (!a.shouldStore || a.shouldStore(t, o, u)))) return r ? await i.unshift(t) : await i.push(t), E(), e('Error sending. Event queued.', o), {};
                throw o;
            }
        }
        return (
            a.flushAtStartup && E(),
            {
                send: l,
                flush: (t) => _.flush(t)
            }
        );
    };
}
