var r = n(703825)(),
    i = n(192853)('Object.prototype.toString'),
    o = function (e) {
        return (!r || !e || 'object' != typeof e || !(Symbol.toStringTag in e)) && '[object Arguments]' === i(e);
    },
    a = function (e) {
        return !!o(e) || (null !== e && 'object' == typeof e && 'number' == typeof e.length && e.length >= 0 && '[object Array]' !== i(e) && '[object Function]' === i(e.callee));
    },
    s = (function () {
        return o(arguments);
    })();
(o.isLegacyArguments = a), (e.exports = s ? o : a);
