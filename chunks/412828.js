let r;
a.d(e, {
    U: () => s,
    Y: () => E
});
var n = a(622574);
let o = 0,
    _ = 1 / 0,
    i = 0,
    c = (t) => {
        t.forEach((t) => {
            t.interactionId && ((_ = Math.min(_, t.interactionId)), (o = (i = Math.max(i, t.interactionId)) ? (i - _) / 7 + 1 : 0));
        });
    },
    s = () => (r ? o : performance.interactionCount || 0),
    E = () => {
        'interactionCount' in performance ||
            r ||
            (r = (0, n.N)('event', c, {
                type: 'event',
                buffered: !0,
                durationThreshold: 0
            }));
    };
