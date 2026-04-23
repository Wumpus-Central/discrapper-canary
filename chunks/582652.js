"use strict";
n.d(t, { J: () => u });
var r = n(336527),
    i = n(335146),
    s = n(428541),
    a = n(648061),
    o = new Map(),
    l = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    u = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new s.M(e, t);
                a.g.push(n), o.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                if (o.has(e)) {
                    var s = o.get(e);
                    0 > l(s.observationTargets, t) &&
                        (s.observationTargets.push(new i.V(t, n && n.box)), (0, r.L)(1), r.c.schedule());
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
                    a.g.splice(a.g.indexOf(t), 1), o.delete(e), (0, r.L)(-t.observationTargets.length);
                }
            }),
            e
        );
    })();
