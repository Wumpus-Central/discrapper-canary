n.d(t, { S: () => s });
var r = n(688560),
    i = n(606093),
    a = n(840247),
    o = n(431660);
let _ = i.n,
    s = (0, r._I)((e = {}) => {
        let t = null != e.frameContextLines ? e.frameContextLines : 7;
        return {
            name: "ContextLines",
            processEvent: (e) =>
                (function (e, t) {
                    let n = _.document,
                        r = _.location && (0, a.rt)(_.location.href);
                    if (!n || !r) return e;
                    let i = e.exception && e.exception.values;
                    if (!i || !i.length) return e;
                    let s = n.documentElement.innerHTML;
                    if (!s) return e;
                    let c = ["<!DOCTYPE html>", "<html>", ...s.split("\n"), "</html>"];
                    return (
                        i.forEach((e) => {
                            let n = e.stacktrace;
                            n &&
                                n.frames &&
                                (n.frames = n.frames.map((e) => {
                                    var n, i, a, _;
                                    return (
                                        (n = e),
                                        (i = c),
                                        (a = r),
                                        (_ = t),
                                        n.filename === a && n.lineno && i.length && (0, o.go)(i, n, _),
                                        n
                                    );
                                }));
                        }),
                        e
                    );
                })(e, t),
        };
    });
