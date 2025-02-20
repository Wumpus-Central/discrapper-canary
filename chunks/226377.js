a.d(e, { q: () => d });
var r = a(899517),
    n = a(622916),
    o = a(101284),
    _ = a(263449),
    i = a(255768),
    c = a(696486),
    s = a(152228),
    E = a(366569),
    l = a(147498);
function u(t, e) {
    let a = (0, r.Y)('globalMetricsAggregators', () => new WeakMap()),
        n = a.get(t);
    if (n) return n;
    let o = new e(t);
    return t.on('flush', () => o.flush()), t.on('close', () => o.close()), a.set(t, o), o;
}
function I(t, e, a, r, o = {}) {
    let s = o.client || (0, _.s3)();
    if (!s) return;
    let E = (0, c.HN)(),
        l = E ? (0, c.Gx)(E) : void 0,
        R = l && (0, c.XU)(l).description,
        { unit: d, tags: A, timestamp: f } = o,
        { release: p, environment: T } = s.getOptions(),
        N = {};
    p && (N.release = p),
        T && (N.environment = T),
        R && (N.transaction = R),
        i.X && n.kg.log(`Adding value of ${r} to ${e} metric ${a}`),
        u(s, t).add(
            e,
            a,
            r,
            d,
            {
                ...N,
                ...A
            },
            f
        );
}
function R(t, e, a, r) {
    I(t, l.g_, e, A(a), r);
}
let d = {
    increment: function (t, e, a = 1, r) {
        I(t, l.JM, e, A(a), r);
    },
    distribution: R,
    set: function (t, e, a, r) {
        I(t, l.is, e, a, r);
    },
    gauge: function (t, e, a, r) {
        I(t, l.uG, e, A(a), r);
    },
    timing: function (t, e, a, r = 'second', n) {
        if ('function' == typeof a) {
            let r = (0, o.ph)();
            return (0, s.V0)(
                {
                    op: 'metrics.timing',
                    name: e,
                    startTime: r,
                    onlyIfParent: !0
                },
                (_) =>
                    (0, E.i)(
                        () => a(),
                        () => {},
                        () => {
                            let a = (0, o.ph)();
                            R(t, e, a - r, {
                                ...n,
                                unit: 'second'
                            }),
                                _.end(a);
                        }
                    )
            );
        }
        R(t, e, a, {
            ...n,
            unit: r
        });
    },
    getMetricsAggregatorForClient: u
};
function A(t) {
    return 'string' == typeof t ? parseInt(t) : t;
}
