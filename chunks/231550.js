_.d(e, { Y: () => A });
var a = _(395848),
    r = _(140955),
    n = _(596308),
    o = _(622574),
    E = _(433691),
    i = _(412828),
    c = _(662355);
let s = [200, 500],
    l = () => (0, i.U)() - 0,
    I = [],
    R = {},
    N = (t) => {
        let e = I[I.length - 1],
            _ = R[t.interactionId];
        if (_ || I.length < 10 || (e && t.duration > e.latency)) {
            if (_) _.entries.push(t), (_.latency = Math.max(_.latency, t.duration));
            else {
                let e = {
                    id: t.interactionId,
                    latency: t.duration,
                    entries: [t],
                };
                (R[e.id] = e), I.push(e);
            }
            I.sort((t, e) => e.latency - t.latency),
                I.splice(10).forEach((t) => {
                    delete R[t.id];
                });
        }
    },
    A = (t, e = {}) => {
        (0, c.A)(() => {
            let _;
            (0, i.Y)();
            let c = (0, n.I)("INP"),
                R = (t) => {
                    t.forEach((t) => {
                        t.interactionId && N(t),
                            "first-input" === t.entryType &&
                                (I.some((e) =>
                                    e.entries.some((e) => t.duration === e.duration && t.startTime === e.startTime),
                                ) ||
                                    N(t));
                    });
                    let e = (() => {
                        let t = Math.min(I.length - 1, Math.floor(l() / 50));
                        return I[t];
                    })();
                    e && e.latency !== c.value && ((c.value = e.latency), (c.entries = e.entries), _());
                },
                A = (0, o.N)("event", R, { durationThreshold: null != e.durationThreshold ? e.durationThreshold : 40 });
            (_ = (0, r._)(t, c, s, e.reportAllChanges)),
                A &&
                    ("PerformanceEventTiming" in a.m &&
                        "interactionId" in PerformanceEventTiming.prototype &&
                        A.observe({
                            type: "first-input",
                            buffered: !0,
                        }),
                    (0, E.u)(() => {
                        R(A.takeRecords()), c.value < 0 && l() > 0 && ((c.value = 0), (c.entries = [])), _(!0);
                    }));
        });
    };
