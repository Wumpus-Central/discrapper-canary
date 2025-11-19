let a;
_.d(e, {
    U: () => c,
    Y: () => s,
});
var r = _(622574);
let n = 0,
    o = 1 / 0,
    E = 0,
    i = (t) => {
        t.forEach((t) => {
            t.interactionId &&
                ((o = Math.min(o, t.interactionId)), (n = (E = Math.max(E, t.interactionId)) ? (E - o) / 7 + 1 : 0));
        });
    },
    c = () => (a ? n : performance.interactionCount || 0),
    s = () => {
        "interactionCount" in performance ||
            a ||
            (a = (0, r.N)("event", i, {
                type: "event",
                buffered: !0,
                durationThreshold: 0,
            }));
    };
