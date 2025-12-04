r.d(t, { e: () => _ });
var n = r(98076),
    a = r(886649),
    i = r(606093),
    o = r(958209);
function _(e) {
    let t = "console";
    (0, o.Hj)(t, e), (0, o.D2)(t, s);
}
function s() {
    "console" in i.n &&
        n.RU.forEach(function (e) {
            e in i.n.console &&
                (0, a.hl)(i.n.console, e, function (t) {
                    return (
                        (n.LD[e] = t),
                        function (...t) {
                            (0, o.rK)("console", {
                                args: t,
                                level: e,
                            });
                            let r = n.LD[e];
                            r && r.apply(i.n.console, t);
                        }
                    );
                });
        });
}
