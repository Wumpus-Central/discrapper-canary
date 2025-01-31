n.d(t, { T: () => s });
var i = n(876026),
    r = n(412169),
    a = n(219845),
    s = function (e) {
        a.Fs.clear(),
            i.C.forEach(function (t) {
                t.activeTargets.splice(0, t.activeTargets.length),
                    t.skippedTargets.splice(0, t.skippedTargets.length),
                    t.observationTargets.forEach(function (n) {
                        n.isActive() && ((0, r.D)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                    });
            });
    };
