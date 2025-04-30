var r = n(195653)(),
    i = n(166691)('Object.prototype.toString'),
    o = function (e) {
        return (!r || !e || 'object' != typeof e || !(Symbol.toStringTag in e)) && '[object Arguments]' === i(e);
    },
    a = function (e) {
        return !!o(e) || (null !== e && 'object' == typeof e && 'length' in e && 'number' == typeof e.length && e.length >= 0 && '[object Array]' !== i(e) && 'callee' in e && '[object Function]' === i(e.callee));
    },
    s = (function () {
        return o(arguments);
    })();
(o.isLegacyArguments = a), (e.exports = s ? o : a);
