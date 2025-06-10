a.d(e, { Y: () => N });
var r = a(395848),
    _ = a(140955),
    n = a(596308),
    o = a(622574),
    i = a(433691),
    c = a(412828),
    E = a(662355);
let s = [200, 500],
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
    N = (t, e = {}) => {
        (0, E.A)(() => {
            let a;
            (0, c.Y)();
            let E = (0, n.I)('INP'),
                I = (t) => {
                    t.forEach((t) => {
                        t.interactionId && R(t), 'first-input' === t.entryType && (u.some((e) => e.entries.some((e) => t.duration === e.duration && t.startTime === e.startTime)) || R(t));
                    });
                    let e = d();
                    e && e.latency !== E.value && ((E.value = e.latency), (E.entries = e.entries), a());
                },
                N = (0, o.N)('event', I, { durationThreshold: null != e.durationThreshold ? e.durationThreshold : 40 });
            (a = (0, _._)(t, E, s, e.reportAllChanges)),
                N &&
                    ('PerformanceEventTiming' in r.m &&
                        'interactionId' in PerformanceEventTiming.prototype &&
                        N.observe({
                            type: 'first-input',
                            buffered: !0
                        }),
                    (0, i.u)(() => {
                        I(N.takeRecords()), E.value < 0 && l() > 0 && ((E.value = 0), (E.entries = [])), a(!0);
                    }));
        });
    };
