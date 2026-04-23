"use strict";
n.d(t, { n: () => a });
var r = n(648061),
    i = n(792843),
    s = n(250015),
    a = function (e) {
        s.PP.clear(),
            r.g.forEach(function (t) {
                t.activeTargets.splice(0, t.activeTargets.length),
                    t.skippedTargets.splice(0, t.skippedTargets.length),
                    t.observationTargets.forEach(function (n) {
                        n.isActive() && ((0, i.n)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                    });
            });
    };
