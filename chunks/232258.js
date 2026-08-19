"use strict";
var t,
    r = "function" == typeof Map && Map.prototype ? Map : null,
    n = "function" == typeof Set && Set.prototype ? Set : null;
r ||
    (t = function (e) {
        return !1;
    });
var o = r ? Map.prototype.has : null,
    i = n ? Set.prototype.has : null;
t ||
    o ||
    (t = function (e) {
        return !1;
    }),
    (e.exports =
        t ||
        function (e) {
            if (!e || "object" != typeof e) return !1;
            try {
                if ((o.call(e), i))
                    try {
                        i.call(e);
                    } catch (e) {
                        return !0;
                    }
                return e instanceof r;
            } catch (e) {}
            return !1;
        });
