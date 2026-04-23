"use strict";
var n = e(675879),
    o = e(453669),
    s = e(309270),
    i = e(459547),
    u = e(57284),
    c = n([].push);
t.exports = function (t) {
    if (s(t)) return t;
    if (o(t)) {
        for (var r = t.length, e = [], n = 0; n < r; n++) {
            var a = t[n];
            "string" == typeof a
                ? c(e, a)
                : ("number" == typeof a || "Number" === i(a) || "String" === i(a)) && c(e, u(a));
        }
        var f = e.length,
            p = !0;
        return function (t, r) {
            if (p) return (p = !1), r;
            if (o(this)) return r;
            for (var n = 0; n < f; n++) if (e[n] === t) return r;
        };
    }
};
