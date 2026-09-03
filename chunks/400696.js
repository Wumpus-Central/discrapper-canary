var n = r(906046),
    i = n("String.prototype.valueOf"),
    o = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = n("Object.prototype.toString"),
    s = r(581070)();
e.exports = function (e) {
    return "string" == typeof e || (!!e && "object" == typeof e && (s ? o(e) : "[object String]" === a(e)));
};
