n.d(t, { Z: () => S });
var i = n(548015),
    r = n(74748),
    a = n(572657),
    s = n(318670),
    o = n(252798),
    l = n(396379),
    u = 1,
    c = 2,
    d = '[object Boolean]',
    f = '[object Date]',
    _ = '[object Error]',
    p = '[object Map]',
    h = '[object Number]',
    m = '[object RegExp]',
    g = '[object Set]',
    E = '[object String]',
    v = '[object Symbol]',
    y = '[object ArrayBuffer]',
    I = '[object DataView]',
    b = i.Z ? i.Z.prototype : void 0,
    T = b ? b.valueOf : void 0;
let S = function (e, t, n, i, b, S, A) {
    switch (n) {
        case I:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case y:
            if (e.byteLength != t.byteLength || !S(new r.Z(e), new r.Z(t))) break;
            return !0;
        case d:
        case f:
        case h:
            return (0, a.Z)(+e, +t);
        case _:
            return e.name == t.name && e.message == t.message;
        case m:
        case E:
            return e == t + '';
        case p:
            var N = o.Z;
        case g:
            var C = i & u;
            if ((N || (N = l.Z), e.size != t.size && !C)) break;
            var R = A.get(e);
            if (R) return R == t;
            (i |= c), A.set(e, t);
            var O = (0, s.Z)(N(e), N(t), i, b, S, A);
            return A.delete(e), O;
        case v:
            if (T) return T.call(e) == T.call(t);
    }
    return !1;
};
