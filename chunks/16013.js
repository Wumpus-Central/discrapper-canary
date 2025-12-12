n.d(t, { Y: () => f });
var r = n(514962),
    i = n(488214),
    a = n(385702),
    o = n(798619),
    _ = n(483698),
    s = n(643769),
    c = n(871861);
let E = [200, 500],
    l = () => (0, s.U)() - 0,
    u = [],
    d = {},
    p = (e) => {
        let t = u[u.length - 1],
            n = d[e.interactionId];
        if (n || u.length < 10 || (t && e.duration > t.latency)) {
            if (n) n.entries.push(e), (n.latency = Math.max(n.latency, e.duration));
            else {
                let t = {
                    id: e.interactionId,
                    latency: e.duration,
                    entries: [e],
                };
                (d[t.id] = t), u.push(t);
            }
            u.sort((e, t) => t.latency - e.latency),
                u.splice(10).forEach((e) => {
                    delete d[e.id];
                });
        }
    },
    f = (e, t = {}) => {
        (0, c.A)(() => {
            let n;
            (0, s.Y)();
            let c = (0, a.I)("INP"),
                d = (e) => {
                    e.forEach((e) => {
                        e.interactionId && p(e),
                            "first-input" === e.entryType &&
                                (u.some((t) =>
                                    t.entries.some((t) => e.duration === t.duration && e.startTime === t.startTime),
                                ) ||
                                    p(e));
                    });
                    let t = (() => {
                        let e = Math.min(u.length - 1, Math.floor(l() / 50));
                        return u[e];
                    })();
                    t && t.latency !== c.value && ((c.value = t.latency), (c.entries = t.entries), n());
                },
                f = (0, o.N)("event", d, { durationThreshold: null != t.durationThreshold ? t.durationThreshold : 40 });
            (n = (0, i._)(e, c, E, t.reportAllChanges)),
                f &&
                    ("PerformanceEventTiming" in r.m &&
                        "interactionId" in PerformanceEventTiming.prototype &&
                        f.observe({
                            type: "first-input",
                            buffered: !0,
                        }),
                    (0, _.u)(() => {
                        d(f.takeRecords()), c.value < 0 && l() > 0 && ((c.value = 0), (c.entries = [])), n(!0);
                    }));
        });
    };
