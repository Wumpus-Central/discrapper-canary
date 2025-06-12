a.d(e, { Y: () => T });
var r = a(395848),
    _ = a(140955),
    n = a(596308),
    o = a(622574),
    i = a(433691),
    c = a(412828),
    E = a(662355);
let s = [200, 500],
    l = () => (0, c.U)() - 0,
    I = [],
    u = {},
    R = (t) => {
        let e = I[I.length - 1],
            a = u[t.interactionId];
        if (a || I.length < 10 || (e && t.duration > e.latency)) {
            if (a) a.entries.push(t), (a.latency = Math.max(a.latency, t.duration));
            else {
                let e = {
                    id: t.interactionId,
                    latency: t.duration,
                    entries: [t]
                };
                (u[e.id] = e), I.push(e);
            }
            I.sort((t, e) => e.latency - t.latency),
                I.splice(10).forEach((t) => {
                    delete u[t.id];
                });
        }
    },
    A = () => {
        let t = Math.min(I.length - 1, Math.floor(l() / 50));
        return I[t];
    },
    T = (t, e = {}) => {
        (0, E.A)(() => {
            let a;
            (0, c.Y)();
            let E = (0, n.I)('INP'),
                u = (t) => {
                    t.forEach((t) => {
                        t.interactionId && R(t), 'first-input' === t.entryType && (I.some((e) => e.entries.some((e) => t.duration === e.duration && t.startTime === e.startTime)) || R(t));
                    });
                    let e = A();
                    e && e.latency !== E.value && ((E.value = e.latency), (E.entries = e.entries), a());
                },
                T = (0, o.N)('event', u, { durationThreshold: null != e.durationThreshold ? e.durationThreshold : 40 });
            (a = (0, _._)(t, E, s, e.reportAllChanges)),
                T &&
                    ('PerformanceEventTiming' in r.m &&
                        'interactionId' in PerformanceEventTiming.prototype &&
                        T.observe({
                            type: 'first-input',
                            buffered: !0
                        }),
                    (0, i.u)(() => {
                        u(T.takeRecords()), E.value < 0 && l() > 0 && ((E.value = 0), (E.entries = [])), a(!0);
                    }));
        });
    };
