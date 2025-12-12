n.d(t, { q: () => f });
var r = n(606093),
    i = n(98076),
    a = n(343573),
    o = n(509440),
    _ = n(4757),
    s = n(82255),
    c = n(700868),
    E = n(990663),
    l = n(639323);
function u(e, t) {
    let n = (0, r.Y)("globalMetricsAggregators", () => new WeakMap()),
        i = n.get(e);
    if (i) return i;
    let a = new t(e);
    return e.on("flush", () => a.flush()), e.on("close", () => a.close()), n.set(e, a), a;
}
function d(e, t, n, r, a = {}) {
    let c = a.client || (0, o.s3)();
    if (!c) return;
    let E = (0, s.HN)(),
        l = E ? (0, s.Gx)(E) : void 0,
        p = l && (0, s.XU)(l).description,
        { unit: f, tags: I, timestamp: T } = a,
        { release: R, environment: A } = c.getOptions(),
        N = {};
    R && (N.release = R),
        A && (N.environment = A),
        p && (N.transaction = p),
        _.X && i.kg.log(`Adding value of ${r} to ${t} metric ${n}`),
        u(c, e).add(
            t,
            n,
            r,
            f,
            {
                ...N,
                ...I,
            },
            T,
        );
}
function p(e, t, n, r) {
    d(e, l.g_, t, I(n), r);
}
let f = {
    increment: function (e, t, n = 1, r) {
        d(e, l.JM, t, I(n), r);
    },
    distribution: p,
    set: function (e, t, n, r) {
        d(e, l.is, t, n, r);
    },
    gauge: function (e, t, n, r) {
        d(e, l.uG, t, I(n), r);
    },
    timing: function (e, t, n, r = "second", i) {
        if ("function" == typeof n) {
            let r = (0, a.ph)();
            return (0, c.V0)(
                {
                    op: "metrics.timing",
                    name: t,
                    startTime: r,
                    onlyIfParent: !0,
                },
                (o) =>
                    (0, E.i)(
                        () => n(),
                        () => {},
                        () => {
                            let n = (0, a.ph)();
                            p(e, t, n - r, {
                                ...i,
                                unit: "second",
                            }),
                                o.end(n);
                        },
                    ),
            );
        }
        p(e, t, n, {
            ...i,
            unit: r,
        });
    },
    getMetricsAggregatorForClient: u,
};
function I(e) {
    return "string" == typeof e ? parseInt(e) : e;
}
