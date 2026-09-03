var t,
    r = "function" == typeof Map && Map.prototype ? Map : null,
    n = "function" == typeof Set && Set.prototype ? Set : null;
n ||
    (t = function (e) {
        return !1;
    });
var i = r ? Map.prototype.has : null,
    o = n ? Set.prototype.has : null;
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
                return e instanceof n;
            } catch (e) {}
            return !1;
        });
