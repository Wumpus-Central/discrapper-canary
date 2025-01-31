n.d(t, { M: () => u });
var i = n(923341),
    r = n(130501),
    a = n(75725),
    s = n(304329),
    o = new WeakMap(),
    l = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    u = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new a.r(e, t);
                o.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                var a = o.get(e),
                    u = 0 === a.observationTargets.length;
                0 > l(a.observationTargets, t) && (u && s.C.push(a), a.observationTargets.push(new r.Q(t, n && n.box)), (0, i.t)(1), i.p.schedule());
            }),
            (e.unobserve = function (e, t) {
                var n = o.get(e),
                    r = l(n.observationTargets, t),
                    a = 1 === n.observationTargets.length;
                r >= 0 && (a && s.C.splice(s.C.indexOf(n), 1), n.observationTargets.splice(r, 1), (0, i.t)(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    n = o.get(e);
                n.observationTargets.slice().forEach(function (n) {
                    return t.unobserve(e, n.target);
                }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
        );
    })();
