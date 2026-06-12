"use strict";
var t,
    n = "function" == typeof Map && Map.prototype ? Map : null,
    i = "function" == typeof Set && Set.prototype ? Set : null;
i ||
    (t = function (e) {
        return !1;
    });
var r = n ? Map.prototype.has : null,
    s = i ? Set.prototype.has : null;
t ||
    s ||
    (t = function (e) {
        return !1;
    }),
    (e.exports =
        t ||
        function (e) {
            if (!e || "object" != typeof e) return !1;
            try {
                if ((s.call(e), r))
                    try {
                        r.call(e);
                    } catch (e) {
                        return !0;
                    }
                return e instanceof i;
            } catch (e) {}
            return !1;
        });
