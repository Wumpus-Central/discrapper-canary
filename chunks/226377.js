a.d(e, { q: () => A });
var r = a(899517),
    _ = a(622916),
    n = a(101284),
    o = a(263449),
    i = a(255768),
    c = a(696486),
    E = a(152228),
    s = a(366569),
    l = a(147498);
function I(t, e) {
    let a = (0, r.Y)('globalMetricsAggregators', () => new WeakMap()),
        _ = a.get(t);
    if (_) return _;
    let n = new e(t);
    return t.on('flush', () => n.flush()), t.on('close', () => n.close()), a.set(t, n), n;
}
function u(t, e, a, r, n = {}) {
    let E = n.client || (0, o.s3)();
    if (!E) return;
    let s = (0, c.HN)(),
        l = s ? (0, c.Gx)(s) : void 0,
        R = l && (0, c.XU)(l).description,
        { unit: A, tags: T, timestamp: N } = n,
        { release: d, environment: L } = E.getOptions(),
        p = {};
    d && (p.release = d),
        L && (p.environment = L),
        R && (p.transaction = R),
        i.X && _.kg.log(`Adding value of ${r} to ${e} metric ${a}`),
        I(E, t).add(
            e,
            a,
            r,
            A,
            {
                ...p,
                ...T
            },
            N
        );
}
function R(t, e, a, r) {
    u(t, l.g_, e, T(a), r);
}
let A = {
    increment: function (t, e, a = 1, r) {
        u(t, l.JM, e, T(a), r);
    },
    distribution: R,
    set: function (t, e, a, r) {
        u(t, l.is, e, a, r);
    },
    gauge: function (t, e, a, r) {
        u(t, l.uG, e, T(a), r);
    },
    timing: function (t, e, a, r = 'second', _) {
        if ('function' == typeof a) {
            let r = (0, n.ph)();
            return (0, E.V0)(
                {
                    op: 'metrics.timing',
                    name: e,
                    startTime: r,
                    onlyIfParent: !0
                },
                (o) =>
                    (0, s.i)(
                        () => a(),
                        () => {},
                        () => {
                            let a = (0, n.ph)();
                            R(t, e, a - r, {
                                ..._,
                                unit: 'second'
                            }),
                                o.end(a);
                        }
                    )
            );
        }
        R(t, e, a, {
            ..._,
            unit: r
        });
    },
    getMetricsAggregatorForClient: I
};
function T(t) {
    return 'string' == typeof t ? parseInt(t) : t;
}
