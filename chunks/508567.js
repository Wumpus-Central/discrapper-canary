n.d(t, { T: () => o });
var r = n(876026),
    i = n(412169),
    a = n(219845),
    o = function (e) {
        a.Fs.clear(),
            r.C.forEach(function (t) {
                t.activeTargets.splice(0, t.activeTargets.length),
                    t.skippedTargets.splice(0, t.skippedTargets.length),
                    t.observationTargets.forEach(function (n) {
                        n.isActive() && ((0, i.D)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                    });
            });
    };
