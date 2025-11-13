a.d(e, { q: () => A });
var r = a(899517),
    _ = a(622916),
    n = a(101284),
    o = a(263449),
    i = a(255768),
    E = a(696486),
    c = a(152228),
    s = a(366569),
    l = a(147498);
function I(t, e) {
    let a = (0, r.Y)("globalMetricsAggregators", () => new WeakMap()),
        _ = a.get(t);
    if (_) return _;
    let n = new e(t);
    return t.on("flush", () => n.flush()), t.on("close", () => n.close()), a.set(t, n), n;
}
function R(t, e, a, r, n = {}) {
    let c = n.client || (0, o.s3)();
    if (!c) return;
    let s = (0, E.HN)(),
        l = s ? (0, E.Gx)(s) : void 0,
        u = l && (0, E.XU)(l).description,
        { unit: A, tags: N, timestamp: T } = n,
        { release: d, environment: f } = c.getOptions(),
        L = {};
    d && (L.release = d),
        f && (L.environment = f),
        u && (L.transaction = u),
        i.X && _.kg.log(`Adding value of ${r} to ${e} metric ${a}`),
        I(c, t).add(
            e,
            a,
            r,
            A,
            {
                ...L,
                ...N,
            },
            T,
        );
}
function u(t, e, a, r) {
    R(t, l.g_, e, N(a), r);
}
let A = {
    increment: function (t, e, a = 1, r) {
        R(t, l.JM, e, N(a), r);
    },
    distribution: u,
    set: function (t, e, a, r) {
        R(t, l.is, e, a, r);
    },
    gauge: function (t, e, a, r) {
        R(t, l.uG, e, N(a), r);
    },
    timing: function (t, e, a, r = "second", _) {
        if ("function" == typeof a) {
            let r = (0, n.ph)();
            return (0, c.V0)(
                {
                    op: "metrics.timing",
                    name: e,
                    startTime: r,
                    onlyIfParent: !0,
                },
                (o) =>
                    (0, s.i)(
                        () => a(),
                        () => {},
                        () => {
                            let a = (0, n.ph)();
                            u(t, e, a - r, {
                                ..._,
                                unit: "second",
                            }),
                                o.end(a);
                        },
                    ),
            );
        }
        u(t, e, a, {
            ..._,
            unit: r,
        });
    },
    getMetricsAggregatorForClient: I,
};
function N(t) {
    return "string" == typeof t ? parseInt(t) : t;
}
