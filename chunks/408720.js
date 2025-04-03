a.d(e, { f: () => N });
var r = a(469359),
    n = a(157079),
    _ = a(393523),
    o = a(151122),
    i = a(263449),
    c = a(572299),
    s = a(910731),
    E = a(64685),
    l = a(394798),
    u = a(622916),
    I = a(467510),
    R = a(954211),
    d = a(886115),
    A = a(873567),
    f = a(454463),
    p = a(163162);
let N = (0, o._I)((t = {}) => {
    let e = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...t
    };
    return {
        name: 'Breadcrumbs',
        setup(t) {
            var a, o, N, T, L, h, O;
            e.console &&
                (0, s.e)(
                    ((a = t),
                    function (t) {
                        if ((0, i.s3)() !== a) return;
                        let e = {
                            category: 'console',
                            data: {
                                arguments: t.args,
                                logger: 'console'
                            },
                            level: (0, R.V)(t.level),
                            message: (0, d.nK)(t.args, ' ')
                        };
                        if ('assert' === t.level)
                            if (!1 !== t.args[0]) return;
                            else (e.message = `Assertion failed: ${(0, d.nK)(t.args.slice(1), ' ') || 'console.assert'}`), (e.data.arguments = t.args.slice(1));
                        (0, c.n)(e, {
                            input: t.args,
                            level: t.level
                        });
                    })
                ),
                e.dom &&
                    (0, r.O)(
                        ((o = t),
                        (N = e.dom),
                        function (t) {
                            let e, a;
                            if ((0, i.s3)() !== o) return;
                            let r = 'object' == typeof N ? N.serializeAttribute : void 0,
                                n = 'object' == typeof N && 'number' == typeof N.maxStringLength ? N.maxStringLength : void 0;
                            n && n > 1024 && (f.X && u.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${n} was configured. Sentry will use 1024 instead.`), (n = 1024)), 'string' == typeof r && (r = [r]);
                            try {
                                var _;
                                let o = t.event,
                                    i = (_ = o) && _.target ? o.target : o;
                                (e = (0, I.Rt)(i, {
                                    keyAttrs: r,
                                    maxStringLength: n
                                })),
                                    (a = (0, I.iY)(i));
                            } catch (t) {
                                e = '<unknown>';
                            }
                            if (0 === e.length) return;
                            let s = {
                                category: `ui.${t.name}`,
                                message: e
                            };
                            a && (s.data = { 'ui.component_name': a }),
                                (0, c.n)(s, {
                                    event: t.event,
                                    name: t.name,
                                    global: t.global
                                });
                        })
                    ),
                e.xhr &&
                    (0, n.UK)(
                        ((T = t),
                        function (t) {
                            if ((0, i.s3)() !== T) return;
                            let { startTimestamp: e, endTimestamp: a } = t,
                                r = t.xhr[n.xU];
                            if (!e || !a || !r) return;
                            let { method: _, url: o, status_code: s, body: E } = r,
                                l = {
                                    xhr: t.xhr,
                                    input: E,
                                    startTimestamp: e,
                                    endTimestamp: a
                                };
                            (0, c.n)(
                                {
                                    category: 'xhr',
                                    data: {
                                        method: _,
                                        url: o,
                                        status_code: s
                                    },
                                    type: 'http'
                                },
                                l
                            );
                        })
                    ),
                e.fetch &&
                    (0, E.Uf)(
                        ((L = t),
                        function (t) {
                            if ((0, i.s3)() !== L) return;
                            let { startTimestamp: e, endTimestamp: a } = t;
                            if (a && (!t.fetchData.url.match(/sentry_key/) || 'POST' !== t.fetchData.method))
                                if (t.error) {
                                    let r = t.fetchData,
                                        n = {
                                            data: t.error,
                                            input: t.args,
                                            startTimestamp: e,
                                            endTimestamp: a
                                        };
                                    (0, c.n)(
                                        {
                                            category: 'fetch',
                                            data: r,
                                            level: 'error',
                                            type: 'http'
                                        },
                                        n
                                    );
                                } else {
                                    let r = t.response,
                                        n = {
                                            ...t.fetchData,
                                            status_code: r && r.status
                                        },
                                        _ = {
                                            input: t.args,
                                            response: r,
                                            startTimestamp: e,
                                            endTimestamp: a
                                        };
                                    (0, c.n)(
                                        {
                                            category: 'fetch',
                                            data: n,
                                            type: 'http'
                                        },
                                        _
                                    );
                                }
                        })
                    ),
                e.history &&
                    (0, _.a)(
                        ((h = t),
                        function (t) {
                            if ((0, i.s3)() !== h) return;
                            let e = t.from,
                                a = t.to,
                                r = (0, A.en)(p.m9.location.href),
                                n = e ? (0, A.en)(e) : void 0,
                                _ = (0, A.en)(a);
                            (n && n.path) || (n = r),
                                r.protocol === _.protocol && r.host === _.host && (a = _.relative),
                                r.protocol === n.protocol && r.host === n.host && (e = n.relative),
                                (0, c.n)({
                                    category: 'navigation',
                                    data: {
                                        from: e,
                                        to: a
                                    }
                                });
                        })
                    ),
                e.sentry &&
                    t.on(
                        'beforeSendEvent',
                        ((O = t),
                        function (t) {
                            (0, i.s3)() === O &&
                                (0, c.n)(
                                    {
                                        category: `sentry.${'transaction' === t.type ? 'transaction' : 'event'}`,
                                        event_id: t.event_id,
                                        level: t.level,
                                        message: (0, l.jH)(t)
                                    },
                                    { event: t }
                                );
                        })
                    );
        }
    };
});
