n.d(t, { L: () => o });
var i = n(304329),
    r = n(899497),
    a = n(977584),
    s = n(229579),
    o = function () {
        var e = 1 / 0,
            t = [];
        i.C.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var i = [];
                n.activeTargets.forEach(function (t) {
                    var n = new r.A(t.target),
                        o = (0, a.D)(t.target);
                    i.push(n), (t.lastReportedSize = (0, s.Y)(t.target, t.observedBox)), o < e && (e = o);
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
