_.d(e, { f: () => f });
var a = _(469359),
    r = _(157079),
    n = _(393523),
    o = _(151122),
    E = _(263449),
    i = _(572299),
    c = _(910731),
    s = _(64685),
    l = _(394798),
    I = _(622916),
    R = _(467510),
    N = _(954211),
    A = _(886115),
    u = _(873567),
    T = _(454463),
    d = _(163162);
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
            var _, o, f, O, L, p, C;
            e.console &&
                (0, c.e)(
                    ((_ = t),
                    function (t) {
                        if ((0, E.s3)() !== _) return;
                        let e = {
                            category: "console",
                            data: {
                                arguments: t.args,
                                logger: "console",
                            },
                            level: (0, N.V)(t.level),
                            message: (0, A.nK)(t.args, " "),
                        };
                        if ("assert" === t.level)
                            if (!1 !== t.args[0]) return;
                            else
                                (e.message = `Assertion failed: ${((0, A.nK))(t.args.slice(1), " ") || "console.assert"}`),
                                    (e.data.arguments = t.args.slice(1));
                        (0, i.n)(e, {
                            input: t.args,
                            level: t.level,
                        });
                    }),
                ),
                e.dom &&
                    (0, a.O)(
                        ((o = t),
                        (f = e.dom),
                        function (t) {
                            let e, _;
                            if ((0, E.s3)() !== o) return;
                            let a = "object" == typeof f ? f.serializeAttribute : void 0,
                                r =
                                    "object" == typeof f && "number" == typeof f.maxStringLength
                                        ? f.maxStringLength
                                        : void 0;
                            r &&
                                r > 1024 &&
                                (T.X &&
                                    I.kg.warn(
                                        `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${r} was configured. Sentry will use 1024 instead.`,
                                    ),
                                (r = 1024)),
                                "string" == typeof a && (a = [a]);
                            try {
                                var n;
                                let o = t.event,
                                    E = (n = o) && n.target ? o.target : o;
                                (e = (0, R.Rt)(E, {
                                    keyAttrs: a,
                                    maxStringLength: r,
                                })),
                                    (_ = (0, R.iY)(E));
                            } catch (t) {
                                e = "<unknown>";
                            }
                            if (0 === e.length) return;
                            let c = {
                                category: `ui.${t.name}`,
                                message: e,
                            };
                            _ && (c.data = { "ui.component_name": _ }),
                                (0, i.n)(c, {
                                    event: t.event,
                                    name: t.name,
                                    global: t.global,
                                });
                        }),
                    ),
                e.xhr &&
                    (0, r.UK)(
                        ((O = t),
                        function (t) {
                            if ((0, E.s3)() !== O) return;
                            let { startTimestamp: e, endTimestamp: _ } = t,
                                a = t.xhr[r.xU];
                            if (!e || !_ || !a) return;
                            let { method: n, url: o, status_code: c, body: s } = a,
                                l = {
                                    xhr: t.xhr,
                                    input: s,
                                    startTimestamp: e,
                                    endTimestamp: _,
                                };
                            (0, i.n)(
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
                        ((L = t),
                        function (t) {
                            if ((0, E.s3)() !== L) return;
                            let { startTimestamp: e, endTimestamp: _ } = t;
                            if (_ && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                                if (t.error) {
                                    let a = t.fetchData,
                                        r = {
                                            data: t.error,
                                            input: t.args,
                                            startTimestamp: e,
                                            endTimestamp: _,
                                        };
                                    (0, i.n)(
                                        {
                                            category: "fetch",
                                            data: a,
                                            level: "error",
                                            type: "http",
                                        },
                                        r,
                                    );
                                } else {
                                    let a = t.response,
                                        r = {
                                            ...t.fetchData,
                                            status_code: a && a.status,
                                        },
                                        n = {
                                            input: t.args,
                                            response: a,
                                            startTimestamp: e,
                                            endTimestamp: _,
                                        };
                                    (0, i.n)(
                                        {
                                            category: "fetch",
                                            data: r,
                                            type: "http",
                                        },
                                        n,
                                    );
                                }
                        }),
                    ),
                e.history &&
                    (0, n.a)(
                        ((p = t),
                        function (t) {
                            if ((0, E.s3)() !== p) return;
                            let e = t.from,
                                _ = t.to,
                                a = (0, u.en)(d.m9.location.href),
                                r = e ? (0, u.en)(e) : void 0,
                                n = (0, u.en)(_);
                            (r && r.path) || (r = a),
                                a.protocol === n.protocol && a.host === n.host && (_ = n.relative),
                                a.protocol === r.protocol && a.host === r.host && (e = r.relative),
                                (0, i.n)({
                                    category: "navigation",
                                    data: {
                                        from: e,
                                        to: _,
                                    },
                                });
                        }),
                    ),
                e.sentry &&
                    t.on(
                        "beforeSendEvent",
                        ((C = t),
                        function (t) {
                            (0, E.s3)() === C &&
                                (0, i.n)(
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
