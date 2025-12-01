let n;
r.d(t, {
    U: () => c,
    Y: () => E,
});
var a = r(622574);
let i = 0,
    o = 1 / 0,
    _ = 0,
    s = (e) => {
        e.forEach((e) => {
            e.interactionId &&
                ((o = Math.min(o, e.interactionId)), (i = (_ = Math.max(_, e.interactionId)) ? (_ - o) / 7 + 1 : 0));
        });
    },
    c = () => (n ? i : performance.interactionCount || 0),
    E = () => {
        "interactionCount" in performance ||
            n ||
            (n = (0, a.N)("event", s, {
                type: "event",
                buffered: !0,
                durationThreshold: 0,
            }));
    };
