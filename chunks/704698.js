var n = r(906046),
    i = n("Object.prototype.toString"),
    o = r(912877)(),
    a = r(429013);
if (o) {
    var s = n("Symbol.prototype.toString"),
        l = a(/^Symbol\(.*\)$/);
    e.exports = function (e) {
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || "[object Symbol]" !== i(e)) return !1;
        try {
            return "symbol" == typeof e.valueOf() && l(s(e));
        } catch (e) {
            return !1;
        }
    };
} else
    e.exports = function (e) {
        return !1;
    };
