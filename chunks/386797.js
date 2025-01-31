a.d(e, { S: () => c });
var r = a(151122),
    n = a(899517),
    o = a(873567),
    _ = a(394798);
let i = n.n,
    c = (0, r._I)((t = {}) => {
        let e = null != t.frameContextLines ? t.frameContextLines : 7;
        return {
            name: 'ContextLines',
            processEvent: (t) =>
                (function (t, e) {
                    let a = i.document,
                        r = i.location && (0, o.rt)(i.location.href);
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
                                    var a, n, o, i;
                                    return (a = t), (n = s), (o = r), (i = e), a.filename === o && a.lineno && n.length && (0, _.go)(n, a, i), a;
                                }));
                        }),
                        t
                    );
                })(t, e)
        };
    });
