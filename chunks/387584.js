var r = n(166691),
    i = r('Date.prototype.getDay'),
    a = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    o = r('Object.prototype.toString'),
    s = '[object Date]',
    l = n(195653)();
e.exports = function (e) {
    return 'object' == typeof e && null !== e && (l ? a(e) : o(e) === s);
};
