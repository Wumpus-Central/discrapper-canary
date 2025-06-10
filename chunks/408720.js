a.d(e, { f: () => T });
var r = a(469359),
    _ = a(157079),
    n = a(393523),
    o = a(151122),
    i = a(263449),
    c = a(572299),
    E = a(910731),
    s = a(64685),
    l = a(394798),
    u = a(622916),
    I = a(467510),
    R = a(954211),
    d = a(886115),
    N = a(873567),
    A = a(454463),
    f = a(163162);
let T = (0, o._I)((t = {}) => {
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
            var a, o, T, p, L, h, O;
            e.console &&
                (0, E.e)(
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
                        (T = e.dom),
                        function (t) {
                            let e, a;
                            if ((0, i.s3)() !== o) return;
                            let r = 'object' == typeof T ? T.serializeAttribute : void 0,
                                _ = 'object' == typeof T && 'number' == typeof T.maxStringLength ? T.maxStringLength : void 0;
                            _ && _ > 1024 && (A.X && u.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${_} was configured. Sentry will use 1024 instead.`), (_ = 1024)), 'string' == typeof r && (r = [r]);
                            try {
                                var n;
                                let o = t.event,
                                    i = (n = o) && n.target ? o.target : o;
                                (e = (0, I.Rt)(i, {
                                    keyAttrs: r,
                                    maxStringLength: _
                                })),
                                    (a = (0, I.iY)(i));
                            } catch (t) {
                                e = '<unknown>';
                            }
                            if (0 === e.length) return;
                            let E = {
                                category: `ui.${t.name}`,
                                message: e
                            };
                            a && (E.data = { 'ui.component_name': a }),
                                (0, c.n)(E, {
                                    event: t.event,
                                    name: t.name,
                                    global: t.global
                                });
                        })
                    ),
                e.xhr &&
                    (0, _.UK)(
                        ((p = t),
                        function (t) {
                            if ((0, i.s3)() !== p) return;
                            let { startTimestamp: e, endTimestamp: a } = t,
                                r = t.xhr[_.xU];
                            if (!e || !a || !r) return;
                            let { method: n, url: o, status_code: E, body: s } = r,
                                l = {
                                    xhr: t.xhr,
                                    input: s,
                                    startTimestamp: e,
                                    endTimestamp: a
                                };
                            (0, c.n)(
                                {
                                    category: 'xhr',
                                    data: {
                                        method: n,
                                        url: o,
                                        status_code: E
                                    },
                                    type: 'http'
                                },
                                l
                            );
                        })
                    ),
                e.fetch &&
                    (0, s.Uf)(
                        ((L = t),
                        function (t) {
                            if ((0, i.s3)() !== L) return;
                            let { startTimestamp: e, endTimestamp: a } = t;
                            if (a && (!t.fetchData.url.match(/sentry_key/) || 'POST' !== t.fetchData.method))
                                if (t.error) {
                                    let r = t.fetchData,
                                        _ = {
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
                                        _
                                    );
                                } else {
                                    let r = t.response,
                                        _ = {
                                            ...t.fetchData,
                                            status_code: r && r.status
                                        },
                                        n = {
                                            input: t.args,
                                            response: r,
                                            startTimestamp: e,
                                            endTimestamp: a
                                        };
                                    (0, c.n)(
                                        {
                                            category: 'fetch',
                                            data: _,
                                            type: 'http'
                                        },
                                        n
                                    );
                                }
                        })
                    ),
                e.history &&
                    (0, n.a)(
                        ((h = t),
                        function (t) {
                            if ((0, i.s3)() !== h) return;
                            let e = t.from,
                                a = t.to,
                                r = (0, N.en)(f.m9.location.href),
                                _ = e ? (0, N.en)(e) : void 0,
                                n = (0, N.en)(a);
                            (_ && _.path) || (_ = r),
                                r.protocol === n.protocol && r.host === n.host && (a = n.relative),
                                r.protocol === _.protocol && r.host === _.host && (e = _.relative),
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
