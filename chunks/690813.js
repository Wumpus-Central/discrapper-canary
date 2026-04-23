"use strict";
n.d(t, { n: () => s });
var r = n(424187),
    i = n(522725),
    s = function (e) {
        r.g.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (n) {
                    n.isActive() && ((0, i.n)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                });
        });
    };
