a.d(e, { X: () => l });
var r = a(622916),
    n = a(899517),
    _ = a(910731),
    o = a(954211),
    i = a(394798),
    c = a(886115),
    s = a(263449),
    E = a(233517);
let l = (0, a(151122)._I)((t = {}) => {
    let e = t.levels || r.RU;
    return {
        name: 'CaptureConsole',
        setup(t) {
            'console' in n.n &&
                (0, _.e)(({ args: a, level: r }) => {
                    (0, s.s3)() === t &&
                        e.includes(r) &&
                        (function (t, e) {
                            let a = {
                                level: (0, o.V)(e),
                                extra: { arguments: t }
                            };
                            (0, s.$e)((r) => {
                                if (
                                    (r.addEventProcessor(
                                        (t) => (
                                            (t.logger = 'console'),
                                            (0, i.EG)(t, {
                                                handled: !1,
                                                type: 'console'
                                            }),
                                            t
                                        )
                                    ),
                                    'assert' === e)
                                ) {
                                    if (!t[0]) {
                                        let e = `Assertion failed: ${(0, c.nK)(t.slice(1), ' ') || 'console.assert'}`;
                                        r.setExtra('arguments', t.slice(1)), (0, E.uT)(e, a);
                                    }
                                    return;
                                }
                                let n = t.find((t) => t instanceof Error);
                                if (n) return void (0, E.Tb)(n, a);
                                let _ = (0, c.nK)(t, ' ');
                                (0, E.uT)(_, a);
                            });
                        })(a, r);
                });
        }
    };
});
