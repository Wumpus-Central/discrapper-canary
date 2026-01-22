var r = n(906046),
    i = r("String.prototype.valueOf"),
    a = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    s = r("Object.prototype.toString"),
    o = "[object String]",
    l = n(581070)();
e.exports = function (e) {
    return "string" == typeof e || (!!e && "object" == typeof e && (l ? a(e) : s(e) === o));
};
