var t,
    n = 'function' == typeof Map && Map.prototype ? Map : null,
    r = 'function' == typeof Set && Set.prototype ? Set : null;
r ||
    (t = function (e) {
        return !1;
    });
var i = n ? Map.prototype.has : null,
    o = r ? Set.prototype.has : null;
t ||
    o ||
    (t = function (e) {
        return !1;
    }),
    (e.exports =
        t ||
        function (e) {
            if (!e || 'object' != typeof e) return !1;
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
