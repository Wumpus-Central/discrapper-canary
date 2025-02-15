a.d(e, { S: () => c });
var r = a(151122),
    n = a(899517),
    _ = a(873567),
    o = a(394798);
let i = n.n,
    c = (0, r._I)((t = {}) => {
        let e = null != t.frameContextLines ? t.frameContextLines : 7;
        return {
            name: 'ContextLines',
            processEvent: (t) =>
                (function (t, e) {
                    let a = i.document,
                        r = i.location && (0, _.rt)(i.location.href);
                    if (!a || !r) return t;
                    let n = t.exception && t.exception.values;
                    if (!n || !n.length) return t;
                    let c = a.documentElement.innerHTML;
                    if (!c) return t;
                    let s = ['<!DOCTYPE html>', '<html>', ...c.split('\n'), '</html>'];
                    return (
                        n.forEach((t) => {
                            let a = t.stacktrace;
                            a &&
                                a.frames &&
                                (a.frames = a.frames.map((t) => {
                                    var a, n, _, i;
                                    return (a = t), (n = s), (_ = r), (i = e), a.filename === _ && a.lineno && n.length && (0, o.go)(n, a, i), a;
                                }));
                        }),
                        t
                    );
                })(t, e)
        };
    });
