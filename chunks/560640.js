var t = Object.prototype.toString;
e.exports = function (e) {
    var n = t.call(e),
        i = '[object Arguments]' === n;
    return i || (i = '[object Array]' !== n && null !== e && 'object' == typeof e && 'number' == typeof e.length && e.length >= 0 && '[object Function]' === t.call(e.callee)), i;
};
