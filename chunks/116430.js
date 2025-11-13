a.d(e, { X: () => l });
var r = a(622916),
    _ = a(899517),
    n = a(910731),
    o = a(954211),
    i = a(394798),
    E = a(886115),
    c = a(263449),
    s = a(233517);
let l = (0, a(151122)._I)((t = {}) => {
    let e = t.levels || r.RU;
    return {
        name: "CaptureConsole",
        setup(t) {
            "console" in _.n &&
                (0, n.e)(({ args: a, level: r }) => {
                    (0, c.s3)() === t &&
                        e.includes(r) &&
                        (function (t, e) {
                            let a = {
                                level: (0, o.V)(e),
                                extra: { arguments: t },
                            };
                            (0, c.$e)((r) => {
                                if (
                                    (r.addEventProcessor(
                                        (t) => (
                                            (t.logger = "console"),
                                            (0, i.EG)(t, {
                                                handled: !1,
                                                type: "console",
                                            }),
                                            t
                                        ),
                                    ),
                                    "assert" === e)
                                ) {
                                    if (!t[0]) {
                                        let e = `Assertion failed: ${((0, E.nK))(t.slice(1), " ") || "console.assert"}`;
                                        r.setExtra("arguments", t.slice(1)), (0, s.uT)(e, a);
                                    }
                                    return;
                                }
                                let _ = t.find((t) => t instanceof Error);
                                if (_) return void (0, s.Tb)(_, a);
                                let n = (0, E.nK)(t, " ");
                                (0, s.uT)(n, a);
                            });
                        })(a, r);
                });
        },
    };
});
