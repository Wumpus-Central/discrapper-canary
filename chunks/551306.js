"use strict";
var t,
    r = "function" == typeof Map && Map.prototype ? Map : null,
    n = "function" == typeof Set && Set.prototype ? Set : null;
n ||
    (t = function (e) {
        return !1;
    });
var o = r ? Map.prototype.has : null,
    i = n ? Set.prototype.has : null;
t ||
    i ||
    (t = function (e) {
        return !1;
    }),
    (e.exports =
        t ||
        function (e) {
            if (!e || "object" != typeof e) return !1;
            try {
                if ((i.call(e), o))
                    try {
                        o.call(e);
                    } catch (e) {
                        return !0;
                    }
                return e instanceof n;
            } catch (e) {}
            return !1;
        });
