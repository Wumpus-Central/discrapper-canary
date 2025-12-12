n.d(t, { X: () => l });
var r = n(98076),
    i = n(606093),
    a = n(533353),
    o = n(463725),
    _ = n(431660),
    s = n(1693),
    c = n(509440),
    E = n(771560);
let l = (0, n(688560)._I)((e = {}) => {
    let t = e.levels || r.RU;
    return {
        name: "CaptureConsole",
        setup(e) {
            "console" in i.n &&
                (0, a.e)(({ args: n, level: r }) => {
                    (0, c.s3)() === e &&
                        t.includes(r) &&
                        (function (e, t) {
                            let n = {
                                level: (0, o.V)(t),
                                extra: { arguments: e },
                            };
                            (0, c.$e)((r) => {
                                if (
                                    (r.addEventProcessor(
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
                                        r.setExtra("arguments", e.slice(1)), (0, E.uT)(t, n);
                                    }
                                    return;
                                }
                                let i = e.find((e) => e instanceof Error);
                                if (i) return void (0, E.Tb)(i, n);
                                let a = (0, s.nK)(e, " ");
                                (0, E.uT)(a, n);
                            });
                        })(n, r);
                });
        },
    };
});
