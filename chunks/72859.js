var n,
    r = 'function' == typeof Map && Map.prototype ? Map : null,
    i = 'function' == typeof Set && Set.prototype ? Set : null;
!i &&
    (n = function (e) {
        return !1;
    });
var a = r ? Map.prototype.has : null,
    o = i ? Set.prototype.has : null;
!n &&
    !o &&
    (n = function (e) {
        return !1;
    }),
    (e.exports =
        n ||
        function (e) {
            if (!e || 'object' != typeof e) return !1;
            try {
                if ((o.call(e), a))
                    try {
                        a.call(e);
                    } catch (e) {
                        return !0;
                    }
                return e instanceof i;
            } catch (e) {}
            return !1;
        });
