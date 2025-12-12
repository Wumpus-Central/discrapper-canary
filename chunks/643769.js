let r;
n.d(t, {
    U: () => c,
    Y: () => E,
});
var i = n(798619);
let a = 0,
    o = 1 / 0,
    _ = 0,
    s = (e) => {
        e.forEach((e) => {
            e.interactionId &&
                ((o = Math.min(o, e.interactionId)), (a = (_ = Math.max(_, e.interactionId)) ? (_ - o) / 7 + 1 : 0));
        });
    },
    c = () => (r ? a : performance.interactionCount || 0),
    E = () => {
        "interactionCount" in performance ||
            r ||
            (r = (0, i.N)("event", s, {
                type: "event",
                buffered: !0,
                durationThreshold: 0,
            }));
    };
