"use strict";
var i = n(581390),
    r = n(273761),
    s = n(503199),
    a = function (e) {
        return function (t, n, a) {
            var o,
                l = i(t),
                u = s(l);
            if (0 === u) return !e && -1;
            var c = r(a, u);
            if (e && n != n) {
                for (; u > c; ) if ((o = l[c++]) != o) return !0;
            } else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1;
        };
    };
e.exports = { includes: a(!0), indexOf: a(!1) };
