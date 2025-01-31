n.d(t, { L: () => o });
var i = n(876026),
    r = n(518285),
    a = n(412169),
    s = n(219845),
    o = function () {
        var e = 1 / 0,
            t = [];
        i.C.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var i = [];
                n.activeTargets.forEach(function (t) {
                    var n = new r.A(t.target),
                        o = (0, a.D)(t.target);
                    i.push(n), (t.lastReportedSize = (0, s.Y9)(t.target, t.observedBox)), o < e && (e = o);
                }),
                    t.push(function () {
                        n.callback.call(n.observer, i, n.observer);
                    }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }
        });
        for (var n = 0, o = t; n < o.length; n++) (0, o[n])();
        return e;
    };
