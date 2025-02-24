r.d(t, { Z: () => a });
var n = r(334389);
function o(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
    var r = function () {
        var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            a = r.cache;
        if (a.has(o)) return a.get(o);
        var i = e.apply(this, n);
        return (r.cache = a.set(o, i) || a), i;
    };
    return (r.cache = new (o.Cache || n.Z)()), r;
}
o.Cache = n.Z;
let a = o;
