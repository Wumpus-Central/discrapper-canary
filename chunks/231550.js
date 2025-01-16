r.d(t, {
    Y: function () {
        return T;
    }
});
var a = r(395848),
    n = r(140955),
    _ = r(596308),
    o = r(622574),
    E = r(433691),
    i = r(412828),
    c = r(873712);
let s = [200, 500],
    l = () => (0, i.U)() - 0,
    I = [],
    u = {},
    R = (e) => {
        let t = I[I.length - 1],
            r = u[e.interactionId];
        if (r || I.length < 10 || (t && e.duration > t.latency)) {
            if (r) r.entries.push(e), (r.latency = Math.max(r.latency, e.duration));
            else {
                let t = {
                    id: e.interactionId,
                    latency: e.duration,
                    entries: [e]
                };
                (u[t.id] = t), I.push(t);
            }
            I.sort((e, t) => t.latency - e.latency),
                I.splice(10).forEach((e) => {
                    delete u[e.id];
                });
        }
    },
    A = () => {
        let e = Math.min(I.length - 1, Math.floor(l() / 50));
        return I[e];
    },
    T = (e, t = {}) => {
        (0, c.A)(() => {
            let r;
            (0, i.Y)();
            let c = (0, _.I)('INP'),
                u = (e) => {
                    e.forEach((e) => {
                        e.interactionId && R(e), 'first-input' === e.entryType && !I.some((t) => t.entries.some((t) => e.duration === t.duration && e.startTime === t.startTime)) && R(e);
                    });
                    let t = A();
                    t && t.latency !== c.value && ((c.value = t.latency), (c.entries = t.entries), r());
                },
                T = (0, o.N)('event', u, { durationThreshold: null != t.durationThreshold ? t.durationThreshold : 40 });
            (r = (0, n._)(e, c, s, t.reportAllChanges)),
                T &&
                    ('PerformanceEventTiming' in a.m &&
                        'interactionId' in PerformanceEventTiming.prototype &&
                        T.observe({
                            type: 'first-input',
                            buffered: !0
                        }),
                    (0, E.u)(() => {
                        u(T.takeRecords()), c.value < 0 && l() > 0 && ((c.value = 0), (c.entries = [])), r(!0);
                    }));
        });
    };
