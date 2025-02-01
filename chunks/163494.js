var i = String.prototype.valueOf,
    r = function (e) {
        try {
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = Object.prototype.toString,
    s = '[object String]',
    o = n(703825)();
e.exports = function (e) {
    return 'string' == typeof e || ('object' == typeof e && (o ? r(e) : a.call(e) === s));
};
