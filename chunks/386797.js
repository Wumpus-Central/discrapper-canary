_.d(e, { S: () => i });
var a = _(151122),
    r = _(899517),
    n = _(873567),
    o = _(394798);
let E = r.n,
    i = (0, a._I)((t = {}) => {
        let e = null != t.frameContextLines ? t.frameContextLines : 7;
        return {
            name: "ContextLines",
            processEvent: (t) =>
                (function (t, e) {
                    let _ = E.document,
                        a = E.location && (0, n.rt)(E.location.href);
                    if (!_ || !a) return t;
                    let r = t.exception && t.exception.values;
                    if (!r || !r.length) return t;
                    let i = _.documentElement.innerHTML;
                    if (!i) return t;
                    let c = ["<!DOCTYPE html>", "<html>", ...i.split("\n"), "</html>"];
                    return (
                        r.forEach((t) => {
                            let _ = t.stacktrace;
                            _ &&
                                _.frames &&
                                (_.frames = _.frames.map((t) => {
                                    var _, r, n, E;
                                    return (
                                        (_ = t),
                                        (r = c),
                                        (n = a),
                                        (E = e),
                                        _.filename === n && _.lineno && r.length && (0, o.go)(r, _, E),
                                        _
                                    );
                                }));
                        }),
                        t
                    );
                })(t, e),
        };
    });
