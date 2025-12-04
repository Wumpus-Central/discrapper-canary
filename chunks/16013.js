r.d(t, { Y: () => p });
var n = r(514962),
    a = r(488214),
    i = r(385702),
    o = r(798619),
    _ = r(483698),
    s = r(643769),
    c = r(871861);
let E = [200, 500],
    l = () => (0, s.U)() - 0,
    u = [],
    d = {},
    I = (e) => {
        let t = u[u.length - 1],
            r = d[e.interactionId];
        if (r || u.length < 10 || (t && e.duration > t.latency)) {
            if (r) r.entries.push(e), (r.latency = Math.max(r.latency, e.duration));
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
    p = (e, t = {}) => {
        (0, c.A)(() => {
            let r;
            (0, s.Y)();
            let c = (0, i.I)("INP"),
                d = (e) => {
                    e.forEach((e) => {
                        e.interactionId && I(e),
                            "first-input" === e.entryType &&
                                (u.some((t) =>
                                    t.entries.some((t) => e.duration === t.duration && e.startTime === t.startTime),
                                ) ||
                                    I(e));
                    });
                    let t = (() => {
                        let e = Math.min(u.length - 1, Math.floor(l() / 50));
                        return u[e];
                    })();
                    t && t.latency !== c.value && ((c.value = t.latency), (c.entries = t.entries), r());
                },
                p = (0, o.N)("event", d, { durationThreshold: null != t.durationThreshold ? t.durationThreshold : 40 });
            (r = (0, a._)(e, c, E, t.reportAllChanges)),
                p &&
                    ("PerformanceEventTiming" in n.m &&
                        "interactionId" in PerformanceEventTiming.prototype &&
                        p.observe({
                            type: "first-input",
                            buffered: !0,
                        }),
                    (0, _.u)(() => {
                        d(p.takeRecords()), c.value < 0 && l() > 0 && ((c.value = 0), (c.entries = [])), r(!0);
                    }));
        });
    };
