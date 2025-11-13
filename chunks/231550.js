a.d(e, { Y: () => A });
var r = a(395848),
    _ = a(140955),
    n = a(596308),
    o = a(622574),
    i = a(433691),
    E = a(412828),
    c = a(662355);
let s = [200, 500],
    l = () => (0, E.U)() - 0,
    I = [],
    R = {},
    u = (t) => {
        let e = I[I.length - 1],
            a = R[t.interactionId];
        if (a || I.length < 10 || (e && t.duration > e.latency)) {
            if (a) a.entries.push(t), (a.latency = Math.max(a.latency, t.duration));
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
            let a;
            (0, E.Y)();
            let c = (0, n.I)("INP"),
                R = (t) => {
                    t.forEach((t) => {
                        t.interactionId && u(t),
                            "first-input" === t.entryType &&
                                (I.some((e) =>
                                    e.entries.some((e) => t.duration === e.duration && t.startTime === e.startTime),
                                ) ||
                                    u(t));
                    });
                    let e = (() => {
                        let t = Math.min(I.length - 1, Math.floor(l() / 50));
                        return I[t];
                    })();
                    e && e.latency !== c.value && ((c.value = e.latency), (c.entries = e.entries), a());
                },
                A = (0, o.N)("event", R, { durationThreshold: null != e.durationThreshold ? e.durationThreshold : 40 });
            (a = (0, _._)(t, c, s, e.reportAllChanges)),
                A &&
                    ("PerformanceEventTiming" in r.m &&
                        "interactionId" in PerformanceEventTiming.prototype &&
                        A.observe({
                            type: "first-input",
                            buffered: !0,
                        }),
                    (0, i.u)(() => {
                        R(A.takeRecords()), c.value < 0 && l() > 0 && ((c.value = 0), (c.entries = [])), a(!0);
                    }));
        });
    };
