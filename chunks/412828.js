let r;
a.d(e, {
    U: () => s,
    Y: () => E
});
var n = a(622574);
let _ = 0,
    o = 1 / 0,
    i = 0,
    c = (t) => {
        t.forEach((t) => {
            t.interactionId && ((o = Math.min(o, t.interactionId)), (_ = (i = Math.max(i, t.interactionId)) ? (i - o) / 7 + 1 : 0));
        });
    },
    s = () => (r ? _ : performance.interactionCount || 0),
    E = () => {
        'interactionCount' in performance ||
            r ||
            (r = (0, n.N)('event', c, {
                type: 'event',
                buffered: !0,
                durationThreshold: 0
            }));
    };
