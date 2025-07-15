a.d(e, { q: () => R });
var r = a(899517),
    _ = a(622916),
    n = a(101284),
    o = a(263449),
    i = a(255768),
    c = a(696486),
    s = a(152228),
    E = a(366569),
    l = a(147498);
function u(t, e) {
    let a = (0, r.Y)('globalMetricsAggregators', () => new WeakMap()),
        _ = a.get(t);
    if (_) return _;
    let n = new e(t);
    return (t.on('flush', () => n.flush()), t.on('close', () => n.close()), a.set(t, n), n);
}
function I(t, e, a, r, n = {}) {
    let s = n.client || (0, o.s3)();
    if (!s) return;
    let E = (0, c.HN)(),
        l = E ? (0, c.Gx)(E) : void 0,
        d = l && (0, c.XU)(l).description,
        { unit: R, tags: N, timestamp: f } = n,
        { release: A, environment: T } = s.getOptions(),
        p = {};
    (A && (p.release = A),
        T && (p.environment = T),
        d && (p.transaction = d),
        i.X && _.kg.log(`Adding value of ${r} to ${e} metric ${a}`),
        u(s, t).add(
            e,
            a,
            r,
            R,
            {
                ...p,
                ...N
            },
            f
        ));
}
function d(t, e, a, r) {
    I(t, l.g_, e, N(a), r);
}
let R = {
    increment: function (t, e, a = 1, r) {
        I(t, l.JM, e, N(a), r);
    },
    distribution: d,
    set: function (t, e, a, r) {
        I(t, l.is, e, a, r);
    },
    gauge: function (t, e, a, r) {
        I(t, l.uG, e, N(a), r);
    },
    timing: function (t, e, a, r = 'second', _) {
        if ('function' == typeof a) {
            let r = (0, n.ph)();
            return (0, s.V0)(
                {
                    op: 'metrics.timing',
                    name: e,
                    startTime: r,
                    onlyIfParent: !0
                },
                (o) =>
                    (0, E.i)(
                        () => a(),
                        () => {},
                        () => {
                            let a = (0, n.ph)();
                            (d(t, e, a - r, {
                                ..._,
                                unit: 'second'
                            }),
                                o.end(a));
                        }
                    )
            );
        }
        d(t, e, a, {
            ..._,
            unit: r
        });
    },
    getMetricsAggregatorForClient: u
};
function N(t) {
    return 'string' == typeof t ? parseInt(t) : t;
}
