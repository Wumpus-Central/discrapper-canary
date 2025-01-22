var i = Date.prototype.getDay,
    a = function (e) {
        try {
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    o = Object.prototype.toString,
    s = '[object Date]',
    l = r(703825)();
e.exports = function (e) {
    return 'object' == typeof e && null !== e && (l ? a(e) : o.call(e) === s);
};
