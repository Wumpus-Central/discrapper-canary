var t,
    n = 'function' == typeof Map && Map.prototype ? Map : null,
    i = 'function' == typeof Set && Set.prototype ? Set : null;
n ||
    (t = function (e) {
        return !1;
    });
var r = n ? Map.prototype.has : null,
    a = i ? Set.prototype.has : null;
t ||
    r ||
    (t = function (e) {
        return !1;
    }),
    (e.exports =
        t ||
        function (e) {
            if (!e || 'object' != typeof e) return !1;
            try {
                if ((r.call(e), a))
                    try {
                        a.call(e);
                    } catch (e) {
                        return !0;
                    }
                return e instanceof n;
            } catch (e) {}
            return !1;
        });
