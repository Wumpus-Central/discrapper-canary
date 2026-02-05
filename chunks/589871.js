"use strict";
r.d(t, { A: () => a });
var n = r(549544),
    o = r(468999);
let a = function (e, t) {
    var r = -1,
        a = (0, o.A)(e) ? Array(e.length) : [];
    return (
        (0, n.A)(e, function (e, n, o) {
            a[++r] = t(e, n, o);
        }),
        a
    );
};
