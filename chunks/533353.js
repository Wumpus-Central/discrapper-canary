n.d(t, { e: () => _ });
var r = n(98076),
    i = n(886649),
    a = n(606093),
    o = n(958209);
function _(e) {
    let t = "console";
    (0, o.Hj)(t, e), (0, o.D2)(t, s);
}
function s() {
    "console" in a.n &&
        r.RU.forEach(function (e) {
            e in a.n.console &&
                (0, i.hl)(a.n.console, e, function (t) {
                    return (
                        (r.LD[e] = t),
                        function (...t) {
                            (0, o.rK)("console", {
                                args: t,
                                level: e,
                            });
                            let n = r.LD[e];
                            n && n.apply(a.n.console, t);
                        }
                    );
                });
        });
}
