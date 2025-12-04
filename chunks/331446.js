r.d(t, { q: () => p });
var n = r(606093),
    a = r(98076),
    i = r(343573),
    o = r(509440),
    _ = r(4757),
    s = r(82255),
    c = r(700868),
    E = r(990663),
    l = r(639323);
function u(e, t) {
    let r = (0, n.Y)("globalMetricsAggregators", () => new WeakMap()),
        a = r.get(e);
    if (a) return a;
    let i = new t(e);
    return e.on("flush", () => i.flush()), e.on("close", () => i.close()), r.set(e, i), i;
}
function d(e, t, r, n, i = {}) {
    let c = i.client || (0, o.s3)();
    if (!c) return;
    let E = (0, s.HN)(),
        l = E ? (0, s.Gx)(E) : void 0,
        I = l && (0, s.XU)(l).description,
        { unit: p, tags: R, timestamp: T } = i,
        { release: A, environment: N } = c.getOptions(),
        f = {};
    A && (f.release = A),
        N && (f.environment = N),
        I && (f.transaction = I),
        _.X && a.kg.log(`Adding value of ${n} to ${t} metric ${r}`),
        u(c, e).add(
            t,
            r,
            n,
            p,
            {
                ...f,
                ...R,
            },
            T,
        );
}
function I(e, t, r, n) {
    d(e, l.g_, t, R(r), n);
}
let p = {
    increment: function (e, t, r = 1, n) {
        d(e, l.JM, t, R(r), n);
    },
    distribution: I,
    set: function (e, t, r, n) {
        d(e, l.is, t, r, n);
    },
    gauge: function (e, t, r, n) {
        d(e, l.uG, t, R(r), n);
    },
    timing: function (e, t, r, n = "second", a) {
        if ("function" == typeof r) {
            let n = (0, i.ph)();
            return (0, c.V0)(
                {
                    op: "metrics.timing",
                    name: t,
                    startTime: n,
                    onlyIfParent: !0,
                },
                (o) =>
                    (0, E.i)(
                        () => r(),
                        () => {},
                        () => {
                            let r = (0, i.ph)();
                            I(e, t, r - n, {
                                ...a,
                                unit: "second",
                            }),
                                o.end(r);
                        },
                    ),
            );
        }
        I(e, t, r, {
            ...a,
            unit: n,
        });
    },
    getMetricsAggregatorForClient: u,
};
function R(e) {
    return "string" == typeof e ? parseInt(e) : e;
}
