a.d(e, { f: () => f });
var r = a(469359),
    _ = a(157079),
    n = a(393523),
    o = a(151122),
    i = a(263449),
    E = a(572299),
    c = a(910731),
    s = a(64685),
    l = a(394798),
    I = a(622916),
    R = a(467510),
    u = a(954211),
    A = a(886115),
    N = a(873567),
    T = a(454463),
    d = a(163162);
let f = (0, o._I)((t = {}) => {
    let e = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...t,
    };
    return {
        name: "Breadcrumbs",
        setup(t) {
            var a, o, f, L, p, O, h;
            e.console &&
                (0, c.e)(
                    ((a = t),
                    function (t) {
                        if ((0, i.s3)() !== a) return;
                        let e = {
                            category: "console",
                            data: {
                                arguments: t.args,
                                logger: "console",
                            },
                            level: (0, u.V)(t.level),
                            message: (0, A.nK)(t.args, " "),
                        };
                        if ("assert" === t.level)
                            if (!1 !== t.args[0]) return;
                            else
                                (e.message = `Assertion failed: ${((0, A.nK))(t.args.slice(1), " ") || "console.assert"}`),
                                    (e.data.arguments = t.args.slice(1));
                        (0, E.n)(e, {
                            input: t.args,
                            level: t.level,
                        });
                    }),
                ),
                e.dom &&
                    (0, r.O)(
                        ((o = t),
                        (f = e.dom),
                        function (t) {
                            let e, a;
                            if ((0, i.s3)() !== o) return;
                            let r = "object" == typeof f ? f.serializeAttribute : void 0,
                                _ =
                                    "object" == typeof f && "number" == typeof f.maxStringLength
                                        ? f.maxStringLength
                                        : void 0;
                            _ &&
                                _ > 1024 &&
                                (T.X &&
                                    I.kg.warn(
                                        `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${_} was configured. Sentry will use 1024 instead.`,
                                    ),
                                (_ = 1024)),
                                "string" == typeof r && (r = [r]);
                            try {
                                var n;
                                let o = t.event,
                                    i = (n = o) && n.target ? o.target : o;
                                (e = (0, R.Rt)(i, {
                                    keyAttrs: r,
                                    maxStringLength: _,
                                })),
                                    (a = (0, R.iY)(i));
                            } catch (t) {
                                e = "<unknown>";
                            }
                            if (0 === e.length) return;
                            let c = {
                                category: `ui.${t.name}`,
                                message: e,
                            };
                            a && (c.data = { "ui.component_name": a }),
                                (0, E.n)(c, {
                                    event: t.event,
                                    name: t.name,
                                    global: t.global,
                                });
                        }),
                    ),
                e.xhr &&
                    (0, _.UK)(
                        ((L = t),
                        function (t) {
                            if ((0, i.s3)() !== L) return;
                            let { startTimestamp: e, endTimestamp: a } = t,
                                r = t.xhr[_.xU];
                            if (!e || !a || !r) return;
                            let { method: n, url: o, status_code: c, body: s } = r,
                                l = {
                                    xhr: t.xhr,
                                    input: s,
                                    startTimestamp: e,
                                    endTimestamp: a,
                                };
                            (0, E.n)(
                                {
                                    category: "xhr",
                                    data: {
                                        method: n,
                                        url: o,
                                        status_code: c,
                                    },
                                    type: "http",
                                },
                                l,
                            );
                        }),
                    ),
                e.fetch &&
                    (0, s.Uf)(
                        ((p = t),
                        function (t) {
                            if ((0, i.s3)() !== p) return;
                            let { startTimestamp: e, endTimestamp: a } = t;
                            if (a && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                                if (t.error) {
                                    let r = t.fetchData,
                                        _ = {
                                            data: t.error,
                                            input: t.args,
                                            startTimestamp: e,
                                            endTimestamp: a,
                                        };
                                    (0, E.n)(
                                        {
                                            category: "fetch",
                                            data: r,
                                            level: "error",
                                            type: "http",
                                        },
                                        _,
                                    );
                                } else {
                                    let r = t.response,
                                        _ = {
                                            ...t.fetchData,
                                            status_code: r && r.status,
                                        },
                                        n = {
                                            input: t.args,
                                            response: r,
                                            startTimestamp: e,
                                            endTimestamp: a,
                                        };
                                    (0, E.n)(
                                        {
                                            category: "fetch",
                                            data: _,
                                            type: "http",
                                        },
                                        n,
                                    );
                                }
                        }),
                    ),
                e.history &&
                    (0, n.a)(
                        ((O = t),
                        function (t) {
                            if ((0, i.s3)() !== O) return;
                            let e = t.from,
                                a = t.to,
                                r = (0, N.en)(d.m9.location.href),
                                _ = e ? (0, N.en)(e) : void 0,
                                n = (0, N.en)(a);
                            (_ && _.path) || (_ = r),
                                r.protocol === n.protocol && r.host === n.host && (a = n.relative),
                                r.protocol === _.protocol && r.host === _.host && (e = _.relative),
                                (0, E.n)({
                                    category: "navigation",
                                    data: {
                                        from: e,
                                        to: a,
                                    },
                                });
                        }),
                    ),
                e.sentry &&
                    t.on(
                        "beforeSendEvent",
                        ((h = t),
                        function (t) {
                            (0, i.s3)() === h &&
                                (0, E.n)(
                                    {
                                        category: `sentry.${"transaction" === t.type ? "transaction" : "event"}`,
                                        event_id: t.event_id,
                                        level: t.level,
                                        message: (0, l.jH)(t),
                                    },
                                    { event: t },
                                );
                        }),
                    );
        },
    };
});
