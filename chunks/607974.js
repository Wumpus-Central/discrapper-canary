var i = r(703825)(),
    a = r(192853)('Object.prototype.toString'),
    o = function (e) {
        return (!i || !e || 'object' != typeof e || !(Symbol.toStringTag in e)) && '[object Arguments]' === a(e);
    },
    s = function (e) {
        return !!o(e) || (null !== e && 'object' == typeof e && 'number' == typeof e.length && e.length >= 0 && '[object Array]' !== a(e) && '[object Function]' === a(e.callee));
    },
    l = (function () {
        return o(arguments);
    })();
(o.isLegacyArguments = s), (e.exports = l ? o : s);
