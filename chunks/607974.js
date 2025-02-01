var i = n(703825)(),
    r = n(192853)('Object.prototype.toString'),
    a = function (e) {
        return (!i || !e || 'object' != typeof e || !(Symbol.toStringTag in e)) && '[object Arguments]' === r(e);
    },
    s = function (e) {
        return !!a(e) || (null !== e && 'object' == typeof e && 'number' == typeof e.length && e.length >= 0 && '[object Array]' !== r(e) && '[object Function]' === r(e.callee));
    },
    o = (function () {
        return a(arguments);
    })();
(a.isLegacyArguments = s), (e.exports = o ? a : s);
