_.d(e, { q: () => A });
var a = _(899517),
    r = _(622916),
    n = _(101284),
    o = _(263449),
    E = _(255768),
    i = _(696486),
    c = _(152228),
    s = _(366569),
    l = _(147498);
function I(t, e) {
    let _ = (0, a.Y)("globalMetricsAggregators", () => new WeakMap()),
        r = _.get(t);
    if (r) return r;
    let n = new e(t);
    return t.on("flush", () => n.flush()), t.on("close", () => n.close()), _.set(t, n), n;
}
function R(t, e, _, a, n = {}) {
    let c = n.client || (0, o.s3)();
    if (!c) return;
    let s = (0, i.HN)(),
        l = s ? (0, i.Gx)(s) : void 0,
        N = l && (0, i.XU)(l).description,
        { unit: A, tags: u, timestamp: T } = n,
        { release: d, environment: f } = c.getOptions(),
        O = {};
    d && (O.release = d),
        f && (O.environment = f),
        N && (O.transaction = N),
        E.X && r.kg.log(`Adding value of ${a} to ${e} metric ${_}`),
        I(c, t).add(
            e,
            _,
            a,
            A,
            {
                ...O,
                ...u,
            },
            T,
        );
}
function N(t, e, _, a) {
    R(t, l.g_, e, u(_), a);
}
let A = {
    increment: function (t, e, _ = 1, a) {
        R(t, l.JM, e, u(_), a);
    },
    distribution: N,
    set: function (t, e, _, a) {
        R(t, l.is, e, _, a);
    },
    gauge: function (t, e, _, a) {
        R(t, l.uG, e, u(_), a);
    },
    timing: function (t, e, _, a = "second", r) {
        if ("function" == typeof _) {
            let a = (0, n.ph)();
            return (0, c.V0)(
                {
                    op: "metrics.timing",
                    name: e,
                    startTime: a,
                    onlyIfParent: !0,
                },
                (o) =>
                    (0, s.i)(
                        () => _(),
                        () => {},
                        () => {
                            let _ = (0, n.ph)();
                            N(t, e, _ - a, {
                                ...r,
                                unit: "second",
                            }),
                                o.end(_);
                        },
                    ),
            );
        }
        N(t, e, _, {
            ...r,
            unit: a,
        });
    },
    getMetricsAggregatorForClient: I,
};
function u(t) {
    return "string" == typeof t ? parseInt(t) : t;
}
