var r,
    i = n(906046),
    a = n(581070)(),
    s = n(353841),
    o = n(267768);
if (a) {
    var l = i("RegExp.prototype.exec"),
        c = {},
        u = function () {
            throw c;
        },
        d = {
            toString: u,
            valueOf: u,
        };
    "symbol" == typeof Symbol.toPrimitive && (d[Symbol.toPrimitive] = u),
        (r = function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = o(e, "lastIndex");
            if (!(t && s(t, "value"))) return !1;
            try {
                l(e, d);
            } catch (e) {
                return e === c;
            }
        });
} else {
    var f = i("Object.prototype.toString"),
        p = "[object RegExp]";
    r = function (e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && f(e) === p;
    };
}
e.exports = r;
