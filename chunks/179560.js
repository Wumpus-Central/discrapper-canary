var r = n(320387),
    i = Object.prototype.toString,
    o = Object.prototype.hasOwnProperty,
    a = function (e, t, n) {
        for (var r = 0, i = e.length; r < i; r++) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
    },
    s = function (e, t, n) {
        for (var r = 0, i = e.length; r < i; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
    },
    l = function (e, t, n) {
        for (var r in e) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
    };
function c(e) {
    return '[object Array]' === i.call(e);
}
e.exports = function (e, t, n) {
    var i;
    if (!r(t)) throw TypeError('iterator must be a function');
    arguments.length >= 3 && (i = n), c(e) ? a(e, t, i) : 'string' == typeof e ? s(e, t, i) : l(e, t, i);
};
