r.d(t, { X: () => l });
var n = r(622916),
    a = r(899517),
    i = r(910731),
    o = r(954211),
    _ = r(394798),
    s = r(886115),
    c = r(263449),
    E = r(233517);
let l = (0, r(151122)._I)((e = {}) => {
    let t = e.levels || n.RU;
    return {
        name: "CaptureConsole",
        setup(e) {
            "console" in a.n &&
                (0, i.e)(({ args: r, level: n }) => {
                    (0, c.s3)() === e &&
                        t.includes(n) &&
                        (function (e, t) {
                            let r = {
                                level: (0, o.V)(t),
                                extra: { arguments: e },
                            };
                            (0, c.$e)((n) => {
                                if (
                                    (n.addEventProcessor(
                                        (e) => (
                                            (e.logger = "console"),
                                            (0, _.EG)(e, {
                                                handled: !1,
                                                type: "console",
                                            }),
                                            e
                                        ),
                                    ),
                                    "assert" === t)
                                ) {
                                    if (!e[0]) {
                                        let t = `Assertion failed: ${((0, s.nK))(e.slice(1), " ") || "console.assert"}`;
                                        n.setExtra("arguments", e.slice(1)), (0, E.uT)(t, r);
                                    }
                                    return;
                                }
                                let a = e.find((e) => e instanceof Error);
                                if (a) return void (0, E.Tb)(a, r);
                                let i = (0, s.nK)(e, " ");
                                (0, E.uT)(i, r);
                            });
                        })(r, n);
                });
        },
    };
});
