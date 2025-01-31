n.d(t, { Z: () => s });
var i = n(334389),
    r = 'Expected a function';
function a(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError(r);
    var n = function () {
        var i = arguments,
            r = t ? t.apply(this, i) : i[0],
            a = n.cache;
        if (a.has(r)) return a.get(r);
        var s = e.apply(this, i);
        return (n.cache = a.set(r, s) || a), s;
    };
    return (n.cache = new (a.Cache || i.Z)()), n;
}
a.Cache = i.Z;
let s = a;
