r.d(t, { X: () => l });
var n = r(98076),
    a = r(606093),
    i = r(533353),
    o = r(463725),
    _ = r(431660),
    s = r(1693),
    c = r(509440),
    E = r(771560);
let l = (0, r(688560)._I)((e = {}) => {
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
