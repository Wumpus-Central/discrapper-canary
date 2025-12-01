r.d(t, { S: () => s });
var n = r(151122),
    a = r(899517),
    i = r(873567),
    o = r(394798);
let _ = a.n,
    s = (0, n._I)((e = {}) => {
        let t = null != e.frameContextLines ? e.frameContextLines : 7;
        return {
            name: "ContextLines",
            processEvent: (e) =>
                (function (e, t) {
                    let r = _.document,
                        n = _.location && (0, i.rt)(_.location.href);
                    if (!r || !n) return e;
                    let a = e.exception && e.exception.values;
                    if (!a || !a.length) return e;
                    let s = r.documentElement.innerHTML;
                    if (!s) return e;
                    let c = ["<!DOCTYPE html>", "<html>", ...s.split("\n"), "</html>"];
                    return (
                        a.forEach((e) => {
                            let r = e.stacktrace;
                            r &&
                                r.frames &&
                                (r.frames = r.frames.map((e) => {
                                    var r, a, i, _;
                                    return (
                                        (r = e),
                                        (a = c),
                                        (i = n),
                                        (_ = t),
                                        r.filename === i && r.lineno && a.length && (0, o.go)(a, r, _),
                                        r
                                    );
                                }));
                        }),
                        e
                    );
                })(e, t),
        };
    });
