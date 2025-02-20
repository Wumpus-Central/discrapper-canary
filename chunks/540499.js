n.d(t, { L: () => s });
var r = n(876026),
    i = n(518285),
    o = n(412169),
    a = n(219845),
    s = function () {
        var e = 1 / 0,
            t = [];
        r.C.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                    var n = new i.A(t.target),
                        s = (0, o.D)(t.target);
                    r.push(n), (t.lastReportedSize = (0, a.Y9)(t.target, t.observedBox)), s < e && (e = s);
                }),
                    t.push(function () {
                        n.callback.call(n.observer, r, n.observer);
                    }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }
        });
        for (var n = 0, s = t; n < s.length; n++) (0, s[n])();
        return e;
    };
