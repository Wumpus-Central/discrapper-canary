"use strict";
r.d(t, { A: () => a });
var n = r(176989),
    o = r(608589);
let a = function (e) {
    for (var t = (0, o.A)(e), r = t.length; r--; ) {
        var a = t[r],
            i = e[a];
        t[r] = [a, i, (0, n.A)(i)];
    }
    return t;
};
