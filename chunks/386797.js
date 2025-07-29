a.d(e, { S: () => c });
var r = a(151122),
    _ = a(899517),
    n = a(873567),
    o = a(394798);
let i = _.n,
    c = (0, r._I)((t = {}) => {
        let e = null != t.frameContextLines ? t.frameContextLines : 7;
        return {
            name: 'ContextLines',
            processEvent: (t) =>
                (function (t, e) {
                    let a = i.document,
                        r = i.location && (0, n.rt)(i.location.href);
                    if (!a || !r) return t;
                    let _ = t.exception && t.exception.values;
                    if (!_ || !_.length) return t;
                    let c = a.documentElement.innerHTML;
                    if (!c) return t;
                    let E = ['<!DOCTYPE html>', '<html>', ...c.split('\n'), '</html>'];
                    return (
                        _.forEach((t) => {
                            let a = t.stacktrace;
                            a &&
                                a.frames &&
                                (a.frames = a.frames.map((t) => {
                                    var a, _, n, i;
                                    return ((a = t), (_ = E), (n = r), (i = e), a.filename === n && a.lineno && _.length && (0, o.go)(_, a, i), a);
                                }));
                        }),
                        t
                    );
                })(t, e)
        };
    });
