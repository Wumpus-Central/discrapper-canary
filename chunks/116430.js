_.d(e, { X: () => l });
var a = _(622916),
    r = _(899517),
    n = _(910731),
    o = _(954211),
    E = _(394798),
    i = _(886115),
    c = _(263449),
    s = _(233517);
let l = (0, _(151122)._I)((t = {}) => {
    let e = t.levels || a.RU;
    return {
        name: "CaptureConsole",
        setup(t) {
            "console" in r.n &&
                (0, n.e)(({ args: _, level: a }) => {
                    (0, c.s3)() === t &&
                        e.includes(a) &&
                        (function (t, e) {
                            let _ = {
                                level: (0, o.V)(e),
                                extra: { arguments: t },
                            };
                            (0, c.$e)((a) => {
                                if (
                                    (a.addEventProcessor(
                                        (t) => (
                                            (t.logger = "console"),
                                            (0, E.EG)(t, {
                                                handled: !1,
                                                type: "console",
                                            }),
                                            t
                                        ),
                                    ),
                                    "assert" === e)
                                ) {
                                    if (!t[0]) {
                                        let e = `Assertion failed: ${((0, i.nK))(t.slice(1), " ") || "console.assert"}`;
                                        a.setExtra("arguments", t.slice(1)), (0, s.uT)(e, _);
                                    }
                                    return;
                                }
                                let r = t.find((t) => t instanceof Error);
                                if (r) return void (0, s.Tb)(r, _);
                                let n = (0, i.nK)(t, " ");
                                (0, s.uT)(n, _);
                            });
                        })(_, a);
                });
        },
    };
});
