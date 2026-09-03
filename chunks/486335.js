var n,
    i = r(906046),
    o = r(581070)(),
    a = r(353841),
    s = r(267768);
if (o) {
    var l = i("RegExp.prototype.exec"),
        u = {},
        c = function () {
            throw u;
        },
        f = { toString: c, valueOf: c };
    "symbol" == typeof Symbol.toPrimitive && (f[Symbol.toPrimitive] = c),
        (n = function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = s(e, "lastIndex");
            if (!(t && a(t, "value"))) return !1;
            try {
                l(e, f);
            } catch (e) {
                return e === u;
            }
        });
} else {
    var d = i("Object.prototype.toString");
    n = function (e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "[object RegExp]" === d(e);
    };
}
e.exports = n;
