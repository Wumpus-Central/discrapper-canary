r.d(n, {
    T: function () {
        return o;
    }
});
var i = r(312413),
    a = r(995687),
    o = function (e) {
        i.C.forEach(function (n) {
            n.activeTargets.splice(0, n.activeTargets.length),
                n.skippedTargets.splice(0, n.skippedTargets.length),
                n.observationTargets.forEach(function (r) {
                    r.isActive() && ((0, a.D)(r.target) > e ? n.activeTargets.push(r) : n.skippedTargets.push(r));
                });
        });
    };
