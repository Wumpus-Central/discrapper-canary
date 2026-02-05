"use strict";
var r = n(581390),
    i = n(273761),
    a = n(503199),
    s = function (e) {
        return function (t, n, s) {
            var o,
                l = r(t),
                u = a(l);
            if (0 === u) return !e && -1;
            var c = i(s, u);
            if (e && n != n) {
                for (; u > c; ) if ((o = l[c++]) != o) return !0;
            } else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1;
        };
    };
e.exports = { includes: s(!0), indexOf: s(!1) };
