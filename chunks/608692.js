n.d(t, {
    V: () => o,
    y: () => a,
});
var r = n(886649);
let i = "_sentryMetrics";
function a(e) {
    let t = e[i];
    if (!t) return;
    let n = {};
    for (let [, [e, i]] of t) (n[e] || (n[e] = [])).push((0, r.Jr)(i));
    return n;
}
function o(e, t, n, r, a, o, _) {
    let s = e[i] || (e[i] = new Map()),
        c = `${t}:${n}@${a}`,
        E = s.get(_);
    if (E) {
        let [, e] = E;
        s.set(_, [
            c,
            {
                min: Math.min(e.min, r),
                max: Math.max(e.max, r),
                count: (e.count += 1),
                sum: (e.sum += r),
                tags: e.tags,
            },
        ]);
    } else
        s.set(_, [
            c,
            {
                min: r,
                max: r,
                count: 1,
                sum: r,
                tags: o,
            },
        ]);
}
