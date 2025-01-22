r.d(n, {
    T: function () {
        return s;
    }
});
var i = r(876026),
    a = r(412169),
    o = r(219845),
    s = function (e) {
        o.Fs.clear(),
            i.C.forEach(function (n) {
                n.activeTargets.splice(0, n.activeTargets.length),
                    n.skippedTargets.splice(0, n.skippedTargets.length),
                    n.observationTargets.forEach(function (r) {
                        r.isActive() && ((0, a.D)(r.target) > e ? n.activeTargets.push(r) : n.skippedTargets.push(r));
                    });
            });
    };
