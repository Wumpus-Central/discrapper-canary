var r = n(994665);
function i(e, t) {
    if ("function" != typeof e || (null != t && "function" != typeof t)) throw TypeError("Expected a function");
    var n = function () {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            s = n.cache;
        if (s.has(i)) return s.get(i);
        var a = e.apply(this, r);
        return (n.cache = s.set(i, a) || s), a;
    };
    return (n.cache = new (i.Cache || r)()), n;
}
(i.Cache = r), (e.exports = i);
