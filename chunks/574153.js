var r = a(302767);
function n(t, e) {
    if ('function' != typeof t || (null != e && 'function' != typeof e)) throw TypeError('Expected a function');
    var a = function () {
        var r = arguments,
            n = e ? e.apply(this, r) : r[0],
            _ = a.cache;
        if (_.has(n)) return _.get(n);
        var o = t.apply(this, r);
        return (a.cache = _.set(n, o) || _), o;
    };
    return (a.cache = new (n.Cache || r)()), a;
}
(n.Cache = r), (t.exports = n);
