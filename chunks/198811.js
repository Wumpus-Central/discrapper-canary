var r = Date.prototype.getDay,
    i = function (e) {
        try {
            return r.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    o = Object.prototype.toString,
    a = '[object Date]',
    s = n(703825)();
e.exports = function (e) {
    return 'object' == typeof e && null !== e && (s ? i(e) : o.call(e) === a);
};
