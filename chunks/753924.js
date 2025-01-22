r.d(n, {
    M: function () {
        return c;
    }
});
var i = r(923341),
    a = r(130501),
    o = r(75725),
    s = r(304329),
    l = new WeakMap(),
    u = function (e, n) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === n) return r;
        return -1;
    },
    c = (function () {
        function e() {}
        return (
            (e.connect = function (e, n) {
                var r = new o.r(e, n);
                l.set(e, r);
            }),
            (e.observe = function (e, n, r) {
                var o = l.get(e),
                    c = 0 === o.observationTargets.length;
                0 > u(o.observationTargets, n) && (c && s.C.push(o), o.observationTargets.push(new a.Q(n, r && r.box)), (0, i.t)(1), i.p.schedule());
            }),
            (e.unobserve = function (e, n) {
                var r = l.get(e),
                    a = u(r.observationTargets, n),
                    o = 1 === r.observationTargets.length;
                a >= 0 && (o && s.C.splice(s.C.indexOf(r), 1), r.observationTargets.splice(a, 1), (0, i.t)(-1));
            }),
            (e.disconnect = function (e) {
                var n = this,
                    r = l.get(e);
                r.observationTargets.slice().forEach(function (r) {
                    return n.unobserve(e, r.target);
                }),
                    r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
        );
    })();
