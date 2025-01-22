var i = String.prototype.valueOf,
    a = function (e) {
        try {
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    o = Object.prototype.toString,
    s = '[object String]',
    l = r(703825)();
e.exports = function (e) {
    return 'string' == typeof e || ('object' == typeof e && (l ? a(e) : o.call(e) === s));
};
