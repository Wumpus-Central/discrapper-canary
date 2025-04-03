t.d(r, { Z: () => n });
var a = Object.prototype.toString;
function o(e) {
    return 'function' == typeof e || '[object Function]' === a.call(e);
}
function n(e, r) {
    var t,
        a,
        n = Array,
        l = Object(e);
    if (null == e) throw TypeError('Array.from requires an array-like object - not null or undefined');
    if (void 0 !== r && !o(r)) throw TypeError('Array.from: when provided, the second argument must be a function');
    for (var i = Math.min(Math.max(isNaN((t = Number(l.length))) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t, 0), 9007199254740991), s = o(n) ? Object(new n(i)) : Array(i), u = 0; u < i; ) (a = l[u]), r ? (s[u] = r(a, u)) : (s[u] = a), (u += 1);
    return (s.length = i), s;
}
