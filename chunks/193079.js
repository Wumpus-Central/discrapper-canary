r.d(t, { Z: () => p });
var n = r(548015),
    o = r(74748),
    a = r(572657),
    i = r(318670),
    l = r(252798),
    s = r(396379),
    u = n.Z ? n.Z.prototype : void 0,
    c = u ? u.valueOf : void 0;
let p = function (e, t, r, n, u, p, f) {
    switch (r) {
        case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case '[object ArrayBuffer]':
            if (e.byteLength != t.byteLength || !p(new o.Z(e), new o.Z(t))) break;
            return !0;
        case '[object Boolean]':
        case '[object Date]':
        case '[object Number]':
            return (0, a.Z)(+e, +t);
        case '[object Error]':
            return e.name == t.name && e.message == t.message;
        case '[object RegExp]':
        case '[object String]':
            return e == t + '';
        case '[object Map]':
            var d = l.Z;
        case '[object Set]':
            var h = 1 & n;
            if ((d || (d = s.Z), e.size != t.size && !h)) break;
            var b = f.get(e);
            if (b) return b == t;
            (n |= 2), f.set(e, t);
            var v = (0, i.Z)(d(e), d(t), n, u, p, f);
            return f.delete(e), v;
        case '[object Symbol]':
            if (c) return c.call(e) == c.call(t);
    }
    return !1;
};
