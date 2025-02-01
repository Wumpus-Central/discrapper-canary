var i = Date.prototype.getDay,
    r = function (e) {
        try {
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = Object.prototype.toString,
    s = '[object Date]',
    o = n(703825)();
e.exports = function (e) {
    return 'object' == typeof e && null !== e && (o ? r(e) : a.call(e) === s);
};
