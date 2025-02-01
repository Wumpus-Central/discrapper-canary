var r = a(302767);
function n(t, e) {
    if ('function' != typeof t || (null != e && 'function' != typeof e)) throw TypeError('Expected a function');
    var a = function () {
        var r = arguments,
            n = e ? e.apply(this, r) : r[0],
            o = a.cache;
        if (o.has(n)) return o.get(n);
        var _ = t.apply(this, r);
        return (a.cache = o.set(n, _) || o), _;
    };
    return (a.cache = new (n.Cache || r)()), a;
}
(n.Cache = r), (t.exports = n);
