var i = r(548015),
    a = r(74748),
    o = r(572657),
    s = r(318670),
    l = r(252798),
    u = r(396379),
    c = 1,
    d = 2,
    f = '[object Boolean]',
    p = '[object Date]',
    h = '[object Error]',
    _ = '[object Map]',
    m = '[object Number]',
    g = '[object RegExp]',
    E = '[object Set]',
    v = '[object String]',
    y = '[object Symbol]',
    b = '[object ArrayBuffer]',
    I = '[object DataView]',
    T = i.Z ? i.Z.prototype : void 0,
    S = T ? T.valueOf : void 0;
function A(e, n, r, i, T, A, C) {
    switch (r) {
        case I:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) break;
            (e = e.buffer), (n = n.buffer);
        case b:
            if (e.byteLength != n.byteLength || !A(new a.Z(e), new a.Z(n))) break;
            return !0;
        case f:
        case p:
        case m:
            return (0, o.Z)(+e, +n);
        case h:
            return e.name == n.name && e.message == n.message;
        case g:
        case v:
            return e == n + '';
        case _:
            var N = l.Z;
        case E:
            var R = i & c;
            if ((N || (N = u.Z), e.size != n.size && !R)) break;
            var O = C.get(e);
            if (O) return O == n;
            (i |= d), C.set(e, n);
            var D = (0, s.Z)(N(e), N(n), i, T, A, C);
            return C.delete(e), D;
        case y:
            if (S) return S.call(e) == S.call(n);
    }
    return !1;
}
n.Z = A;
