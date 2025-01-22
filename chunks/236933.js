var i = r(334389),
    a = 'Expected a function';
function o(e, n) {
    if ('function' != typeof e || (null != n && 'function' != typeof n)) throw TypeError(a);
    var r = function () {
        var i = arguments,
            a = n ? n.apply(this, i) : i[0],
            o = r.cache;
        if (o.has(a)) return o.get(a);
        var s = e.apply(this, i);
        return (r.cache = o.set(a, s) || o), s;
    };
    return (r.cache = new (o.Cache || i.Z)()), r;
}
(o.Cache = i.Z), (n.Z = o);
