n.d(t, { T: () => a });
var r = n(312413),
    i = n(995687),
    a = function (e) {
        r.C.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (n) {
                    n.isActive() && ((0, i.D)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                });
        });
    };
