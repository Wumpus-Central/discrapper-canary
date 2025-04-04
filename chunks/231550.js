a.d(e, { Y: () => A });
var r = a(395848),
    n = a(140955),
    _ = a(596308),
    o = a(622574),
    i = a(433691),
    c = a(412828),
    s = a(662355);
let E = [200, 500],
    l = () => (0, c.U)() - 0,
    u = [],
    I = {},
    R = (t) => {
        let e = u[u.length - 1],
            a = I[t.interactionId];
        if (a || u.length < 10 || (e && t.duration > e.latency)) {
            if (a) a.entries.push(t), (a.latency = Math.max(a.latency, t.duration));
            else {
                let e = {
                    id: t.interactionId,
                    latency: t.duration,
                    entries: [t]
                };
                (I[e.id] = e), u.push(e);
            }
            u.sort((t, e) => e.latency - t.latency),
                u.splice(10).forEach((t) => {
                    delete I[t.id];
                });
        }
    },
    d = () => {
        let t = Math.min(u.length - 1, Math.floor(l() / 50));
        return u[t];
    },
    A = (t, e = {}) => {
        (0, s.A)(() => {
            let a;
            (0, c.Y)();
            let s = (0, _.I)('INP'),
                I = (t) => {
                    t.forEach((t) => {
                        t.interactionId && R(t), 'first-input' === t.entryType && (u.some((e) => e.entries.some((e) => t.duration === e.duration && t.startTime === e.startTime)) || R(t));
                    });
                    let e = d();
                    e && e.latency !== s.value && ((s.value = e.latency), (s.entries = e.entries), a());
                },
                A = (0, o.N)('event', I, { durationThreshold: null != e.durationThreshold ? e.durationThreshold : 40 });
            (a = (0, n._)(t, s, E, e.reportAllChanges)),
                A &&
                    ('PerformanceEventTiming' in r.m &&
                        'interactionId' in PerformanceEventTiming.prototype &&
                        A.observe({
                            type: 'first-input',
                            buffered: !0
                        }),
                    (0, i.u)(() => {
                        I(A.takeRecords()), s.value < 0 && l() > 0 && ((s.value = 0), (s.entries = [])), a(!0);
                    }));
        });
    };
