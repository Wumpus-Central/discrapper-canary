var l = n(667931);
function r(e) {
    let t = (0, l.W7)(e),
        n = new Map(),
        r = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let a of e.spans) {
        let { service: e, category: s } = (0, l.N5)(a);
        (n.set(s, (n.get(s) ?? 0) + (t.get(a.id) ?? 0)),
            "model" === e &&
                ((r.calls += 1),
                (r.input += i(a, "in")),
                (r.output += i(a, "out")),
                (r.cacheRead += i(a, "cache_read")),
                (r.cacheWrite += i(a, "cache_write")),
                (r.costUsd += i(a, "cost_usd"))));
    }
    let a = l.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: a, busyMs: a.reduce((e, t) => e + t.ms, 0), model: r };
}
function i(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
n.d(
    t,
    {},
    {
        J: function (e) {
            let t = e.map(r);
            function n(e) {
                return t.reduce((t, n) => t + e(n), 0);
            }
            return {
                categories: l.BF.map((e) => ({
                    category: e,
                    ms: n((t) => t.categories.find((t) => t.category === e)?.ms ?? 0),
                })),
                busyMs: n((e) => e.busyMs),
                model: {
                    calls: n((e) => e.model.calls),
                    input: n((e) => e.model.input),
                    output: n((e) => e.model.output),
                    cacheRead: n((e) => e.model.cacheRead),
                    cacheWrite: n((e) => e.model.cacheWrite),
                    costUsd: n((e) => e.model.costUsd),
                },
            };
        },
        k: r,
    },
);
