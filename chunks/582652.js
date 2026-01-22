n.d(t, { J: () => c });
var r = n(336527),
    i = n(335146),
    a = n(428541),
    s = n(648061),
    o = new Map(),
    l = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    c = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new a.M(e, t);
                s.g.push(n), o.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                if (o.has(e)) {
                    var a = o.get(e);
                    0 > l(a.observationTargets, t) &&
                        (a.observationTargets.push(new i.V(t, n && n.box)), (0, r.L)(1), r.c.schedule());
                }
            }),
            (e.unobserve = function (e, t) {
                if (o.has(e)) {
                    var n = o.get(e),
                        i = l(n.observationTargets, t);
                    i >= 0 && (n.observationTargets.splice(i, 1), (0, r.L)(-1));
                }
            }),
            (e.disconnect = function (e) {
                if (o.has(e)) {
                    var t = o.get(e);
                    s.g.splice(s.g.indexOf(t), 1), o.delete(e), (0, r.L)(-t.observationTargets.length);
                }
            }),
            e
        );
    })();
