let r;
a.d(e, {
    U: () => E,
    Y: () => s
});
var _ = a(622574);
let n = 0,
    o = 1 / 0,
    i = 0,
    c = (t) => {
        t.forEach((t) => {
            t.interactionId && ((o = Math.min(o, t.interactionId)), (n = (i = Math.max(i, t.interactionId)) ? (i - o) / 7 + 1 : 0));
        });
    },
    E = () => (r ? n : performance.interactionCount || 0),
    s = () => {
        'interactionCount' in performance ||
            r ||
            (r = (0, _.N)('event', c, {
                type: 'event',
                buffered: !0,
                durationThreshold: 0
            }));
    };
